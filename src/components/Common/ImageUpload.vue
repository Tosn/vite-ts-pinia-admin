<template>
  <div class="upload-comp-box">
    <ul class="upload-comp-list">
      <li v-for="(item, index) in imageList" :key="item">
        <div class="cover">
          <i class="iconfont icon-fangdajing" @click="scaleImage(item)"></i>
          <i class="iconfont icon-delete" @click="removeImage(index)"></i>
        </div>
        <img :src="item" alt="" />
      </li>
    </ul>
    <el-upload
      v-show="imageList.length < limit"
      v-loading="loadingImage"
      class="upload-small avatar-uploader m-l-10"
      action="https://jsonplaceholder.typicode.com/posts/"
      :before-upload="handBeforeUpLoad"
      :on-success="handleSuccess"
      :show-file-list="false"
    >
      <el-icon class="avatar-uploader-icon"><Plus /></el-icon>
    </el-upload>
  </div>
  <el-dialog
    v-model="visibleDialog"
    width="500px"
  >
    <img :src="currentImage" style="width: 100%" alt="">
  </el-dialog>
</template>

<script setup lang="ts">
import {
  PropType, ref, Ref, defineProps, defineEmits,
} from 'vue';
import { Plus } from '@element-plus/icons-vue';

const emits = defineEmits(['update:modelValue']);
defineProps({
  limit: {
    type: Number,
    default: Infinity,
  },
  modelValue: {
    type: Array as PropType<string[]>,
    default: () => [],
  },
});
const loadingImage = ref(false);
const imageList: Ref<string[]> = ref([]);
const visibleDialog = ref(false);
const currentImage = ref('');
const handBeforeUpLoad = () => {
  loadingImage.value = true;
};

const uploadImageList = () => {
  emits('update:modelValue', imageList.value);
};

const handleSuccess = (res: any) => {
  imageList.value.push(res.url || 'http://localhost:2222/src/assets/images/logo.png');
  uploadImageList();
  loadingImage.value = false;
};

const scaleImage = (url: string) => {
  currentImage.value = url;
  visibleDialog.value = true;
};

const removeImage = (inx: number) => {
  imageList.value.splice(inx, 1);
  uploadImageList();
};

</script>

<style scoped lang="scss">
.upload-comp-box {
  display: flex;
  .upload-comp-list {
    display: flex;
    li {
      width: 120px;
      height: 120px;
      border: 1px solid #f0f0f0;
      border-radius: 8px;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      img {
        max-width: 100%;
        max-height: 100%;
      }
      &:not(:first-child) {
        margin-left: 10px;
      }
      &:hover {
        .cover {
          display: flex;
        }
      }
      .cover {
        display: none;
        background-color: rgba(0, 0, 0, .6);
        position: absolute;
        width: 100%;
        height: 100%;
        color: #fff;
        align-items: center;
        justify-content: center;
        i {
          cursor: pointer;
          font-size: 24px;
          margin: 0 4px;
        }
      }
    }
  }
}
</style>
