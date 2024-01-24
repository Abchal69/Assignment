x = 0
s = 1
a = 50
b = 50

function setup() {
  createCanvas(400, 400)
}

function draw() {
  background(255)

  ellipse(x, 100, a, b)
  ellipse(400 - x, 100, a, 50)

  x = x + s

  if (x > 175) {
    s = s * -1
    fill(random(255), random(255), random(255))
  }

  else if (x < 0) {
    s = s * -1
    fill(random(255), random(255), random(255))
  }
  ellipse(x, 150, a, b)
  ellipse(400 - x, 150, a, b)

  x = x + s

  if (x > 175) {
    s = s * -1
    fill(random(255), random(255), random(255))
  }

  else if (x < 0) {
   s = s * -1
    fill(random(255), random(255), random(255))
  }
 ellipse(x, 200, a, b)
 ellipse(400 - x, 200, a, b)

 x = x + s

 if (x > 175) {
  s = s * -1
   fill(random(255), random(255), random(255))
  }

 else if (x < 0) {
  s = s * -1
   fill(random(255), random(255), random(255))
  }
 ellipse(x, 250, a, b)
 ellipse(400 - x, 250, a, b)

 x = x + s

 if (x > 175) {
  s = s * -1
   fill(random(255), random(255), random(255))
  }

 else if (x < 0) {
  s = s * -1
   fill(random(255), random(255), random(255))
  }
}

function mousePressed() {
  if (mouseButton = LEFT) {
    fill(random(255), random(255), random(255))

  }
}

function keyPressed() {
  if (keyCode == 38) {
    a = a + 5
    b = b + 5
  }
  else if (keyCode == 40) {
    a = a - 5
    b = b - 5
  }
}
