/*
 * options = {
 *  color: "#eee"
 *  distance: 10
 *  info_box: null
 * }
 */

Object.extend = function(destination, source) {
  for (var property in source) {
    if (source.hasOwnProperty(property)) {
      destination[property] = source[property];
    }
  }
  return destination;
};

if (HTMLCanvasElement.prototype.show_grid == null) {
  HTMLCanvasElement.prototype.show_grid = function (options) {
    /*
     * Default grid options
     */
    var defaults = {
      color: "#eee",
      distance: 10
    };
    options = Object.extend(defaults, options);

    /*
     * Init data
     */

    // grid data
    var distance = options.distance;
    var color = options.color;
    var i = 0, j = 0;

    // canvas data
    var canvas = this;
    var canvas_height = canvas.height;
    var canvas_width = canvas.width;
    var context = canvas.getContext("2d");
    context.strokeStyle = options.color

    // mouse position data
    var boundaries = canvas.getBoundingClientRect();
    var x = 0, y = 0;
    var info_container_id = options.info_container_id;

    // draw grid
    for(i = 0; i < canvas_width; i += distance) {
      context.beginPath();
      context.moveTo(i + 0.5, 0);
      context.lineTo(i + 0.5, canvas_height);
      context.closePath();
      context.stroke();
    }

    for (j = 0; j <= canvas_height; j += distance ) {
      context.beginPath();
      context.moveTo(0, j + 0.5); 
      context.lineTo(canvas_width, j + 0.5);
      context.closePath();
      context.stroke();
    }

    // Show cursor coordinates
    if (info_container_id) {
      canvas.addEventListener("mousemove", function(e) {
        x = e.clientX - boundaries.left;
        y = e.clientY - boundaries.top;
        message = x + ", " + y;
        info_container = document.getElementById(info_container_id);
        info_container.innerHTML = message;
      });
    }
    
  }
}
