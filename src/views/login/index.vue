<template>
  <div class="login-container">
    <div class="login_img">
      <img src="@/assets/img/login_bg.png"/>
    </div>
    <div class="login_from_box">
      <img src="@/assets/img/logo.png" class="from_logo"/>
      <el-form ref="loginForm" :model="loginForm" :rules="loginRules" class="login-form" auto-complete="on"
               label-position="left">
        <el-form-item prop="username" class="form_item">
        <span class="svg-container">
          <svg-icon icon-class="user"/>
        </span>
          <input
            ref="username"
            v-model="loginForm.username"
            :placeholder="$t('login_page.placeholder.username')"
            name="username"
            type="text"
            tabindex="1"
            auto-complete="on"/>
        </el-form-item>
        <el-form-item prop="password" class="form_item">
        <span class="svg-container">
          <svg-icon icon-class="password"/>
        </span>
          <input
            :key="passwordType"
            ref="password"
            v-model="loginForm.password"
            :type="passwordType"
            :placeholder="$t('login_page.placeholder.pwd')"
            name="password"
            tabindex="2"
            auto-complete="on"
            @keyup.enter.native="handleLogin"
          />
        </el-form-item>
        <!-- <el-form-item prop="code" class="form_item">
         <span class="svg-container">
           <svg-icon icon-class="code"/>
         </span>
           <input
             class="code"
             ref="code"
             v-model="loginForm.code"
             :placeholder="$t('login_page.placeholder.code')"
             name="code"
             type="text"
             tabindex="3"
             auto-complete="on"
           />
         </el-form-item>-->
        <el-form-item class="form_item">
          <div class="flex_layout">
            <p class="check">
              <input class="remember" type="checkbox" name="remember" id="isCheck" @click="isCheck()" checked/>
              <label for="isCheck">{{$t('login_page.login_info.remember_login')}}</label>
            </p>
            <p class="forget">{{$t('login_page.login_info.forget')}}</p>
          </div>

        </el-form-item>
        <el-button v-for="(item, index) in $t('login_page.login_btn_text')" class="operate_btn"
                   :class="activeIndex == index ? 'active':''"
                   @click.native.prevent="handleLogin(index)">{{ item}}
        </el-button>
      </el-form>
    </div>
  </div>
</template>

<script>
  import { validUsername } from '@/utils/validate'
  import Index from '../../components/common/table/index'
  import { Base64 } from 'js-base64'

  export default {
    name: 'Login',
    components: { Index },
    data() {
      const validateUsername = (rule, value, callback) => {
        if (!validUsername(value)) {
          callback(new Error(this.$t('login_page.error_message.username')))
        } else {
          callback()
        }
      }
      const validatePassword = (rule, value, callback) => {
        if (value.length < 6) {
          callback(new Error(this.$t('login_page.error_message.pwd')))
        } else {
          callback()
        }
      }
      const validateCode = (rule, value, callback) => {
        if (value.length < 6) {
          callback(new Error(this.$t('login_page.error_message.code')))
        } else {
          callback()
        }
      }
      return {
        isRemember: true,
        activeIndex: 0,
        loginForm: {
          username: '',
          password: '',
          code: ''
        },
        loginRules: {
          username: [{ required: true, trigger: 'blur', validator: validateUsername }],
          password: [{ required: true, trigger: 'blur', validator: validatePassword }],
          code: [{ required: true, trigger: 'blur', validator: validateCode }]
        },
        loading: false,
        passwordType: 'password',
        redirect: undefined
      }
    },
    watch: {
      $route: {
        handler: function (route) {
          this.redirect = route.query && route.query.redirect
        },
        immediate: true
      }
    },
    methods: {
      handleLogin(index) {
        this.activeIndex = index
        if (index == 0) {
          this.$refs.loginForm.validate(valid => {
            if (valid) {
              this.loading = true
              this.$store.dispatch('user/login', this.loginForm).then(() => {
                this.$router.push({ path: this.redirect || '/' })
                this.loading = false
                if (this.isRemember) {
                  this.setCookie('user', this.loginForm.username, 30)
                  const pwd = Base64.encode(this.loginForm.password)
                  this.setCookie('pwd', pwd, 30)
                } else {
                  this.setCookie('user', '', 30)
                  this.setCookie('pwd', '', 0)
                }
              }).catch(() => {
                this.loading = false
              })
            } else {
              console.log('error submit!!')
              return false
            }
          })
        } else {
          console.log('申请成为开发者')
        }
      },
      isCheck() {
        this.isRemember = event.target.checked
      },
      initForm() {
        const username = this.getCookie('user')
        const pwd = this.getCookie('pwd')
        if (username && pwd) {
          this.loginForm.username = username
          this.loginForm.password = pwd
        }
      },
      setCookie(cName, value, expireDays) {
        let exDate = new Date()
        exDate = exDate.setDate(exDate.getDate() + expireDays)
        document.cookie = cName + '=' +
          value +
          ((expireDays === undefined) ? '' : ';expires=' + new Date(exDate).toUTCString())
      },

      getCookie(key) {
        if (document.cookie.length > 0) {
          let start = document.cookie.indexOf(key + '=')
          if (start !== -1) {
            start = start + key.length + 1
            let end = document.cookie.indexOf(';', start)

            if (end === -1) {
              end = document.cookie.length
              return Base64.decode(document.cookie.substring(start, end))
            } else {
              return document.cookie.substring(start, end)
            }
          }
        }
        return ''
      }
    },
    created() {
      this.initForm()
    }
  }
</script>
<style lang="scss" scoped>
  @import "../../styles/login";
</style>
