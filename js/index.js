(function() {
  const canvas = document.querySelector('canvas');
  const ctx = canvas.getContext('2d');
  let animationID;
  const block1 = new Block(20, 400, 20, 1, ctx);
  const block2 = new Block(200, 400, 40, -1, ctx);

  canvas.width = 1000;
  canvas.height = 500;
  //Draw ground
  ctx.fillRect(0, 400, 1000, 100);

  const draw = () => {
    animationID = requestAnimationFrame(draw);

    ctx.clearRect(0, 0, 1000, 400);
    block1.draw();
    block2.draw();
    block1.update();
    block2.update();
    block1.collide(block2);
    block2.collide(block1);
  };

  document.addEventListener('keypress', e => {
    switch(e.key) {
      case 's':
        draw();
        break;
      case 'p':
        cancelAnimationFrame(animationID);
        break;
    }
  });

})();