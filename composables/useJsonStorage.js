import { ref, watch } from "vue";

function setItem(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function getItem(key, defaultValue = null) {
  if (localStorage.getItem(key) === null) setItem(key, defaultValue);

  let data;
  try {
    data = JSON.parse(localStorage.getItem(key));
  } catch (e) {
    console.warn("Value in localStorage is not valid JSON, falling back to default value.");
    data = defaultValue;
  }
  return data;
}

export function useJsonStorage(key, defaultValue) {
  const data = ref(defaultValue);
  data.value = getItem(key, defaultValue);
  watch(data, () => setItem(key, data.value), {deep: true});

  return { data };
}
