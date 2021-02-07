<template>
  <div>
    <svg-icon :icon-class="isChange?'lang':'lang'" @click="click" />
  </div>
</template>

<script>

export default {
  name: 'LanChange',
  data() {
    return {
      isChange: false
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
      } else {
        this.$i18n.locale = 'zh'
      }
    },
    init() {},
    destroy(){}
  }
}
</script>

<style scoped>
.screenfull-svg {
  display: inline-block;
  cursor: pointer;
  fill: #5a5e66;;
  width: 20px;
  height: 20px;
  vertical-align: 10px;
}
</style>
