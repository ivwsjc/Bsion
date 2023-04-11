import { createI18n } from 'vue-i18n'

import zh from './zh-cn'
import en from './en'
import po from './po'

// 语言配置整合
const messages = {
  'zh-cn':{
    ...zh,
  },
  en:{
    ...en,
  },
  po:{
    ...po,
  },
}

// 创建 i18n
const i18n = createI18n({
  legacy: false,
  globalInjection:true,  // 全局模式，可以直接使用 $t
  locale: 'zh-cn',
  messages: messages
})

export default i18n