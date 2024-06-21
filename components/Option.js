
function Option(item) {
    let opt = document.createElement('option')

    opt.value = item.title
    opt.innerHTML = item.title

    return opt
}


export {Option}