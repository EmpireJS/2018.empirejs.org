(function () {
  const scribbleMap = [];
  let headerWidth = window.innerWidth;
  const headerHeight = document.querySelector('.scribble-playpen').offsetHeight;

  const scribbles = document.querySelectorAll('.scribble');

  scribbles.forEach((scribble, i) => {
    const x = Math.round(Math.random() * headerWidth) - 100;
    const y = Math.round(Math.random() * headerHeight) - 100;
    scribbleMap[i] = {x: x, y: y};
    scribble.setAttribute("style", `transform: translate(${x}px, ${y}px)`);
  });

  function redisplaceScribbles() {
    const oldWidth = headerWidth;
    const newWidth = window.innerWidth;
    const changeRatio = newWidth / oldWidth;

    scribbles.forEach((scribble, i) => {
      const oldX = scribbleMap[i].x;
      scribbleMap[i].x = oldX * changeRatio;
      scribble.setAttribute("style", `transform: translate(${scribbleMap[i].x}px, ${scribbleMap[i].y}px)`);
    })
    headerWidth = newWidth;
  }

  window.addEventListener('resize', () => {
    window.requestAnimationFrame(redisplaceScribbles);
  });


})();
