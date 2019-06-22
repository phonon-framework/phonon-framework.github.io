import pkg from './package';
import menu from './utils/menu';
import meta from './meta';

/*
 * Build the list of dynamic routes
 * for the SPA
 */
const dynamicRoutes = [];
menu.forEach((entry) => {
  entry.items.forEach(({ key }) => {
    dynamicRoutes.push(`${entry.url}/${key}`);
  });
});
/*
 * Build the list of dynamic routes
 * for the sitemap
 */
const sitemapRoutes = [];

menu.forEach((entry) => {
  entry.items.forEach(({ key }) => {
    sitemapRoutes.push({
      url: `${entry.url}/${key}`,
      changefreq: 'monthly',
      priority: 0.5,
      lastmodISO: new Date().toISOString(),
    });
  });
});

module.exports = {
  mode: 'spa',

  /*
  ** Headers of the page
  */
  head: {
    title: meta.title,
    meta: [
      { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description },
      { name: 'msapplication-TileColor', content: '#2b5797' },
      { name: 'theme-color', content: '#ffffff' },
      { name: 'keywords', content: '' },
      { name: 'description', content: 'A light weight, scalable and customizable front-end Website/Webapps Framework with clear, simple and modern UI components.' },
    ],
    link: [
      // External resources
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/styles/github.min.css' },
      { rel: 'stylesheet', href: 'https://rsms.me/inter/inter.css' },
      // Favicons
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/favicons/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicons/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicons/favicon-16x16.png' },
      { rel: 'manifest', href: '/favicons/site.webmanifest' },
      { rel: 'mask-icon', href: '/favicons/safari-pinned-tab.svg', color: '#3271d1' },
      // Sitemap
      { rel: 'sitemap', href: '/sitemap.xml', type: 'application/xml', title: 'Sitemap' },
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
  modules: [
    // Sitemap
    '@nuxtjs/sitemap',
    // Robot.txt
    ['@nuxtjs/robots', {
      UserAgent: '*',
      Sitemap: 'https://phonon.quarkdev.com/sitemap.xml',
    }],
    // Google Analytics
    ['@nuxtjs/google-analytics', {
      id: 'UA-55826278-2',
      set: [
        { field: 'anonymizeIp', value: true },
      ],
    }],
    // FontAwesome
    ['nuxt-fontawesome', {
      component: 'fa',
      imports: [
        //import icons from set
        {
          set: '@fortawesome/free-solid-svg-icons',
          icons: [
            'faChevronRight', 'faStopwatch', 'faLaptop', 'faFeatherAlt',
            'faShareAlt', 'faShapes', 'faSitemap',
            'faMobileAlt', 'faTabletAlt', 'faCodeBranch', 'faDonate',
          ],
        },
      ]
    }],
    // Markdown
    '@nuxtjs/markdownit',
    ['vue-scrollto/nuxt', { duration: 300 }],
  ],

  // Sitemap config
  sitemap: {
    hostname: 'https://phonon-framework.github.io',
    gzip: false,
    exclude: [],
    routes: sitemapRoutes,
  },

  // Markdown config
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
        });
      }
    },
  },
};
