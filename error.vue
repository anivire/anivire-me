<template>
  <CustomError :errorCode="error ? String(error.statusCode) : 'lol'"/>
</template>

<script setup>
import CustomError from './src/components/navigation/CustomError.vue';

const props = defineProps({
  error: Object
})
</script>

<style>
body {
  background-color: #F0F0F0;
}
</style>