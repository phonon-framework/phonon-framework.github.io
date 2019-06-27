/* eslint import/prefer-default-export: 0 */
export const capitalize = {
  methods: {
    capitalize(str) {
      return `${str.charAt(0).toUpperCase()}${str.slice(1)}`;
    },
  },
};
