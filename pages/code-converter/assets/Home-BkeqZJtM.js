import{i as e,n as t,r as n,t as r}from"./index-B2XYEhlW.js";var i={class:``},a=`
{
  title: {
    type: String,
    default: '',
  },
  navbar: {
    type: String,
    default: 'normal',
  },
  opacityBgUi: {
    type: String,
    default: 'bg-white',
  },
  color: {
    type: String,
    default: '',
  },
  tools: {
    type: String,
    default: 'title',
  },
  keyword: {
    type: String,
    default: '',
  },
  navbarStyle: {
    type: Object,
    default: () => ({
      styleType: '',
      type: '',
      color: '',
      src: '',
      list: [],
      alwaysShow: 0,
    }),
  },
  bgStyle: {
    type: Object,
    default: () => ({
      src: '',
      color: 'var(--ui-BG-1)',
    }),
  },
  tabbar: {
    type: [String, Boolean],
    default: '',
  },
  onShareAppMessage: {
    type: [Boolean, Object],
    default: true,
  },
  leftWidth: {
    type: [Number, String],
    default: 100,
  },
  rightWidth: {
    type: [Number, String],
    default: 100,
  },
  defaultSearch: {
    type: String,
    default: '',
  },
  //展示返回按钮
  showLeftButton: {
    type: Boolean,
    default: false,
  },
}

`,o=n({__name:`Home`,setup(n){return(n,o)=>(e(),t(`div`,i,[o[2]||=r(`div`,{class:`mb-2`},[r(`span`,{class:`text-rotate text-xl`},[r(`span`,{class:`justify-items-start`},[r(`span`,null,`代码转换`),r(`span`,null,`VUE-props`),r(`span`,null,`选项式 <-> 组合式`)])])],-1),r(`div`,{class:`flex min-h-150`},[r(`textarea`,{class:`textarea flex-1 w-0`,value:a,placeholder:`选项式代码`}),o[0]||=r(`div`,{class:`flex flex-col justify-center p-2`},[r(`button`,{class:`btn btn-primary`},`转换`)],-1),o[1]||=r(`textarea`,{class:`textarea flex-1 w-0`,placeholder:`组合式代码`},null,-1)])]))}});export{o as default};