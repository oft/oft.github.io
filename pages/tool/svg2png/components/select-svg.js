
import { ref } from 'vue';

export default {
    props:['modelValue'],
    emits:['update:modelValue'],
    setup(props,{
        emit
    }) {
        console.log(emit)

        // 响应式数据
        const fileInput = ref(null);
        const isDragover = ref(false);
        const svgContent = ref('');
        const errorMsg = ref('');

        // 处理文件选择
        const handleFileChange = (e) => {
            const target = e.target;
            const file = target.files?.[0];
            if (file) {
                processFile(file);
            }
            // 重置input值（避免重复选择同一文件不触发change）
            target.value = '';
        };

        // 处理拖放
        const handleDragover = () => {
            isDragover.value = true;
        };

        const handleDrop = (e) => {
            isDragover.value = false;
            const file = e.dataTransfer?.files?.[0];
            if (file) {
                processFile(file);
            }
        };

        // 处理文件校验和读取
        const processFile = (file) => {
            // 校验文件类型
            if (file.type !== 'image/svg+xml' && !file.name.endsWith('.svg')) {
                errorMsg.value = '请选择 SVG 格式文件！';
                svgContent.value = '';
                emit('update:modelValue', '');
                return;
            }

            errorMsg.value = '';

            // 读取文件内容
            const reader = new FileReader();
            reader.onload = (e) => {
                const content = e.target?.result;
                svgContent.value = content;
                emit('update:modelValue', content);
            };
            reader.readAsText(file);
        };

        // 手动触发文件选择
        const openFileDialog = () => {
            fileInput.value?.click();
        };

        return {
            isDragover,
            handleDrop,
            handleDragover,
            fileInput,
            handleFileChange,
            svgContent,
            errorMsg,
            openFileDialog,
        }
    },
    template: `
  <div 
    class="svg-uploader"
    :class="{ 'is-dragover': isDragover }"
    @drop.prevent="handleDrop"
    @dragover.prevent="handleDragover"
    @dragleave.prevent="isDragover = false"
    @click="openFileDialog"
  >
    <!-- 文件选择按钮 -->
    <input
      ref="fileInput"
      type="file"
      accept=".svg"
      class="file-input"
      @change="handleFileChange"
    >
    
    <!-- 交互区域 -->
    <div class="upload-area">
      <div v-if="svgContent" class="preview-svg grid-bg" v-html="modelValue"></div>
      <div v-else class="upload-placeholder">
        <span>点击或拖放 SVG 文件到此处</span>
      </div>
    </div>
    
    <!-- 错误提示 -->
    <div v-if="errorMsg" class="error-text">{{ errorMsg }}</div>
  </div>`
}