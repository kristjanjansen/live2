<script setup>
import {
  loadEvents,
  loadMessages,
  loadPages,
  refreshUser,
  refreshUsers,
  plausible,
  getStrapi,
} from "./lib";

loadEvents();
loadMessages();
loadPages();
refreshUser();
refreshUsers();
plausible.enableAutoPageviews();
</script>

<template>
  <div class="App">
    <RouterView v-slot="{ Component }">
      <Transition name="fade" appear>
        <component :is="Component" />
      </Transition>
    </RouterView>
  </div>
</template>

<style>
.App {
  min-height: 100vh;
}
</style>
