# Alert

An alert displays a box with a specified message.

<hr />

```html
<div class="alert alert-primary" role="alert">
  A simple primary alert with <a href="#" class="alert-link">an example link</a>.
</div>
<div class="alert alert-secondary" role="alert">
  A simple secondary alert with <a href="#" class="alert-link">an example link</a>.
</div>
<div class="alert alert-success" role="alert">
  A simple success alert with <a href="#" class="alert-link">an example link</a>.
</div>
<div class="alert alert-danger" role="alert">
  A simple danger alert with <a href="#" class="alert-link">an example link</a>.
</div>
<div class="alert alert-warning" role="alert">
  A simple warning alert with <a href="#" class="alert-link">an example link</a>.
</div>
```

### Border color

```html
<div class="alert alert-border border-left-primary" role="alert">
  A simple primary alert with <a href="#" class="alert-link">an example link</a>.
</div>
<div class="alert alert-border border-left-secondary" role="alert">
  A simple secondary alert with <a href="#" class="alert-link">an example link</a>.
</div>
<div class="alert alert-border border-left-success" role="alert">
  A simple success alert with <a href="#" class="alert-link">an example link</a>.
</div>
<div class="alert alert-border border-left-danger" role="alert">
  A simple danger alert with <a href="#" class="alert-link">an example link</a>.
</div>
<div class="alert alert-border border-left-warning" role="alert">
  A simple warning alert with <a href="#" class="alert-link">an example link</a>.
</div>
```

### Dismissible

Add the class `.alert-dismissible` to add extra padding and push the button to the right. 

```html
<div class="alert alert-warning alert-dismissible" id="exampleAlert" role="alert">
  <strong>Holy guacamole!</strong> You should check in on some of those fields below.
  <button type="button" class="icon-close" data-dismiss="alert" aria-label="Close">
    <span class="icon" aria-hidden="true"></span>
  </button>
</div>
```

## JavaScript

```js
// ES6
import Alert from 'phonon/dist/js/components/alert';

const alert = new Alert({
  element: '#exampleAlert',
  fade: true,
});

// ES5
const alert = phonon.alert({
  element: '#exampleAlert',
  fade: true,
});
```

### Options

|     Name     |     Description      |     Default value      |
|----------------|----------------------|-------------------------|
|    fade      |  if `fade` is set to true, it will add a fade animation. Otherwise, it will toggle the display property when showing or hidding this element. | true |


### Methods

#### show()

* returns: `<boolean>`

```js
alert.show();
```

#### hide()

* returns: `<boolean>`

```js
alert.hide();
```

## Events

It may be useful to use the events that affect your alert.
For this, you can use object and DOM events.

|     Event Type     |     Description      |
|--------------------|----------------------|
|  show    |   This event fires immediately when the `show` instance method is called.   |
|  shown   |  This event is fired when the alert is completely visible to the user (will wait for CSS transitions to complete).    |
|  hide    |    This event is fired immediately when the `hide` instance method is called.   |
|  hidden  |   This event is fired when the alert is completely hidden (will wait for CSS transitions to complete).    |


### Object Events

```js
phonon.alert({
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

### DOM Events

```js
document.querySelector('.alert').addEventListener('show.ph.alert', () => {
  console.log('It works!');
});

document.querySelector('.alert').addEventListener('shown.ph.alert', () => {
  console.log('It works!');
});

document.querySelector('.alert').addEventListener('hide.ph.alert', () => {
  console.log('It works!');
});

document.querySelector('.alert').addEventListener('hidden.ph.alert', () => {
  console.log('It works!');
});
```
