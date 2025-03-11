<template>
  <div class="parallax-container">
    <kinesis-container event="move" class="kinesis-wrapper">
      <kinesis-element :strength="25" type="translate" class="background-image" />
    </kinesis-container>
  </div>
</template>

<script setup lang="ts">
import { KinesisContainer, KinesisElement } from 'vue-kinesis'
</script>

<style scoped lang="scss">
.parallax-container {
  width: 600px;
  height: 400px;
  overflow: hidden;
  border-radius: 12px;
  position: relative;
}

.kinesis-wrapper {
  width: 100%;
  height: 100%;
}

.background-image {
  width: 110%;
  height: 110%;
  position: absolute;
  top: -5%;
  left: -5%;
  background-image: url('https://media.istockphoto.com/id/1276936276/vi/anh/n%E1%BB%81n-t%E1%BA%A3ng-s%C3%A1ng-t%E1%BA%A1o-s%C3%B2ng-b%E1%BA%A1c-tr%E1%BB%B1c-tuy%E1%BA%BFn-trong-tay-m%E1%BB%99t-ng%C6%B0%E1%BB%9Di-%C4%91%C3%A0n-%C3%B4ng-m%E1%BB%99t-chi%E1%BA%BFc-%C4%91i%E1%BB%87n-tho%E1%BA%A1i-th%C3%B4ng.jpg?s=1024x1024&w=is&k=20&c=Pn-O2EwZScow34nNcK33_yU_zcjbjcRGsugg7iVAj04=');
  background-size: cover;
  background-position: center;
}
</style>
