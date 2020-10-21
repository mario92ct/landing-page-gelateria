let navbar =document.querySelector('#navbar') //lavoriamo sulla navbar l metodo Document querySelector() ritorna il primo Element all'interno del documento che corrisponde al selettore specificato o al gruppo di selettori
let navbarBrand =document.querySelector('#navbarBrand') //sul brand quindi logo della navbar 
let navbarCTAScroll =document.querySelector('#navbarCTAScroll') //sullo scroll della navbar 


if(window.innerWidth > 576) {   // window.innerHeight e window.innerWidth che rispecchiano la dimensione della finestra del browser non dello schermo del dispositivo SE dispositivi maggiorni di 576 PX ,allo scroll succedono queste cose
    document.addEventListener('scroll', ()=> {  //addeventlisteners specifica la funzione che deve essere richiamata.
        if (window.pageYOffset >20) {       // pageyoffest=è un alias di scroll . CONTROLLA SE HAI SCROLLATO PIU DI 20 PX 
            navbar.classList.remove('bg-transparent') // classlist=ci permette di modifcare lo stile al volo quando si scrolla piu di 20px la navbar toglie il trasparente
            navbar.classList.add('bg-white','shadow')  //diventa bianca con effetto ombra
            navbarBrand.src = "./loghi/logo gelateria3.jpg" //viene inserito un altro brand 
        } else {   //ALTRIMENTI
            navbar.classList.remove('bg-white','shadow')  //SI toglie bg bianco e effetto ombra 
            navbar.classList.add('bg-transparent')  //si aggiunge bg trasparente 
            navbarBrand.src = "./loghi/logogelaterianera2.jpg"  //e il logo principale
        } 

        if(window.pageYOffset > window.innerHeight) {  //allo scroll della pagina superiore ai 576 px rimuovi d-none di prenota adesso 
            navbarCTAScroll.classList.remove('d-none') 
        }else {
            navbarCTAScroll.classList.add('d-none')  // se non è oltre i 576 px continua a non mostrare il preota adesso
        }
        
    })
} else {
    navbar.classList.add('bg-white')  //sotto ai 576 px mi devi aggiungere la classe bg-white e il logo azzurro
    navbarBrand.src = "./loghi/logogelateriaazzurra2.jpg"
}


let final = new Date('october 30, 2020')  //deve fare il countdown fino al 30 Novembre 2021,data che finisce l offerta

let giorniMancanti = document.querySelector('#giorniMancanti')  //gli elementi che devono essere presi con l id che abbiamo messo nel html
let oreMancanti = document.querySelector('#oreMancanti')
let minutiMancanti = document.querySelector('#minutiMancanti')
let secondiMancanti = document.querySelector('#secondiMancanti')

function timer () {    //creiamo una funzione timer 
    let today = new Date()    //calcola la data odierna ,attuale 
    let diff = final - today   //calcolo della differenza tra la data finale e la data attuale

    let secondi = Math.floor ( diff/ 1000 % 60)                //calcolo per secondi,minuti ore e giorni per fare la differenza
    let minuti = Math.floor ( (diff / ( 1000 * 60 )) % 60)
    let ore = Math.floor ( (diff / (1000 * 60 * 60)) % 24)
    let giorni = Math.floor ((diff / (1000 * 60 * 60 *24)))

    giorniMancanti.innerHTML = (giorni > 9) ? giorni : "0" + giorni   //popolare i campi,chiediamo se giorni e maggiore di 9 ritornami i giorni altrimenti torna 0 piu giorni
    oreMancanti.innerHTML = (ore > 9) ? ore : "0" + ore
    minutiMancanti.innerHTML = (minuti > 9) ? minuti : "0" + minuti
    secondiMancanti.innerHTML = (secondi > 9) ? secondi : "0" + secondi

    
}
 setInterval(timer,1000)   //lancia la funzione timer ogni millemillesecondi

