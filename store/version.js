const latest = 'v2.0.0-alpha.1';

export const state = () => ({
  current: latest,
  all: [
    latest,
  ],
});

export const mutations = {
  change(store, version) {
    /* eslint no-param-reassign: 0 */
    store.current = version;
  },
};
