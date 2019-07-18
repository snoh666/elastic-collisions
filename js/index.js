(function() {
  const canvas = document.querySelector('canvas');
  const ctx = canvas.getContext('2d');
  const bounceTextField = document.querySelector('p');
  let bounceCount = 0;
  let animationID;
  const powerOf = 0;
  const block1 = new Block(100, 400, 10, 1, 0, ctx);
  const mass2 = Math.pow(100, powerOf);
  const block2 = new Block(200, 400, 40, mass2, -1, ctx);
  const sound = document.querySelector('audio');

  const updateBounce = () => {
    bounceCount++;
    bounceTextField.innerHTML = `Bounce: ${bounceCount}`;
    sound.currentTime = 0;
    sound.play();
  }

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
    if(block1.collide(block2)) {
      const v1 = block1.bounce(block2);
      const v2 = block2.bounce(block1);

      block1.v = v1;
      block2.v = v2
      updateBounce();
    }
    if (block1.hitWall()) {
      updateBounce();
      block1.reverse();
    }
  };

  document.querySelector('form').addEventListener('submit', e => {
    e.preventDefault();

    let numberToPower = document.querySelector('input').value;
    numberToPower = parseInt(numberToPower);

    block2.m = Math.pow(100, numberToPower);
    if(typeof animationID !== "number") {
      draw();
    } else {
      cancelAnimationFrame(animationID);
      animationID = undefined;
    }
  });

})();