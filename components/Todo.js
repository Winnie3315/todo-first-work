
function Todo(item) {
    let li = document.createElement('li')

    li.innerHTML = `${item.title} <b>${item.category}</b>`

    return li
}

function todoReload(arr, place) {
    
}

export {Todo}