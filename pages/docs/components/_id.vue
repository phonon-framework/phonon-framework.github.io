<template>
  <main class="container">
    <markdown-doc
      section="components"
      :resource="$route.params.id"
    />
  </main>
</template>

<script>
import MarkdownDoc from '@/components/MarkdownDoc';

export default {
  layout: 'docs',
  components: {
    MarkdownDoc,
  },
};
</script>
