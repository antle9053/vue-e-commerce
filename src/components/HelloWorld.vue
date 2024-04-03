<script setup lang="ts">
import { ref } from "vue";
import { Button } from "@/components/ui/button";

defineProps<{ msg: string }>();

const count = ref(0);
</script>

<template>
  <h1>{{ count }}</h1>
  <Button variant="destructive" @click="count++">Click</Button>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
