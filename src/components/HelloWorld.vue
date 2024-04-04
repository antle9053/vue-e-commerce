<script setup lang="ts">
import { ref } from "vue";
import { Button } from "@/components/ui/button";

defineProps<{ msg: string }>();

const count = ref(0);
</script>

<template>
  <h1>{{ count }}</h1>
  <Button @click="count++" class="button"
    ><span> {{ msg }} </span>
  </Button>
</template>

<style scoped lang="scss">
.read-the-docs {
  color: #888;
}

.button {
  span {
    color: red;
  }
}
</style>
