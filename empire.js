import deburr from 'lodash.deburr';
import shuffle from 'lodash.shuffle';

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

  const speakers = [
    'Sam Richard',
    'Nick Kreeger',
    'Yannick Assogba',
    'Nishat Anjum',
    'Andrey Sitnik',
    'Mari Miyachi',
    'Sam Keller',
    'Holger Bartel',
    'Eli Schütze Ramírez',
    'Jessica Jordan',
    'Tracy Lum',
    'Nitya Narasimhan',
    'Jenn Creighton',
    'Kelly Sutton',
    'Meara Charnetzki',
    'Sher Minn Chong',
    'Ryan Waskiewicz',
    'Joe Kent',
    'Sarbbottam Bandyopadhyay',
    'Sarah Groff Hennigh-Palermo',
    'Kassandra Perch',
    'K. Adam White',
    'Ethan Garofolo',
    'Lena Reinhard',
    'Mani Nilchiani',
    'Aaron Petcoff'
  ];

  const speakersList = document.querySelector('.speakers-list');
  
  if (speakersList) {
    const speakersHtml = shuffle(speakers).map((speaker) => {
      var imgUrl = `speaker-photos/${deburr(speaker).replace(/\./g, '').split(' ').join('_')}.jpg`;
      return `<li class="speaker-box">
        <img class="speaker-photo" alt="Image of ${speaker}" src="${imgUrl}" />
        <p class="speaker-name">${speaker}</p>
      </li>`
    });
  
    speakersList.innerHTML = speakersHtml.join('');
  }
})();
