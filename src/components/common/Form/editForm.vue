<!-- 搜索表单 -->
<template>
  <el-form ref="editForm" :size="size" inline :label-width="labelWidth" :model="editData" :rules="editRules">
    <el-form-item v-for="item in editCfg" :key="item.label" :label="item.label" :prop="item.prop">
      <!-- 输入框 -->
      <el-input
        v-if="item.type==='input'"
        v-model="editData[item.prop]"
        :disabled="item.disabled && item.disabled(editData)"
        :style="{width:item.width}"
        @change="item.change && item.change(editData[item.prop])"
      />
      <!-- 文本域 -->
      <el-input
        v-if="item.type==='textarea'"
        v-model="editData[item.prop]"
        type="textarea"
        :disabled="item.disabled && item.disabled(editData)"
        :style="{width:item.width}"
        @change="item.change && item.change(editData[item.prop])"
      />
      <!-- 下拉框 -->
      <el-select
        v-if="item.type==='select'"
        v-model="editData[item.prop]"
        :disabled="item.disabled && item.disabled(editData)"
        @change="item.change && item.change(editData[item.prop])"
      >
        <el-option v-for="op in item.options" :key="op.value" :label="op.label" :value="op.value" />
      </el-select>
      <!-- 单选 -->
      <el-radio-group
        v-if="item.type==='radio'"
        v-model="editData[item.prop]"
        :disabled="item.disabled && item.disabled(editData)"
        @change="item.change && item.change(editData[item.prop])"
      >
        <el-radio v-for="ra in item.radios" :key="ra.value" :label="ra.value">{{ ra.label }}</el-radio>
      </el-radio-group>
      <!-- 单选按钮 -->
      <el-radio-group
        v-if="item.type==='radioButton'"
        v-model="editData[item.prop]"
        :disabled="item.disabled && item.disabled(editData)"
        @change="item.change && item.change(editData[item.prop])"
      >
        <el-radio-button v-for="ra in item.radios" :key="ra.value" :label="ra.value">{{ ra.label }}</el-radio-button>
      </el-radio-group>
      <!-- 复选框 -->
      <el-checkbox-group
        v-if="item.type==='checkbox'"
        v-model="editData[item.prop]"
        :disabled="item.disabled && item.disabled(editData)"
        @change="item.change && item.change(editData[item.prop])"
      >
        <el-checkbox v-for="ch in item.checkboxs" :key="ch.value" :label="ch.value">{{ ch.label }}</el-checkbox>
      </el-checkbox-group>
      <!-- 日期 -->
      <el-date-picker
        v-if="item.type==='date'"
        v-model="editData[item.prop]"
        :disabled="item.disabled && item.disabled(editData)"
        @change="item.change && item.change(editData[item.prop])"
      />
      <!-- 时间 -->
      <el-time-select
        v-if="item.type==='time'"
        v-model="editData[item.prop]"
        type=""
        :disabled="item.disabled && item.disabled(editData)"
        @change="item.change && item.change(editData[item.prop])"
      />
      <!-- 日期时间 -->
      <el-date-picker
        v-if="item.type==='dateTime'"
        v-model="editData[item.prop]"
        type="datetime"
        :disabled="item.disable && item.disable(editData[item.prop])"
        @change="item.change && item.change(editData[item.prop])"
      />
      <!-- 滑块 -->
      <!-- <el-slider v-if="item.type==='Slider'" v-model="editData[item.prop]"></el-slider> -->
      <!-- 开关 -->
      <el-switch
        v-if="item.type==='switch'"
        v-model="editData[item.prop]"
        :disabled="item.disabled && item.disabled(editData)"
        @change="item.change && item.change(editData[item.prop])"
      />
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  props: {

    labelWidth: {
      type: String,
      default: '100px'
    },
    size: {
      type: String,
      default: 'mini'
    },
    editCfg: {
      type: Array,
      default: () => []
    },
    editData: {
      type: Object,
      default: () => {}
    },
    editRules: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      that: this
    }
  },
  methods: {
    // getThat(){
    //     this.$emit('that',this)
    // }
  }

}

</script>
<style>

</style>
