# Progress

A progress indicates the completion status of a task or of a process with a horizontal bar.

<hr />

```html
<div class="progress" id="myProgress" data-config="height: 8, now: 50">
  <div class="progress-bar" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
</div>
```

## Disable JavaScript

Use the attribute `data-no-boot` to disable JavaScript setup.

```html
<div class="progress" style="height: 12px" data-no-boot="true">
  <div class="progress-bar" role="progressbar" style="width: 40%" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
</div>
```

## Colors

```html
<div class="progress mb-2" data-no-boot="true">
  <div class="progress-bar bg-primary" role="progressbar" style="width: 40%" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress mb-2" data-no-boot="true">
  <div class="progress-bar bg-success" role="progressbar" style="width: 40%" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress mb-2" data-no-boot="true">
  <div class="progress-bar bg-warning" role="progressbar" style="width: 40%" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress mb-2" data-no-boot="true">
  <div class="progress-bar bg-danger" role="progressbar" style="width: 40%" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress" data-no-boot="true">
  <div class="progress-bar bg-dark" role="progressbar" style="width: 40%" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
</div>
```

## Label

```html
<div class="progress" data-no-boot="true">
  <div class="progress-bar" role="progressbar" style="width: 40%" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100">40%</div>
</div>
```

## Striped

```html
<div class="progress" data-no-boot="true">
  <div class="progress-bar progress-bar-striped" role="progressbar" style="width: 40%" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100">40%</div>
</div>
```

## Animated striped

```html
<div class="progress" data-no-boot="true">
  <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style="width: 40%" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100">40%</div>
</div>
```

## JavaScript

```js
// ES6
import Progress from 'phonon/dist/js/components/progress';

const progress = new Progress({
  element: '#myProgress',
  height: 5,
  min: 0,
  max: 100,
  label: false,
  striped: false,
  background: null,
});

// ES5
const progress = phonon.progress({
  element: '#myProgress',
  height: 5,
  min: 0,
  max: 100,
  label: false,
  striped: false,
  background: null,
});
```

### Options

|     Name     |     Description      |     Default value      |
|----------------|----------------------|-------------------------|
|    height      |  Height of the progress bar. | 8 |
|    min      |  Minimum value of the progress bar. | 0 |
|    max      |  Maximum value of the progress bar. | 100 |
|    now      |  Current value of the progress bar. | 0 |
|    label      |  Display of the current value of the progress bar. | false |
|    striped      |  Progress bar with the striped style. | false |
|    background      |  Background of the progress bar. | null |


### Methods

#### set(value)

* `value` (Number) - the value of the progress bar.
* returns: `<undefined>`

Updates the current value of the progress bar.

#### animateProgressBar(startAnimation)

* `startAnimation` (Boolean) - if `startAnimation` is set to true, it will start the stripe animation. Otherwise, it will stop the animation.
* returns: `<undefined>`

Animates the striped progress. The `striped` option must be set to true otherwise it won't work.

#### show()

* returns: `<boolean>`

Any progress can be shown with JavaScript. For this, we call the `show()` method:

```js
progress.show();
```

#### hide()

* returns: `<boolean>`

Any progress can be hidden with JavaScript. For this, we call the `hide()` method:

```js
progress.hide();
```

## Events

It may be useful to use the events that affect your progress.
For this, you can use object and DOM events.


|     Event Type     |     Description      |
|--------------------|----------------------|
|  show    |   This event fires immediately when the `show` instance method is called.   |
|  shown   |  This event is fired when the progress is completely visible to the user (will wait for CSS transitions to complete).    |
|  hide    |    This event is fired immediately when the `hide` instance method is called.   |
|  hidden  |   This event is fired when the progress is completely hidden (will wait for CSS transitions to complete).    |


### Object Events

```js
phonon.progress({
  element: '#exampleProgress',
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
document.querySelector('.progress').addEventListener('show.ph.progress', () => {
  console.log('It works!');
});

document.querySelector('.progress').addEventListener('shown.ph.progress', () => {
  console.log('It works!');
});

document.querySelector('.progress').addEventListener('hide.ph.progress', () => {
  console.log('It works!');
});

document.querySelector('.progress').addEventListener('hidden.ph.progress', () => {
  console.log('It works!');
});
```
