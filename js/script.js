let container = document.querySelector('.container');



// funzioni
function createSquare(){
    const node = document.createElement('div');
    node.className = 'square';

    return node;
}

function creazioneGriglia (valoreSwitchRiga, valoreColonna) {
    // crea la riga
    for (let i = 0 ; i < valoreSwitchRiga ; i++) {
        for (let k = 0 ; k < valoreColonna  ; k++) {
            const divEl = createSquare();
            container.appendChild(divEl)

            divEl.addEventListener('click', function(){
                this.classList.add('clicked-true');
            })

            
        }
    }
}


// prendo imput da mettere come difficolta che poi andra nella funzione
const diff = parseInt(prompt('inserisci difficolta : 1 facile , 2 medio, 3 difficile'));

let numeroRighe;
let numeroColonne;
switch (diff) {
    case 1: numeroRighe = 10;
            numeroColonne = 10;
    break;
    case 2: numeroRighe = 9;
            numeroColonne = 92;
    break;
    case 3: numeroRighe = 7;
            numeroColonne = 7;
    break;
    default: numeroRighe = 10;
             numeroColonne = 10;
}

let funzione = creazioneGriglia(numeroRighe,numeroColonne);


// prendo il singolo div

