var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});

typewriter
  .pauseFor(500)
  .typeString('Développeur web - front-end')
  .pauseFor(10000)
  .deleteAll(27)
  .typeString('<span style="color:#b62b19;font-weight:bold;">Designer</span>')
  .pauseFor(7000)
  .deleteAll(8)
  .typeString('<span style="color:#b62b19;font-weight:bold;">Intégrateur</span>')
  .pauseFor(7000)
  .start();
