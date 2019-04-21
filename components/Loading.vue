<template>
  <div
    v-show="show"
    :class="{'bg-danger': error}"
    :style="{ width: progress + '%' }"
    class="loading"
  />
</template>

<script>
export default {
  data: () => ({
    show: false,
    error: false,
    progress: 0,
  }),
  methods: {
    start () {
      this.show = true;
      this.error = false;
      this.progress = 0;
    },
    finish () {
      this.hide();
    },
    fail () {
      this.error = true;
    },
    increase (num) {
      this.progress = num
    },
    hide () {
      this.progress = 100;
      setTimeout(() => {
        this.show = false;
      }, 800);
    },
  },
};
</script>

<style scoped>
.loading {
  position: fixed;
  z-index: 999999;
  top: 0;
  left: 0;
  right: 0;
  width: 0;
  height: 3px;
  transition: width 500ms ease-in-out;
  background-color: #fff;
}
</style>
