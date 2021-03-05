<template>
    <div class="container">
      <div class="layout_flex top_flex">
        <img :src="$t('index_page.index_nav.logo')" class="logo_img"/>
        <ul class="flex_nav">
          <li v-for="(item,idx) in $t('index_page.index_nav.nav_list')" :key="idx" :class="activeClass == idx ? 'active':''"  @click="clickActive(idx)">
            {{item}}
          </li>
        </ul>
        <div class="text_right">
          <button @click="toChange" class="lan_btn">{{ lan_name }}</button>
        </div>
      </div>
      <div class="index_banner" :class="[current_language=='en'?'banner_en':'']">
        <img class="banner_img" src="@/assets/img/banner.png"/>
        <div class="banner_content">
          <p class="banner_title title">{{$t('index_page.banner.title')}}</p>
          <p class="banner_sub_title sub_title">{{$t('index_page.banner.sub_title')}}</p>
          <div class="banner_btn_box" :class="[current_language=='en'?'banner_btn_en':'']">
            <button class="banner_btn" @click="register()"><img src="../assets/img/icon_apply.png"/><span>{{$t('index_page.banner.btn_text')}}</span></button>
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
            <button class="pro_button"><img :src="pro.icon"/><span>{{pro.btn_text}}</span></button>
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
          <div class="footer_nav footer_top_nav" v-for="(items, index) in $t('index_page.footerList.footer_item')" :key="index">
            <p class="qy_footer_nav_item">{{items.title}}</p>
            <ul class="qy_footer">
              <li v-for="(item, index) in items.footer_nav" :key="index">
                <a :href="item.url">{{item.title}}</a></li>
            </ul>
          </div>
        </div>
        <div class="footer_content">
          <div class="footer_nav footer_bottom_nav" v-for="(items, index) in $t('index_page.footerList.footer_item_another')" :key="index">
            <p class="qy_footer_nav_item" :class="[current_language == 'en'?'concat_en': 'concat_zh']"><img :src="items.icon"/><span>{{items.title}}</span></p>
            <div class="img_code" v-for="(ite, idx) in items.code" :key="idx">
              <img :src="ite.icon"/>
              <p class="padding_bottom">{{ite.text}}</p>
              <p>{{ite.text_name}}</p>
            </div>
            <ul class="qy_footer">
              <li v-for="(item, index) in items.footer_nav" :key="index">{{item.title}}<a :href="item.url">{{item.email}}</a><span class="footer_link" v-if="link_index == index"><a :href="items.footer_link.url">{{items.footer_link.title}}</a></span></li>
            </ul>
          </div>
        </div>
        <p class="qy_footer_status">
          <a :href="$t('index_page.footerList.footer_status.url')" >{{$t('index_page.footerList.footer_status.title')}}</a></p>
      </div>
      <el-dialog  class="home_dialog" :title="$t('index_page.banner.register_dialog.title')" :visible.sync="dialogTableVisible" custom-class="role-mask">
        <p>{{ $t('index_page.banner.register_dialog.content_left')}}<span>{{ $t('index_page.banner.register_dialog.email')}}</span>{{ $t('index_page.banner.register_dialog.content_right')}}</p>
        <div slot="footer" class="dialog-footer">
          <el-button class="register_btn" @click="dialogTableVisible = false">{{$t('index_page.banner.register_dialog.link')}}</el-button>
        </div>
      </el-dialog>
    </div>
</template>
<script>
export default {
  data () {
    return {
      dialogTableVisible: false,
      activeClass: 0,
      link_index: 1,
      current_language: '',
      lan_name: 'En',
      navList: []
    }
  },
  methods: {
    toChange () {
      if (this.$i18n.locale === 'zh') {
        this.$i18n.locale = 'en';
        this.lan_name = '中'
      } else {
        this.$i18n.locale = 'zh'
        this.lan_name = 'En'
      }
    },
    clickActive (index) {
      this.activeClass = index
    },
    register(){
      this.dialogTableVisible = true;
    }
  },
  updated () {
    this.current_language = this.$i18n.locale
  }
}
</script>
<style lang="scss" scoped>
 @import "../styles/home";
</style>
