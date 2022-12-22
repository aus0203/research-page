<script setup>
import YButton from "../common/YButton.vue";
import YDropdown from "../common/YDopdown.vue";
const prop = defineProps(["languages", "action"]);
</script>
<template>
  <div class="header flex jc-c u-pt32 u-px32 u-pb12">
    <div class="content flex jc-sb ai-c">
      <div class="flex flex-2 ai-c">
        <slot name="logo"></slot>
        <div class="u-pl12 headline-3">Yuki User Research Group</div>
      </div>
      <div class="right flex flex-r ai-c">
        <YDropdown :languages="prop.languages" />
        <YButton class="btn" :action="prop.action" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.header {
  position: sticky;
  top: 0;
  z-index: 1;
  width: calc(100% - 64px);
  .content {
    width: fit-content;
    flex-basis: 1180px;
    .right {
      gap: 12px;
    }
  }
}

@media only screen and (max-width: 900px) {
  .header {
    .content {
      align-items: flex-end;

      .headline-3 {
        display: none;
      }
    }
  }
}
</style>
