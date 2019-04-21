<template>
  <!-- eslint-disable-next-line vue/no-v-html -->
  <div v-html="md" />
</template>

<script>
import { loadMarkdown } from '@/utils';
import ClipBoard from 'clipboard';

import hljs from 'highlight.js/lib/highlight';
import javascript from 'highlight.js/lib/languages/javascript';
import scss from 'highlight.js/lib/languages/scss';
import xml from 'highlight.js/lib/languages/xml';

hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('scss', scss);
hljs.registerLanguage('xml', xml);

export default {
  props: {
    section: {
      type: String,
      required: true,
    },
    resource: {
      type: String,
      required: true,
    },
  },
  computed: {
    md() {
      return loadMarkdown(this.$store.state.version.current, this.section, this.resource);
    },
  },
  mounted() {
    this.$nextTick(() => {
      Array.from(this.$el.querySelectorAll('table') || []).forEach((table) => {
        if (!table.classList.contains('table')) {
          table.classList.add('table');
        }
      });

      Array.from(this.$el.querySelectorAll('pre code') || []).forEach((code) => {
        const btnId = Math.random().toString(36).substring(0, 20).replace(/[0-9.]/g, '');
        const page = code.parentNode.parentNode;

        page.insertBefore(this.addButton(btnId), code.parentNode.previousSibling);
        this.setListener('#' + btnId, code);

        // highlight
        hljs.highlightBlock(code);
      });
    });
  },
  methods: {
    addButton(id) {
      const container = document.createElement('div');
      container.classList.add('w-100');
      container.classList.add('mt-3');
      container.classList.add('text-right');

      const btn = document.createElement('button');
      btn.classList.add('btn');
      btn.classList.add('btn-sm');
      btn.classList.add('btn-secondary');

      btn.setAttribute('id', id);

      btn.innerHTML = 'Copy';

      container.appendChild(btn);

      return container;
    },
    setListener(btnId, code) {
      const clipboard = new ClipBoard(btnId, {
        target: function() {
          return code;
        }
      });

      clipboard.on('success', function (event) {
        event.clearSelection();
      });

      document.querySelector(btnId).addEventListener('click', function (event) {
        const text = event.target.innerHTML;
        event.target.innerHTML = 'Copied';
        setTimeout(() => {
          event.target.innerHTML = text;
        }, 1000);
      });
    },
  },
};
</script>
