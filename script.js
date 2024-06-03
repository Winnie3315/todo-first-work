const form = document.querySelector('form')
const inp = document.querySelector(".inp")
const btn = document.querySelector(".btn")
const container = document.querySelector(".container")
const todos = []

reload(todos, container)

form.onsubmit = (event) => {
    event.preventDefault()

    if (inp.value === '') {
        alert("fill")
        return
    }

    const fm = new FormData(form)

    const task = {
        id: crypto.randomUUID(),
        task: fm.get('title'),
        time: new Date().toLocaleTimeString(),
        isDone: false
    };

    todos.push(task)
    reload(todos, container)
    
}

function reload(arr, place) {
    place.innerHTML = ""

    arr.forEach((task, index) => {
        let item = document.createElement('div')
        let topSides = document.createElement('div')
        let title = document.createElement('span')
        let x = document.createElement('button')
        let time = document.createElement('span')

        item.classList.add('item')
        topSides.classList.add("top-sides")
        time.classList.add("time")

        title.innerHTML = task.task
        x.innerHTML = 'X'
        time.innerHTML = task.time

     
        title.ondblclick = () => {
            if (task.isDone === true) {
                task.isDone = false
                title.classList.remove('checked')
            } else {
                task.isDone = true
                title.classList.add('checked')
            }
        }

        
        if (task.isDone) {
            title.classList.add('checked')
        }

        x.onclick = () => {
            todos.splice(index, 1)
            reload(todos, container)
        }

        topSides.append(title, x)
        item.append(topSides, time)
        container.append(item)
    })
}