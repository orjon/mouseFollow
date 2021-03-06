document.addEventListener('mousemove', function (event) {
  const mouseX = event.pageX;
  const mouseY = event.pageY;

  const ball = document.getElementById('ball');

  ball.style.left = mouseX + 'px';
  ball.style.top = mouseY + 'px';
});
