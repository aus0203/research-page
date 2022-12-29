<script setup>
import { onBeforeUnmount, onMounted, ref } from "vue";
import { useDataStore } from "../../store/dataStore";
import YDropdownItem from "./YDropdown-item.vue";
const prop = defineProps(["languages"]);
const emit = defineEmits(["click", "languageUpdate"]);

/**Dropdown behaviour**/
/**Open/Hide menu**/
let dropDownIsOpen = ref(false);

/**Update value**/
const dataStore = useDataStore();
const selectedLanguage = ref(undefined);

function clickOutside() {
  dropDownIsOpen.value = false;
}

onMounted(() => {
  /**Update Value**/
  const languageOne = prop.languages.find((item) => item.id == 1);
  selectedLanguage.value = languageOne?.option;
  /**Close when click outside**/
  document.addEventListener("click", clickOutside);
});

function onClick(language) {
  emit("click");
  /**loading time**/
  setTimeout(() => {
    dataStore.set(language.id);
    emit("languageUpdate");
  }, 1200);

  selectedLanguage.value = language.option;
}

onBeforeUnmount(() => {
  document.removeEventListener("click", clickOutside);
});
</script>

<template>
  <div
    class="dropdown flex flex-r ai-c u-px6 u-py8"
    @click.stop="dropDownIsOpen = !dropDownIsOpen"
    :class="{ 'dropdown--is-active': dropDownIsOpen }"
  >
    <div class="button">
      {{ selectedLanguage }}
    </div>
    <img
      class="icon"
      src="../../assets/icons/a-icon-chevron-down.png"
      alt="chveron"
    />
    <transition name="fade" appear>
      <div
        class="popOver u-px8 u-py8"
        v-if="dropDownIsOpen"
        :class="{ 'popOver--is-onbottom': dropDownIsOpen }"
      >
        <img
          class="icon"
          src="../../assets/icons/a-icon-cross.png"
          alt="cross"
          @click.stop="dropDownIsOpen = !dropDownIsOpen"
        />
        <YDropdownItem
          v-for="language in languages"
          :key="language.id"
          :languages="prop.languages"
          :language="language"
          :active="selectedLanguage == language.option"
          @click="onClick(language)"
        />
      </div>
    </transition>
  </div>
</template>

<style lang="scss" scoped>
@use "sass:color";
@use "sass:map";
@import "src/styles/base/colors.scss";
.dropdown {
  position: relative;
  gap: 12px;
  border-radius: 2px;
  .icon {
    width: 16px;
  }
  &:hover {
    background-color: #eeeeee;
    cursor: pointer;
    transition: 0.2s ease-in-out;
  }
  &:focus {
    background-color: #eeeeee;
    cursor: pointer;
  }
  &.dropdown--is-active {
    background-color: #eeeeee;
  }
}

.popOver {
  background-color: #ffffff;
  border: 1px solid #eeeeee;
  border-radius: 2px;
  box-shadow: 0px 24px 56px rgba(29, 36, 38, 0.16);

  .icon {
    width: 20px;
    margin-bottom: 20px;
    border-radius: 2px;
    display: none;
  }

  &.popOver--is-onbottom {
    position: absolute;
    z-index: 1;
    top: calc(32px + 8px);
    right: 0;
  }
}

@media only screen and (max-width: 900px) {
  .dropdown {
    position: inherit;
  }
  .popOver {
    .icon {
      display: block;
    }
    &.popOver--is-onbottom {
      width: 50vw;
      height: 100vh;
      padding: 20px 12px;
      top: 0;
    }
  }
}
</style>
