function draw_vertical_lines(c) {
  for (var x = 0.5; x < 500; x += 10) {
    c.moveTo(x, 0);
    c.lineTo(x, 375);
  }
}

function draw_horizontal_lines(c) {
  for (var y = 0.5; y < 375; y += 10) {
    c.moveTo(0, y);
    c.lineTo(500, y)
  }
}

function draw_paths() {
  var c_canvas = document.getElementById("c");
  var context = c_canvas.getContext("2d");

  draw_vertical_lines(context);
  draw_horizontal_lines(context);

  context.strokeStyle = "#eee";
  context.stroke();
}

draw_paths();
