<script setup>
const prop = defineProps(["action"]);
</script>
<template>
  <button class="btn">
    <a class="btn-font" href="">{{ prop.action }}</a>
  </button>
</template>

<style lang="scss" scoped>
@use "sass:color";

.btn {
  border: none;
  background-color: #343434;
  width: fit-content;
  display: inline-block;
  text-align: center;
  padding: 6px 12px;
  border-radius: 2px;
  .btn-font {
    font-family: "Nunito Sans";
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    color: #ffffff !important;
  }
  &:hover {
    box-shadow: 0px 1px 4px rgba(29, 36, 38, 0.32);
    cursor: pointer;
    background-color: #141414;
    transition: 0.2s ease-in-out;
  }
}
</style>
