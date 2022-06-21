import { Toast, Dialog, Notify, Loading } from 'vant'

let loadingInstance;

export default {
  // 消息提示
  msg(content) {
    Toast(content)
  },
  // 错误消息
  msgError(content) {
    Toast.fail(content)
  },
  // 成功消息
  msgSuccess(content) {
    Toast.success(content)
  },
  // 警告消息
  msgWarning(content) {
    Toast.fail(content)
  },
  // 弹出提示
  alert(content) {
    Dialog({ message: content })
  },
  // 错误提示
  alertError(content) {
    Dialog({ message: content })
  },
  // 成功提示
  alertSuccess(content) {
    Dialog({ message: content })
  },
  // 警告提示
  alertWarning(content) {
    Dialog({ message: content })
  },
  // 通知提示
  notify(content) {
    Notify(content)
  },
  // 错误通知
  notifyError(content) {
    Notify({ type: 'danger', message: content })
  },
  // 成功通知
  notifySuccess(content) {
    Notify({ type: 'success', message: content })
  },
  // 警告通知
  notifyWarning(content) {
    Notify({ type: 'warning', message: content });
  },
  // 确认窗体
  confirm(content) {
    return Dialog.confirm(content, "系统提示", {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: "warning",
    })
  },
  // 提交内容
  prompt(content) {
    return Dialog.confirm(content, "系统提示", {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: "warning",
    })
  },
  // 打开遮罩层
  loading(content) {
    loadingInstance = Loading.service({
      lock: true,
      text: content,
      spinner: "el-icon-loading",
      background: "rgba(0, 0, 0, 0.7)",
    })
  },
  // 关闭遮罩层
  closeLoading() {
    loadingInstance.close();
  }
}
