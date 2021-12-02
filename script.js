var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});

typewriter
  .pauseFor(2500)
  .typeString('Développeur web - front-end')
  .pauseFor(300)
  .deleteChars(27)
  .typeString('Design')
  .typeString('Integration')
  .pauseFor(1000)
  .start();
