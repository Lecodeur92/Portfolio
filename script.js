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
  .typeString('<span style="color:#b62b19">Designer</span>')
  .pauseFor(7000)
  .deleteAll(8)
  .typeString('<span style="color:#b62b19">Integrateur</span>')
  .pauseFor(7000)
  .start();
