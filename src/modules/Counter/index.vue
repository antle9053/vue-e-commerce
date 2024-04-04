<script setup lang="ts">
import { useCounterStore } from "@/shared/store/modules/foo";

const counterStore = useCounterStore();
</script>

<template>
  <h1>{{ counterStore.count }}</h1>
  <v-btn @click="counterStore.increment()" class="!bg-slate-800 !text-[#fff]">
    Increment
  </v-btn>
  <v-btn @click="counterStore.reset()">Reset</v-btn>
</template>
