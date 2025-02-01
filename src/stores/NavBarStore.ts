import { ref , type Ref} from "vue";
import { defineStore } from "pinia";

export const useNavStore = defineStore("nav", () => {
  const sections = ref("");

  function setSection(section: string) {
    sections.value = section;
  }
  return { sections, setSection};
});
