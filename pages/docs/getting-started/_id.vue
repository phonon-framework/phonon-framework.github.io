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
import meta from '@/meta';
import { capitalize } from '@/mixins';

export default {
  layout: 'docs',
  components: {
    MarkdownDoc,
  },
  mixins: [ capitalize ],
  head () {
    return {
      title: `${meta.title} - Documentation - ${this.capitalize(this.$route.params.id)}`,
    };
  },
};
</script>
