<template>
  <div
    id="docOffCanvas"
    class="offcanvas sidebar offcanvas-left"
    role="navigation"
    aria-hidden="true"
    data-no-boot="true"
    data-config="toggle: true, container: '#docPage'"
    aria-labelledby="docOffCanvas"
  >
    <div class="offcanvas-inner">
      <div class="offcanvas-content">
        <div class="offcanvas-body">
          <button
            type="button"
            class="icon-close"
            data-dismiss="offcanvas"
            aria-label="Close"
          >
            <span
              class="icon"
              aria-hidden="true"
            />
          </button>

          <div class="d-sm-block d-lg-none">
            <ul class="menu">
              <li>
                <nuxt-link
                  :to="{ name: 'index' }"
                  exact
                  @click.native="autoClose"
                >
                  Home
                </nuxt-link>
              </li>
              <li>
                <a href="https://github.com/quark-dev/Phonon-Framework/tree/master">Github</a>
              </li>
            </ul>

            <hr>
          </div>

          <ul class="menu">
            <li
              v-for="(section, index) in menu"
              :key="index"
            >
              <nuxt-link
                :to="{ name: section.route, params: { id: 'index' }}"
                v-text="section.label"
                @click.native="autoClose"
              />
              <ul class="menu">
                <li
                  v-for="item in section.items"
                  :key="item.key"
                >
                  <nuxt-link
                    :to="{ name: section.route, params: { id: item.key }}"
                    v-text="item.label"
                    @click.native="autoClose"
                  />
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import phonon from 'phonon/dist/js/phonon';
import menu from '~/utils/menu';

export default {
  data() {
    return {
      offCanvas: null,
      menu,
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
    toggle() {
      this.offCanvas.toggle();
    },
    autoClose() {
      if (!document.body.querySelector('.offcanvas-backdrop')) {
        // Keep the off-canvas open for desktop screens
        return;
      }

      // Auto-hide on mobile and tablet screens
      this.hide();
    },
  },
};
</script>
