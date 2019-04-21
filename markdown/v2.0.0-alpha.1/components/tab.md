# Tab

A tab is made up of 2 elements. One is a clickable button and the other is the content.
It is used to show a fragment of content.

<hr />

```html
<ul class="tabs" id="myTab" role="tablist">
  <li class="tab-item active">
    <a class="tab-link" id="news-tab" data-toggle="tab" href="#news" role="tab" aria-controls="news" aria-selected="true">News</a>
  </li>
  <li class="tab-item">
    <a class="tab-link" id="settings-tab" data-toggle="tab" href="#settings" role="tab" aria-controls="settings" aria-selected="false">Settings</a>
  </li>
</ul>
<div class="tab-content" id="myTabContent">
  <div class="tab-pane fade show active" id="news" role="tabpanel" aria-labelledby="news-tab">News</div>
  <div class="tab-pane fade" id="settings" role="tabpanel" aria-labelledby="settings-tab">Settings</div>
</div>
```

## Horizontal alignment

### Left

Use the class `.tabs-left` to show the tabs in the left.

```html
<ul class="tabs tabs-left" id="myTab" role="tablist">
  <li class="tab-item active">
    <a class="tab-link" id="news-tab" data-toggle="tab" href="#news" role="tab" aria-controls="news" aria-selected="true">News</a>
  </li>
  <li class="tab-item">
    <a class="tab-link" id="settings-tab" data-toggle="tab" href="#settings" role="tab" aria-controls="settings" aria-selected="false">Settings</a>
  </li>
  <li class="tab-item tab-disabled">
    <a class="tab-link" id="disabled-tab" data-toggle="tab" href="#disabled" role="tab" aria-controls="disabled" aria-selected="false">Disabled</a>
  </li>
</ul>
```

### Center

Use the class `.tabs-center` to center tabs.

```html
<ul class="tabs tabs-center" id="myTab" role="tablist">
  <li class="tab-item active">
    <a class="tab-link" id="news-tab" data-toggle="tab" href="#news" role="tab" aria-controls="news" aria-selected="true">News</a>
  </li>
  <li class="tab-item">
    <a class="tab-link" id="settings-tab" data-toggle="tab" href="#settings" role="tab" aria-controls="settings" aria-selected="false">Settings</a>
  </li>
  <li class="tab-item tab-disabled">
    <a class="tab-link" id="disabled-tab" data-toggle="tab" href="#disabled" role="tab" aria-controls="disabled" aria-selected="false">Disabled</a>
  </li>
</ul>
```


### Right

Use the class `.tabs-right` to show the tabs in the right.

```html
<ul class="tabs tabs-right" id="myTab" role="tablist">
  <li class="tab-item active">
    <a class="tab-link" id="news-tab" data-toggle="tab" href="#news" role="tab" aria-controls="news" aria-selected="true">News</a>
  </li>
  <li class="tab-item">
    <a class="tab-link" id="settings-tab" data-toggle="tab" href="#settings" role="tab" aria-controls="settings" aria-selected="false">Settings</a>
  </li>
  <li class="tab-item tab-disabled">
    <a class="tab-link" id="disabled-tab" data-toggle="tab" href="#disabled" role="tab" aria-controls="disabled" aria-selected="false">Disabled</a>
  </li>
</ul>
```

## Vertical alignment

```html
<div class="d-flex">
  <ul class="tabs tabs-vertical tabs-left" style="width: 250px" id="myVerticalTab" role="tablist">
    <li class="tab-item active">
      <a class="tab-link" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Home</a>
    </li>
    <li class="tab-item">
      <a class="tab-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Profile</a>
    </li>
  </ul>
  <div class="tab-content bg-muted w-100 p-2" id="myVerticalTabContent">
    <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">Home content goes here.</div>
    <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">Profile content goes here.</div>
  </div>
</div>
```

## Fill available width

You have the choice between two modifiers. Use `.tabs-fill` if you want to use the available space according to the size of the tabs. Add `.tabs-justify` to distribute the same width for tabs.

```html
<!-- With tabs-fill -->
<ul class="tabs tabs-fill" id="myTab" role="tablist">
  <li class="tab-item active">
    <a class="tab-link" id="news-tab" data-toggle="tab" href="#news" role="tab" aria-controls="news" aria-selected="true">News</a>
  </li>
  <li class="tab-item">
    <a class="tab-link" id="settings-tab" data-toggle="tab" href="#settings" role="tab" aria-controls="settings" aria-selected="false">Longer tab called settings</a>
  </li>
  <li class="tab-item tab-disabled">
    <a class="tab-link" id="disabled-tab" data-toggle="tab" href="#disabled" role="tab" aria-controls="disabled" aria-selected="false">Disabled</a>
  </li>
</ul>

<!-- With tabs-justified -->
<ul class="tabs tabs-justified" id="myTab" role="tablist">
  <li class="tab-item active">
    <a class="tab-link" id="news-tab" data-toggle="tab" href="#news" role="tab" aria-controls="news" aria-selected="true">News</a>
  </li>
  <li class="tab-item">
    <a class="tab-link" id="settings-tab" data-toggle="tab" href="#settings" role="tab" aria-controls="settings" aria-selected="false">Longer tab called settings</a>
  </li>
  <li class="tab-item tab-disabled">
    <a class="tab-link" id="disabled-tab" data-toggle="tab" href="#disabled" role="tab" aria-controls="disabled" aria-selected="false">Disabled</a>
  </li>
</ul>
```

<!-- fix for links -->
<script>document.querySelector('.page .nav-tabs').addEventListener('click', function (event) { event.preventDefault()});</script>


## JavaScript

```js
// ES6
import Tab from 'phonon/dist/js/components/tab';

const tab = new Tab({
  element: '#settings-tab',
});

// ES5
const tab = phonon.tab({
  element: '#settings-tab',
});
```

### Methods

#### show()

* returns: `<boolean>`

Any tab can be shown with JavaScript. For this, we call the `show()` method:

```js
tab.show();
```

#### hide()

* returns: `<boolean>`

Any tab can be hidden with JavaScript. For this, we call the `hide()` method:

```js
tab.hide();
```


## Events

It may be useful to use the events that affect your tab.
For this, you can use object and DOM events.


|     Event Type     |     Description      |
|--------------------|----------------------|
|  show    |   This event fires immediately when the `show` instance method is called.   |
|  shown   |  This event is fired when the tab is completely visible to the user (will wait for CSS transitions to complete).    |
|  hide    |    This event is fired immediately when the `hide` instance method is called.   |
|  hidden  |   This event is fired when the tab is completely hidden (will wait for CSS transitions to complete).    |


### Object Events

```js
phonon.tab({
  element: '#tab',
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
document.querySelector('.tab').addEventListener('show.ph.tab', () => {
  console.log('It works!');
});

document.querySelector('.tab').addEventListener('shown.ph.tab', () => {
  console.log('It works!');
});

document.querySelector('.tab').addEventListener('hide.ph.tab', () => {
  console.log('It works!');
});

document.querySelector('.tab').addEventListener('hidden.ph.tab', () => {
  console.log('It works!');
});
```
