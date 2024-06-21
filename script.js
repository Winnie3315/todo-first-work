const form = document.querySelector('form');
const inp = document.querySelector(".inp");
const container = document.querySelector(".container");
const todos = [];

form.onsubmit = (event) => {
    event.preventDefault();

    if (inp.value === '') {
       alert("fill");
       return;
    }

    const fm = new FormData(form);
    const task = {
        id: crypto.randomUUID(),
        task: fm.get('title'),
        time: new Date().toLocaleTimeString(),
        isDone: false
    };

    todos.push(task);

    fetch('http://localhost:8080/todo', {
        method: 'POST',
        body: JSON.stringify(task)
    })
    .then(() => reload(todos, container))

};

function reload(arr, place) {
    place.innerHTML = "";

    arr.forEach((task, index) => {
        let item = document.createElement('div');
        let topSides = document.createElement('div');
        let title = document.createElement('span');
        let changeBtn = document.createElement("button")
        let x = document.createElement('button');
        let time = document.createElement('span');

        item.classList.add('item');
        topSides.classList.add("top-sides");
        time.classList.add("time");

         title.innerHTML = task.task;
         x.innerHTML = 'X';
         changeBtn.innerHTML = `<img src="./change.svg" alt="">`
         time.innerHTML = task.time;

        title.ondblclick = () => {
            task.isDone = !task.isDone;
            title.classList.toggle('checked', task.isDone);
        };

        if (task.isDone) {
            title.classList.add('checked');
        }

        x.onclick = () => {
            fetch(`http://localhost:8080/todo?id=${task.id}`, {
                method: 'DELETE',
                // body: JSON.stringify(task)
            })
            .then(res => reload(todos, container))
            // .then(() => {
            //     todos.splice(index, 1);
                
            // })
        };
        changeBtn.onclick = () => {
            fetch(`http://localhost:8080/todo?id=${task.id}`, {
                method: 'PATCH',
                body: JSON.stringify(task)
            })
        }  

        topSides.append(title, x, changeBtn);
        item.append(topSides, time);
        place.append(item);
    });
}
