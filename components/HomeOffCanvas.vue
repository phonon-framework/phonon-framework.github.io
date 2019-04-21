<template>
  <div
    id="homeOffCanvas"
    class="offcanvas offcanvas-left"
    role="navigation"
    aria-hidden="true"
    data-no-boot="true"
    aria-labelledby="homeOffCanvas"
  >
    <div class="offcanvas-inner">
      <div class="offcanvas-content">
        <div class="offcanvas-body">
          <ul class="menu">
            <ul class="menu">
              <li>
                <nuxt-link
                  :to="{ name: 'index' }"
                  exact
                >
                  Home
                </nuxt-link>
              </li>
              <li>
                <nuxt-link :to="{ name: 'docs' }">
                  Documentation
                </nuxt-link>
              </li>
              <li>
                <a href="https://github.com/quark-dev/Phonon-Framework/tree/master">Github</a>
              </li>
            </ul>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      offCanvas: null,
    };
  },
  async mounted() {
    await this.$nextTick();
    this.offCanvas = phonon.offCanvas({
      element: this.$el,
    });
  },
  methods: {
    show() {
      this.offCanvas.show();
    },
    hide() {
      this.offCanvas.hide();
    },
  },
};
</script>
