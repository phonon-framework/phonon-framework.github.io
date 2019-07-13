<template>
  <div class="h-100">
    <home-off-canvas ref="offCanvas" />
    <main-navbar @menu="$refs.offCanvas.show()" />

    <main class="container">
      <section class="content">
        <div class="page bg-white p-2 p-lg-5">
          <h1>Use cases</h1>

          <div
            class="alert alert-primary"
            role="alert"
          >
            Feel free to add your project on this page!<br>
            <a
              class="alert-link"
              target="_blank"
              href="https://github.com/phonon-framework/phonon-framework.github.io#add-your-project"
            >
              More information available on Github
              <fa icon="chevron-right" />
            </a>
          </div>

          <div class="row">
            <div
              v-for="(useCase, index) in useCases"
              :key="index"
              class="col-md-6"
            >
              <use-case :data="useCase" />
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import HomeOffCanvas from '~/components/HomeOffCanvas';
import MainNavbar from '~/components/MainNavbar';
import UseCase from '~/components/UseCase';
import useCases from '~/use-cases';

export default {
  components: {
    HomeOffCanvas,
    MainNavbar,
    UseCase,
  },
  data() {
    return {
      useCases,
    };
  },
};
</script>
