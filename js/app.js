// Obtener elementos del DOM
const newTaskInput = document.getElementById('new-task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');

// Lista de tareas
let tasks = [];

// Agregar tarea
function addTask(task) {
  tasks.push(task);

  // Actualizar la lista de tareas en el DOM
  updateTaskList();
}

// Eliminar tarea
function deleteTask(index) {
  tasks.splice(index, 1);

  // Actualizar la lista de tareas en el DOM
  updateTaskList();
}

// Marcar tarea como completada
function completeTask(index) {
  tasks[index].completed = true;

  // Actualizar la lista de tareas en el DOM
  updateTaskList();
}

// Actualizar la lista de tareas en el DOM
function updateTaskList() {
  taskList.innerHTML = '';

  tasks.forEach((task, index) => {
    const li = document.createElement('li');
    li.textContent = task.text;

    if (task.completed) {
      li.classList.add('completed');
    }

    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete-btn');
    deleteBtn.innerHTML = '&times;';
    deleteBtn.addEventListener('click', () => {
      deleteTask(index);
    });

    const completeBtn = document.createElement('button');
    completeBtn.classList.add('complete-btn');
    completeBtn.textContent = 'Complete';
    completeBtn.addEventListener('click', () => {
      completeTask(index);
    });

    li.appendChild(deleteBtn);
    li.appendChild(completeBtn);
    taskList.appendChild(li);
  });
}

// Escuchar el evento submit del formulario para agregar una tarea
document.querySelector('form').addEventListener('submit', (event) => {
  event.preventDefault(); // Prevenir comportamiento por defecto

  const taskText = newTaskInput.value.trim(); // Obtener valor
  if (!taskText) {
    return; // No agregar tarea vacía
  }

  const task = { text: taskText, completed: false };
  addTask(task);

  newTaskInput.value = ''; // Limpiar input
});

// Inicializar la lista de tareas al cargar la página
updateTaskList();