<template>
  <div>
    <div class="d-flex">
      <div class="flex-grow-1">
        <h2 v-text="data.title" />
        <p
          class="text-justify mr-2"
          v-text="data.description"
        />
        <a
          :href="data.homepage"
          target="_blank"
        >
          {{ data.title }}
          <fa icon="chevron-right" />
        </a>
      </div>
      <img
        v-if="data.imageSrc"
        height="100"
        :src="data.imageSrc"
        :title="data.title"
      >
    </div>
    <div class="mt-3">
      <div
        v-for="(label, index) in data.labels"
        :key="index"
        class="bg-light py-2 px-3 mr-3 mb-3 d-inline-block"
      >
        Hello
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
};
</script>
