// import { Option } from "./components/Option.js"
// import { Todo } from "./components/Todo.js"
// import { reload, submit } from "./lib/utils.js"

// const forms = Array.from(document.forms)
// const select = document.getElementById('categs')
// const ul = document.querySelector('ul')
// const store = {
//     todos: [],
//     categories: []
// }

// forms.forEach((form) => {
//     form.onsubmit = (e) => {
//         e.preventDefault();

//         submit(e.target, store[form.name])

//         if(form.name === 'categories') {
//             reload(store[form.name], Option, select)
//         } else {
//             reload(store[form.name], Todo, ul)
//         }

//     }
// })









// const categoryForm = document.forms['categories']
// const todoForm = document.forms['todos']
// const categorySelect = document.getElementById('categs')
// const todoList = document.querySelector('ul')

// const categories = []
// const todos = []

// categoryForm.onsubmit = (e) => {
//     e.preventDefault()
//     const categoryTitle = categoryForm.title.value
//     if (categoryTitle) {
//         categories.push(categoryTitle)
//         reloadCategory(categories, categorySelect)
//         categoryForm.reset()
//     }
// };

// todoForm.onsubmit = (e) => {
//     e.preventDefault()
//     const todoTitle = todoForm.title.value
//     const todoDescription = todoForm.description.value
//     const todoDeadline = todoForm.deadline.value
//     const todoCategory = todoForm.category.value
    
//     if (todoTitle && todoDescription && todoDeadline && todoCategory) {
//         todos.push({
//             title: todoTitle,
//             description: todoDescription,
//             deadline: todoDeadline,
//             category: todoCategory
//         })
//         reloadTodos(todos, todoList)
//         todoForm.reset()
//     }
// }

// function reloadCategory(arr, place) {
//     place.innerHTML = ''
//     arr.forEach(category => {
//         const option = document.createElement('option')
//         option.value = category
//         option.innerHTML = category
//         place.append(option)
//     })
// }

// function reloadTodos(arr, place) {
//     place.innerHTML = ''
//     arr.forEach(todo => {
//         const li = document.createElement('li')
//         li.innerHTML = `${todo.title} - ${todo.description} - ${todo.deadline} - ${todo.category}`
//         place.append(li)
//     })
// }

// //создание функций для разделений на категории
// //может изначально надо извлечь все категории?

// categories.forEach((category) =>{
//     const categoryTask = title.filter((task) => {task.category === category.title})
// })


const categoryForm = document.forms['categories'];
const todoForm = document.forms['todos'];
const categorySelect = document.getElementById('categs');
const todoContainer = document.getElementById('todo-container');

const categories = [];
const Todos = [];
const categoryTasks = {};

categoryForm.onsubmit = (e) => {
    e.preventDefault();
    const categoryTitle = categoryForm.title.value;
    if (categoryTitle && !categories.includes(categoryTitle)) {
        categories.push(categoryTitle);
        categoryTasks[categoryTitle] = [];
        reloadCategory(categories, categorySelect);
        setCategory(categoryTitle, todoContainer);
        categoryForm.reset();
    }
}

todoForm.onsubmit = (e) => {
    e.preventDefault();
    const todoTitle = todoForm.title.value;
    const todoDescription = todoForm.description.value;
    const todoDeadline = todoForm.deadline.value;
    const todoCategory = todoForm.category.value;
    if (todoTitle && todoDescription && todoDeadline && todoCategory) {
        if (categoryTasks[todoCategory]) {
            categoryTasks[todoCategory].push({
                title: todoTitle,
                description: todoDescription,
                deadline: todoDeadline,
            });
            reloadTodos(categories, categoryTasks, todoContainer);
            todoForm.reset();
        }
    }
}

function reloadCategory(arr, place) {
    place.innerHTML = "";
    arr.forEach((item) => {
        const option = document.createElement("option");
        option.value = item;
        option.innerHTML = item;
        place.append(option);
    });
}

function setCategory(categoryTitle, place) {
    const categoryDiv = document.createElement('div');
    const categoryH = document.createElement('h2');
    const todoList = document.createElement('ul');

    categoryDiv.classList.add('category');
    categoryDiv.id = `category-${categoryTitle}`;

    categoryH.innerText = categoryTitle;
    
    categoryDiv.append(categoryH, todoList);
    place.append(categoryDiv);
}

function reloadTodos(arr, obj, place) {
    arr.forEach((item) => {
        const categoryDiv = document.getElementById(`category-${item}`);
        if (categoryDiv) {
            const todoList = categoryDiv.querySelector("ul");
            if (todoList) {
                todoList.innerHTML = '';

                const tasks = obj[item];
                tasks.forEach((el) => {
                    const li = document.createElement('li');
                    li.innerHTML = `${el.title} - ${el.description} - ${el.deadline}`;
                    todoList.append(li);
                });
            }
        }
    });
}

// const categoryForm = document.forms['categories']
// const todoForm = document.forms['todos']
// const categorySelect = document.getElementById('categs')
// const todoContainer = document.getElementById('todo-container')

// const categories = []
// const Todos = []
// const categoryTasks = {}

// categoryForm.onsubmit = (e) => {
//     e.preventDefault()
//     const categoryTitle = categoryForm.title.value
//     if (categoryTitle && !categories.includes(categoryTitle)) {
//         categories.push(categoryTitle)
//         categoryTasks[categoryTitle] = []
//         reloadCategory(categories, categorySelect)
//         setCategory(categoryTitle, todoContainer)
//         categoryForm.reset()
//     }
    
// }

// todoForm.onsubmit = (e) =>{
//     e.preventDefault()
//     const todoTitle = todoForm.title.value
//     const todoDescription = todoForm.description.value
//     const todoDeadline = todoForm.deadline.value
//     const todoCategory = todoForm.category.value
//     if (todoTitle && todoDescription && todoDeadline && todoCategory) {
//         if (categoryTasks[todoCategory]) {
//             categoryTasks[todoCategory].push({
//                 title: todoTitle,
//                 description: todoDescription,
//                 deadline: todoDeadline,
//             })
//             reloadTodos(categories, categoryTasks, todoContainer)
//             todoForm.reset()
//         }

//     }
// }

// function reloadCategory(arr, place) {
//     place.innerHTML = ""
//     arr.forEach((item) => {
//         const option = document.createElement("option")
//         option.value = item
//         option.innerHTML = item
//         place.append(option)
//     })
// }
// function setCategory(categoryTitle, place){
//     // place.innerHTML = ""
//     const categoryDiv = document.createElement('div')
//     const categoryH = document.createElement('h2')
//     const todoList = document.createElement('ul')

//     categoryDiv.classList.add('category')
//     categoryDiv.id = `category-${categoryTitle}`

//     categoryDiv.append(categoryH, todoList)
//     place.append(categoryDiv)

// }

// function reloadTodos(arr, obj, place){
//     place.innerHTML = ""
//     arr.forEach((item) => {
//         const categoryDiv = document.getElementById(`category-${item}`)
//         if(categoryDiv){
//             const todoList = categoryDiv.querySelector("ul")
//             if (todoList) {
//                 todoList.innerHTML = ''

//                 const tasks = obj[item]
//                 tasks.forEach((el) => {
//                     const li = document.createElement('li');
//                     li.innerHTML = `${el.title} - ${el.description} - ${el.deadline}`
//                     todoList.append(li)
//                 })
//             }
//         }
//     })
// }
// categoryForm.onsubmit = (e) =>{
//     e.preventDefault()
//     const categoryTitle = categoryForm.title.value
//     if (categoryTitle && !categories.includes(categoryTitle)) {
//         categories.push(categoryTitle)
//         categoryTasks[categoryTitle] = []
//         reloadCategory(categories, categorySelect)
//         setCategory(categoryTitle, todoContainer)
//         categoryForm.reset()
//     }
// }
// todoForm.onsubmit = (e) => {
//     e.preventDefault();
//     const todoTitle = todoForm.title.value;
//     const todoDescription = todoForm.description.value;
//     const todoDeadline = todoForm.deadline.value;
//     const todoCategory = todoForm.category.value;
//     if (todoTitle && todoDescription && todoDeadline && todoCategory) {
//         if(categoryTasks[todoCategory]){
//             categoryTasks[todoCategory].push({
//                 title: todoTitle,
//                 description: todoDescription,
//                 deadline: todoDeadline,
//             })
//             reloadTodos(categories, categoryTasks, todoContainer)
//             todoForm.reset()
//         }
//     }
// }
// function reloadCategory(arr, place) {
//     // place.innerHTML = ''
//     arr.forEach((category) => {
//         const option = document.createElement('option')
//         option.value = category
//         option.innerHTML = category
//         place.append(option)
//     })
// }
// function reloadTodos(arr, obj, place) {
//     // place.innerHTML = ""
//     arr.forEach((item) => {
//         const categoryDiv = document.getElementById(`category-${item}`)
//         if (categoryDiv) {
//             const todoList = categoryDiv.querySelector('ul')
//             if (todoList) {
//                 todoList.innerHTML = ''

//                 const tasks = obj[item]
//         tasks.forEach((elem) => {
//             const li = document.createElement('li');
//             li.innerHTML = `${elem.title} - ${elem.description} - ${elem.deadline}`
//             todoList.append(li)
//         })
//             }
//         }
      
        

        
//     })
// }
// function setCategory(categoryTitle, place) {
//     place.innerHTML = ""
//     const categoryDiv = document.createElement('div')
//     const categoryHeader = document.createElement('h3')
//         const todoList = document.createElement('ul');

//     categoryDiv.classList.add('category')
//     categoryDiv.id = `category-${categoryTitle}`

//     categoryHeader.innerHTML = categoryTitle
//     categoryDiv.append(todoList, categoryHeader)
//     place.append(categoryDiv)
// }
