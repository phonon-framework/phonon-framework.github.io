# Notification

A notification is a floating message on top of the main window.

<hr />

<div class="mx-auto" style="padding:45px;background:#eee;">
  <div class="notification notification-primary mx-auto" style="visibility:visible;opacity:1;top:0;bottom:auto;position:relative;margin:0">
    <div class="notification-inner">
      <div class="notification-header">
        <h5 class="notification-title">Heads up!</h5>
        <button type="button" class="icon-close" data-dismiss="notification" aria-label="Close">
          <span class="icon" aria-hidden="true"></span>
        </button>
      </div>
      <div class="notification-body">You have 2 messages in your inbox</div>
    </div>
  </div>
</div>


## Live demo

<button class="btn btn-primary" id="notificationDemo">Show</button>

```html!
<div class="notification" id="myNotification">
  <div class="notification-inner">
    <div class="notification-header">
      <h5 class="notification-title">Heads up!</h5>
      <button type="button" class="icon-close" data-dismiss="notification" aria-label="Close">
        <span class="icon" aria-hidden="true"></span>
      </button>
    </div>
    <div class="notification-body">You have 2 messages in your inbox</div>
  </div>
</div>
```

## Colors

<div class="notification notification-primary" style="visibility:visible;opacity:1;top:0;left:auto;bottom:auto;position:relative">
  <div class="notification-inner">
    <div class="notification-header">
      <h5 class="notification-title">Heads up!</h5>
      <button type="button" class="icon-close" data-dismiss="notification" aria-label="Close">
        <span class="icon" aria-hidden="true"></span>
      </button>
    </div>
    <div class="notification-body">
      You have 2 messages in your inbox
    </div>
  </div>
</div>

<div class="notification notification-secondary" style="visibility:visible;opacity:1;top:0;left:auto;bottom:auto;position:relative">
  <div class="notification-inner">
    <div class="notification-header">
      <h5 class="notification-title">Heads up!</h5>
      <button type="button" class="icon-close" data-dismiss="notification" aria-label="Close">
        <span class="icon" aria-hidden="true"></span>
      </button>
    </div>
    <div class="notification-body">
      You have 2 messages in your inbox
    </div>
  </div>
</div>

<div class="notification notification-success" style="visibility:visible;opacity:1;top:0;left:auto;bottom:auto;position:relative">
  <div class="notification-inner">
    <div class="notification-header">
      <h5 class="notification-title">Heads up!</h5>
      <button type="button" class="icon-close" data-dismiss="notification" aria-label="Close">
        <span class="icon" aria-hidden="true"></span>
      </button>
    </div>
    <div class="notification-body">
      You have 2 messages in your inbox
    </div>
  </div>
</div>

<div class="notification notification-warning" style="visibility:visible;opacity:1;top:0;left:auto;bottom:auto;position:relative">
  <div class="notification-inner">
    <div class="notification-header">
      <h5 class="notification-title">Heads up!</h5>
      <button type="button" class="icon-close" data-dismiss="notification" aria-label="Close">
        <span class="icon" aria-hidden="true"></span>
      </button>
    </div>
    <div class="notification-body">
      You have 2 messages in your inbox
    </div>
  </div>
</div>


<div class="notification notification-danger" style="visibility:visible;opacity:1;top:0;left:auto;bottom:auto;position:relative">
  <div class="notification-inner">
    <div class="notification-header">
      <h5 class="notification-title">Heads up!</h5>
      <button type="button" class="icon-close" data-dismiss="notification" aria-label="Close">
        <span class="icon" aria-hidden="true"></span>
      </button>
    </div>
    <div class="notification-body">
      You have 2 messages in your inbox
    </div>
  </div>
</div>

<div class="notification notification-light" style="visibility:visible;opacity:1;top:0;left:auto;bottom:auto;position:relative">
  <div class="notification-inner">
    <div class="notification-header">
      <h5 class="notification-title">Heads up!</h5>
      <button type="button" class="icon-close" data-dismiss="notification" aria-label="Close">
        <span class="icon" aria-hidden="true"></span>
      </button>
    </div>
    <div class="notification-body">
      You have 2 messages in your inbox
    </div>
  </div>
</div>


```html
<div class="notification notification-primary">
  <div class="notification-inner">
    <div class="notification-header">
      <h5 class="notification-title">Heads up!</h5>
      <button type="button" class="icon-close" data-dismiss="notification" aria-label="Close">
        <span class="icon" aria-hidden="true"></span>
      </button>
    </div>
    <div class="notification-body">You have 2 messages in your inbox</div>
  </div>
</div>

<div class="notification notification-secondary">
  <div class="notification-inner">
    <div class="notification-header">
      <h5 class="notification-title">Heads up!</h5>
      <button type="button" class="icon-close" data-dismiss="notification" aria-label="Close">
        <span class="icon" aria-hidden="true"></span>
      </button>
    </div>
    <div class="notification-body">You have 2 messages in your inbox</div>
  </div>
</div>

<div class="notification notification-success">
  <div class="notification-inner">
    <div class="notification-header">
      <h5 class="notification-title">Heads up!</h5>
      <button type="button" class="icon-close" data-dismiss="notification" aria-label="Close">
        <span class="icon" aria-hidden="true"></span>
      </button>
    </div>
    <div class="notification-body">You have 2 messages in your inbox</div>
  </div>
</div>

<div class="notification notification-danger">
  <div class="notification-inner">
    <div class="notification-header">
      <h5 class="notification-title">Heads up!</h5>
      <button type="button" class="icon-close" data-dismiss="notification" aria-label="Close">
        <span class="icon" aria-hidden="true"></span>
      </button>
    </div>
    <div class="notification-body">You have 2 messages in your inbox</div>
  </div>
</div>

<div class="notification notification-warning">
  <div class="notification-inner">
    <div class="notification-header">
      <h5 class="notification-title">Heads up!</h5>
      <button type="button" class="icon-close" data-dismiss="notification" aria-label="Close">
        <span class="icon" aria-hidden="true"></span>
      </button>
    </div>
    <div class="notification-body">You have 2 messages in your inbox</div>
  </div>
</div>

<div class="notification notification-info">
  <div class="notification-inner">
    <div class="notification-header">
      <h5 class="notification-title">Heads up!</h5>
      <button type="button" class="icon-close" data-dismiss="notification" aria-label="Close">
        <span class="icon" aria-hidden="true"></span>
      </button>
    </div>
    <div class="notification-body">You have 2 messages in your inbox</div>
  </div>
</div>

<div class="notification notification-light">
  <div class="notification-inner">
    <div class="notification-header">
      <h5 class="notification-title">Heads up!</h5>
      <button type="button" class="icon-close" data-dismiss="notification" aria-label="Close">
        <span class="icon" aria-hidden="true"></span>
      </button>
    </div>
    <div class="notification-body">You have 2 messages in your inbox</div>
  </div>
</div>

<div class="notification notification-dark">
  <div class="notification-inner">
      <div class="notification-header">
        <h5 class="notification-title">Heads up!</h5>
        <button type="button" class="close" data-dismiss="notification" aria-label="Close">
          <span class="close-icon" aria-hidden="true"></span>
        </button>
      </div>
    <div class="notification-body">You have 2 messages in your inbox</div>
  </div>
</div>
```

## Header only

Remove the node with class `.notification-body` to display a smaller notification.

<div class="notification notification-primary" style="visibility:visible;opacity:1;top:0;left:auto;bottom:auto;position:relative">
  <div class="notification-inner">
    <div class="notification-header">
      <h5 class="notification-title">Heads up!</h5>
      <button type="button" class="icon-close" data-dismiss="notification" aria-label="Close">
        <span class="icon" aria-hidden="true"></span>
      </button>
    </div>
  </div>
</div>

```html
<div class="notification notification-primary">
  <div class="notification-inner">
    <div class="notification-header">
      <h5 class="notification-title">Heads up!</h5>
      <button type="button" class="icon-close" data-dismiss="notification" aria-label="Close">
        <span class="icon" aria-hidden="true"></span>
      </button>
    </div>
  </div>
</div>
```

## Cookie consent notification

The below example defines a way of getting valid consent for your website.

<button class="btn btn-primary" id="buttonNotificationCookie">Try it</button>

```html
<div class="notification notification-dark" style="width: 500px;max-width: 80%;" id="notificationCookie">
  <div class="notification-inner">
    <div class="notification-header">
      <h5 class="notification-title">Heads up!</h5>
    </div>
    <div class="notification-body">
      <div class="float-right">
        <button class="btn btn-primary btn-sm" type="button" data-dismiss="notification">Save</button>
        <button class="btn btn-primary btn-sm" type="button" data-toggle="collapse" data-target="#collapseSettings">Edit settings</button>
      </div>
      <div class="mb-2">
        We use cookies to ensure that you get the best experience on our website.
        <a class="text-white text-underline d-block" href="#">Learn more here</a>
      </div>
      <div class="collapse" id="collapseSettings">
        <div class="custom-control custom-checkbox">
          <input type="checkbox" class="custom-control-input" id="c1" checked>
          <label class="custom-control-label" for="c1">Retention and access to information</label>
        </div>
        <div class="custom-control custom-checkbox">
          <input type="checkbox" class="custom-control-input" id="c2" checked>
          <label class="custom-control-label" for="c2">Personalization</label>
        </div>
      </div>
    </div>
  </div>
</div>
```


## JavaScript control

### Notification with markup

Use `element` to specify the target notification.

```js
import Notification from 'phonon/dist/js/components/notification';

const notif = new Notification({
  element: '#myNotification',
  message: 'Hello',
});

// ES5
const notif = phonon.notification({
  element: '#myNotification',
  message: 'Hello',
});
```

### Notification without markup

By not using the `element` property, it will create a notification's HTMLElement dynamically.
This is particularly useful if you want to set up a notification without worrying about its HTML code.


```js
import Notification from 'phonon/dist/js/components/notification';

const notif = new Notification({
  message: 'Hello',
});

// ES5
const notif = phonon.notification({
  message: 'Hello',
});
```

## Options

|     Name     |     Description      |     Default value      |
|----------------|----------------------|-------------------------|
|    message      |  The text placed inside the notification | '' |
|    button      | If it is set to true, it will show a close button. Otherwise, it will not display the button.  | true |
|    timeout      |  The display time before making the notification invisible.  | null |
|    directionX      |  The horizontal direction such as `left` or `right`.  | right |
|    directionY      |  The vertical direction such as `top` or `bottom`.  | top |
|    offsetX      |  The horizontal offset in pixel.  | 0 |
|    offsetY      |  The vertical offset in pixel.  | 0 |
|    background      |  The background color such as `primary`, `secondary`, `success`, `danger`, `warning`, `info`, `light` and `dark`.  | null |


## Methods

### show()

* returns: `<boolean>`

Any notification can be shown with JavaScript. For this, we call the `show()` method:

```js
notif.show();
```

### hide()

* returns: `<boolean>`

Any notification can be hidden with JavaScript, not only by clicking on its buttons. For this, we call the `hide()` method:

```js
notif.hide();
```

## Events

It may be useful to use the events that affect your notification.
For this, you can use object and DOM events.


|     Event Type     |     Description      |
|--------------------|----------------------|
|  show    |   This event fires immediately when the `show` instance method is called.   |
|  shown   |  This event is fired when the notification is completely visible to the user (will wait for CSS transitions to complete).    |
|  hide    |    This event is fired immediately when the `hide` instance method is called.   |
|  hidden  |   This event is fired when the notification is completely hidden (will wait for CSS transitions to complete).    |


### Object Events

```js
phonon.notification({
  element: '#myNotification',
  message: 'You have 2 messages in your inbox',
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
const notification = document.querySelector('.notification');

notification.addEventListener('show.ph.notification', () => {
  console.log('It works!');
});

notification.addEventListener('shown.ph.notification', () => {
  console.log('It works!');
});

notification.addEventListener('hide.ph.notification', () => {
  console.log('It works!');
});

notification.addEventListener('hidden.ph.notification', () => {
  console.log('It works!');
});
```

