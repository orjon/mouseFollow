const ball = document.getElementById('ball');

let mouseX = 0;
let mouseY = 0;

function animate() {
  ball.style.left = mouseX + 'px';
  ball.style.top = mouseY + 'px';

  requestAnimationFrame(animate);
}

animate();

document.addEventListener('mousemove', function (event) {
  mouseX = event.pageX;
  mouseY = event.pageY;
});
