// Root (para las variables css)
let root = document.querySelector(":root");
// Container de Imagen
let imgContainer = document.getElementById("imgContainer");
// Imagen
let img = document.querySelector(".imgPic");
// Distrancia entre la imagen y la esquina del navegador
let rect = img.getBoundingClientRect();

let x;
let y;

imgContainer.addEventListener("mousemove", (eve) => {
  // Obtener coordenadas X & Y del mouse

  x = eve.clientX - rect.x;
  y = eve.clientY - rect.y;

  // Reductor para que la rotacion no se vaya de Madre.
  let reductor = 8;

  // Encontrar el Centro Horizontal de la imagen
  let centroHorizontal = img.clientWidth / 2;
  let numX = img.clientWidth / 2;

  // Encontrar el Centro Vertical de la imagen
  let centroVertical = img.clientHeight / 2;
  let numY = img.clientHeight / 2;

  // ========================= Rotacion Horizontal =========================
  if (x < centroHorizontal) {
    // Si el cursor esta del lado Izquierdo de la imagen, el numero es negativo
    numX = x - numX; // Negativo
    // rota a la Izquierda
    root.style.setProperty("--x", `${Math.round(numX / reductor)}deg`);
  } else {
    // Si el cursor esta del lado Derecho de la imagen, el numero es positivo
    numX = Math.abs(numX - x); // Positivo
    // rota a la Derecha
    root.style.setProperty("--x", `${Math.round(numX / reductor)}deg`);
  }

  // ========================= Rotacion Vertical =========================
  if (y > centroVertical) {
    // Si el cursor esta del lado Izquierdo de la imagen, el numero es negativo
    numY = y - numY; // Negativo
    // rota a la Izquierda
    root.style.setProperty("--y", `-${Math.round(numY / reductor)}deg`);
  } else {
    // Si el cursor esta del lado Derecho de la imagen, el numero es positivo
    numY = numY - y; // Positivo
    // rota a la Derecha
    root.style.setProperty("--y", `${Math.round(numY / reductor)}deg`);
  }
});

imgContainer.addEventListener("mouseleave", () => {
  root.style.setProperty("--x", `${0}deg`);
  root.style.setProperty("--y", `${0}deg`);
});
