const btn = document.getElementById('btn');
const btn2 = document.getElementById('btn2');

btn.addEventListener('click', () => {
  const greetings = document.getElementById('greetings');
  return greetings.innerHTML = greetings.innerHTML === "Hello World!" ? "yes nigana!!!" : "Hello World!";
});
let color = false;
btn2.addEventListener('click', () => {
  color = !color;
  let body = document.body;
  return body.style.backgroundColor = color ? "lightblue" : "white";
})

