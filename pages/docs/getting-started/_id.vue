<template>
  <main class="container">
    <markdown-doc
      section="getting-started"
      :resource="$route.params.id"
    />
  </main>
</template>

<script>
import MarkdownDoc from '@/components/MarkdownDoc';

export default {
  components: {
    MarkdownDoc,
  },
  layout: 'docs',
};
</script>
