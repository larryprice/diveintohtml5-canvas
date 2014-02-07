
function create_gradient(context) {
  var my_gradient = context.createLinearGradient(0, 0, 300, 0);
  my_gradient.addColorStop(0, "black");
  my_gradient.addColorStop(1, "white");
  context.fillStyle = my_gradient;
  context.fillRect(0, 0, 300, 225);
}

function draw() {
  var d_canvas = document.getElementById("d");
  var context = d_canvas.getContext("2d");

  create_gradient(context);
}

draw();
