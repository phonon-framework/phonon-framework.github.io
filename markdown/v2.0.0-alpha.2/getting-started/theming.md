# Theming

Phonon contains many variables that allow you to define a custom theme.
For this, let's create a file named `theme.scss` and import it before the Phonon SCSS file like following:

```scss
@import 'path/to/theme.scss'; // my theme
@import 'phonon/src/scss/phonon.scss';
```

Then, change the values. The list of available variables can be found [here](https://github.com/quark-dev/Phonon-Framework/blob/master/src/scss/_variables.scss).
As an example, you can define the new values for the main colors in `path/to/theme.scss`:

```scss
// path/to/theme.scss

// Colors
$dark:                       #000;
$light:                      #f6f8fa;
$primary:                    #3271d1;
$secondary:                  #666;
$success:                    #2ecc71;
$warning:                    #feca57;
$danger:                     #e74c3c;
$light:                      #f8f8f8;

// Navbar
$navbar-padding-y:           8px;
$navbar-padding-x:           15px;

// ...
```

Finally, if you want to generate the CSS output, run `node ./bin/build css` to apply your custom theme.
Make sure to adapt the path to the script such as `node ./node_modules/phonon/bin/build css` if you didn't install Phonon globally.
 
