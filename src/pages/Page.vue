<script setup>
import { toRefs, computed } from "vue";
import { useRoute } from "vue-router";
import { strapiPages } from "../lib";

const { params } = toRefs(useRoute());
const page = computed(() =>
  (strapiPages.value || []).find((p) => p.slug === params.value.page_slug)
);
</script>
<template>
  <horizontal style="padding: 48px; --cols: 1fr 5fr 1fr">
    <div />
    <vertical>
      <h1 style="font-size: 80px; line-height: 1em" v-html="page?.title" />
      <vertical v-html="page?.description_estonian" />
      <vertical v-html="page?.description_english" />
    </vertical>
    <users />
    <layout>
      <template #top-left>
        <back-button />
      </template>
      <template #bottom-left>
        <users-button />
      </template>
    </layout>
  </horizontal>
</template>
