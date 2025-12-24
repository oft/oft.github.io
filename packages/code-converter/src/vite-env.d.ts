/// <reference types="vite/client" />

import 'vue-router'

// 为了确保这个文件被当作一个模块，添加至少一个 `export` 声明
export {}

declare module 'vue-router' {
  interface RouteMeta {
    title?: string
    icon?: string

    /**显示 tabBar */
    showTabBar?: boolean|string,
    /**显示 navBar */
    showNavBar?: boolean,
    /**navBar 返回 */
    navBarBack?:boolean,

    navBarRightText?: string
    navBarRightIcon?: string
    navBarRightIconPrefix?: string
    navBarRightTo?: string
    navBarRightToActive?: 'to'|'open'

    /**需要登陆 */
    requireLogin?: boolean,

    /**强行指定主题 */
    theme?:'dark' | 'light'
  }
}

interface ImportMetaEnv {
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
