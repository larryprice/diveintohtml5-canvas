
function create_horizontal_gradient(context) {
  var my_gradient = context.createLinearGradient(0, 0, 300, 0);
  create_gradient(my_gradient, context);
}

function create_vertical_gradient(context) {
  var my_gradient = context.createLinearGradient(0, 0, 0, 225);
  create_gradient(my_gradient, context);
}

function create_diaganol_gradient(context) {
  var my_gradient = context.createLinearGradient(0, 0, 300, 255);
  create_gradient(my_gradient, context);
}

function create_gradient(gradient, context) {
  gradient.addColorStop(0, "black");
  gradient.addColorStop(1, "white");
  context.fillStyle = gradient;
  context.fillRect(0, 0, 300, 225);
}

function draw() {
  var d_canvas = document.getElementById("d");
  var context = d_canvas.getContext("2d");

  create_diaganol_gradient(context);
}

draw();
