<script setup>
const prop = defineProps(["step", "index"]);
</script>
<template>
  <div class="flex jc-c u-px32">
    <div class="content flex ai-c jc-sb">
      <div class="left flex flex-c u-mr48">
        <div class="subtitle u-mb4">
          {{ prop.step.order }}
        </div>
        <div class="headline-2 u-mb16">
          {{ prop.step.title }}
        </div>
        <div class="paragraph" v-html="prop.step.description"></div>
      </div>
      <img
        :class="{ right: prop.index % 2 == 1 }"
        class="step-image"
        :src="prop.step.src"
        alt="image"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.content {
  flex-basis: 1180px;
  .left {
    max-width: 468px;
  }
  .step-image {
    width: 40%;
  }
  .right {
    order: -1;
  }
}

@media only screen and (max-width: 768px) {
  .content {
    flex-direction: column;
    align-items: flex-start;
    gap: 48px;
    .left {
      max-width: 568px;
    }
    .step-image {
      width: 72%;
    }
    .right {
      order: 2;
    }
  }
}
</style>
