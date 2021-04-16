while(!Speler1){
    var Speler1 = prompt('Naam Speler Rood: ');
}

var Speler1Kleur = 'red'

while(!Speler2){
    var Speler2 = prompt('Naam Speler Geel: ');
}
var Speler2Kleur = 'red'

var RijTabel = document.getElementsByTagName('tr') // maken van Rij variabelen
var Tabelveld = document.getElementsByTagName('td') // maken van Cellen variabelen voor Array
var Spelersbeurt = document.querySelector('.Beurt-speler') // Wie is aan de beurt
var Velden = document.querySelectorAll('.Veld') // Het ophalen van ALLE eigenschappen de class .Veld
var ResetKnop = document.querySelector('button') // Reset knop 

var CurrentPlayer = 1

Spelersbeurt.textContent = `${Speler1}'s beurt` // Test die boven moet komen te staan

for (i = 0; i < Tabelveld.length; i ++){  // het maken van een click event voor alle cellen! Logt de geliclickte cellen
    Tabelveld[i].addEventListener('click', (e) =>{ 
        console.log(`${e.target.parentElement.rowIndex},${e.target.cellIndex}`) // Eerste deel welke rij , welke column
    });
};

function bepaalAchtergrondkleur(e){
    // Get clicked column index
    let column = e.target.cellIndex;
    let row = [];
    for (i = 5; i > -1; i--){  // Kijken van ondere naar boven
        if (RijTabel[i].children[column].style.backgroundColor == 'white'){ // vult de eerst volgende cell in de colum met de juiste kleur
            row.push(RijTabel[i].children[column]);
            if (CurrentPlayer === 1){
                row[0].style.backgroundColor = 'red'; // rood voor speler 1
                return CurrentPlayer = 2
            }else{
                row[0].style.backgroundColor = 'yellow'; // Geel voor speler 2
                    return CurrentPlayer = 1; // wisselt weer terug van speler
                }
                
            }
        }
    }


Array.prototype.forEach.call(Tabelveld, (cell) => { // geef alle vakken op het schrem achtergrond 'white'
        cell.addEventListener('click', bepaalAchtergrondkleur);
    // Set all slots to white for new game.
    cell.style.backgroundColor = 'white';
});

ResetKnop.addEventListener('click', () => { // reset knop die alle vakken weer white maakt en de volgende speler aangeeft.
    Velden.forEach(Veld => {
        Veld.style.backgroundColor = 'white';
    });
    Spelersbeurt.style.color = 'black';
    return (CurrentPlayer === 1 ? Spelersbeurt.textContent = `${Speler1}'s turn` : Spelersbeurt.textContent = `${Speler2}'s turn`);
});