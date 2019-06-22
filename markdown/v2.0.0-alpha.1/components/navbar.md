# Navbar

Navbar is a responsive navigation containing links.

<hr />

## Title

```html
<!-- As a link -->
<nav class="navbar navbar-light">
  <a class="navbar-title" href="#">Navbar</a>
</nav>

<!-- As a heading -->
<nav class="navbar navbar-light">
  <span class="navbar-title mb-0 h1">Navbar</span>
</nav>
```

```html
<!-- Just an image -->
<nav class="navbar navbar-light">
  <a class="navbar-title" href="#">
    <img src="https://phonon-framework.github.io/icon.svg" width="30" height="30" alt="">
  </a>
</nav>
```

```html
<!-- Image and text -->
<nav class="navbar navbar-light">
  <a class="navbar-title" href="#">
    <img src="https://phonon-framework.github.io/icon.svg" width="30" height="30" class="d-inline-block align-top" alt="">
    Phonon
  </a>
</nav>
```

## Nav items

```html
<nav class="navbar navbar-light navbar-expand-lg">
  <div class="navbar-left">
    <a class="navbar-title" href="#">
      <img class="d-inline-block" src="https://phonon-framework.github.io/icon.svg" width="30" height="30" alt="">
      Phonon
    </a>

    <ul class="navbar-nav">
      <li class="nav-item active">
        <a href="#" class="nav-link">Home</a>
      </li>
      <li class="nav-item">
        <a href="#" class="nav-link">Second</a>
      </li>
      <li class="nav-item">
        <a href="#" class="nav-link disabled">Disabled</a>
      </li>
    </ul>
  </div>
  <div class="navbar-right">
    <button class="navbar-toggle icon-hamburger" type="button" data-toggle="offcanvas" data-target="#exampleOffCanvas">
      <span class="icon" data-toggle="offcanvas" data-target="#exampleOffCanvas"></span>
    </button>
  </div>
</nav>
```


## Colors


```html
<nav class="navbar navbar-primary">
  <a class="navbar-title" href="#">Primary</a>
</nav>

<nav class="navbar navbar-secondary">
  <a class="navbar-title" href="#">Secondary</a>
</nav>

<nav class="navbar navbar-danger">
  <a class="navbar-title" href="#">Danger</a>
</nav>

<nav class="navbar navbar-warning">
  <a class="navbar-title" href="#">Warning</a>
</nav>

<nav class="navbar navbar-success">
  <a class="navbar-title" href="#">Success</a>
</nav>

<nav class="navbar navbar-light">
  <a class="navbar-title" href="#">Light</a>
</nav>

```


## Horizontal alignment

`.navbar-left` and `.navbar-right` allow you to choose the horizontal alignment.

```html
<nav class="navbar navbar-primary navbar-expand-lg sticky-top">
  <div class="navbar-left">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a href="#" class="nav-link">Home</a>
      </li>
      <li class="nav-item">
        <a href="#" class="nav-link">Second</a>
      </li>
      <li class="nav-item">
        <a href="#" class="nav-link disabled">Disabled</a>
      </li>
    </ul>
  </div>

  <div class="navbar-right">
    <button class="btn btn-primary">Subscribe</button>
  </div>
</nav>
```

## Container

Include a parent `.container` to set a maximum width.

```html
<nav class="navbar navbar-primary navbar-expand-lg sticky-top">
  <div class="container">
    <div class="navbar-left">
      <ul class="navbar-nav">
        <li class="nav-item active">
          <a href="#" class="nav-link">Home</a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link">Second</a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link disabled">Disabled</a>
        </li>
      </ul>
    </div>

    <div class="navbar-right">
      <button class="btn btn-primary">Subscribe</button>
    </div>
  </div>
</nav>
```


## Position

<nav class="navbar navbar-light">
  <a class="navbar-title" href="#">Default</a>
</nav>

<nav class="navbar fixed-top navbar-light" style="position:relative">
  <a class="navbar-title" href="#">Fixed top</a>
</nav>

<nav class="navbar fixed-bottom navbar-light" style="position:relative">
  <a class="navbar-title" href="#">Fixed bottom</a>
</nav>

<nav class="navbar sticky-top navbar-light" style="position:relative">
  <a class="navbar-title" href="#">Sticky top</a>
</nav>

```html!
<nav class="navbar navbar-light">
  <a class="navbar-title" href="#">Default</a>
</nav>

<nav class="navbar fixed-top navbar-light">
  <a class="navbar-title" href="#">Fixed top</a>
</nav>

<nav class="navbar fixed-bottom navbar-light">
  <a class="navbar-title" href="#">Fixed bottom</a>
</nav>

<nav class="navbar sticky-top navbar-light">
  <a class="navbar-title" href="#">Sticky top</a>
</nav>
```
