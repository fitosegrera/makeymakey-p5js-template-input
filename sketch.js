var c;

function setup() {
  createCanvas(windowWidth, windowHeight);

  c = color(255);
}

function draw() {
  background(c);
}

function mouseClicked() {
  c = color(random(255), random(255), random(255));
}

function keyPressed() {
  c = color(random(255), random(255), random(255));

  if (keyCode == LEFT_ARROW) {
  }

  if (keyCode == RIGHT_ARROW) {
  }

  if (keyCode == UP_ARROW) {
  }

  if (keyCode == DOWN_ARROW) {
  }

  if (key == " ") {
  }

  if (key == "w") {
  }
  if (key == "a") {
  }
  if (key == "s") {
  }
  if (key == "d") {
  }
  if (key == "f") {
  }
  if (key == "g") {
  }
}
