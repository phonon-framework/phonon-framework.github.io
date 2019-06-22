<div class="alert alert-warning" role="alert">
  Do you want to read the documentation for Phonon v1?<br />
  <a class="alert-link" target="_blank" href="https://phonon.quarkdev.com/docs/">
    Go to the v1 documentation
    <fa icon="chevron-right" />
  </a>
</div>

# Quick start

Phonon builds are located in the `dist/` directory.
They provide convenient solutions that can be installed with no effort and that satisfy the most common editing use cases.

Please, read more about [custom builds](#0_getting-started/1_custom-build) if you would like to optimize the size of Phonon by importing required components only.

## Installation

You have the following options to install Phonon v2:

- Install with [npm](https://www.npmjs.com/package/phonon) `npm install phonon@2.0.0-alpha.1`
- Install with [Yarn](https://yarnpkg.com/en/package/phonon) `yarn add phonon@2.0.0-alpha.1`
- Deliver CDN cached version of Phonon compiled [CSS](https://unpkg.com/phonon@2.0.0-alpha.1/dist/css/) and [JavaScript](https://unpkg.com/phonon@2.0.0-alpha.1/dist/js/) to your project by using [UNPKG](https://unpkg.com/phonon@2.0.0-alpha.1/)
- Clone the repository to get all source files and compile Phonon by using the scripts: `git clone https://github.com/phonon-framework/phonon.git`
- Download the [latest release](https://github.com/phonon-framework/phonon/releases) and use compiled CSS and JavaScript files available in the dist folder

## Starter Template

```html!
<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Phonon CSS -->
    <link rel="stylesheet" href="https://unpkg.com/phonon@2.0.0-alpha.1/dist/css/phonon.min.css" integrity="sha384-YvRRhxrEwrswiEGUXRvWsOw0trb5T3Mg0OupNZ48rCk6Ri3+q6DSWlYpEyr24vSK" crossorigin="anonymous">

    <title>Hello, world!</title>
  </head>
  <body>
    <h1>Hello, world!</h1>

    <!-- Optional JavaScript -->
    <script src="https://unpkg.com/phonon@2.0.0-alpha.1/dist/js/phonon.min.js" integrity="sha384-m1wkisBdQfeP10FJfmEFUHZYSHzJEk3MroG9JfNrFjtxS8YirsDgkpwP5e1c631A" crossorigin="anonymous"></script>
  </body>
</html>
```
