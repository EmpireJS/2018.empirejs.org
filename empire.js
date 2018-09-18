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

  const glossaryData = [
    {
      name: "Jenn Creighton",
      title: "What Tamagotchis Can Teach You About ES6 Generators",
      terms: [
        {
          term: "Tamagotchi",
          definition:
            'a handheld digital pet popular in the 1990’s; the name is a combination of the Japanese word tamago (egg) and the end of "watch".'
        },
        {
          term: "Canvas",
          definition:
            "added in HTML5, the HTML &lt;canvas&gt; element can be used to draw graphs, make photo compositions, create animations, or even do real-time video processing or rendering."
        },
        {
          term: "Thenable",
          definition:
            "an object or function that defines a then method. Sprite sheet: a series of images (usually animation frames) combined into a larger image"
        }
      ]
    },
    {
      name: "Aaron Petcoff",
      title: "Try, Raise, Exception",
      terms: [
        {
          term: "Union",
          definition:
            "A organization of non-managerial employees that collectively negotiates the terms and conditions of their work."
        },
        {
          term: "Strike",
          definition:
            "An organized work stoppage by a group of workers as a form of protest or a tactic in bargaining."
        }
      ]
    },
    {
      name: "Ryan Waskiewicz",
      title: "12 Factor Frontend Apps through Dockerization",
      terms: [
        {
          term: "Docker",
          definition:
            "A program that performs virtualization (containerization) in an isolated environment,"
        },
        {
          term: "Container",
          definition:
            "A standardized, encapsulated environment that an application runs in"
        },
        {
          term: "Image",
          definition: "A template for creating reproducible containers"
        },
        {
          term: "Dockerfile",
          definition:
            "A file containing the exact steps for creating a Docker image"
        },
        {
          term: "12 Factors",
          definition:
            "Twelve tenets of building applications to alleviate common development pain points"
        },
        {
          term: "Environment Parity",
          definition:
            "The degree to which separate deployment environments (local, dev, prod, etc.) are the same"
        },
        {
          term: "Disposability",
          definition:
            "The ability to throw a working, running environment away and replace with an identical one for deployment and scalability purposes"
        },
        {
          term: "Configuration ",
          definition:
            "everything there may vary between deployments of an application, including resource handles to databases, backing services, credentials to external services, per deploy values, etc."
        },
        {
          term: "Build-Release-Run",
          definition:
            "One of the 12 factors in which the deployment of an application is separated into the three distinct steps from which the tenet gets its name."
        },
        {
          term: "Build",
          definition:
            "The transformation of code into an executable bundle. Step one of the Build-Release-Run factor."
        },
        {
          term: "Release",
          definition:
            "The combination of the executable bundle artifact and an application's configuration. The result should be ready to run executable. Step two of the Build-Release-Run factor"
        },
        {
          term: "Run",
          definition:
            'To run the created release in its execution environment. Step three of the Build-Release-Run factor"'
        }
      ]
    },
    {
      name: "Mani Nilchiani",
      title: "WebAssembly for Performant Interactivity",
      terms: [
        {
          term: "Interactivity",
          definition: "Yo do a thing and It'll do a thing."
        },
        { term: "Motion", definition: "Look at it go!" },
        {
          term: "JavaScript",
          definition:
            "Where undefined is not a function but functions are also objects. Sort of."
        },
        {
          term: "WebAssembly",
          definition: "Close to the metal, in the browser."
        },
        { term: "O(n^2)", definition: "Oh no, you have a nested for loop." },
        {
          term: "Web Workers",
          definition: "Gig economy but for in-browser threads."
        },
        { term: "Art", definition: "Human condition, expressed." },
        { term: "Play", definition: '"Where the magic happens" - Paula Scher' },
        {
          term: "FPS",
          definition: "The lower the choppier the higher the smoother."
        },
        {
          term: "Rust",
          definition: "Systems programming never looked so good, I hear."
        }
      ]
    },
    {
      name: "Sarah Groff Hennigh-Palermo",
      title: "Be the Ally You Think You Are",
      terms: [
        {
          term: "ally",
          definition:
            "someone who works alongside members of marginalized groups to help them carry their burdens and to dismantle oppressive structures"
        },
        { term: "social capital", definition: "a person's social resources" }
      ]
    },
    {
      name: "Jessica Jordan",
      title: "JavaScript Diversity",
      terms: [
        {
          term: "JavaScript ecosystem",
          definition:
            "a community made up of developers using JavaScript and a variety of technologies around it to build things on the web and beyond"
        },
        {
          term: "Convergent evolution",
          definition:
            "the development of functionally similar features in otherwise unrelated contexts over time"
        },
        {
          term: "Divergent evolution",
          definition:
            "the development of functionally dissimilar features in related contexts over time. As time moves on, divergent evolution leads to speciation"
        },
        {
          term: "Variety of JavaScript",
          definition: "the spice of each developer's life"
        }
      ]
    },
    {
      name: "Tracy Lum",
      title:
        "Living with Legacy JavaScript: Event Proxies, App Seams, and Chunking Rewrites",
      terms: [
        {
          term: "Legacy Code",
          definition: "Code that is no longer supported and/or has no tests"
        },
        {
          term: "Cruft",
          definition: "Anything left over, redundant, getting in the way"
        },
        {
          term: "Proxy",
          definition: "An intermediary to connect multiple systems"
        },
        {
          term: "Seam",
          definition:
            "The point where two parts of software meet and something can be injected"
        }
      ]
    },
    {
      name: "Mari Miyachi and Sam Keller",
      title: "Make Your Own ORM - A Guide to When and How",
      terms: [
        {
          term: "QPP",
          definition:
            "Quality Payment Program, a program to modernize Medicare payments"
        },
        {
          term: "CMS",
          definition:
            "Centers for Medicare and Medicaid Services, government agency that oversees QPP"
        },
        {
          term: "Medicare",
          definition:
            " Health care program for elderly and disabled, established in 1965"
        },
        {
          term: "Submission",
          definition:
            "Data that a healthcare provider submits to CMS in order to get paid"
        },
        {
          term: "Measure",
          definition:
            "Quality of care metric on which a healthcare provider is graded, changes frequently year over year"
        },
        {
          term: "policy",
          definition:
            "Rules defined by government officials that determine features and influence technical implementation"
        },
        {
          term: "ORM",
          definition:
            "object-relational mapping, a technique for matching (or sometimes, not quite matching) database to object models"
        },
        {
          term: "tcomb",
          definition:
            "npm library for field-level validation with surprising error messagin"
        }
      ]
    },
    {
      name: "Kassandra Perch",
      title: "The Wide World of Serverless",
      terms: [
        {
          term: "Serverless",
          definition:
            "your code runs without servers, but there really are servers, they're just not *your* servers."
        },
        {
          term: "Observability",
          definition:
            "Collecting literally every piece of data you can on your code so that you can visualize your app when it's in flames."
        }
      ]
    },
    {
      name: "Eli Schütze Ramírez",
      title: "Internationalisation is a Piece of Cake",
      terms: [
        {
          term: "Numeronym",
          definition: "A number-based word (i.e. l8r, K9, a11y)"
        },
        {
          term: "i18n",
          definition: "A type of numeronym, short for Internationalization"
        },
        {
          term: "Locale",
          definition:
            "A combination of language, cultural and linguistic preferences for a user’s region"
        },
        {
          term: "CLDR",
          definition:
            "Common Locale Data Repository, the one stop shop for all your basic i18n needs"
        },
        {
          term: "ICU",
          definition:
            "International Components for Unicode. A CLDR wrapper that defines message format for translations. A translators best friend!"
        },
        {
          term: "Continuous Localisation",
          definition:
            "the process of automatically, seamlessly gathering new source material, publishing it for translation, acquiring translations and integrating them back into a product"
        }
      ]
    },
    {
      name: "Sam Richard",
      title: "Slides About Slides",
      terms: [
        {
          term: "First Contentful Paint",
          definition:
            "The amount of time it takes, after navigation, when the browser renders the first bit of content"
        },
        {
          term: "Time to Consistently Interactive",
          definition:
            "The earliest point, after the main content has rendered, where the page can be expected to always be responsive to user input"
        },
        {
          term: "Core Experiences",
          definition:
            "Tool and technique agnostic descriptions of the user experiences being provided"
        },
        {
          term: "Progressive Enhancement",
          definition:
            "Providing a baseline version of your core experiences that only rely on HTML, and then enhancing the baseline experience with CSS and JavaScript as need to create a richer, more full experience"
        },
        {
          term: "Graded Components",
          definition:
            "Encapsulating stages of progressive enhancement at a component level as opposed to at the browser level. Each stage is a grade."
        },
        {
          term: "Cutting the Mustard",
          definition:
            "A Progressive Enhancement technique used to determine a baseline set of functionality where an experience can be enhanced from."
        },
        {
          term: "State Manager",
          definition:
            "A coding pattern in which state is held in a central place, and changes to state can be subscribed to allowing updates to quickly and asynchronously propagate"
        }
      ]
    },
    {
      name: "Sarbbottam Bandyopadhyay",
      title: "Love Thy Keyboard",
      terms: [
        {
          term: "POUR",
          definition: "Perceivable, Operable, Understandable and Robust"
        },
  
        {
          term: "WAI-ARIA",
          definition:
            "Web Accessibility Initiative – Accessible Rich Internet Applications"
        },
  
        {
          term: "Guided Focus Management",
          definition: "Focusing HTML element programmatically"
        },
  
        {
          term: "Tab order",
          definition:
            "The order in which focusable elements in a UI are focused on tab press."
        },
  
        {
          term: "Focus Highlight",
          definition:
            "A visual clue to identify the currently focused element in a user interface."
        },
  
        {
          term: "Screen Reader",
          definition:
            "A screen reader is a software application that enables people with severe visual impairments to use a computer."
        },
  
        {
          term: "VoiceOver",
          definition: "VoiceOver is a screen reader available in Apple products."
        }
      ]
    },
    {
      name: "Lena Reinhard",
      title: "Do You Read Me? — Better Communication for Stronger Teams",
      terms: [
        {
          term: "Ich verstehe nur Bahnhof” (“I only understand train station”)",
          definition: "German proverb for “I don’t understand anything"
        },
        {
          term: "Communication",
          definition: "a process of information exchange between individuals"
        },
        {
          term: "Time zone",
          definition:
            "a region of the globe that observes a uniform standard time"
        },
        {
          term: "Empathy",
          definition:
            "a social and emotional skill that helps us feel and comprehend the emotions, thoughts, and needs of others"
        },
        {
          term: "Relationship",
          definition: "the way in which two or more people are connected"
        },
        {
          term: "Team",
          definition:
            "A group of people with different skills and tasks who work together on a common goal with mutual support"
        },
        {
          term: "Curiosity",
          definition: "a strong desire to know or learn something"
        },
        {
          term: "Strength",
          definition:
            "the capacity of an object or substance to withstand great force or pressure"
        },
        {
          term: "Ego",
          definition: "a person's sense of self-esteem or self-importance"
        },
        {
          term: "Fingerspitzengefühl (finger tip feeling)",
          definition:
            "German word to describe the ability to handle sensitive situations with care, tact, empathy, and consideration"
        }
      ]
    },
    {
      name: "Holger Bartel",
      title: "The Untold Benefits of Ethical Design",
      terms: [
        {
          term: "Web Performance",
          definition:
            "The speed of how fast and how well a website responds to user interactions"
        },
        {
          term: "Ethics",
          definition:
            "The basic concepts and fundamental principles of decent human conduct"
        },
        {
          term: "User tracking",
          definition:
            "Aspect of web analytics identifying and recording user behaviour on apps and websites - Surveillance: close observation, especially of a suspected spy or criminal. Also: observation of user behaviour online."
        },
        {
          term: "Dark Patterns",
          definition:
            "Tricks used in websites and apps that make users do things that you didn't mean to."
        }
      ]
    },
    {
      name: "Andrey Sitnik",
      title: "CRDT and other new ideas for client-server communication",
      terms: [
        {
          term: "CRDT",
          definition: "data structure which can automatically fix merge-conflict"
        }
      ]
    },
    {
      name: "Sherr Minn Chong",
      title: "Recreating Retro Art with JS!",
      terms: [
        {
          term: "computer art",
          definition:
            "any art in which computers play a role in production or display of the artwork"
        },
        {
          term: "plotter",
          definition:
            "a computer printer for drawing vector graphics by moving a pen or other instrument across the surface of a piece of paper."
        },
        {
          term: "Lissajous figures",
          definition: `a family of curves defined by a set of parametric equations: 
                x(t) = Acos(omega_xt-delta_x) 
                (1)
                y(t) = Bcos(omega_yt-delta_y),`
        },
        {
          term: "generative art",
          definition:
            "art that has been created with the use of an autonomous system, e.g. algorithms"
        },
        {
          term: "CRT",
          definition: "cathode ray oscilloscopes."
        },
        {
          term: "fractal",
          definition: "a recursive and infinitely self-similar pattern"
        }
      ]
    },
    {
      name: "Joe Kent",
      title: "404 Fire Alarm Not Found",
      terms: [
        {
          term: "Legibility",
          definition:
            "Represents how well people can visually interpret the individual letters of your type"
        },
        {
          term: "Readability",
          definition:
            "About more than just the individual letters, it’s about how well the reader can perceive different elements of the page"
        },
        {
          term: "PACOM (CDW)",
          definition:
            "United States Pacific Command, Civil Defense Warning. Otherwise known as the incoming nuke warning."
        },
        {
          term: "Interface",
          definition: "Series of steps on a timeline that afford actions"
        },
        {
          term: "Intent",
          definition: "What someone is trying to do in your app"
        },
        {
          term: "Affordance",
          definition: "What an interfaces allows a user to interact with"
        },
        {
          term: "MTA",
          definition:
            "Metropolitan Transportation Authority, shorthand for the NYC subway by New Yorkers. It occasionally works as intended."
        },
        {
          term: "Subway Emergency Brake",
          definition:
            "Halts the train with airbrakes. Don't use it unless the Train itself is going to cause harm to someone."
        }
      ]
    }
  ];

  function sortByValueString(items, key) {
    return items.sort((a, b) => {
      const aValue = a[key].toLowerCase();
      const bValue = b[key].toLowerCase();
      if (aValue < bValue) {
        return -1;
      }
      if (aValue > bValue) {
        return 1;
      }
      // names must be equal
      return 0;
    });
  }
  

  const glossary = document.querySelector('.glossary');

  if (glossary) {
    const sortedGlossary = sortByValueString(glossaryData, 'name');
    const glossaryHtml = sortedGlossary.map((talk) => {
      const sortedTerms = sortByValueString(talk.terms, 'term');
      const termsHtml = sortedTerms.map((entry) => {
        return `<li class="glossary-term">
          <p><strong>${entry.term}</strong>: ${entry.definition}</p>
        </li>`
      });
      return `<li class="glossary-talk">
        <h3>${talk.name}</h3>
        <h4>${talk.title}</h4>
        <ul>${termsHtml.join('')}</ul>
      </li>`
    });

    glossary.innerHTML = glossaryHtml.join('');
  }

  
})();
