const questions = [
  // --- MÉTODOS DE CADENAS ---
  {question: "capitalize", answer: "Pone la primera letra de la cadena en mayúscula"},
  {question: "upper", answer: "Pone en mayúsculas toda la cadena"},
  {question: "lower", answer: "Pone en minúsculas toda la cadena"},
  {question: "isalnum", answer: "Comprueba que todos los caracteres sean alfanuméricos"},
  {question: "isalpha", answer: "Comprueba si todos los caracteres son alfabéticos"},
  {question: "isdigit", answer: "Comprueba si todos los caracteres son numéricos"},
  {question: "islower", answer: "Comprueba si todos los caracteres están en minúscula"},
  {question: "isupper", answer: "Comprueba si todos los caracteres están en mayúscula"},
  {question: "lstrip", answer: "Elimina los caracteres del comienzo de la cadena"},
  {question: "rstrip", answer: "Elimina los caracteres del final de la cadena"},
  {question: "strip", answer: "Elimina los caracteres de ambos lados"},
  {question: "replace", answer: "Sustituye caracteres de una cadena por otros"},
  {question: "swapcase", answer: "Invierte mayúsculas y minúsculas"},
  {question: "split", answer: "Convierte una cadena en una lista de elementos separados por espacios"},
  {question: "startswith", answer: "Comprueba si la cadena empieza con un texto específico"},
  {question: "endswith", answer: "Comprueba si la cadena termina con un texto específico"},
  {question: "list()", answer: "Convierte una cadena en una lista de caracteres"},
  // --- MÓDULO RANDOM ---
  {question: "random.random()", answer: "Devuelve un número real aleatorio entre 0 y 1"},
  {question: "random.randint(inicio, fin)", answer: "Devuelve un número entero entre los dos números dados"},
  {question: "random.randrange(inicio, fin, paso)", answer: "Devuelve un número entre inicio y fin con paso opcional"},
  {question: "random.choice(lista)", answer: "Devuelve un elemento aleatorio de una lista"},
  {question: "random.shuffle(lista)", answer: "Ordena los elementos de una lista de manera aleatoria"},
  // --- INTRODUCCIÓN A PYTHON ---
  {question: "programa", answer: "Algoritmo escrito con sentencias específicas de un lenguaje; conjunto de instrucciones con entradas y salidas"},
  {question: "programación", answer: "Resuelve problemas a través de algoritmos"},
  {question: "Python", answer: "Creado por Guido van Rossum en los años 80; primera versión en 1991"},
  {question: "simplicidad", answer: "Mayor fortaleza de Python; reduce líneas de código"},
  {question: "sintaxis clara", answer: "Mantiene siempre la misma estructura visual"},
  {question: "propósito general", answer: "Permite crear todo tipo de programas"},
  {question: "lenguaje interpretado", answer: "No se compila; acelera desarrollo pero ejecución más lenta"},
  {question: "print", answer: "Muestra información al usuario"},
  {question: "input", answer: "Lee información introducida por el usuario"},
  {question: "variables", answer: "Datos a almacenar y utilizar con nombre, tipo y valor"},
  {question: "tipos de datos", answer: "Entero, real, complejo, string, boolean, conjunto, lista, tupla, diccionario"},
  // --- OPERADORES ---
  {question: "operador asignación", answer: "Usa '=' para asignar un valor, ejemplo: precio=12"},
  {question: "operadores aritméticos", answer: "Operaciones matemáticas, ejemplo: coste=(5+3)*8"},
  {question: "operadores relacionales", answer: "Comparaciones, ejemplo: 7<5 devuelve True o False"},
  {question: "operadores lógicos", answer: "Permiten combinar condiciones: and, or, not"},
  {question: "operadores de membresía", answer: "in, not in, para saber si algo está dentro de algo"},
  {question: "operadores enteros y reales", answer: "int() para enteros, float() para reales"},
  {question: "operadores especiales", answer: "División //, módulo %, round() para redondear"},
  // --- LISTAS ---
  {question: "lista", answer: "Conjunto ordenado de elementos, mutable, definido con [ ]"},
  {question: "unión de listas", answer: "listafinal = listaoriginal + listanueva"},
  {question: "añadir elemento a lista", answer: "lista.append('mesa') o lista + ['mesa']"},
  {question: "eliminar elemento de lista", answer: "del lista[indice]"},
  {question: "lista vacía", answer: "Se crea con lista = list()"},
  {question: "último elemento de lista", answer: "Se accede con lista[-1]"},
  // --- TUPLAS ---
  {question: "tuplas", answer: "Similares a listas pero inmutables, definidas con ( )"},
  // --- DICCIONARIOS ---
  {question: "diccionarios", answer: "Estructura con pares clave-valor, definidas con { }"},
  {question: "diccionario vacío", answer: "d1 = dict()"},
  {question: "añadir elemento a diccionario", answer: "diccionario['clave'] = valor"},
  {question: "eliminar elemento de diccionario", answer: "del diccionario['clave']"},
  {question: "items()", answer: "Lista de pares clave-valor"},
  {question: "keys()", answer: "Lista de todas las claves"},
  {question: "values()", answer: "Lista de todos los valores"},
  // --- CONDICIONALES ---
  {question: "if", answer: "Bloque de código que se ejecuta si se cumple la condición"},
  {question: "elif", answer: "Genera camino alternativo con condición de entrada"},
  {question: "else", answer: "Genera camino alternativo si no se cumple ninguna condición previa"},
  // --- BUCLES ---
  {question: "while", answer: "Ejecuta un bloque de código mientras se cumpla la condición"},
  {question: "for", answer: "Ejecuta un bloque de instrucciones sobre una colección iterable"},
  // --- DEFINICIÓN DE FUNCIONES ---
  {question: "Función", answer: "Bloque de código que contiene instrucciones y puede ser reutilizado"},
  {question: "Entrada y salida de función", answer: "Recibe datos de entrada y devuelve resultados"},
  {question: "Ventajas de las funciones", answer: "Simplificación, organización y reutilización del código"},
  {question: "Sintaxis de función en Python", answer: "def NombreFuncion(parametros): bloqueinstrucciones return Valor"},
  // --- SETS O CONJUNTOS ---
  {question: "Sets o conjuntos", answer: "Elementos únicos, desordenados e inmutables"},
  {question: "Crear set", answer: "s = set((4,5,6,7,8))"},
  {question: "Iterar set", answer: "Se pueden iterar como listas"},
  {question: "Longitud de un set", answer: "len(s) devuelve número de elementos"},
  {question: "Comprobar elemento en set", answer: "in permite saber si un elemento está en el set"},
  {question: "Añadir elemento a set", answer: "s.add(elemento)"},
  {question: "Eliminar elemento de set", answer: "s.remove(elemento)"},
  {question: "Eliminar elemento sin error si no existe", answer: "s.discard(elemento)"},
  {question: "Eliminar elemento aleatorio", answer: "s.pop()"},
  {question: "Vaciar set", answer: "s.clear()"},
  {question: "Unir dos sets", answer: "set1.union(set2)"},
  {question: "Intersección de sets", answer: "set1.intersection(set2)"},
  // --- SWITCH ---
  {question: "Switch", answer: "Estructura parecida a if/else según el valor de una condición"},
  // --- SUBLISTAS (slicing) ---
  {question: "Sublistas", answer: "Permite acceder a partes de una lista usando slicing"},
  {question: "Ejemplos de slicing", answer: "l = [1,2,3,4,5,6]; l[0:2] devuelve [1,2]; l[2:6] devuelve [3,4,5,6]"},
  // --- PROGRAMACIÓN ORIENTADA A OBJETOS (POO) ---
  {question: "Paradigma POO", answer: "Modela con clases/objetos, encapsula datos y aporta herencia y composición"},
  {question: "Clases - atributos", answer: "Información que almacena la clase"},
  {question: "Clases - métodos", answer: "Operaciones que pueden realizarse con la clase"},
  {question: "Composición en POO", answer: "Crea nuevas clases usando otras como atributos ('tiene un')"},
  {question: "Ejemplo de composición", answer: "Biblioteca con Libros; coche con motor, puertas, ruedas; triángulo con tres puntos"},
  {question: "Clase simple - creación", answer: "class Punto: def __init__(self,x,y): self.X=x self.Y=y"},
  {question: "Atributo de clase", answer: "class Punto: z=0; def __init__(self,x,y): self.X=x self.Y=y"},
  {question: "Implementación de composición", answer: "Class Triangulo: def __init__(self, v1,v2,v3): self.V1=v1 self.V2=v2 self.V3=v3"},
  {question: "Creación de método en clase", answer: "Class Triangulo: def MostrarVertices(self): self.V1.MostrarPunto() self.V2.MostrarPunto() self.V3.MostrarPunto()"},
  {question: "Encapsulación - atributos públicos", answer: "self.X = x; self.Y = y"},
  {question: "Encapsulación - atributos privados", answer: "self.__X = x; self.__Y = y"},
  {question: "Getters y setters", answer: "Métodos para acceder o modificar atributos privados"},
  {question: "Herencia - clase base", answer: "class Animal: def __init__(self,nombre): self.nombre=nombre"},
  {question: "Herencia - método clase base", answer: "def hacer_sonido(self): return 'Sonido genérico'"},
  {question: "Herencia - clase derivada", answer: "class Perro(Animal): def __init__(self,nombre,raza): super().__init__(nombre); self.raza=raza"},
  {question: "Herencia - método sobreescrito", answer: "def hacer_sonido(self): return 'Guau'"},
  {question: "__str__", answer: "Def __str__(self) retorna f'P({self.X},{self.Y})'"},
  {question: "__repr__", answer: "Def __repr__(self) retorna f'P({self.X},{self.Y})'"},
  {question: "__eq__", answer: "Def __eq__(self, otroPunto): return self.X==otroPunto.X and self.Y==otroPunto.Y"},
  {question: "__lt__", answer: "Def __lt__(self, value): return self.X < value.X"},
  // --- PROGRAMACIÓN FUNCIONAL ---
  {question: "Programación funcional en Python", answer: "Permite definir listas, diccionarios u otras colecciones de manera 'funcional'"},
  {question: "Función map", answer: "Aplica una función a todos los elementos de una colección"},
  {question: "Función filter", answer: "Filtra elementos de una colección según una función"},
  {question: "Función all", answer: "Devuelve True si todos los elementos de la lista son True"},
  {question: "Función any", answer: "Devuelve True si al menos un elemento de la lista es True"},
  {question: "Lambda", answer: "Sintaxis: lambda argumentos: expresión; útil para map, filter o sorted"},
  // --- RECURSIVIDAD ---
  {question: "Recursividad", answer: "Una función se llama a sí misma para resolver un problema"},
  {question: "Condición de salida en recursividad", answer: "Siempre debe tener una condición de salida para evitar llamadas infinitas"},
  {question: "Ejemplo factorial", answer: "4! = 24, 3! = 6, 2! = 2, 1! = 1 (condición de salida)"}
];

let shuffledQuestions = [];
let currentIndex = 0;
let score = 0;
let fails = 0;
let wrongQuestions = [];

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const counterEl = document.getElementById("counter");
const scoreboardEl = document.getElementById("scoreboard");
const resultEl = document.getElementById("result");
const nextBtn = document.getElementById("next-btn");
const restartBtn = document.getElementById("restart-btn");

let startTime;       
let timerInterval;   

function startTest() {
  shuffledQuestions = [...questions].sort(() => Math.random() - 0.5);
  currentIndex = 0;
  score = 0;
  fails = 0;
  wrongQuestions = [];
  nextBtn.style.display = "none";
  restartBtn.style.display = "none";
  resultEl.textContent = "";
  document.getElementById("timer").textContent = "⏱ Tiempo: 00:00";
  startTimer(); 
  showQuestion();
}

function showQuestion() {
  const current = shuffledQuestions[currentIndex];
  counterEl.textContent = `Pregunta ${currentIndex + 1} de ${shuffledQuestions.length}`;
  scoreboardEl.textContent = `✅ Aciertos: ${score}   ❌ Fallos: ${fails}`;
  questionEl.textContent = current.question;
  optionsEl.innerHTML = "";

  const wrongAnswers = shuffledQuestions
    .filter(q => q.answer !== current.answer)
    .sort(() => Math.random() - 0.5)
    .slice(0, 3)
    .map(q => q.answer);

  const options = [current.answer, ...wrongAnswers].sort(() => Math.random() - 0.5);

  options.forEach(opt => {
    const div = document.createElement("div");
    div.textContent = opt;
    div.classList.add("option");
    div.addEventListener("click", () => selectOption(div, current.answer, current));
    optionsEl.appendChild(div);
  });

  optionsEl.style.opacity = 0;
  setTimeout(() => { optionsEl.style.transition = "opacity 0.3s"; optionsEl.style.opacity = 1; }, 50);
}

function selectOption(selectedDiv, correctAnswer, currentQuestion) {
  const allOptions = document.querySelectorAll(".option");
  allOptions.forEach(opt => opt.style.pointerEvents = "none");

  if (selectedDiv.textContent === correctAnswer) {
    selectedDiv.classList.add("correct");
    score++;
  } else {
    selectedDiv.classList.add("incorrect");
    fails++;
    wrongQuestions.push({question: currentQuestion.question, correct: currentQuestion.answer});
    const correctDiv = Array.from(allOptions).find(opt => opt.textContent === correctAnswer);
    correctDiv.classList.add("correct");
  }

  scoreboardEl.textContent = `✅ Aciertos: ${score}   ❌ Fallos: ${fails}`;
  nextBtn.style.display = "block";
}

nextBtn.addEventListener("click", () => {
  currentIndex++;
  if (currentIndex < shuffledQuestions.length) {
    nextBtn.style.display = "none";
    showQuestion();
  } else {
    showResult();
  }
});

function showResult() {
  stopTimer();
  questionEl.textContent = "";
  optionsEl.innerHTML = "";
  nextBtn.style.display = "none";
  counterEl.textContent = "";
  scoreboardEl.textContent = "";

  const elapsed = Date.now() - startTime;
  const minutes = Math.floor(elapsed / 60000);
  const seconds = Math.floor((elapsed % 60000) / 1000);
  const timeString = `${String(minutes).padStart(2,'0')}:${String(seconds).padStart(2,'0')}`;

  let resultHTML = `⏱ Tiempo total: ${timeString} <br> ✅ Has acertado ${score} de ${shuffledQuestions.length} preguntas. ❌ Fallos: ${fails}`;

  if (wrongQuestions.length > 0) {
    resultHTML += "<h2>Preguntas incorrectas:</h2>";
    wrongQuestions.forEach(w => {
      resultHTML += `<p><strong>${w.question}</strong>: ${w.correct}</p>`;
    });
  }

  resultEl.innerHTML = resultHTML;
  resultEl.style.display = "block"; // <--- Esto hace que aparezca solo al finalizar
  restartBtn.style.display = "block";
}


restartBtn.addEventListener("click", startTest);

function startTimer() {
  startTime = Date.now();
  timerInterval = setInterval(updateTimer, 1000);
}

function updateTimer() {
  const elapsed = Date.now() - startTime;
  const minutes = Math.floor(elapsed / 60000);
  const seconds = Math.floor((elapsed % 60000) / 1000);
  document.getElementById("timer").textContent = `⏱ Tiempo: ${String(minutes).padStart(2,'0')}:${String(seconds).padStart(2,'0')}`;
}

function stopTimer() {
  clearInterval(timerInterval);
}

startTest();

