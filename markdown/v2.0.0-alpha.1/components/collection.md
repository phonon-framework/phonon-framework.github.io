# Collection

Collections allow you to group list items.

<hr />

```html
<div class="collection">
  <div class="collection-header">
    <h3 class="collection-title">
      Header
    </h3>
  </div>
  <div class="collection-body">
    Body
  </div>
  <div class="collection-footer">
    Footer
  </div>
</div>
```

## Rows

Use `.collection-row` if you want to apply a lighter border bottom between rows.

```html
<div class="collection">
  <div class="collection-row">
    collection row
  </div>
  <div class="collection-row">
    collection row
  </div>
  <div class="collection-row">
    collection row
  </div>
  <div class="collection-row">
    collection row
  </div>
</div>
```

## Lists

```html
<div class="collection">
  <div class="collection-header">
    <h3 class="collection-title">
      Collection with ul list
    </h3>
  </div>
  <ul>
    <li class="collection-row">
      collection row 1
    </li>
    <li class="collection-row">
      collection row 2
    </li>
    <li class="collection-row">
      collection row 3
    </li>
  </ul>
</div>
```

## Colors

### Headers

Append `.collection-primary` to header.

```html
<div class="collection">
  <div class="collection-header collection-primary">
    <h3 class="collection-title">
      Collection title
    </h3>
  </div>
  <div class="collection-body">
    Collection body
  </div>
</div>

<div class="collection">
  <div class="collection-header collection-success">
    <h3 class="collection-title">
      Collection title
    </h3>
  </div>
  <div class="collection-body">
    Collection body
  </div>
</div>

<div class="collection">
  <div class="collection-header collection-danger">
    <h3 class="collection-title">
      Collection title
    </h3>
  </div>
  <div class="collection-body">
    Collection body
  </div>
</div>

<div class="collection">
  <div class="collection-header collection-warning">
    <h3 class="collection-title">
      Collection title
    </h3>
  </div>
  <div class="collection-body">
    Collection body
  </div>
</div>
```

### Background states

Append `.collection-primary` to body or footer.

```html
<div class="collection">
  <div class="collection-row collection-primary">
    Row 1
  </div>
  <div class="collection-row collection-success">
    Row 2
  </div>
  <div class="collection-row collection-danger">
    Row 3
  </div>
  <div class="collection-row collection-warning">
    Row 4
  </div>
</div>
```

## Border states

```html
<div class="collection collection-border-primary">
  <div class="collection-header">
    <h3 class="collection-title">
      Title
    </h3>
  </div>
  <div class="collection-body">
    Body
  </div>
  <div class="collection-footer">
    Footer
  </div>
</div>

<div class="collection collection-border-success">
  <div class="collection-header">
    <h3 class="collection-title">
      Title
    </h3>
  </div>
  <div class="collection-body">
    Body
  </div>
  <div class="collection-footer">
    Footer
  </div>
</div>

<div class="collection collection-border-danger">
  <div class="collection-header">
    <h3 class="collection-title">
      Title
    </h3>
  </div>
  <div class="collection-body">
    Body
  </div>
  <div class="collection-footer">
    Footer
  </div>
</div>

<div class="collection collection-border-warning">
  <div class="collection-header">
    <h3 class="collection-title">
      Title
    </h3>
  </div>
  <div class="collection-body">
    Body
  </div>
  <div class="collection-footer">
    Footer
  </div>
</div>
```

## Emphasis rows

Use `.collection-emphasis` to emphasis a row.

```html
<div class="collection">
  <div class="collection-header">
    <h3 class="collection-title">
      Title
    </h3>
  </div>
  <div class="collection-body collection-emphasis">
    Look at me!
  </div>
  <div class="collection-body">
    Body
  </div>
  <div class="collection-footer">
    Footer
  </div>
</div>
```

## Actionable collections

```html
<div class="collection">
  <div class="collection-header d-flex align-items-center">
    <h3 class="collection-title overflow-hidden flex-fill">
      Title
    </h3>
    <button class="btn btn-primary btn-sm">
      Button
    </button>
  </div>
  <div class="collection-body">
    Body
  </div>
  <div class="collection-footer">
    Footer
  </div>
</div>
```

## Clickable rows

```html
<div class="collection">
  <div class="collection-row collection-clickable">
    <a href="#" class="collection-clickable-link">
      I am a clickable row
    </a>
  </div>
  <div class="collection-row">
    I am not a clickable row
  </div>
</div>
```

## Sub-collections

```html
<div class="collection">
  <div class="collection-header">
    <h3 class="collection-title">
      No links
    </h3>
  </div>
  <div class="collection-row">
    Item 1
    <div class="collection">
      <div class="collection-row">Sub-item 1.1</div>
      <div class="collection-row">Sub-item 1.2</div>
      <div class="collection-row">Sub-item 1.3</div>
    </div>
  </div>
  <div class="collection-row">
    Item 2
    <div class="collection">
      <div class="collection-row">Sub-item 2.1</div>
      <div class="collection-row">Sub-item 2.2</div>
    </div>
  </div>
</div>

<div class="collection">
  <div class="collection-header">
    <h3 class="collection-title">
      With links
    </h3>
  </div>
  <div class="collection-row collection-clickable">
    <a href="#" class="collection-clickable-link">
      Item 1
    </a>
    <div class="collection">
      <div class="collection-row collection-clickable">
        <a href="#" class="collection-clickable-link">
          Sub-item 1.1
        </a>
      </div>
      <div class="collection-row collection-clickable">
        <a href="#" class="collection-clickable-link">
          Sub-item 1.2
        </a>
      </div>
      <div class="collection-row collection-clickable">
        <a href="#" class="collection-clickable-link">
          Sub-item 1.3
        </a>
      </div>
    </div>
  </div>
  <div class="collection-row collection-clickable">
    <a href="#" class="collection-clickable-link">
      Item 2
    </a>
    <div class="collection">
      <div class="collection-row collection-clickable">
        <a href="#" class="collection-clickable-link">
          Sub-item 2.1
        </a>
      </div>
      <div class="collection-row collection-clickable">
        <a href="#" class="collection-clickable-link">
          Sub-item 2.2
        </a>
      </div>
    </div>
  </div>
</div>
```

## Sizing

```html
<!-- Large -->
<div class="collection collection-lg">
  <div class="collection-row">
    Large row 1
  </div>
  <div class="collection-row">
    Large row 2
  </div>
  <div class="collection-row">
    Large row 3
  </div>
</div>

<!-- Small -->
<div class="collection collection-sm">
  <div class="collection-row">
    Small row 1
  </div>
  <div class="collection-row">
    Small row 2
  </div>
  <div class="collection-row">
    Small row 3
  </div>
</div>
```
