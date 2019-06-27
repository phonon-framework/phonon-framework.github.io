<template>
  <a
    :href="lastCommit.url"
    target="_blank"
    class="text-white"
    v-text="`${lastCommit.sha.substring(0, 7)}, ${lastCommit.date}`"
  />
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      github: { user: 'phonon-framework', repo: 'phonon', branch: 'master' },
      // lastCommit: null,
      lastCommit: { sha: '', date: '', url: '' },
    };
  },
  async created() {
    this.lastCommit = await this.getLastCommit();
  },
  methods: {
    async getLastCommit() {
      try {
        const response = await axios({
          url: `https://api.github.com/repos/${this.github.user}/${this.github.repo}/commits?sha=${this.github.branch}`,
          method: 'get',
        });

        const cur = response.data[0];

        return {
          sha: cur.sha,
          date: this.when(cur.commit.committer.date),
          url: `https://github.com/${this.github.user}/${this.github.repo}/commit/${cur.sha}`,
        };
      } catch (e) {
        // Err
      }

      return null;
    },
    when(commitDate) {
      const commitTime = new Date(commitDate).getTime();
      const todayTime = new Date().getTime();

      const differenceInDays = Math.floor(((todayTime - commitTime) / (24 * 3600 * 1000)));

      if (differenceInDays === 0) {
        const differenceInHours = Math.floor(((todayTime - commitTime) / (3600 * 1000)));
        if (differenceInHours === 0) {
          const differenceInMinutes = Math.floor(((todayTime - commitTime) / (600 * 1000)));
          if (differenceInMinutes === 0) {
            return 'just now';
          }

          if (differenceInMinutes === 1) {
            return `${differenceInMinutes} minute ago`;
          }

          return `${differenceInMinutes} minutes ago`;
        }

        if (differenceInHours === 1) {
          return `${differenceInHours} hour ago`;
        }

        return `${differenceInHours} hours ago`;
      }

      if (differenceInDays === 1) {
        return 'yesterday';
      }

      return `${differenceInDays} days ago`;
    },
  },
};
</script>
