import { DatetimePicker, Popup, Tabbar, Picker, TabbarItem, Tab, Tabs, Icon, Checkbox, CheckboxGroup, Button, Dialog, Cell, CellGroup, Field, Toast, RadioGroup, Radio, Progress } from 'vant'
import 'vant/lib/index.css'
const vant = {
  install: function(Vue) {
    Vue.use(DatetimePicker)
    Vue.use(Popup)
    Vue.use(Tabbar)
    Vue.use(TabbarItem)
    Vue.use(Picker)
    Vue.use(Tab)
    Vue.use(Tabs)
    Vue.use(Icon)
    Vue.use(Checkbox)
    Vue.use(CheckboxGroup)
    Vue.use(Button)
    Vue.use(Cell)
    Vue.use(CellGroup)
    Vue.use(Dialog)
    Vue.use(Field)
    Vue.use(RadioGroup)
    Vue.use(Radio)
    Vue.use(Toast)
    Vue.use(Progress)
  }
}
export default vant
