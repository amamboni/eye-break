<script setup lang="ts">
import SectionTitle from '@/components/SectionTitle.vue'
import MainLayout from '@/layouts/MainLayout.vue'
import SettingForm from './Partials/SettingForm.vue'
</script>

<template>
  <MainLayout>
    <SectionTitle>
      <template #title> Setting </template>
      <template #description> Update your setting here </template>
    </SectionTitle>

    <SettingForm />
  </MainLayout>
</template>
