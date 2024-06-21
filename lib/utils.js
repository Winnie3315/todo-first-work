
function reload(arr, component, place) {
    place.innerHTML = ""

    for(let item of arr) {
        place.append(component(item))
    }
}


function submit(form, arr) {
    let data = {
        id: crypto.randomUUID()
    }

    const fm = new FormData(form)

    fm.forEach((val, key) => data[key] = val)

    arr.push(data);
}



export {reload, submit}