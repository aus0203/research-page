<script setup>
import { onMounted, onBeforeUnmount, ref } from "vue";
import PageHeader from "@/components/pageheader/PageHeader.vue";
import HeroLine from "@/components/heroline/HeroLine.vue";
import SectionStep from "@/components/section-step/SectionStep.vue";
import PromoationCard from "@/components/promotionCard/PromotionCard.vue";
import YAccordion from "@/components/common/YAccordion.vue";
import PageFooter from "../components/pagefooter/PageFooter.vue";
import { useDataStore } from "../store/dataStore";

/*Store*/
const dataStore = useDataStore();

/**Scroll effect**/
let scrollValue = ref(0);
function updateScrollposition() {
  scrollValue.value = window.scrollY;
}
onMounted(() => {
  window.addEventListener("scroll", updateScrollposition);
});
onBeforeUnmount(() => [
  window.removeEventListener("scroll", updateScrollposition),
]);
</script>

<template>
  <!--Header-->
  <PageHeader
    :class="{ header_scrolled: scrollValue > 0 }"
    :languages="dataStore.data.languages"
    :action="dataStore.data.action"
  >
    <template #logo>
      <img
        class="y-logo"
        src="../assets/image/a-logo-yuki-product.png"
        alt="logo"
      />
    </template>
  </PageHeader>
  <div ref="content" class="main_content flex flex-c">
    <!--Hero line-->
    <HeroLine
      :heroline="dataStore.data.heroline"
      :action="dataStore.data.action"
    />
    <!--Steps-->
    <div class="section-steps flex flex-c ai-c">
      <div class="steps-title headline-1 u-mx32">
        {{ dataStore.data.stepSectionTitle }}
      </div>
      <SectionStep
        v-for="(step, index) in dataStore.data.steps"
        :key="step.id"
        :step="step"
        :index="index"
      />
    </div>

    <div class="section-question flex flex-c ai-c u-mx32">
      <div class="headline-1">{{ dataStore.data.questionSectionTitle }}</div>
      <div
        class="category flex flex-c"
        v-for="sectionQuestion in dataStore.data.sectionQuestions"
        :key="sectionQuestion.id"
        :sectionQuestion="sectionQuestion"
      >
        <div class="headline-2 u-ml8 text-color--secondary">
          {{ sectionQuestion.category }}
        </div>
        <div class="bottom-line u-my8" />
        <YAccordion
          class="accrodion"
          v-for="question in sectionQuestion.questions"
          :key="question.id"
          :question="question"
        />
      </div>
    </div>
    <!--Promotion-->
    <PromoationCard
      :promotion="dataStore.data.promotion"
      :action="dataStore.data.action"
    />
    <!--Footer-->
    <PageFooter :footers="dataStore.data.footers">
      <template #logo>
        <img
          class="y-logo"
          src="../assets/image/a-logo-yuki-product.png"
          alt="logo"
        />
      </template>
    </PageFooter>
  </div>
</template>

<style lang="scss" scoped>
.main_content {
  height: calc(100% - 100px);
  overflow-y: auto;
  margin-top: 48px;
  flex-flow: column;
  gap: 96px;
}

.y-logo {
  width: 32px;
}

.section-steps {
  gap: 32px;
  .steps-title {
    text-align: center;
    width: calc(100% - 64px);
  }
}

.section-question {
  width: calc(100% - 64px);
  gap: 56px;
  .headline-1 {
    text-align: center;
    width: 100%;
  }
  .category {
    width: 840px;
    .accordion {
      align-self: stretch;
    }
    .bottom-line {
      border-bottom: 1px solid #d2d2d2;
    }
  }
}

.header_scrolled {
  transition: 0.3s ease-in-out;
  background-color: #ffffff;
  box-shadow: 0px 1px 4px rgba(29, 36, 38, 0.32);
}

@media only screen and (max-width: 900px) {
  .y-logo {
    width: 48px;
  }

  .section-steps {
    .steps-title {
      text-align: left;
      width: calc(100% - 64px);
    }
  }

  .section-question {
    .headline-1 {
      text-align: start;
    }
    .category {
      width: auto;
      max-width: 840px;
      align-self: stretch;
      .headline-2 {
        margin-left: 0px;
      }
    }
  }
}
</style>
