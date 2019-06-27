<template>
  <nav class="navbar navbar-primary navbar-expand-lg fixed-top">
    <div
      class="container"
      :class="{ 'full-width': $route.name.indexOf('docs') > -1 }"
    >
      <div class="navbar-left">
        <nuxt-link
          :to="{ name: 'index' }"
          class="navbar-title"
        >
          <img
            src="~/static/icon-64.png"
            width="35"
            height="35"
            class="d-inline-block align-top"
            alt=""
          >
          <span class="d-none d-md-inline-block">Phonon</span>
        </nuxt-link>

        <ul class="navbar-nav">
          <nuxt-link
            :to="{ name: 'index' }"
            exact
            tag="li"
            class="nav-item"
          >
            <a class="nav-link">Home</a>
          </nuxt-link>
          <nuxt-link
            :to="{ name: 'docs' }"
            tag="li"
            class="nav-item"
          >
            <a class="nav-link">Documentation</a>
          </nuxt-link>
          <nuxt-link
            v-if="useCases.length > 0"
            :to="{ name: 'use-cases' }"
            tag="li"
            class="nav-item"
          >
            <a class="nav-link">Use cases</a>
          </nuxt-link>
          <li class="nav-item">
            <a
              class="nav-link"
              href="https://github.com/quark-dev/Phonon-Framework/tree/master"
            >Github</a>
          </li>
        </ul>
      </div>
      <div
        v-if="$route.name.indexOf('index') > -1"
        class="navbar-right"
      >
        <button
          class="navbar-toggle icon-hamburger d-lg-none"
          type="button"
          data-toggle="offcanvas"
          data-target="#homeOffCanvas"
          @click.prevent="$emit('menu')"
        >
          <span
            class="icon"
            aria-hidden="true"
          />
        </button>
      </div>
      <div
        v-if="$route.name.indexOf('docs') > -1"
        class="navbar-right"
      >
        <div>
          <select
            :value="$store.state.version.current"
            class="form-control form-control-sm d-none d-md-block"
            @change.prevent="changeVersion"
          >
            <option
              v-for="(version, index) in $store.state.version.all"
              :key="version"
              :value="version"
              v-text="index === 0 ? `${version} (latest)` : version"
            />
          </select>
        </div>
        <button
          class="navbar-toggle icon-hamburger"
          type="button"
          data-toggle="offcanvas"
          data-target="#docOffCanvas"
          @click.prevent="$emit('menu')"
        >
          <span
            class="icon"
            aria-hidden="true"
          />
        </button>
      </div>
    </div>
  </nav>
</template>

<script>
import useCases from '~/use-cases';

export default {
  data() {
    return {
      useCases,
    };
  },
  methods: {
    changeVersion(event) {
      this.$store.commit('version/change', event.target.value);
    },
  },
};
</script>
