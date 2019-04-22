<template>
  <div class="h-100 bg-white">
    <home-off-canvas ref="offCanvas" />
    <navbar @menu="$refs.offCanvas.show()" />
    <header class="header-main">
      <div class="main-container bg-primary d-flex">
        <div class="container d-flex">
          <div class="row align-items-center">
            <div class="col-md-6">
              <hr
                align="left"
                class="emphasis w-md h-md border-white my-4"
              >
              <h1 class="h2 text-white font-weight-light mb-4">
                <b>Phonon</b> is a <b>responsive</b> <b>front-end</b> framework with a focus on simplicity and flexibility
              </h1>
              <p class="h5 text-justify text-white">
                Phonon is a front-end framework made with <strong>mobile and desktop</strong> in mind.
                It offers clear and neutral components that integrate best practices
                and ideas coming from well-known design styles.
              </p>

              <div class="mt-4">
                <nuxt-link
                  :to="{ name: 'docs' }"
                  tag="li"
                  class="btn btn-primary border-white text-white"
                >
                  Getting started
                </nuxt-link>
                <button
                  class="btn btn-primary"
                  @click.prevent="openDownloadModal"
                >
                  Download
                </button>
                <div
                  v-if="lastCommit"
                  class="commit mt-2 text-white font-size-sm"
                >
                  <div v-text="`${lastCommit.sha.substring(0, 7)}, ${lastCommit.date}`" />
                </div>
              </div>
            </div>
            <div class="col-sm-6">
              <img
                src="~/static/icon-250.png"
                width="160px"
                class="mx-auto d-none d-md-block"
                alt=""
              >
            </div>
          </div>
        </div>
      </div>

      <svg
        class="angle bg-primary"
        version="1.1"
        viewBox="0 0 1000 40"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <g
          stroke="none"
          stroke-width="1"
          fill="none"
          fill-rule="evenodd"
        >
          <polygon points="0 41 1000 0 1000 41" />
        </g>
      </svg>
    </header>

    <main>
      <div class="story">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-md-6">
              <h2>Phonon v2</h2>
              <h3 class="headline text-primary">
                v2.0.0-alpha.1 is here!
              </h3>

              <p class="text-justify">
                After more than 250 commits after the latest v1 commit,
                we are happy to announce a new experience starting with Phonon 2!<br>
                The framework has been completely rewritten to make substantive improvements
                and making full use of <strong>Typescript</strong>.
              </p>

              <p class="text-justify">
                Originally, Phonon has been created for building
                <strong>hybrid apps with Apache Cordova</strong> by using <strong>Web technologies
                  such as HTML, CSS and JavaScript</strong>.
                At that time, the main focus was mobile.
              </p>

              <p>
                Coming from v1.x?
                <nuxt-link
                  :to="{ name: 'docs-getting-started-id', params: { id: 'migration' }}"
                  class="btn btn-outline-primary d-inline-block"
                >
                  Read the migration guide
                </nuxt-link>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="story bg-light">
        <div class="container">
          <h2>Fast and easy to use</h2>
          <h3 class="headline text-primary">
            JavaScript or HTML setup
          </h3>

          <div class="row align-items-center">
            <div class="col-md-6">
              <p class="text-justify">
                <b>JavaScript approach:</b> Use the JavaScript API directly to use components.
                Some components such as modals and notifications don't require any HTML markup.
                By omitting the <i><code>element</code></i> option, it will generate the HTML markup and add it into the DOM.
              </p>
            </div>
            <div class="col-md-6">
              <pre><code
                class="font-size-sm"
              v-text="pluginsJsExample"
              /></pre>
            </div>
          </div>

          <div class="row align-items-center">
            <div class="col-md-6">
              <p class="text-justify">
                <b>HTML approach:</b> Most component options are read directly from the HTML markup thanks to data-attributes.
                This eliminates the need to write unnecessary JavaScript configuration elsewhere in your code.
              </p>
            </div>
            <div class="col-md-6">
              <pre><code
                class="font-size-sm"
              v-text="plugionHtmlExample"
              /></pre>
            </div>
          </div>
        </div>
      </div>

      <div class="story">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-md-6">
              <h2>User interface framework</h2>
              <h3 class="headline text-primary">
                Responsive Frontend components
              </h3>

              <p class="text-justify">
                The UI components are designed to support use cases on different device formats
                such as desktop, tablets and smartphones.
              </p>
            </div>
            <div class="col-md-6">
              <fa
                icon="laptop"
                class="fas mx-auto"
              />
            </div>
          </div>
        </div>
      </div>

      <div class="story bg-light">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-md-6">
              <h2>Light weight framework</h2>
              <h3 class="headline text-primary">
                CommonJS components
              </h3>

              <p class="text-justify">
                Include individual components that are useful in your project in order to optimize the size.
                For more information, please read
                <nuxt-link :to="{name: 'docs-getting-started-id', params: { id: 'custom-builds' }}">
                  Custom builds
                </nuxt-link>.
              </p>

              <pre>
                <code class="font-size-sm">
// All
const phonon = require(&#x27;phonon/dist/phonon&#x27;);
// Component
const Modal = require(&#x27;phonon/dist/components/modal&#x27;);
                </code>
              </pre>
            </div>
            <div class="col-md-6">
              <fa
                icon="feather-alt"
                class="fas mx-auto"
              />
            </div>
          </div>
        </div>
      </div>

      <div class="story">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-md-6">
              <h2>Contribute, share or donate</h2>
              <h3 class="headline text-primary">
                Free and open source code
              </h3>

              <p class="text-justify">
                The MIT License is a permissive free software license.
                As a 100% free open-source project, developer participation is encouraged, as much or little as possible.
                Fork it, open issues and star the project!<br>
                Feel free to use Phonon for your free and commercial projects.
              </p>

              <iframe
                src="https://ghbtns.com/github-btn.html?user=quark-dev&repo=Phonon-Framework&type=star&count=false&size=large"
                frameborder="0"
                scrolling="0"
                width="160px"
                height="30px"
              />
              <iframe
                src="https://ghbtns.com/github-btn.html?user=quark-dev&repo=Phonon-Framework&type=fork&count=false&size=large"
                frameborder="0"
                scrolling="0"
                width="158px"
                height="30px"
              />

              <p class="text-justify">
                We would be more than happy to add a link to your project on our website.
                This allows us to present Phonon use cases. Please, open a ticket to request it.
                <a
                  class="btn btn-outline-primary btn-sm"
                  target="_blank"
                  href="https://github.com/quark-dev/Phonon-Framework/issues"
                >
                  Open an issue
                </a>
              </p>
              <p class="text-justify mt-3">
                If this framework saved your day and you wish to support future developments
                you may consider sending some funds via PayPal.
              </p>

              <form
                action="https://www.paypal.com/cgi-bin/webscr"
                method="post"
                target="_top"
              >
                <input
                  type="hidden"
                  name="cmd"
                  value="_s-xclick"
                >
                <input
                  type="hidden"
                  name="hosted_button_id"
                  value="FR8F53JKB8P32"
                >
                <input
                  type="image"
                  src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif"
                  border="0"
                  name="submit"
                  alt="PayPal - The safer, easier way to pay online!"
                >
                <img
                  alt=""
                  border="0"
                  src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif"
                  width="1"
                  height="1"
                >
              </form>
            </div>
            <div class="col-md-6">
              <fa
                icon="share-alt"
                class="fas mx-auto"
              />
            </div>
          </div>
        </div>
      </div>

      <div class="story bg-light">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-md-6">
              <h2>Library agnostic</h2>
              <h3 class="headline text-primary">
                No dependency
              </h3>

              <p class="text-justify">
                Phonon does not use and does not depend on any JavaScript third party libraries.
                Choose the right framework according to your needs and your project's size
                such as
                <a
                  href="https://reactjs.org"
                  target="_blank"
                >React</a>,
                <a
                  href="https://angular.io"
                  target="_blank"
                >Angular</a>,
                <a
                  href="https://vuejs.org"
                  target="_blank"
                >Vue.js</a>,
                <a
                  href="https://riot.js.org"
                  target="_blank"
                >Riot.js</a>
                or work with pure JavaScript.
              </p>
              <p class="text-justify">
                We're building this website with <a href="https://nuxtjs.org">Nuxt.js</a> which is a good use case on
                how to work with Phonon and <a href="https://vuejs.org">Vue.js</a>.
              </p>
            </div>
            <div class="col-md-6">
              <fa
                icon="shapes"
                class="fas mx-auto"
              />
            </div>
          </div>
        </div>
      </div>

      <div class="story">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-md-6">
              <h2>Site framework</h2>
              <h3 class="headline text-primary">
                From prototyping to production
              </h3>

              <p class="text-justify">
                Use Phonon as a prototyping website and apps toolkit to show your drafts and mockups
                or build amazing websites.
              </p>
            </div>
            <div class="col-md-6">
              <fa
                icon="sitemap"
                class="fas mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </main>

    <footer class="footer bg-primary">
      <div class="container">
        <div class="row align-items-end">
          <div class="col-md-6">
            <div class="d-flex align-items-end mb-3 mb-sm-0">
              <img
                src="~/static/icon.svg"
                width="60"
                height="60"
                alt=""
              >
              <span class="text-white ml-3">Phonon Framework</span>
            </div>
          </div>
          <div class="col-md-6">
            <div class="row">
              <div class="col-md-6">
                <ul>
                  <li>
                    <nuxt-link
                      :to="{ name: 'index' }"
                      class="text-white"
                    >
                      Home
                    </nuxt-link>
                  </li>
                  <li>
                    <nuxt-link
                      :to="{ name: 'docs' }"
                      class="text-white"
                    >
                      Documentation
                    </nuxt-link>
                  </li>
                  <li>
                    <a
                      class="text-white"
                      href="https://github.com/quark-dev/Phonon-Framework/tree/master"
                    >Github</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>

    <div
      id="downloadModal"
      class="modal"
      tabindex="-1"
      role="modal"
    >
      <div
        class="modal-inner"
        role="document"
      >
        <div class="modal-content">
          <div class="modal-header">
            <h3 class="modal-title">
              Download
            </h3>
          </div>
          <div class="modal-body">
            <p>
              The installation can take place in several ways:
            </p>
            <p>
              <ul>
                <li>Download the latest release and use dist files.</li>
                <li>Clone the repo: <code>git clone https://github.com/quark-dev/Phonon-Framework.git</code></li>
                <li>Install with npm: <code>npm install phonon</code>.</li>
                <li>Install with yarn: <code>yarn add phonon</code>.</li>
                <li>Install with Bower: <code>bower install phonon</code>.</li>
                <li>Use CDNJS.</li>
              </ul>
            </p>
          </div>
          <div class="modal-footer">
            <div
              class="btn-group float-right"
              role="group"
              aria-label="Basic example"
            >
              <button
                type="button"
                class="btn btn-primary"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '~/components/Navbar';
import HomeOffCanvas from '~/components/HomeOffCanvas';
import axios from 'axios';

import hljs from 'highlight.js/lib/highlight';
import javascript from 'highlight.js/lib/languages/javascript';
import scss from 'highlight.js/lib/languages/scss';
import xml from 'highlight.js/lib/languages/xml';

hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('xml', xml);

export default {
  components: {
    Navbar,
    HomeOffCanvas,
  },
  data() {
    return {
      github: { user: 'quark-dev', repo: 'Phonon-Framework', branch: 'master' },
      // lastCommit: null,
      lastCommit: { sha: '', date: '' },
      pluginsJsExample: 'new Modal({\n' +
        '  element: \'#myModal\', // optional\n' +
        '  center: true,\n' +
        '  dismiss: true,\n' +
        '}).show();',
      plugionHtmlExample: '<div id="myModal" data-config="center: true, dismiss: true">\n' +
        '...\n' +
        '</div>',
    };
  },
  async mounted() {
    await this.$nextTick();

    this.lastCommit = await this.getLastCommit();

    Array.from(this.$el.querySelectorAll('pre code') || []).forEach((code) => {
      hljs.highlightBlock(code);
    });
  },
  beforeRouteLeave(to, from, next) {
    this.$refs.offCanvas.hide();
    next();
  },
  methods: {
    when(commitDate) {
      const commitTime = new Date(commitDate).getTime();
      const todayTime = new Date().getTime();

      const differenceInDays = Math.floor(((todayTime - commitTime)/(24*3600*1000)));

      if (differenceInDays === 0) {
        const differenceInHours = Math.floor(((todayTime - commitTime)/(3600*1000)));
        if (differenceInHours === 0) {
          const differenceInMinutes = Math.floor(((todayTime - commitTime)/(600*1000)));
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
    async getLastCommit() {
      try {
        const response = await axios({
          url: `https://api.github.com/repos/${this.github.user}/${this.github.repo}/commits?sha=${this.github.branch}`,
          method: 'get',
        });

        const cur = response.data[0];

        return { sha: cur.sha, date: this.when(cur.commit.committer.date) };
      } catch (e) {
      }

      return null;
    },
    openDownloadModal() {
      // @todo: import phonon as cjs
      phonon.modal({ element: '#downloadModal' }).show();
    },
  },
};
</script>
