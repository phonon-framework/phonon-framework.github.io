# Off-Canvas

An off-canvas is a sidebar visible from the left or the right.

<hr />

## Markup

Use `.offcanvas-left` or `.offcanvas-right` to determine the direction of the offcanvas.

<button class="btn btn-primary" data-toggle="offcanvas" data-target="#exampleOffCanvas">Launch right offcanvas</button>

```html!
<!-- Button trigger offcanvas -->
<button class="btn btn-primary" data-toggle="offcanvas" data-target="#exampleOffCanvas">Launch right offcanvas</button>

<!-- offcanvas, left direction -->
<div class="offcanvas offcanvas-right" id="exampleOffCanvas" role="navigation" aria-hidden="true" aria-labelledby="exampleOffCanvasTitle">
  <div class="offcanvas-inner">
    <div class="offcanvas-content">
      <div class="offcanvas-header">
        <h1 class="offcanvas-title">Title</h1>
        <button type="button" class="close" data-dismiss="offcanvas" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="offcanvas-body">
        <p>Content</p>
      </div>
      <div class="offcanvas-footer">
        <p>Footer</p>
      </div>
    </div>
  </div>
</div>
```

## Floating and static off-canvas

By default, the off-canvas menu is displayed over the page (floating) if the screen size is `md` or `sm`. If the screen width is bigger (`lg` or `xl`), the menu will push the container (static) to display next to it.

<div class="alert alert-border border-left-primary" role="alert">
  Change your browser width to test this feature. You can toggle the offcanvas from the left (docs menu).
</div>

## JavaScript

```js
// ES6
import OffCanvas from 'phonon/dist/js/components/off-canvas';

const offcanvas = new OffCanvas({
  element: '#exampleOffCanvas',
  container: document.body,
  toggle: false,
  aside: {
    md: false,
    lg: true,
    xl: true,
  },
});

// ES5
const offcanvas = phonon.offCanvas({
  element: '#exampleOffCanvas',
  container: document.body,
  toggle: false,
  aside: {
    md: false,
    lg: true,
    xl: true,
  },
});
```

### Options

|     Name     |     Description      |     Default value      |
|----------------|----------------------|-------------------------|
|    aside.md      |  Displays the off-canvas menu next to the container when the screen size is `md` (from 768px to 991px). | false |
|    aside.lg      |  Displays the off-canvas menu next to the container when the screen size is `lg` (from 992px to 1199px). | true |
|    aside.xl      |  Displays the off-canvas menu next to the container when the screen size is `xl` (1200px+). | true |
|    toggle      |  Toggles the off-canvas menu when it is initialized. | false |
|    container      |  The container that will be pushed to the right or left if the off-canvas menu is displayed in aside mode. | body |
|    closableKeyCodes   |  Array of keys that allow to hide the off-canvas. Default key is escape. | [27] |

### Methods

#### show()

* returns: `<boolean>`

Any off canvas can be shown with JavaScript. For this, we call the `show()` method:

```js
offcanvas.show();
```


#### hide()

* returns: `<boolean>`

Any off canvas can be hidden with JavaScript, not only by clicking on its buttons. For this, we call the `hide()` method:

```js
offcanvas.hide();
```


### Events

It may be useful to use the events that affect your off-canvas.
For this, you can use object and DOM events.


|     Event Type     |     Description      |
|--------------------|----------------------|
|  show    |   This event fires immediately when the `show` instance method is called.   |
|  shown   |  This event is fired when the off-canvas is completely visible to the user (will wait for CSS transitions to complete).    |
|  hide    |    This event is fired immediately when the `hide` instance method is called.   |
|  hidden  |   This event is fired when the off-canvas is completely hidden (will wait for CSS transitions to complete).    |



#### Object Events

```js
phonon.offCanvas({
  element: '#exampleOffCanvas',
  show: () => { // or onShow
    console.log('It works!');
  },
  shown: () => { // or onShown
    console.log('It works!');
  },
  hide: () => { // or onHide
    console.log('It works!');
  },
  hidden: () => { // or onHidden
    console.log('It works!');
  },
});
```

#### DOM Events

```js
document.querySelector('.offcanvas').addEventListener('show.ph.offcanvas', () => {
  console.log('It works!');
});

document.querySelector('.offcanvas').addEventListener('shown.ph.offcanvas', () => {
  console.log('It works!');
});

document.querySelector('.offcanvas').addEventListener('hide.ph.offcanvas', () => {
  console.log('It works!');
});

document.querySelector('.offcanvas').addEventListener('hidden.ph.offcanvas', () => {
  console.log('It works!');
});
```
