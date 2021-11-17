const container = document.querySelector('.container');

let items ='';

switch (difficolta) {
    default:
        n = 100;
        break;
}



function addSquare() {
    const node = document.createElement('div');
    node.className = 'square';

    return node;
}

for (let i = 0; i < n; i++) {
    const divEL = addSquare();
    container.appendChild(divEL);

    divEL.addEventListener('click', function() {
        this.classList.add('clicked-true');
    })

}