<template>
  <div class="container">
    <div class="layout_flex top_flex">
      <img :src="$t('index_page.index_nav.logo')" class="logo_img"/>
      <ul class="flex_nav">
        <li v-for="(item,idx) in $t('index_page.index_nav.nav_list')" :key="idx"
            :class="activeClass == idx ? 'active':''" @click="clickActive(idx)">
          <router-link v-if="isLogin === true" :to="item.url">{{item.title}}</router-link>
          <router-link v-else :to="item.login">{{item.title}}</router-link>
        </li>
      </ul>
      <div class="text_right">
        <button @click="toChange" class="lan_btn">{{ lan_name }}</button>
      </div>
    </div>
    <div class="index_banner" :class="[current_language=='en'?'banner_en':'']">
      <div class="banner_content" :class="[isLogin===true?'is_login':'']">
        <p class="banner_title title">{{$t('index_page.banner.title')}}</p>
        <p class="banner_sub_title sub_title">{{$t('index_page.banner.sub_title')}}</p>
        <div class="banner_btn_box" :class="[current_language=='en'?'banner_btn_en':'']">
          <button class="banner_btn" @click="register()"><span class="iconfont iconapply"></span><span>{{$t('index_page.banner.btn_text')}}</span>
          </button>
        </div>
      </div>
    </div>
    <div class="qy_pro">
      <div class="qy_title">
        <p class="title">{{$t('index_page.product.title')}}</p>
        <p class="sub_title">{{$t('index_page.product.sub_title')}}</p>
        <p class="introduce">{{$t('index_page.product.introduce')}}</p>
      </div>
      <div class="qy_pro_flex qy_layout">
        <div class="qy_pro_item" v-for="(pro, index) in $t('index_page.product.content')" :key="index">
          <div class="qy_pro_imgBox">
            <img :src="pro.img"/>
          </div>
          <p class="pro_name">{{pro.name}}</p>
          <p class="pro_u_name">{{pro.u_name}}</p>
          <button class="pro_button"><span class="iconfont" :class="pro.icon"></span><span>{{pro.btn_text}}</span>
          </button>
        </div>
      </div>
    </div>
    <div class="qy_pro qy_reason_box">
      <div class="qy_title">
        <p class="title">{{$t('index_page.reason.title')}}</p>
      </div>
      <div class="qy_pro_reason qy_layout one">
        <div class="qy_pro_item" v-for="(pro, index) in $t('index_page.reason.content_top')" :key="index">
          <div class="qy_reason_imgBox">
            <p class="pro_name">{{pro.name}}</p>
            <p class="pro_u_name">{{pro.u_name}}</p>
            <img :src="pro.img"/>
          </div>
        </div>
      </div>
      <div class="qy_pro_reason qy_layout two">
        <div class="qy_pro_item" v-for="(pro, index) in $t('index_page.reason.content_center')" :key="index">
          <div class="qy_reason_imgBox">
            <p class="pro_name">{{pro.name}}</p>
            <p class="pro_u_name">{{pro.u_name}}</p>
            <img :src="pro.img"/>
          </div>
        </div>
      </div>
      <div class="qy_pro_reason qy_layout three">
        <div class="qy_pro_item" v-for="(pro, index) in $t('index_page.reason.content_bottom')" :key="index">
          <div class="qy_reason_imgBox">
            <p class="pro_name">{{pro.name}}</p>
            <p class="pro_u_name" :class="lan_name=='En'?'': 'en_text'">{{pro.u_name}}</p>
            <img :src="pro.img"/>
          </div>
        </div>
      </div>
    </div>
    <div class="qy_footer_box">
      <div class="footer_content">
        <div class="footer_nav footer_top_nav" v-for="(items, index) in $t('index_page.footerList.footer_item')"
             :key="index">
          <p class="qy_footer_nav_item">{{items.title}}</p>
          <ul class="qy_footer">
            <li v-for="(item, index) in items.footer_nav" :key="index">
              <a :href="item.url">{{item.title}}</a></li>
          </ul>
        </div>
      </div>
      <div class="footer_content">
        <div class="footer_nav footer_bottom_nav"
             v-for="(items, index) in $t('index_page.footerList.footer_item_another')" :key="index">
          <p class="qy_footer_nav_item" :class="[current_language == 'en'?'concat_en': 'concat_zh']"><img
            :src="items.icon"/><span>{{items.title}}</span></p>
          <div class="img_code" v-for="(ite, idx) in items.code" :key="idx">
            <img :src="ite.icon"/>
            <p class="padding_bottom">{{ite.text}}</p>
            <p>{{ite.text_name}}</p>
          </div>
          <ul class="qy_footer">
            <li v-for="(item, index) in items.footer_nav" :key="index">{{item.title}}<a
              :href="item.url">{{item.email}}</a><span class="footer_link" v-if="link_index == index"><a
              :href="items.footer_link.url">{{items.footer_link.title}}</a></span></li>
          </ul>
        </div>
      </div>
      <p class="qy_footer_status">
        {{$t('index_page.footerList.footer_status.title')}}<a :href="$t('index_page.footerList.footer_status.url')">{{$t('index_page.footerList.footer_status.record')}}</a>
      </p>
    </div>
    <el-dialog class="home_dialog" :class="[current_language == 'en'?'dialog_en': '']"
               :title="$t('index_page.banner.register_dialog.title')"
               :visible.sync="dialogTableVisible" custom-class="role-mask">
      <p>{{ $t('index_page.banner.register_dialog.content_left')}}<span>{{ $t('index_page.banner.register_dialog.email')}}</span>{{
        $t('index_page.banner.register_dialog.content_right')}}</p>
      <div slot="footer" class="dialog-footer">
        <el-button class="register_btn" @click="dialogTableVisible = false">
          {{$t('index_page.banner.register_dialog.link')}}
        </el-button>
        <router-link :to="$t('index_page.banner.register_dialog.toLogin_url')">
        <a @click="dialogTableVisible = false">
         {{$t('index_page.banner.register_dialog.toLogin')}}
        </a>
        </router-link>
      </div>
    </el-dialog>
  </div>
</template>
<script>
  import { getToken } from '@/utils/auth'
  export default {
    data() {
      return {
        dialogTableVisible: false,
        activeClass: 0,
        link_index: 1,
        current_language: '',
        lan_name: 'En',
        navList: [],
        isLogin: false
      }
    },
    methods: {
      toChange() {
        if (this.$i18n.locale === 'zh') {
          this.$i18n.locale = 'en'
          this.lan_name = '中'
        } else {
          this.$i18n.locale = 'zh'
          this.lan_name = 'En'
        }
      },
      clickActive(index) {
        this.activeClass = index
        console.log('ds', this.url)
      },
      register() {
        this.dialogTableVisible = true
      },
      isLoginToken(){
        let _getToken = getToken()
        if (_getToken === undefined || _getToken === null) {
          this.isLogin = false
        } else{
          this.isLogin = true
        }
        console.log('d', _getToken)
        console.log('isLogin', this.isLogin)
      }
    },
    updated() {
      this.current_language = this.$i18n.locale
    },
    mounted() {
      this.isLoginToken()
    }
  }
</script>
<style lang="scss" scoped>
  @import "../styles/home";
</style>
