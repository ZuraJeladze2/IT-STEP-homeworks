let add = () => {
    let root = document.querySelector('.inputs')
    let inputDiv = document.createElement('div')
    let input = document.createElement('input')
    let btn = document.createElement('button')
    btn.innerText = 'Delete'
    btn.addEventListener('click', (e) => {
        e.target.parentElement.remove()
    })
    inputDiv.classList.add('input')
    inputDiv.append(input, btn)
    root.appendChild(inputDiv)
}
