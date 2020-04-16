
import states from '@/store/state'
import { deepClone } from '@/assets/js/deepClone'
import { MessageBox, Message } from 'element-ui'
import { query, add, edit, del } from '@/api/base'

const initTypes = {
  QUERY: 'QUERY',
  ADD: 'ADD',
  EDIT: 'EDIT',
  DELETE: 'DELETE',
  SHOW_EDIT_MODAL: 'SHOW_EDIT_MODAL',
  HIDE_EDIT_MODAL: 'HIDE_EDIT_MODAL'
}
// initial state
const state = {
  // 查询表单
  searchData: deepClone(states.SEARCH_DATA),
  searchForm: states.SEARCH_FORM,
  searchHandle: states.SEARCH_HANDLE,

  // 表格
  tableData: states.TABLE_DATA,
  tableHeader: states.TABLE_HEADER,
  tableHandles: states.TABLE_HANDLES,
  pagination: deepClone(states.TABLE_PAGE),
  // 弹窗
  modalCfg: states.MODAL_CFG,
  // 编辑表单
  editData: deepClone(states.EDIT_DATA),
  editForm: states.EDIT_FORM,
  editRules: states.EDIT_RULES
}

const getters = {
  searchData: state => state.searchData,
  searchForm: state => state.searchForm,
  searchHandle: state => state.searchHandle,

  tableData: state => state.tableData,
  tableHandles: state => state.tableHandles,
  tableCols: state => state.tableHeader,
  tablePage: state => state.tablePage,

  modalCfg: state => state.modalCfg,

  editData: state => state.editData,
  editForm: state => state.editForm,
  editRules: state => state.editRules

}

const actions = {
  init({ commit, dispatch, state }) {
    dispatch('getData')
  },
  async getData({ commit, state }) {
    const res = await query(state.searchData)
    state.tableData = res.data.data
  },
  async addData({ dispatch, commit, state }) {
    const res = await add(state.editData)
    Message.success(res.data.msg)
    commit(initTypes.HIDE_EDIT_MODAL)
    dispatch('getData')
  },
  async editData({ commit, dispatch, state }) {
    const res = await edit(state.editData)
    Message.success(res.data.msg)
    commit(initTypes.HIDE_EDIT_MODAL)
    dispatch('getData')
  },
  async delData({ commit, dispatch, state }, id) {
    const res = await del({ id })
    Message.success(res.data.msg)
    dispatch('getData')
  },
  resetData({ commit, dispatch, state }) {
    // state.tablePage=deepClone(mutationTypes.TABLE_PAGE)
    state.searchData = deepClone(states.SEARCH_DATA)
    dispatch('getData')
  },
  validateAdd({ dispatch, state }, that) {
    that.$refs.editForm.validate(valid => {
      if (valid) {
        dispatch('addData')
      }
    })
  },
  validateEdit({ dispatch, state }, that) {
    that.$refs.editForm.validate(valid => {
      if (valid) {
        dispatch('editData')
      }
    })
  },
  showEditModal({ commit }, row) {
    commit(initTypes.SHOW_EDIT_MODAL, { row })
  },
  hideEditModal({ commit }) {
    commit(initTypes.HIDE_EDIT_MODAL)
  },
  confirmDel({ dispatch, state }, row) {
    MessageBox.confirm('此操作将永久删除该条记录, 是否继续?', '提示', {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning'
    }).then(() => {
      dispatch('delData', row.id)
    }).catch(() => {

    })
  }
}

const mutations = {

  [initTypes.QUERY](state, { tableData }) {
    state.tableData = tableData
  },
  [initTypes.SHOW_EDIT_MODAL](state, { row }) {
    state.modalCfg.visible = true
    if (row) {
      state.editData = row
      state.modalCfg.title = '编辑'
      state.modalCfg.handles[0] = { label: '编辑', type: 'primary', size: 'mini', handle: that => that.validateEdit(that.$refs.cesEdit) }
    } else {
      state.editData = deepClone(states.EDIT_DATA)
      state.modalCfg.title = '新增'
      state.modalCfg.handles[0] = { label: '新增', type: 'primary', size: 'mini', handle: that => that.validateAdd(that.$refs.cesEdit) }
    }
  },
  [initTypes.HIDE_EDIT_MODAL](state) {
    state.modalCfg.visible = false
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
