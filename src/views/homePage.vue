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
      <div class="index_banner">
        <div class="banner_content">
          <p class="banner_title title">{{$t('index_page.banner.title')}}</p>
          <p class="banner_sub_title sub_title">{{$t('index_page.banner.sub_title')}}</p>
          <div class="banner_btn_box" :class="[current_language=='en'?'banner_btn_en':'']">
            <button class="banner_btn"><img src="../assets/img/icon_apply.png"/><span>{{$t('index_page.banner.btn_text')}}</span></button>
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
              <li v-for="(item, index) in items.footer_nav" :key="index">{{item}}</li>
            </ul>
          </div>
        </div>
        <div class="footer_content">
          <div class="footer_nav footer_bottom_nav" v-for="(items, index) in $t('index_page.footerList.footer_item_another')" :key="index">
            <p class="qy_footer_nav_item"><img :src="items.icon"/><span :class="[current_language == 'en'?'concat_en': '']">{{items.title}}</span></p>
            <div class="img_code" v-for="(ite, idx) in items.code" :key="idx">
              <img :src="ite.icon"/>
              <p class="padding_bottom">{{ite.text}}</p>
              <p>{{ite.text_name}}</p>
            </div>
            <ul class="qy_footer">
              <li v-for="(item, index) in items.footer_nav" :key="index">{{item}}<span class="footer_link" v-if="link_index == index">{{items.footer_link}}</span></li>
            </ul>
          </div>
        </div>
        <p class="qy_footer_status">{{$t('index_page.footerList.footer_status')}}</p>
      </div>
    </div>
</template>
<script>
export default {
  data () {
    return {
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
