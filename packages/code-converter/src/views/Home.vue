<template>
    <div class="">
        <div class="mb-2">
            <span class="text-rotate text-xl">
                <span class="justify-items-start">
                    <span>代码转换</span>
                    <span>VUE-props</span>
                    <span>选项式 <-> 组合式</span>
                </span>
            </span>
        </div>
        <div class="flex min-h-150">
            <textarea class="textarea flex-1 w-0" :value="opts" placeholder="选项式代码"></textarea>
            <div class="flex flex-col justify-center p-2">
                <button class="btn btn-primary">转换</button>
            </div>
            <textarea class="textarea flex-1 w-0" placeholder="组合式代码"></textarea>
        </div>
    </div>
</template>

<script setup lang="ts">

const opts = `
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

`

</script>