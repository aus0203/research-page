import { ref } from "vue";
import { defineStore } from "pinia";
import englishVersion from "../model/englishVersion.json";
import dutchVersion from "../model/dutchVersion.json";
import flemishVersion from "../model/flemishVersion.json";
import frenchVersion from "../model/frenchVersion.json";

export const useDataStore = defineStore("data", () => {
  const data = ref(undefined);

  function set(lang) {
    switch (lang) {
      case 1:
        data.value = englishVersion;
        break;
      case 2:
        data.value = dutchVersion;
        break;
      case 3:
        data.value = flemishVersion;
        break;
      case 4:
        data.value = frenchVersion;
        break;
      default:
        break;
    }
  }

  function loadTestData() {
    data.value = englishVersion;
  }

  return { data: data, set, loadTestData };
});
