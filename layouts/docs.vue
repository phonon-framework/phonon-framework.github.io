<template>
  <div class="h-100">
    <main-navbar @menu="$refs.offCanvas.toggle()" />
    <doc-off-canvas ref="offCanvas" />
    <main>
      <example-off-canvas />

      <section class="content">
        <div
          id="docPage"
          class="page bg-white p-2 p-lg-5"
        >
          <nuxt />
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import MainNavbar from '~/components/MainNavbar';
import DocOffCanvas from '~/components/DocOffCanvas';
import ExampleOffCanvas from '~/components/ExampleOffCanvas';

export default {
  components: {
    MainNavbar,
    DocOffCanvas,
    ExampleOffCanvas,
  },
  beforeRouteLeave(to, from, next) {
    this.$refs.offCanvas.hide();
    next();
  },
};
</script>
