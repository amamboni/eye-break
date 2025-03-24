<script setup lang="ts">
import Icon from '@/components/Icon.vue'
import { Settings, Timer } from 'lucide-vue-next'
import NavbarLink from './NavbarLink.vue'
</script>

<template>
  <nav>
    <ul class="grid grid-cols-2">
      <li>
        <NavbarLink :to="{ name: 'dashboard' }" title="Dashboard">
          <Icon :icon="Timer" /> Dashboard
        </NavbarLink>
      </li>
      <li>
        <NavbarLink :to="{ name: 'setting' }" title="Setting">
          <Icon :icon="Settings" /> Setting
        </NavbarLink>
      </li>
    </ul>
  </nav>
</template>
