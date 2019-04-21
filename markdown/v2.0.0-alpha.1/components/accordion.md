# Accordion

An accordion is a component that displays one of the collapsible elements in a limited amout of space.

<hr />

<div class="alert alert-border border-left-primary" role="alert">
  You can use links and buttons to toggle the collapsible elements.
</div>


## Example

```html
<div class="accordion" id="exampleAccordion1" role="tablist">
  <a class="accordion-title" data-toggle="accordion" href="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
    Collapsible Group Item #1
    <button class="collapse-toggle icon-plus" type="button">
      <span class="icon"></span>
    </button>
  </a>

  <div id="collapseOne" class="collapse" role="tabpanel" aria-labelledby="headingOne">
    <div class="card-body">
      This is the content of the group item #1.
    </div>
  </div>

  <a class="accordion-title" data-toggle="accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseOne">
    Collapsible Group Item #2
    <button class="collapse-toggle icon-plus" type="button">
      <span class="icon"></span>
    </button>
  </a>

  <div id="collapseTwo" class="collapse" role="tabpane2" aria-labelledby="headingTwo">
    <div class="card-body">
      This is the content of the group item #2.
    </div>
  </div>
</div>
```

## JavaScript

```js
// ES6
import Accordion from 'phonon/dist/js/components/accordion';

const accordion = new Accordion({
  element: '#exampleAccordion',
});

// ES5
const accordion = phonon.accordion({
  element: '#exampleAccordion',
});
```

### Methods

#### show(collapse)

* `collapse` `<HTMLElement>|<string>` - if `collapse` is a String, it is interpreted as a selector. Otherwise, it is expected that it is a HTML element.
* returns: `<boolean>`

```js
accordion.show('#collapseTwo');
```

#### hide(collapse)

* `collapse` `<HTMLElement>|<string>` - if `collapse` is a String, it is interpreted as a selector. Otherwise, it is expected that it is a HTML element.
* returns: `<boolean>`

```js
accordion.hide('#collapseTwo');
```

## Events

The accordion component has events related to the collapse elements.
See events of [collapse](/docs/components/collapse) component.

<!-- fix for links -->
<script>document.querySelector('.page #exampleAccordion').addEventListener('click', function (event) { event.preventDefault()});</script>
