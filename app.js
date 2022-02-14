// richiamo il container per gli elementi
const contenitore = document.querySelector('.container')





// ciclo for per stampare numeri da 1 a 100
for (let i = 1; i <=100; i++) {
    // creazione elemento html e aggiunta classe
    const div = document.createElement('div')
    div.append([i])
    div.classList.add('box')
    console.log(div) 

    // verifica per che numeri è divisibile 
    if(i % 3 === 0 && i % 5 ===0){
        console.log(i,'fizzbuzz');
    } else if(i % 3 === 0){
        console.log(i,'fizz')
    } else  if(i % 5 ===0) {
        console.log(i,'buzz')
    } else{
        console.log(i)
    }

    contenitore.append(div)

}