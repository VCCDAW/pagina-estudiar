const questions = [
  // --- MÉTODOS DE CADENAS ---
  {question: "capitalize", answer: "Pone la primera letra de la cadena se pone en mayúscula"},
  {question: "upper", answer: "Pone en mayúsculas toda la cadena"},
  {question: "lower", answer: "Pone en minúsculas toda la cadena"},
  {question: "len", answer: "Sabe el número de caracteres de toda la cadena, recorre la longitud de la cadena"},
  {question: "isalnum", answer: "Comprueba que todos los carácteres de la cadena sean alfanuméricos o no"},
  {question: "isalpha", answer: "Comprueba si todos los caracteres de la cadena de texto son caracteres alfabéticos"},
  {question: "isdigit", answer: "Comprueba que todos los carácteres de la cadena sean numéricos"},
  {question: "islower", answer: "Comprueba si todos los carácteres están en minúscula"},
  {question: "isupper", answer: "Comprueba si todos los carácteres están en mayúscula"},
  {question: "lstrip", answer: "Elimina los caracteres del comienzo de la cadena (left)"},
  {question: "rstrip", answer: "Elimina los caracteres del final de la cadena (right)"},
  {question: "strip", answer: "Elimina los caracteres de ambos lados"},
  {question: "replace", answer: "Sustituye caracteres de una cadena por otros"},
  {question: "swapcase", answer: "Invierte las mayúsculas y las minúsculas de la cadena"},
  {question: "split", answer: "Convierte una cadena de texto en una lista de elementos separados por espacios"},
  {question: "startswith", answer: "Comprueba que la cadena empiece con un texto específico"},
  {question: "endswith", answer: "Comprueba que la cadena termine con un texto específico"},
  {question: "list()", answer: "Convierte una cadena en una lista de caracteres"},

  // --- MÓDULO RANDOM ---
  {question: "random.random()", answer: "Devuelve un número real aleatorio entre 0 y 1"},
  {question: "random.randint(inicio, fin)", answer: "Devuelve un número entero entre los dos números dados"},
  {question: "random.randrange(inicio, fin, paso)", answer: "Devuelve un número entre inicio y fin con paso opcional"},
  {question: "random.choice(lista)", answer: "Devuelve un elemento aleatorio de una lista"},
  {question: "random.shuffle(lista)", answer: "Ordena los elementos de una lista de manera aleatoria"},

  // --- INTRODUCCIÓN A PYTHON ---
  {question: "programa", answer: "Algoritmo escrito con sentencias específicas de un lenguaje concreto; conjunto de instrucciones con entradas y salidas"},
  {question: "programación", answer: "Resuelve problemas a través de algoritmos"},
  {question: "programar", answer: "Acción de decirle a un ordenador lo que tiene que hacer y cómo hacerlo utilizando un lenguaje de programación"},
  {question: "Python", answer: "Creado en los años 80 por Guido van Rossum; primera versión lanzada en 1991"},
  {question: "simplicidad", answer: "Mayor fortaleza de Python; reduce número de líneas de código"},
  {question: "sintaxis clara", answer: "Muy clara; siempre mantiene la misma estructura visual"},
  {question: "propósito general", answer: "Permite crear todo tipo de programas"},
  {question: "lenguaje interpretado", answer: "No se compila, lo que acelera el desarrollo pero lo hace más lento al ejecutarse"},
  {question: "lenguaje de alto nivel", answer: "Lenguaje que abstrae detalles del hardware para facilitar la programación"},
  {question: "print", answer: "Muestra información al usuario de la aplicación"},
  {question: "end y sep", answer: "print(1,2,3,4,5, sep=',', end='.') imprime: 1,2,3,4,5."},
  {question: "input", answer: "Lee información introducida por el usuario"},
  {question: "variables", answer: "Datos a almacenar y utilizar en los programas, con nombre, tipo y valor"},
  {question: "tipos de datos", answer: "Entero, real, complejo, string, boolean, conjunto, lista, tupla, diccionario"},

  // --- OPERADORES ---
  {question: "operador asignación", answer: "Usa '=' para asignar un valor, ejemplo: precio=12"},
  {question: "operadores aritméticos", answer: "Operaciones matemáticas, ejemplo: coste=(5+3)*8"},
  {question: "operadores relacionales", answer: "Comparaciones, ejemplo: 7<5 devuelve True o False"},
  {question: "operadores lógicos", answer: "Permiten combinar condiciones: and, or, not"},
  {question: "operadores de membresía", answer: "in, not in, para saber si algo está dentro de algo"},
  {question: "operadores enteros y reales", answer: "int() para enteros, float() para reales"},
  {question: "operadores especiales", answer: "División //, módulo %, round() para redondear"},
  {question: "\\n", answer: "Salto de línea en texto"},

  // --- LISTAS ---
  {question: "lista", answer: "Conjunto ordenado de elementos, mutable, definido con [ ]"},
  {question: "len()", answer: "Número de elementos de una lista o cadena"},
  {question: "unión de listas", answer: "listafinal = listaoriginal + listanueva"},
  {question: "añadir elementos", answer: "lista.append('mesa') o lista + ['mesa']"},
  {question: "eliminar elemento", answer: "del lista[indice]"},
  {question: "lista vacía", answer: "Se crea con lista = list()"},
  {question: "último elemento de lista", answer: "Se accede con lista[-1]"},

  // --- TUPLAS ---
  {question: "tuplas", answer: "Similares a listas pero inmutables, definidas con ( )"},

  // --- DICCIONARIOS ---
  {question: "diccionarios", answer: "Estructura con pares clave-valor, se definen con { }"},
  {question: "diccionario vacío", answer: "d1 = dict()"},
  {question: "añadir elemento", answer: "diccionario['clave'] = valor"},
  {question: "eliminar elemento", answer: "del diccionario['clave']"},
  {question: "items()", answer: "Lista de pares clave-valor del diccionario"},
  {question: "keys()", answer: "Lista de todas las claves"},
  {question: "values()", answer: "Lista de todos los valores"},

  // --- CONDICIONALES ---
  {question: "if", answer: "Bloque de código que se ejecuta si se cumple la condición"},
  {question: "elif", answer: "Genera camino alternativo con condición de entrada"},
  {question: "else", answer: "Genera camino alternativo si no se cumple ninguna condición previa"},

  // --- BUCLES ---
  {question: "while", answer: "Ejecuta un bloque de código mientras se cumpla la condición"},
  {question: "for", answer: "Ejecuta un bloque de instrucciones repetitivamente sobre una colección iterable"},

  // --- DEFINICIÓN DE FUNCIONES ---
  {question: "Función", answer: "Bloque de código que contiene instrucciones y puede ser reutilizado tantas veces como necesites"},
  {question: "Entrada y salida de función", answer: "Recibir datos de entrada para su ejecución y devolver datos de salida de resultado"},
  {question: "Ventajas de las funciones", answer: "Simplificación del código, mejor organización y reutilización del código fuente"},
  {question: "Sintaxis de función en Python", answer: "def NombreFuncion(parametros): bloqueinstrucciones return Valor"},

  // --- SETS O CONJUNTOS ---
  {question: "Sets o conjuntos", answer: "Similar a las listas, pero sus elementos son únicos, desordenados e inmutables"},
  {question: "Crear set", answer: "s = set((4,5,6,7,8))"},
  {question: "Iterar set", answer: "Se pueden iterar de la misma forma que las listas"},
  {question: "Longitud de un set", answer: "len(s) devuelve el número de elementos"},
  {question: "Comprobar elemento en set", answer: "in permite saber si un elemento está en el set"},
  {question: "Añadir elemento a set", answer: "s.add(elemento)"},
  {question: "Eliminar elemento de set", answer: "s.remove(elemento)"},
  {question: "Eliminar elemento sin error si no existe", answer: "s.discard(elemento)"},
  {question: "Eliminar elemento aleatorio", answer: "s.pop()"},
  {question: "Vaciar set", answer: "s.clear()"},
  {question: "Unir dos sets", answer: "set1.union(set2)"},
  {question: "Intersección de sets", answer: "set1.intersection(set2)"},

  // --- SWITCH ---
  {question: "Switch", answer: "Estructura parecida a if/else que ejecuta un bloque según el valor de una condición"},
  {question: "Sintaxis básica de switch", answer: "switch(condicion) { case 1: //funcion break; case 2: //funcion break; }"},

  // --- SUBLISTAS (slicing) ---
  {question: "Sublistas", answer: "Permite acceder a partes de una lista usando slicing"},
  {question: "Ejemplo sublista 1", answer: "l = [1,2,3,4,5,6]; l[0:2] devuelve [1,2]"},
  {question: "Ejemplo sublista 2", answer: "l = [1,2,3,4,5,6]; l[2:6] devuelve [3,4,5,6]"},

  // --- PROGRAMACIÓN ORIENTADA A OBJETOS (POO) ---
  {question: "Paradigma POO", answer: "Modela con clases/objetos, encapsula datos y aporta herencia y composición para facilitar el desarrollo"},
  {question: "Clases - atributos", answer: "Información que almacena la clase"},
  {question: "Clases - métodos", answer: "Operaciones que pueden realizarse con la clase"},
  {question: "Composición en POO", answer: "Crea nuevas clases usando otras como atributos, formando una relación 'tiene un' y reutilizando código"},
  {question: "Ejemplo de composición", answer: "Una Biblioteca tiene Libros; un coche tiene motor, puertas y ruedas; un triángulo tiene tres puntos"},
  {question: "Clase simple - creación", answer: "class Punto: def __init__(self,x,y): self.X=x self.Y=y"},
  {question: "Atributo de clase", answer: "class Punto: z=0; def __init__(self,x,y): self.X=x self.Y=y"},
  {question: "Implementación de composición", answer: "Class Triangulo: def __init__(self, v1,v2,v3): self.V1=v1 self.V2=v2 self.V3=v3"},
  {question: "Creación de método en clase", answer: "Class Triangulo: def MostrarVertices(self): self.V1.MostrarPunto() self.V2.MostrarPunto() self.V3.MostrarPunto()"},
  {question: "Encapsulación - atributos públicos", answer: "self.X = x; self.Y = y"},
  {question: "Encapsulación - atributos privados", answer: "self.__X = x; self.__Y = y"},
  {question: "Getters y setters", answer: "Métodos necesarios para acceder o modificar atributos privados"},
  {question: "Herencia - clase base", answer: "class Animal: def __init__(self,nombre): self.nombre=nombre"},
  {question: "Herencia - método clase base", answer: "def hacer_sonido(self): return 'Sonido genérico'"},
  {question: "Herencia - clase derivada", answer: "class Perro(Animal): def __init__(self,nombre,raza): super().__init__(nombre); self.raza=raza"},
  {question: "Herencia - método sobreescrito", answer: "def hacer_sonido(self): return 'Guau'"},
  {question: "__str__", answer: "Def __str__(self) retorna f'P({self.X},{self.Y})' para representar el objeto como string"},
  {question: "__repr__", answer: "Def __repr__(self) retorna f'P({self.X},{self.Y})' para representación oficial del objeto"},
  {question: "__eq__", answer: "Def __eq__(self, otroPunto): return self.X==otroPunto.X and self.Y==otroPunto.Y para comparar igualdad"},
  {question: "__lt__", answer: "Def __lt__(self, value): return self.X < value.X para comparación menor que"},
  // --- PROGRAMACIÓN FUNCIONAL ---
{question: "Programación funcional en Python", answer: "Permite definir listas, diccionarios o cualquier tipo de colecciones de manera 'funcional'"},
{question: "Ejemplo lista por comprensión", answer: "lista = [x**2 for x in range(10) if x % 2 == 0]"},
{question: "Ejemplo diccionario por comprensión", answer: "diccionario = {x: x**2 for x in range(1,6)}"},
{question: "Función map", answer: "map(funcion_a_aplicar, entrada_iterable) aplica una función a todos los elementos de una colección"},
{question: "Función filter", answer: "filter(funcion_filtrar, entrada_iterable) filtra elementos de una colección según la función"},
{question: "Función all", answer: "all(lista) devuelve True si todos los elementos de la lista son True"},
{question: "Función any", answer: "any(lista) devuelve True si al menos un elemento de la lista es True"},
{question: "Lambda", answer: "Sintaxis: lambda argumentos: expresion; útil para map, filter o sorted"},
{question: "Ejemplo map con lambda", answer: "numeros = [1,2,3,4]; cuadrados = list(map(lambda x: x**2, numeros))"},
{question: "Ejemplo filter con lambda", answer: "numeros = [1,2,3,4]; pares = list(filter(lambda x: x % 2 == 0, numeros))"},

// --- RECURSIVIDAD ---
{question: "Recursividad", answer: "Cuando una función se llama a sí misma para resolver un problema dividiéndolo en partes más pequeñas"},
{question: "Condición de salida en recursividad", answer: "Siempre debe tener una condición de salida para evitar llamadas infinitas"},
{question: "Ejemplo factorial 4!", answer: "4! = 4 × 3 × 2 × 1 = 24"},
{question: "Ejemplo factorial 3!", answer: "3! = 3 × 2 × 1 = 6"},
{question: "Ejemplo factorial 2!", answer: "2! = 2 × 1 = 2"},
{question: "Ejemplo factorial 1!", answer: "1! = 1 (condición de salida)"}

];
; // Aquí pones todas tus preguntas tal como en la versión anterior

let shuffledQuestions = [];
let currentIndex = 0;
let score = 0;
let fails = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const counterEl = document.getElementById("counter");
const scoreboardEl = document.getElementById("scoreboard");
const resultEl = document.getElementById("result");
const nextBtn = document.getElementById("next-btn");
const restartBtn = document.getElementById("restart-btn");

function startTest() {
  shuffledQuestions = [...questions].sort(() => Math.random() - 0.5);
  currentIndex = 0;
  score = 0;
  fails = 0;
  nextBtn.style.display = "none";
  restartBtn.style.display = "none";
  resultEl.textContent = "";
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
    div.addEventListener("click", () => selectOption(div, current.answer));
    optionsEl.appendChild(div);
  });

  // Animación suave al mostrar pregunta
  optionsEl.style.opacity = 0;
  setTimeout(() => { optionsEl.style.transition = "opacity 0.3s"; optionsEl.style.opacity = 1; }, 50);
}

function selectOption(selectedDiv, correctAnswer) {
  const allOptions = document.querySelectorAll(".option");
  allOptions.forEach(opt => opt.style.pointerEvents = "none");

  if (selectedDiv.textContent === correctAnswer) {
    selectedDiv.classList.add("correct");
    score++;
  } else {
    selectedDiv.classList.add("incorrect");
    fails++;
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
  questionEl.textContent = "";
  optionsEl.innerHTML = "";
  nextBtn.style.display = "none";
  counterEl.textContent = "";
  scoreboardEl.textContent = "";
  resultEl.textContent = `✅ Has acertado ${score} de ${shuffledQuestions.length} preguntas. ❌ Fallos: ${fails}`;
  restartBtn.style.display = "block";
}

restartBtn.addEventListener("click", startTest);

startTest();
