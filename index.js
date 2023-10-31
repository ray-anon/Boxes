const box1 = document.querySelector("#box1");
const box2 = document.querySelector("#box2");
const body = document.querySelector("body");

let box1active = false;
let box2active = false;
let x1 = 0;
let y1 = 0;
let x2 = 0;
let y2 = 0;

randomPosition();
box1.addEventListener("click", Box1Clicked);
box2.addEventListener("click", Box2Clicked);
body.addEventListener("keydown", keyPressed);
randomPosition();
function Box1Clicked() {
  box1active = true;
  box2active = false;
  box1.style.opacity = 1;
  box2.style.opacity = 0.8;
}

function Box2Clicked() {
  box2active = true;
  box1active = false;
  box2.style.opacity = 1;
  box1.style.opacity = 0.8;
}
function keyPressed(event) {
  let key = event.keyCode;
  if (box1active == true) {
    moveBox(box1, x1, y1, key, 1);
  } else {
    moveBox(box2, x2, y2, key, 2);
  }
}

function moveBox(box, x, y, key, choose) {
  if (key == 37) {
    x--;
    if (check(x, y, choose)) return;
    box.style.left = x + "px";
  } else if (key == 38) {
    y--;
    if (check(x, y, choose)) return;
    box.style.top = y + "px";
  }
  if (key == 39) {
    x++;
    if (check(x, y, choose)) return;
    box.style.left = x + "px";
  }
  if (key == 40) {
    y++;
    if (check(x, y, choose)) return;
    box.style.top = y + "px";
  }
  if (choose == 1) {
    x1 = x;
    y1 = y;
  } else {
    x2 = x;
    y2 = y;
  }
}
function check(x, y, choose) {
  if (x < 0 || x > 400 || y < 0 || y > 400) {
    return true;
  }
  let xdiff,
    ydiff = 0;
  if (choose == 1) {
    xdiff = x - x2;
    ydiff = y - y2;
  } else {
    xdiff = x - x1;
    ydiff = y - y1;
  }
  if (xdiff < 0) xdiff = -xdiff;
  if (ydiff < 0) ydiff = -ydiff;
  if (xdiff < 100 && ydiff < 100) {
    return true;
  }
  return false;
}
function randomPosition() {
  let xdiff = 0,
    ydiff = 0;

  while (xdiff < 100 && ydiff < 100) {
    x1 = Math.floor(Math.random() * 400);
    x2 = Math.floor(Math.random() * 400);
    y1 = Math.floor(Math.random() * 400);
    y2 = Math.floor(Math.random() * 400);
    xdiff = x2 - x1;
    ydiff = y2 - y1;
    if (xdiff < 0) xdiff = -xdiff;
    if (ydiff < 0) ydiff = -ydiff;
  }
  box1.style.left = x1 + "px";
  box1.style.top = y1 + "px";
  box2.style.left = x2 + "px";
  box2.style.top = y2 + "px";
}
