var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});

typewriter
  .pauseFor(2500)
  .typeString('Développeur web - front-end')
  .pauseFor(300)
  .deleteChars(24)
  .typeString('<span style="color:#b62b19">Designer</span>')
  .typeString('<span style="color:#b62b19">Integrateur</span>')
  .pauseFor(1000)
  .start();
