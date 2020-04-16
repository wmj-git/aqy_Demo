<!-- 搜索表单 -->
<template>
  <div class="ces-search">
    <el-form :size="size" inline :label-width="labelWidth">
      <el-form-item v-for="item in searchForm" :key="item.label" :label="item.label">
        <!-- 输入框 -->
        <el-input
          v-if="item.type==='input'"
          v-model="searchData[item.prop]"
          :size="size || item.size"
          :style="{width:item.width}"
          :disabled="item.disable && item.disable(searchData[item.prop])"
          @change="item.change(that,searchData[item.prop])"
        />
        <!-- 下拉框 -->
        <el-select
          v-if="item.type==='select'"
          v-model="searchData[item.prop]"
          :size="size || item.size"
          :style="{width:item.width}"
          :disabled="item.disable && item.disable(searchData[item.prop])"
          @change="item.change(that,searchData[item.prop])"
        >
          <el-option v-for="op in item.options" :key="op.value" :label="op.label" :value="op.value" />
        </el-select>
        <!-- 单选 -->
        <el-radio-group
          v-if="item.type==='radio'"
          v-model="searchData[item.prop]"
          :style="{width:item.width}"
          :size="size || item.size"
          :disabled="item.disable && item.disable(searchData[item.prop])"
          @change="item.change(that,searchData[item.prop])"
        >
          <el-radio v-for="ra in item.radios" :key="ra.value" :label="ra.value">{{ ra.label }}</el-radio>
        </el-radio-group>
        <!-- 单选按钮 -->
        <el-radio-group
          v-if="item.type==='radioButton'"
          v-model="searchData[item.prop]"
          :style="{width:item.width}"
          :size="size || item.size"
          :disabled="item.disable && item.disable(searchData[item.prop])"
          @change="item.change && item.change(that,searchData[item.prop])"
        >
          <el-radio-button v-for="ra in item.radios" :key="ra.value" :label="ra.value">{{ ra.label }}</el-radio-button>
        </el-radio-group>
        <!-- 复选框 -->
        <el-checkbox-group
          v-if="item.type==='checkbox'"
          v-model="searchData[item.prop]"
          :style="{width:item.width}"
          :size="size || item.size"
          :disabled="item.disable && item.disable(searchData[item.prop])"
          @change="item.change(that,searchData[item.prop])"
        >
          <el-checkbox v-for="ch in item.checkboxs" :key="ch.value" :label="ch.value">{{ ch.label }}</el-checkbox>
        </el-checkbox-group>
        <!-- 日期 -->
        <el-date-picker
          v-if="item.type==='date'"
          v-model="searchData[item.prop]"
          :style="{width:item.width}"
          :size="size || item.size"
          :disabled="item.disable && item.disable(searchData[item.prop])"
          @change="item.change(that,searchData[item.prop])"
        />
        <!-- 时间 -->
        <el-time-select
          v-if="item.type==='time'"
          v-model="searchData[item.prop]"
          type=""
          :style="{width:item.width}"
          :size="size || item.size"
          :disabled="item.disable && item.disable(searchData[item.prop])"
          @change="item.change(that,searchData[item.prop])"
        />
        <!-- 日期时间 -->
        <el-date-picker
          v-if="item.type==='dateTime'"
          v-model="searchData[item.prop]"
          type="datetime"
          :style="{width:item.width}"
          :size="size || item.size"
          :disabled="item.disable && item.disable(searchData[item.prop])"
          @change="item.change(that,searchData[item.prop])"
        />
        <!-- 滑块 -->
        <!-- <el-slider v-if="item.type==='Slider'" v-model="searchData[item.prop]"></el-slider> -->
        <!-- 开关 -->
        <el-switch
          v-if="item.type==='switch'"
          v-model="searchData[item.prop]"
          :size="size || item.size"
          :style="{width:item.width}"
          :disabled="item.disable && item.disable(searchData[item.prop])"
          @change="item.change(that,searchData[item.prop])"
        />
      </el-form-item>
    </el-form>
    <el-form v-if="isHandle" inline>
      <el-form-item v-for="item in searchHandle" :key="item.label">
        <el-button v-if="item.systemId.includes('add')" :type="item.type" :size="size || item.size" :system-id="systemId" @click="dialogShow()">{{ item.label }}</el-button>
        <el-button v-if="item.systemId.includes('query')" :type="item.type" :size="size || item.size" :system-id="systemId" @click="queryData()">{{ item.label }}</el-button>
        <el-button v-if="item.systemId.includes('config')" :type="item.type" :size="size || item.size" :system-id="systemId" @click="other()">{{ item.label }}</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  props: {
    that: { type: Object, default: this },
    isHandle: {
      type: Boolean,
      default: true
    },
    labelWidth: {
      type: String,
      default: '100px'
    },
    size: {
      type: String,
      default: 'mini'
    },
    searchForm: {
      type: Array,
      default: () => []
    },
    searchHandle: {
      type: Array,
      default: () => []
    },
    searchData: {
      type: Object,
      default: () => {}
    },
    systemId: { type: String, default: '' }
  },
  data() {
    return {
    }
  },
  methods: {
    dialogShow() {
      console.log('点击添加')
    },
    queryData() {
      console.log('点击查询')
    },
    other() {
      console.log('点击其他')
    }
  }

}

</script>
<style>

</style>
