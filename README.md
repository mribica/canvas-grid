# canvas-grid

Generate grid background for your canvas, optionally show cursor coordinates on mouse move.

# Usage

## Basic

~~~javascript
var canvas = document.getElementById('canvas');
canvas.show_grid();
~~~

## Customize

### Options

**color** (default #eee)
Color for grid lines.

**distance** (default 10)
Distance between grid lines.

**info_box_id** (default null)
Show cursor coordinates in element with provided id.

~~~javascript
var canvas = document.getElementById('canvas');
canvas.show_grid({
  color: "#333", // default: #eee
  distanace: 5,  // default 10px
  info_box_id: "info_box"
});
~~~
