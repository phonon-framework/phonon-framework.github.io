import pkg from './package';
import menu from './utils/menu';

const dynamicRoutes = [];
menu.forEach((entry) => {
  entry.items.forEach(({ key }) => {
    dynamicRoutes.push(`${entry.url}/${key}`);
  });
});

module.exports = {
  mode: 'spa',

  /*
  ** Headers of the page
  */
  head: {
    meta: [{ 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' }],
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/styles/github.min.css' },
      { rel: 'stylesheet', href: 'https://rsms.me/inter/inter.css' },
    ],
    script: [
      { src: '/js/phonon.js' },
    ],
  },

  /*
  ** Customize the progress-bar color
  */
  loading: '~/components/Loading.vue',

  /*
  ** Global CSS
  */
  css: [
    '~/static/css/phonon.min.css',
    '@/assets/scss/app.scss',
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [],

  router: {
    linkActiveClass: 'active'
  },

  generate: {
    routes: dynamicRoutes,
  },

  /*
  ** Nuxt.js modules
  */
  modules: [,
    ['nuxt-fontawesome', {
      component: 'fa',
      imports: [
        //import icons from set
        {
          set: '@fortawesome/free-solid-svg-icons',
          icons: [
            'faChevronDown', 'faStopwatch', 'faLaptop', 'faFeatherAlt',
            'faShareAlt', 'faShapes', 'faSitemap',
            'faMobileAlt', 'faTabletAlt', 'faCodeBranch', 'faDonate',
          ],
        },
      ]
    }],
    '@nuxtjs/markdownit',
    ['vue-scrollto/nuxt', { duration: 300 }],
  ],

  markdownit: {
    preset: 'default',
    linkify: true,
    breaks: true,
    injected: true,
    use: [
      // 'markdown-it-highlightjs'
    ],
    highlight: (...args) => {
      const [code, lang] = args;
      const classAttribute = lang ? ` class="${lang}"` : '';

      function escapeHtml(str) {
        var HTML_ESCAPE_TEST_RE = /[&<>"]/;
        var HTML_ESCAPE_REPLACE_RE = /[&<>"]/g;
        var HTML_REPLACEMENTS = {
          '&': '&amp;',
          '<': '&lt;',
          '>': '&gt;',
          '"': '&quot;'
        };

        function replaceUnsafeChar(ch) {
          return HTML_REPLACEMENTS[ch];
        }

        if (HTML_ESCAPE_TEST_RE.test(str)) {
          return str.replace(HTML_ESCAPE_REPLACE_RE, replaceUnsafeChar);
        }

        return str;
      }

      let prefix = '';
      if (lang === 'html') {
        prefix = `<pre></pre> <div class="example">${code}</div>\n`;
      }

      return `${prefix}<pre><code${classAttribute}>${escapeHtml(code)}</code></pre>`;
    },
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
}
