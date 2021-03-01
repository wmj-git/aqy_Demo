<template>
  <div>
    <button @click="click" class="lan_btn">{{ lan_name }}</button>
  </div>
</template>

<script>

  export default {
    name: 'LanChange',
    data() {
      return {
        lan_name: 'En'
      }
    },
    mounted() {
      this.init()
    },
    beforeDestroy() {
      this.destroy()
    },
    methods: {
      click() {
        if (this.$i18n.locale === 'zh') {
          this.$i18n.locale = 'en';
          this.lan_name = '中';
        } else {
          this.$i18n.locale = 'zh';
          this.lan_name = 'En';
        }
      },
      init() {
      },
      destroy() {
      }
    }
  }
</script>

<style scoped lang="scss">
  .lan_btn {
    background-color: #00bf6c;
    color: rgba(255, 255, 255, 0.9);
    border: none;
    width: 50px;
    height: 24px;
    font-size: 14px;
    border-radius: 24px;
    &:focus {
      outline: 0;
    }
  }
</style>
