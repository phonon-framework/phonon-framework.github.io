<template>
  <div
    id="exampleOffCanvas"
    class="offcanvas offcanvas-right"
    role="navigation"
    aria-hidden="true"
    data-config="container: '#docPage'"
    aria-labelledby="exampleOffCanvasTitle"
  >
    <div class="offcanvas-inner">
      <div class="offcanvas-content">
        <div class="offcanvas-header">
          <h1 class="offcanvas-title">
            Title
          </h1>
          <button
            type="button"
            class="icon-close d-none d-md-block"
            data-dismiss="offcanvas"
            aria-label="Close"
          >
            <span
              class="icon"
              aria-hidden="true"
            />
          </button>
        </div>
        <div class="offcanvas-body">
          <p>Content</p>
        </div>
        <div class="offcanvas-footer">
          <p>Footer</p>
        </div>
      </div>
    </div>
  </div>
</template>
