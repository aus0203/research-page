<script setup>
const prop = defineProps(["footers"]);
</script>

<template>
  <div class="flex jc-c u-pt32 u-pb48 u-px32">
    <div class="content flex jc-sb ai-c">
      <div class="left flex flex-r ai-c">
        <slot name="logo"></slot>
        <div
          v-for="footer in prop.footers"
          :key="footer.id"
          class="button link"
        >
          <a :href="footer.src">{{ footer.link }}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.content {
  flex-basis: 1180px;
  .left {
    gap: 24px;
  }
}

@media only screen and (max-width: 768px) {
  .left {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
