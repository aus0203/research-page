<script setup>
import MainPage from "@/components/MainPage.vue";
import { useDataStore } from "./store/dataStore";

const dataStore = useDataStore();
dataStore.loadTestData();
</script>

<template>
  <MainPage />
</template>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;600;700;800&display=swap");
</style>
