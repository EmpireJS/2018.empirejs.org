(function () {
  const $scribblePlaypen = document.querySelector('.scribble-playpen');
  const maxRight = $scribblePlaypen.offsetWidth;
  const maxDown = $scribblePlaypen.offsetHeight;

  document.querySelectorAll('.scribble').forEach((scribble) => {
    const x = Math.round(Math.random() * maxRight);
    const y = Math.round(Math.random() * maxDown);
    scribble.setAttribute("style", `transform: translate(${x}px, ${y}px)`);
  });
})();
