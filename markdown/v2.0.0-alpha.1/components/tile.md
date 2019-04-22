# Tile

A tile is an object usually square or rectangular in shape.

<hr />

```html
<div class="tile p-5 tile-primary" style="width: 25%">
  <h4>Hello</h4>
</div>
<div class="tile p-5 tile-secondary" style="width: 25%">
  <h4>Hello</h4>
</div>
<div class="tile p-5 tile-light" style="width: 25%">
  <h4>Hello</h4>
</div>
```

## Ideas

```html
<div class="row">
  <div class="col-sm-6">
    <div class="tile p-4 tile-light text-left w-100">
      <h4>Hotline</h4>
      <hr align="left" class="emphasis w-lg h-sm mt-2" />
      <p>
        <a href="tel:0800-000-000">0800 000 000</a>
      </p>
      <p>
        Monday to Friday, 8am to 6pm<br />
        Max. USD 0.08/min
      </p>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="tile p-4 tile-light text-left w-100">
      <h4>Contact</h4>
      <hr align="left" class="emphasis w-lg h-sm mt-2" />
      <p>Questions or suggestions?</p>
      <p>
        <a href="#">Write to us</a>
      </p>
    </div>
  </div>
</div>
```

```html
<div class="bg-primary">
  <div class="container text-white p-4">
    <h1>Hello world</h1>
    <p class="text-justify">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
    <div class="tile mt-4 py-4 px-2 w-100 tile-light mx-auto d-block" style="max-width: 400px;">
      <h4>Join us!</h4>
      <div class="input-group">
        <input type="text" class="form-control" placeholder="Email address" aria-label="Email address" aria-describedby="basic-addon1">
        <div class="input-group-append">
          <button class="btn btn-primary" id="basic-addon1">Subscribe</button>
        </div>
      </div>
    </div>
  </div>
</div>
```
