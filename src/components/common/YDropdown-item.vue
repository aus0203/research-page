<script setup>
const prop = defineProps(["language", "active"]);
defineEmits(["click", "change"]);
</script>

<template>
  <div
    @click="$emit('click')"
    class="list-item button u-px8 u-py8"
    :class="{ item_active: prop.active }"
  >
    {{ prop.language.option }}
  </div>
</template>

<style lang="scss" scoped>
.list-item {
  min-width: 120px;
  &:hover {
    background-color: #f6f6f6;
    cursor: pointer;
  }
  &.item_active {
    font-weight: 700;
    background-color: #dff2ff;
  }
}

@media only screen and (max-width: 900px) {
  .list-item {
    padding: 12px 8px;
    margin-bottom: 12px;
  }
}
</style>
