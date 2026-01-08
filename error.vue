<template>
  <CustomError :errorCode="error ? String(error.statusCode) : 'lol'" />
</template>

<script setup>
import CustomError from './src/components/error.vue';

const props = defineProps({
  error: Object,
});
</script>

<style>
body {
  background-color: #f0f0f0;
}
</style>
