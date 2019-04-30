<template>
  <div class="h-100">
    <navbar @menu="$refs.offCanvas.toggle()" />
    <main>
      <doc-off-canvas ref="offCanvas" />
      <example-off-canvas />

      <section class="content bg-light">
        <div
          id="docPage"
          class="page bg-white p-2 p-md-5"
        >
          <nuxt />
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import Navbar from '~/components/Navbar';
import DocOffCanvas from '~/components/DocOffCanvas';
import ExampleOffCanvas from '~/components/ExampleOffCanvas';

export default {
  components: {
    Navbar,
    DocOffCanvas,
    ExampleOffCanvas,
  },
  beforeRouteLeave(to, from, next) {
    this.$refs.offCanvas.hide();
    next();
  },
};
</script>
