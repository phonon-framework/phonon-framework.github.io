# Selectbox

A selectbox is an element to choose a value in a list of selection items.

<hr />

```html
<div class="selectbox" data-config="name: 'select-item'" role="button" tabindex="0" data-toggle="selectbox">
  <div class="selectbox-input-container">
    <div class="selectbox-item-selection"></div>
    <input class="input-select-one" placeholder="Select..." autocomplete="off" tabindex="-1">
    <i class="selectbox-icon"></i>
  </div>
  <div class="selectbox-menu">
    <div class="selectbox-menu-item" data-value="item-1">Item 1</div>
    <div class="selectbox-menu-item" data-value="item-2">Item 2</div>
    <div class="selectbox-menu-item" data-value="item-3">
      <span class="description">Best one!</span>
      <span class="text">Item 3</span>
    </div>
  </div>
</div>
```

### Behavior

Selectboxes will keep the selected value(s) by updating a hidden input. It will create it if the markup is not existing.

<div class="alert alert-border border-left-primary" role="alert">
  We recommend to pass the selectbox name by using the "data-config" HTML attribute like the following:
</div>

```html!
<div class="selectbox" data-config="name: 'select-items'" ...
```

<hr />

If multiple selection is enabled, then the hidden input's name will be transformed to `"name"[]` like the following:

```html!
<input type="hidden" name="select-items[]" value="item-1">
<input type="hidden" name="select-items[]" value="item-2">
```

This helps to loop through the array of items with the given name on the server side.
The following example is written in PHP:

```php
$_POST['name'][0] === 'item-1';
$_POST['name'][1] === 'item-2';
```

### Single selection

By default, the selectbox allows to select one single item.

```html
<div class="selectbox" data-config="name: 'select-item'" role="button" tabindex="0" data-toggle="selectbox">
  <div class="selectbox-input-container">
    <div class="selectbox-item-selection"></div>
    <input class="input-select-one" placeholder="Select..." autocomplete="off" tabindex="-1">
    <i class="selectbox-icon"></i>
  </div>
  <div class="selectbox-menu">
    <div class="selectbox-menu-item" data-value="item-1">Item 1</div>
    <div class="selectbox-menu-item" data-value="item-2">Item 2</div>
    <div class="selectbox-menu-item" data-value="item-3">Item 3</div>
  </div>
</div>
```

### Multiple selection

When present, it specifies that multiple options can be selected.

```html
<div class="selectbox" data-config="name: 'select-items', multiple: true, tag: true" style="width:250px" role="button" tabindex="0" data-toggle="selectbox">
  <div class="selectbox-input-container">
    <div class="selectbox-item-selection"></div>
    <input class="input-select-one" placeholder="Select..." autocomplete="off" tabindex="-1">
    <i class="selectbox-icon"></i>
  </div>
  <div class="selectbox-menu">
    <div class="selectbox-menu-item" data-value="item-1" data-selected="true">Item 1</div>
    <div class="selectbox-menu-item" data-value="item-2">Item 2</div>
    <div class="selectbox-menu-item" data-value="item-3">Item 3</div>
  </div>
</div>
```

### Default value

Use the attribute `[data-selected]` to select the current value.

```html
<div class="selectbox" role="button" data-config="name: 'select-item'" tabindex="0" data-toggle="selectbox">
  <div class="selectbox-input-container">
    <div class="selectbox-item-selection"></div>
    <input class="input-select-one" placeholder="Select..." autocomplete="off" tabindex="-1">
    <i class="selectbox-icon"></i>
  </div>
  <div class="selectbox-menu">
    <div class="selectbox-menu-item" data-value="item-1" data-selected="true">Item 1</div>
    <div class="selectbox-menu-item" data-value="item-2">Item 2</div>
    <div class="selectbox-menu-item" data-value="item-3">Item 3</div>
  </div>
</div>
```

### Invalid item

Append `.disabled` to `.selectbox-menu-item`.

```html
<div class="selectbox" data-config="name: 'select-item'" role="button" tabindex="0" data-toggle="selectbox">
  <div class="selectbox-input-container">
    <div class="selectbox-item-selection"></div>
    <input class="input-select-one" placeholder="Select..." autocomplete="off" tabindex="-1">
    <i class="selectbox-icon"></i>
  </div>
  <div class="selectbox-menu">
    <div class="selectbox-menu-item" data-value="item-1" data-selected="true">Item 1</div>
    <div class="selectbox-menu-item" data-value="item-2">Item 2</div>
    <div class="selectbox-menu-item disabled" data-value="item-3">Invalid item 3</div>
  </div>
</div>
```

### Header

```html
<div class="selectbox" data-config="name: 'select-item'" role="button" tabindex="0" data-toggle="selectbox">
  <div class="selectbox-input-container">
    <div class="selectbox-item-selection"></div>
    <input class="input-select-one" placeholder="Select..." autocomplete="off" tabindex="-1">
    <i class="selectbox-icon"></i>
  </div>
  <div class="selectbox-menu">
    <div class="header">Header</div>
    <div class="selectbox-menu-item" data-value="item-1" data-selected=true>Item 1</div>
    <div class="selectbox-menu-item" data-value="item-2">Item 2</div>
  </div>
</div>
```

### Divider

```html
<div class="selectbox" data-config="name: 'select-item'" role="button" tabindex="0" data-toggle="selectbox">
  <div class="selectbox-input-container">
    <div class="selectbox-item-selection"></div>
    <input class="input-select-one" placeholder="Select..." autocomplete="off" tabindex="-1">
    <i class="selectbox-icon"></i>
  </div>
  <div class="selectbox-menu">
    <div class="selectbox-menu-item" data-value="item-1" data-selected=true>Item 1</div>
    <div class="selectbox-menu-item" data-value="item-2">Item 2</div>
    <div class="divider"></div>
    <div class="selectbox-menu-item" data-value="item-3">Item 3</div>
    <div class="selectbox-menu-item" data-value="item-4">Item 4</div>
  </div>
</div>
```

### Items with description

```html
<div class="selectbox" data-config="name: 'select-item'" role="button" tabindex="0" data-toggle="selectbox">
  <div class="selectbox-input-container">
    <div class="selectbox-item-selection"></div>
    <input class="input-select-one" placeholder="Select..." autocomplete="off" tabindex="-1">
    <i class="selectbox-icon"></i>
  </div>
  <div class="selectbox-menu">
    <div class="selectbox-menu-item" data-value="item-1">
      <span class="description">Good one</span>
      <span class="text">Item 1</span>
    </div>
    <div class="selectbox-menu-item" data-value="item-2">
      <span class="description">Best one!</span>
      <span class="text">Item 2</span>
    </div>
    <div class="selectbox-menu-item" data-value="item-3">
      <span class="description">Not recommended</span>
      <span class="text">Item 3</span>
    </div>
  </div>
</div>
```

### Sizing

```html
<!-- Large -->
<div class="selectbox selectbox-lg" data-config="name: 'select-item'" role="button" tabindex="0" data-toggle="selectbox">
  <div class="selectbox-input-container">
    <div class="selectbox-item-selection"></div>
    <input class="input-select-one" placeholder="Large..." autocomplete="off" tabindex="-1">
    <i class="selectbox-icon"></i>
  </div>
  <div class="selectbox-menu">
    <div class="selectbox-menu-item" data-value="item-1">Item 1</div>
    <div class="selectbox-menu-item" data-value="item-2">Item 2</div>
    <div class="selectbox-menu-item" data-value="item-3">Item 3</div>
  </div>
</div>

<!-- Default -->
<div class="selectbox" data-config="name: 'select-item'" role="button" tabindex="0" data-toggle="selectbox">
  <div class="selectbox-input-container">
    <div class="selectbox-item-selection"></div>
    <input class="input-select-one" placeholder="Default..." autocomplete="off" tabindex="-1">
    <i class="selectbox-icon"></i>
  </div>
  <div class="selectbox-menu">
    <div class="selectbox-menu-item" data-value="item-1">Item 1</div>
    <div class="selectbox-menu-item" data-value="item-2">Item 2</div>
    <div class="selectbox-menu-item" data-value="item-3">Item 3</div>
  </div>
</div>

<!-- Small -->
<div class="selectbox selectbox-sm" data-config="name: 'select-item'" role="button" tabindex="0" data-toggle="selectbox">
  <div class="selectbox-input-container">
    <div class="selectbox-item-selection"></div>
    <input class="input-select-one" placeholder="Small..." autocomplete="off" tabindex="-1">
    <i class="selectbox-icon"></i>
  </div>
  <div class="selectbox-menu">
    <div class="selectbox-menu-item" data-value="item-1">Item 1</div>
    <div class="selectbox-menu-item" data-value="item-2">Item 2</div>
    <div class="selectbox-menu-item" data-value="item-3">Item 3</div>
  </div>
</div>
```

## JavaScript

```js
// ES6
import Selectbox from 'phonon/dist/js/components/selectbox';

const selectbox = new Selectbox({
  element: '.selectbox',
});

// ES5
const selectbox = phonon.selectbox({
  element: '.selectbox',
});
```

### Options

|     Name     |     Description      |     Default value      |
|----------------|----------------------|-------------------------|
|    selectable      |  Shows and updates the selected value. | true |
|    filterItems      |  Customer filter function `filterItems(search, item)`. If you use a custom handler, the function must return `true` if the item should be visible to the user or `false` otherwise. | null |
|    multiple      |  Enable multiple selection. | false |
|    tag      |  Shows selected items with the tag style | false |

<br />

The default implementation of `filterItems` is the following:

```js
function filterItems(search = '', item = {}) {
  return item.value.indexOf(search) > -1 || item.text.indexOf(search) > -1;
}
```

Where:

* `search` (String) - input value of the selectbox.
* `item` (Object{text, value}) - the item to filter. Text is displayed in the selectbox and value is the hidden value.

### Methods

#### getSelected()

* returns: `String`

Returns the selected value.

#### setSelected(value, text)

* `value` - the selected value.
* `text` - the text to display for the given `value`.
* returns: `<undefined>`

Set the current value.

```js
selectbox.setSelected('green');
```

it is possible to display a custom text with the second parameter.

```js
selectbox.setSelected('green', 'Current text');
```

#### show()

* returns: `<boolean>`

Any selectbox can be shown with JavaScript. For this, we call the `show()` method:

```js
selectbox.show();
```

#### hide()

* returns: `<boolean>`

Any selectbox can be hidden with JavaScript. For this, we call the `hide()` method:

```js
selectbox.hide();
```

#### toggle()

* returns: `<boolean>`

Any selectbox can be toggled with JavaScript. For this, we call the `toggle()` method:

```js
selectbox.toggle();
```

## Events

It may be useful to use the events that affect your selectbox.
For this, you can use object and DOM events.

|     Event Type     |     Description      |
|--------------------|----------------------|
|  show    |   This event fires immediately when the `show` instance method is called.   |
|  shown   |  This event is fired when the selectbox is completely visible to the user (will wait for CSS transitions to complete).    |
|  hide    |    This event is fired immediately when the `hide` instance method is called.   |
|  hidden  |   This event is fired when the selectbox is completely hidden (will wait for CSS transitions to complete). |

### Object Events

```js
phonon.selectbox({
  element: '.selectbox',
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
  itemSelected(selected) { // or onItemSelected
    console.log('It works!');
    console.log(selected.item);
    console.log(selected.text);
    console.log(selected.value);
  },
});
```

### DOM Events

```js
document.querySelector('.selectbox').addEventListener('show.ph.selectbox', () => {
  console.log('It works!');
});

document.querySelector('.selectbox').addEventListener('shown.ph.selectbox', () => {
  console.log('It works!');
});

document.querySelector('.selectbox').addEventListener('hide.ph.selectbox', () => {
  console.log('It works!');
});

document.querySelector('.selectbox').addEventListener('hidden.ph.selectbox', () => {
  console.log('It works!');
});
```
