# Modal

A modal is a flexible window that is visible on top of the main window.

<hr />

<div style="position:relative;padding:45px;background-color: #bbb;">
  <div class="modal show" tabindex="-1" role="modal" style="position:static;width: 350px;">
    <div class="modal-inner" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Modal title</h5>
        <button type="button" class="icon-close" data-dismiss="modal" aria-label="Close">
          <span class="icon" aria-hidden="true"></span>
        </button>
        </div>
        <div class="modal-body">
          <p>Modal body text goes here.</p>
        </div>
        <div class="modal-footer">
          <div class="btn-group float-right" role="group" aria-label="Basic example">
            <button type="button" class="btn btn-primary" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="modal show modal-primary mt-4" tabindex="-1" role="modal" style="position:static;width: 350px;">
    <div class="modal-inner" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Modal title</h5>
        <button type="button" class="icon-close" data-dismiss="modal" aria-label="Close">
          <span class="icon" aria-hidden="true"></span>
        </button>
        </div>
        <div class="modal-body">
          <p>Modal body text goes here.</p>
        </div>
        <div class="modal-footer">
          <div class="btn-group float-right" role="group" aria-label="Basic example">
            <button type="button" class="btn btn-primary" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="modal show modal-danger mt-4" tabindex="-1" role="modal" style="position:static;width: 350px;">
    <div class="modal-inner" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Modal title</h5>
        <button type="button" class="icon-close" data-dismiss="modal" aria-label="Close">
          <span class="icon" aria-hidden="true"></span>
        </button>
        </div>
        <div class="modal-body">
          <p>Modal body text goes here.</p>
        </div>
        <div class="modal-footer">
          <div class="btn-group float-right" role="group" aria-label="Basic example">
            <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

## Live example

```html
<!-- Button trigger modal -->
<button class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">Launch demo modal</button>

<!-- Modal -->
<div class="modal" id="exampleModal" tabindex="-1" role="modal">
  <div class="modal-inner" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Modal title</h5>
        <button type="button" class="icon-close" data-dismiss="modal" aria-label="Close">
          <span class="icon" aria-hidden="true"></span>
        </button>
      </div>
      <div class="modal-body">
        <p>Modal body text goes here.</p>
      </div>
      <div class="modal-footer">
        <div class="btn-group float-right" role="group" aria-label="Basic example">
          <button type="button" class="btn btn-primary" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
</div>
```

## Top modal

By default, the modal is centered vertically and horizontally. If you want the modal to be placed at the top of the screen, set `center: false`.

```html
<!-- Button trigger modal -->
<button class="btn btn-primary" data-toggle="modal" data-target="#exampleTopModal">Launch demo top modal</button>

<!-- Modal -->
<div class="modal" id="exampleTopModal" data-config="center: false" tabindex="-1" role="modal">
  <div class="modal-inner" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Modal title</h5>
        <button type="button" class="icon-close" data-dismiss="modal" aria-label="Close">
          <span class="icon" aria-hidden="true"></span>
        </button>
      </div>
      <div class="modal-body">
        <p>Modal body text goes here.</p>
      </div>
      <div class="modal-footer">
        <div class="btn-group" role="group" aria-label="Basic example">
          <button type="button" class="btn btn-primary" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
</div>
```

## JavaScript control

### Modal with markup

Use `element` to specify the target modal.

```js
// ES6
import Modal from 'phonon/dist/js/components/modal';

const modal = new Modal({
  element: '#exampleModal',
});

// ES5
const modal = phonon.modal({
  element: '#exampleModal',
});
```

### Modal without markup

By not using the `element` property, it will create a modal's HTMLElement dynamically.
This is particularly useful if you want to set up a modal without worrying about its HTML code.

```js
// ES6
import Modal from 'phonon/dist/js/components/modal';

const modal = new Modal({
  title: 'Modal title',
  message: 'Modal body text goes here.',
});

// ES5
const modal = phonon.modal({
  title: 'Modal title',
  message: 'Modal body text goes here.',
});
```

### Prompt modal

```html
<!-- Button trigger modal -->
<button class="btn btn-primary" data-toggle="modal" data-target="#tryPromptModal">Launch prompt modal</button>

<!-- Modal -->
<div class="modal" tabindex="-1" role="modal" id="tryPromptModal">
  <div class="modal-inner" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Modal title</h5>
        <button type="button" class="icon-close" data-dismiss="modal" aria-label="Close">
          <span class="icon" aria-hidden="true"></span>
        </button>
      </div>
      <div class="modal-body">
        <p>Modal body text goes here.</p>
        <input class="form-control" type="text" value="" placeholder="Enter email address">
      </div>
      <div class="modal-footer">
        <div class="btn-group" role="group" aria-label="Basic example">
          <button type="button" class="btn btn-primary" data-dismiss="modal">OK</button>
        </div>
      </div>
    </div>
  </div>
</div>
```

```js
// ES6
import ModalPrompt from 'phonon/dist/js/components/modalprompt';

const prompt = new ModalPrompt({
  title: 'Prompt title',
  message: 'Prompt body text goes here.',
  inputValue: '', // default input value
});

// ES5
const prompt = phonon.prompt({
  title: 'Prompt title',
  message: 'Prompt body text goes here.',
  inputValue: '', // default input value
});

prompt.setInputValue() // only available with prompt objects
prompt.getInputValue() // only available with prompt objects
```

### Confirm modal

```html
<!-- Button trigger modal -->
<button class="btn btn-primary" data-toggle="modal" data-target="#tryConfirmModal">Launch confirm modal</button>

<!-- Modal -->
<div class="modal" tabindex="-1" role="modal" id="tryConfirmModal">
  <div class="modal-inner" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Modal title</h5>
        <button type="button" class="icon-close" data-dismiss="modal" aria-label="Close">
          <span class="icon" aria-hidden="true"></span>
        </button>
      </div>
      <div class="modal-body">
        <p>Modal body text goes here.</p>
      </div>
      <div class="modal-footer">
        <div class="btn-group" role="group" aria-label="Basic example">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
          <button type="button" class="btn btn-primary" data-dismiss="modal">OK</button>
        </div>
      </div>
    </div>
  </div>
</div>
```

```js
// ES6
import ModalConfirm from 'phonon/dist/js/components/modalconfirm';

const confirm = new ModalConfirm({
  title: 'Confirm title',
  message: 'Confirm body text goes here.',
});

// ES5
const confirm = phonon.confirm({
  title: 'Confirm title',
  message: 'Confirm body text goes here.',
});
```

### Loader modal

```html
<!-- Button trigger modal -->
<button class="btn btn-primary" data-toggle="modal" data-target="#tryLoaderModal">Launch loader modal</button>

<!-- Modal -->
<div class="modal" tabindex="-1" role="modal" id="tryLoaderModal">
  <div class="modal-inner" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Modal title</h5>
        <button type="button" class="icon-close" data-dismiss="modal" aria-label="Close">
          <span class="icon" aria-hidden="true"></span>
        </button>
      </div>
      <div class="modal-body">
        <p>Working...</p>
        <div class="mx-auto text-center">
          <div class="loader mx-auto d-block">
            <div class="loader-spinner loader-spinner-animated"></div>
          </div>
        </div>
      </div>
      <div class="modal-footer">
        <div class="btn-group" role="group" aria-label="Basic example">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
        </div>
      </div>
    </div>
  </div>
</div>
```

```js
// ES6
import ModalLoader from 'phonon/dist/js/components/modalloader';

const modalLoader = new ModalLoader({
  title: 'Loader title',
  message: 'Loader body text goes here.',
});

// ES5
const modalLoader = phonon.modalLoader({
  title: 'Loader title',
  message: 'Loader body text goes here.',
});
```

### Modal with custom buttons

Each modal type (normal, prompt, confirm and prompt) supports custom buttons.
Note that the event of the button **must be unique**.
The click event of a button will fire the associated callback automatically.


```js
const modal = phonon.modal({
  title: 'Modal title',
  message: 'Modal body text goes here.',
  buttons: [
    { event: 'cancel', text: 'Cancel', dismiss: true, class: 'btn btn-secondary' },
    { event: 'confirm', text: 'Ok', dismiss: true, class: 'btn btn-primary' },
  ],
  onCancel: () => { // or cancel
    console.log('Cancel')
  },
  onConfirm: () => { // or confirm
    console.log('Confirm')
  },
});
```

You can also define your own event names.
In the following example, we trigger the event called `neutralAnswer` when we click on the button.

```js
const modal = phonon.modal({
  title: 'Modal title',
  message: 'Modal body text goes here.',
  buttons: [
    { event: 'neutralAnswer', text: 'Custom button', dismiss: true, class: 'btn btn-primary' },
  ],
  neutralAnswer: () => { // or onNeutralAnswer
    console.log('Well we close it!')
  },
});
```

## Options

|     Name     |     Description      |     Default value      |
|----------------|----------------------|-------------------------|
|    title      |  The modal title. | null |
|    message      |  The modal message. | null |
|    cancelable      |  Determines if a modal is cancelable or not cancelable by pressing a key or by clicking outside of the modal. | true |
|    cancelableKeyCodes   |  Array of keys that allow to hide the modal. Default keys are escape and enter. | [27, 13] |
|    background      | The background color such as `primary`, `secondary`, `success`, `danger`, `warning`, `info`, `light` and `dark`. | null |
|    center      |  Center the modal vertically. Set false if you want to show at the top of the screen. | true |


## Methods

### show()

* returns: `<boolean>`

Any modal can be shown with JavaScript. For this, we call the `show()` method:

```js
modal.show();
```


### hide()

* returns: `<boolean>`

Any modal can be hidden with JavaScript, not only by clicking on its buttons. For this, we call the `hide()` method:

```js
modal.hide();
```

### getInputValue()

* returns: `String`

It is possible to retrieve the text field value of any prompt type.

```js
const value = modal.getInputValue();
```

### setInputValue(value)

* `value` (String) - the input value.

It is possible to set the text field value of any prompt type.

```js
modal.setInputValue('Hello World');
```

## Events

It may be useful to use the events that affect your modal.
For this, you can use object and DOM events.


|     Event Type     |     Description      |
|--------------------|----------------------|
|  show    |   This event fires immediately when the `show` instance method is called.   |
|  shown   |  This event is fired when the modal is completely visible to the user (will wait for CSS transitions to complete).    |
|  hide    |    This event is fired immediately when the `hide` instance method is called.   |
|  hidden  |   This event is fired when the modal is completely hidden (will wait for CSS transitions to complete).    |


### Object Events

```js
phonon.modal({
  title: 'Modal title',
  message: 'Modal body text goes here.',
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
document.querySelector('.modal').addEventListener('show.ph.modal', () => {
  console.log('It works!');
});

document.querySelector('.modal').addEventListener('shown.ph.modal', () => {
  console.log('It works!');
});

document.querySelector('.modal').addEventListener('hide.ph.modal', () => {
  console.log('It works!');
});

document.querySelector('.modal').addEventListener('hidden.ph.modal', () => {
  console.log('It works!');
});
```
