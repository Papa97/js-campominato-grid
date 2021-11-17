const container = document.querySelector('.container');

const difficoltaU = prompt('inserisci difficolta') ;


switch (difficoltaU) {
    default:
        n = 100;
        break;
    case 'media':
        n = 81;
        break;
    case 'difficile':
        n = 49;
        break;
    case 'facile':
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