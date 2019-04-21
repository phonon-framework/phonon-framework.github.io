# Collapse

A collapse is an element that toggles between showing and hiding.

<hr />

```html
<p>
  <a class="btn btn-primary" data-toggle="collapse" href="#exampleCollapse" aria-expanded="false" aria-controls="exampleCollapse">
    Link with href
  </a>
  <button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#exampleCollapse" aria-expanded="false" aria-controls="exampleCollapse">
    Button with data-target
  </button>
</p>

<div class="collapse" id="exampleCollapse">
  Collapse content.
</div>
```

## External content

```html
<div>
  <div class="collapse" id="navbarToggleExternalContent">
    <div class="bg-dark p-4">
      <h5 class="text-white h4">Collapsed content</h5>
      <span class="text-light">Toggleable via the navbar brand.</span>
    </div>
  </div>
  <nav class="navbar navbar-dark">
    <button class="navbar-toggle icon-hamburger" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-expanded="false" aria-controls="navbarToggleExternalContent" aria-label="Toggle navigation">
      <span class="icon" aria-hidden="true"></span>
    </button>
  </nav>
</div>
```

## Collapse and collection

```html
<div class="collection">
  <div class="collection-row collection-clickable">
    <a class="collection-clickable-link" data-toggle="collapse" href="#exampleCollapseCollection">
      Item 1
    </a>

    <div class="collapse" id="exampleCollapseCollection">
      <div class="collection">
        <div class="collection-row">Sub-item 1</div>
        <div class="collection-row">Sub-item 2</div>
        <div class="collection-row">Sub-item 3</div>
      </div>
    </div>
  </div>
</div>
```

## JavaScript

```js
const collapse = phonon.collapse({
  element: '#exampleCollapse',
});
```

### Options

|     Option     |     Description      |
|----------------|----------------------|
|    toggle      |  toggles immediately once the collapse is initialized. |


### Methods

#### show(collapse)

* `collapse` (Element | String) - if `collapse` is a String, it is interpreted as a selector. If it is an object, it is expected that the `collapse` exists.
* returns: `<boolean>`

```js
collapse.show();
```

#### hide(collapse)

* `collapse` (Element | String) - if `collapse` is a String, it is interpreted as a selector. If it is an object, it is expected that the `collapse` exists.
* returns: `<boolean>`

```js
collapse.hide();
```

#### toggle(collapse)

* `collapse` (Element | String) - if `collapse` is a String, it is interpreted as a selector. If it is an object, it is expected that the `collapse` exists.
* returns: `<boolean>`

```js
collapse.toggle();
```

## Events

It may be useful to use the events that affect your collapse.
For this, you can use object and DOM events.

|     Event Type     |     Description      |
|--------------------|----------------------|
|  show    |   This event fires immediately when the `show` instance method is called.   |
|  shown   |  This event is fired when the collapse is completely visible to the user (will wait for CSS transitions to complete).    |
|  hide    |    This event is fired immediately when the `hide` instance method is called.   |
|  hidden  |   This event is fired when the collapse is completely hidden (will wait for CSS transitions to complete).    |


### Object Events

```js
phonon.collapse({
  element: '#exampleCollapse',
  show: () => { // or onShow
    console.log('It works!')
  },
  shown: () => { // or onShown
    console.log('It works!')
  },
  hide: () => { // or onHide
    console.log('It works!')
  },
  hidden: () => { // or onHidden
    console.log('It works!')
  }
})
```

### DOM Events

```js
document.querySelector('.collapse').addEventListener('show.ph.collapse', () => {
  console.log('It works!')
})

document.querySelector('.collapse').addEventListener('shown.ph.collapse', () => {
  console.log('It works!')
})

document.querySelector('.collapse').addEventListener('hide.ph.collapse', () => {
  console.log('It works!')
})

document.querySelector('.collapse').addEventListener('hidden.ph.collapse', () => {
  console.log('It works!')
})
```

<!-- fix for links -->
<script>document.querySelector('.page [data-toggle="collapse"]').addEventListener('click', function (event) { event.preventDefault()});</script>
