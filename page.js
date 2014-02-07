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

function draw_horizontal_arrow(c) {
  c.beginPath();
  c.moveTo(0, 40);
  c.lineTo(240, 40);
  c.moveTo(260, 40);
  c.lineTo(500, 40);
  c.moveTo(495, 35);
  c.lineTo(500, 40);
  c.lineTo(495, 45);
}

function draw_vertical_arrow(context) {
  context.moveTo(60, 0);
  context.lineTo(60, 153);
  context.moveTo(60, 173);
  context.lineTo(60, 375);
  context.moveTo(65, 370);
  context.lineTo(60, 375);
  context.lineTo(55, 370);
}

function draw_paths() {
  var c_canvas = document.getElementById("c");
  var context = c_canvas.getContext("2d");

  draw_vertical_lines(context);
  draw_horizontal_lines(context);

  context.strokeStyle = "#eee";
  context.stroke();

  draw_horizontal_arrow(context);
  draw_vertical_arrow(context);
  context.strokeStyle = "#000";
  context.stroke();
}

draw_paths();
