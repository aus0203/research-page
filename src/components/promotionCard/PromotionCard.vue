<script setup>
import YButton from "../common/YButton.vue";

const prop = defineProps(["promotion", "action"]);
</script>
<template>
  <div class="flex jc-c u-px12">
    <div class="card u-p32">
      <div class="left flex flex-c">
        <div class="headline-1">{{ prop.promotion.title }}</div>
        <div class="paragraph">
          {{ prop.promotion.description }}
        </div>
        <YButton :action="prop.action" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  border: 1px solid #eeeeee;
  border-radius: 2px;
  flex-basis: 1180px;
  box-shadow: 0px 10px 24px rgba(29, 36, 38, 0.12);
  background-image: url(@/assets/image/y-card-floating.png);
  background-repeat: no-repeat;
  background-position-y: center;
  background-position-x: right;
  background-size: 30%;
  .left {
    max-width: 575px;
    gap: 16px;
  }
}

@media only screen and (max-width: 1200px) {
  .card {
    padding: 32px 20px;
  }
}

@media only screen and (max-width: 900px) {
  .card {
    background-image: none;
    .left {
      max-width: 768px;
    }
  }
}
</style>
