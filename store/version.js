const latest = 'v2.0.0-alpha.1';

export const state = () => ({
  current: latest,
  all: [
    latest,
  ],
});

export const mutations = {
  change (state, version) {
    state.current = version;
  },
};
