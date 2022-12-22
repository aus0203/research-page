<script setup>
import YButton from "../common/YButton.vue";
const prop = defineProps(["heroline", "action"]);
</script>

<template>
  <div class="flex jc-c u-px32">
    <div class="content flex flex-r ai-c jc-sb">
      <div class="left flex flex-c u-mr48">
        <div class="bigHeadline">{{ prop.heroline.headline }}</div>
        <div class="headline-2 u-mt32">{{ prop.heroline.subtitle }}</div>
        <div class="paragraph u-my16">
          {{ prop.heroline.description }}
        </div>
        <YButton :action="prop.action" />
      </div>
      <img
        class="heroline-pic"
        src="@/assets/image/y-image-uxr.png"
        alt="heroline-pic"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.content {
  flex-basis: 1180px;
  .left {
    max-width: 480px;
    .bigHeadline {
      font-weight: 700;
      font-size: 40px;
      line-height: 48px;
      color: var(--text-color--default);
    }
  }
  .heroline-pic {
    width: 52%;
  }
}

@media only screen and (max-width: 900px) {
  .content {
    align-items: flex-start;
    flex-direction: column;
    gap: 48px;
    .left {
      max-width: 768px;
    }
    .heroline-pic {
      width: 80%;
    }
  }
}
</style>
