# Custom builds

Import the required files for your project.

## Dist Structure

`phonon.js` is a bundle containing the entire framework as a whole (components and single-page apps modules).

```
// bundle
dist/js/phonon.js
dist/js/phonon.min.js

// components
dist/js/components/accordion.js
dist/js/components/accordion.min.js
dist/js/components/alert.js
dist/js/components/alert.min.js
...

dist/css/phonon.css
dist/css/phonon.min.css
```

## SCSS

Please, see the source code of [phonon.scss](https://github.com/quark-dev/Phonon-Framework/blob/master/src/scss/phonon.scss).

```scss
// Import Phonon package
@import 'phonon/src/scss/phonon';

// ... Or import required components for your project

// Recommended core files
@import 'functions';
@import 'variables';
@import 'mixins';
@import 'root';
@import 'reboot';
@import 'images';

// Custom component imports
@import 'phonon/src/scss/phonon/notification';
@import 'phonon/src/scss/phonon/off-canvas';
@import 'phonon/src/scss/phonon/selectbox';
// ...
```

## JavaScript

```js
// Import Phonon package
import 'phonon/dist/js/phonon';

// ... Or import required components for your project
import Accordion from './components/accordion';
import Alert from './components/alert';
import Collapse from './components/collapse';
import Loader from './components/loader';
import Modal from './components/modal';
import ModalConfirm from './components/modal-confirm';
import ModalLoader from './components/modal-loader';
import ModalPrompt from './components/modal-prompt';
import Notification from './components/notification';
import OffCanvas from './components/offcanvas';
import Selectbox from './components/selectbox';
import Tab from './components/tab';
```
