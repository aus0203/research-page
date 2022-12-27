<script setup>
import { ref } from "vue";

const prop = defineProps(["question"]);
let accordionIsOpen = ref(true);
</script>

<template>
  <div class="accordion flex flex-c">
    <div
      class="control flex flex-r jc-sb ai-c u-px8 u-pt20 u-pb12"
      @click="accordionIsOpen = !accordionIsOpen"
    >
      <div class="headline-3">{{ prop.question.title }}</div>
      <img
        class="chevron u-ml20"
        :class="{ rotate: !accordionIsOpen }"
        src="../../assets/icons/a-icon-chevron-down.png"
        alt="accordion"
      />
    </div>
    <Transition>
      <div
        class="paragraph u-pl8 u-pt12"
        :class="{ hidden: accordionIsOpen }"
        v-html="prop.question.answer"
      ></div>
    </Transition>
    <div class="bottom-line" :class="{ open: !accordionIsOpen }"></div>
  </div>
</template>

<style lang="scss" scoped>
.accordion {
  .control {
    .chevron {
      height: 16px;
      &.rotate {
        transform: rotate(180deg);
      }
    }
    &:hover {
      border-radius: 2px;
      background-color: #eeeeee;
      transition: 0.2s ease-in-out;
      cursor: pointer;
    }
  }
  .paragraph {
    max-width: 768px;
    white-space: pre-wrap;
    &.hidden {
      display: none;
    }
  }
  .bottom-line {
    border-bottom: 1px solid #d2d2d2;
    &.open {
      padding-top: 24px;
    }
  }
}

@media only screen and (max-width: 900px) {
  .accordion {
    .control {
      padding-left: 0px;
      .chevron {
        height: 20px;
      }
      &:hover {
        background-color: transparent;
      }
    }
    .paragraph {
      padding-left: 0px;
    }
  }
}
</style>
