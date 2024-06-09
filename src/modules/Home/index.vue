<template>
  <div>Home</div>
  <div>
    <h1 class="text-red-400">Title</h1>
    <button @click="mutate">Create User</button>
  </div>
</template>
<script setup lang="ts">
import { useMutation } from "@vue/apollo-composable";
import gql from "graphql-tag";

const CREATE_USER = gql`
  mutation createUser {
    createUser(data: { email: "bbb@bbb.bbb", password: "123" }) {
      id
    }
  }
`;

const { mutate } = useMutation(CREATE_USER);
</script>
<style lang=""></style>
