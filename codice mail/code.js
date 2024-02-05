// creiamo una cost array vuoto  
// successivamente andiamo ad inserire un event listener al bottone
// quando verrà premuto questo bottone noi andremo a creare o ad inserire un for di 10 elementi che andrà ad inserire 10 email create in modo randomico ,
// successivamente andremo a compiere un controllo sull'array se è presente l'email che ha inserito l'utente 
// se non è presente noi andremo a inserire 2 bottoni e una stringa che chiede se si vuole inserire l'email nell'archivio
// vado a ripetere il loop con l'email inserita 
// esce dal loop.  

// dichiarazione dell'array
const archivi = [];

// for usato per "generare randomicamente " le email.
for (let i = 0; i < 10; i++) {
    // i caratteri con cui noi andremo a fare le email random 
    const lettere = "abcdefghilmnopqrstuvxyzABCDEFGHILMNOPQRSTUVXYJZ0123456789";
    //const lettere =["a","b","c"];

    // dichiariamo questo per far sì che noi rimaniamo nel range di valori che abbiamo nella costante lettere 
    const L = lettere.length;
    // lunghezza stringa da generare
    const N = 10;
    // dichiarazione stringa vuota 
    let stringa = "";
    // ciclo che ci inserisce valori all'interno della stringa fino a che non arriviamo al valore di n
    for (let j = 0; j < N; j++) {
        // aggiungiamo nell'elemento stringa un elemento nel range di valori di L compreso tra i valori di lettere usando la variabile che usiamo per procurarci un valore random
        stringa += lettere[Math.floor(Math.random() * L)];
    }
    // aggiungiamo la stringa creata in modo random all'indirizzo gmail per poi inserirla nell'array 
    const indirizzo_email = stringa + "@gmail.com";
    archivi.push(indirizzo_email);
    //console.log(archivio);
}

console.log(archivi);

// selezione del bottone
const buttonElement = document.querySelector("#button");

// impostiamo un "osservatore " sul bottone.
buttonElement.addEventListener("click", function () {
    // comando usato per prendere il valore inserito nella casella email
    const emailUser = document.getElementById("casella-email").value;
    // stampiamo il risultato
    console.log(emailUser);
    // creata costante fuori perché senno ripete dichiarazione 
    const messaggio_risposta = document.createElement("div");

    // dichiarazione del container
    const container_risposta = document.querySelector("#container_risposta");
    const container_buttons = document.querySelector("#container_buttons");

    for (let i = 0; i < archivi.length; i++) {
        if (emailUser == archivi[i]) {
            // se la variabile sopra riportata è vera noi inseriamo un elemento a schermo
            messaggio_risposta.innerText = "Puoi accedere all'archivio, la tua email è presente";
            // stringa di codice che stilizza messaggio positivo
            messaggio_risposta.classList.add("p-1", "bg-success");
            // best practis per quanto riguarda lo svuotare l'elemento prima di inserire
            container_risposta.innerHTML = "";  // Rimuovi eventuali contenuti precedenti
            // abbiamo agganciato l'elemento al container rispota
            container_risposta.appendChild(messaggio_risposta);
            console.log(messaggio_risposta);
            break;
        } else {
            // se la variabile sopra riportata è vera noi inseriamo un elemento a schermo
            messaggio_risposta.innerText = "Non puoi accedere all'archivio, la tua email non è presente";
            // stringa di codice che stilizza messaggio positivo
            messaggio_risposta.classList.add("p-1", "bg-danger", "rounded","my-3");
            // best practis per quanto riguarda lo svuotare l'elemento prima di inserire
            container_risposta.innerHTML = "";  // Rimuovi eventuali contenuti precedenti
            // abbiamo agganciato l'elemento al container rispota
            container_risposta.appendChild(messaggio_risposta);
            console.log(messaggio_risposta);
            // abbiamo creato un bottone
            const bottone1 = document.createElement("button");
            // inserimento del testo nell btn
            bottone1.innerText = "Vuoi aggiungere email?";
            // stile
            bottone1.classList.add("btn-success", "p-1", "my-4", "rounded","btn");
            // abbiamo creato un bottone
            const bottone2 = document.createElement("button");
            // inserimento del testo nell btn
            bottone2.innerText = "Non vuoi aggiungere email?";
            // stile
            bottone2.classList.add("btn-danger", "p-1", "my-4", "rounded","btn");

            container_buttons.innerHTML = "";  // Rimuovi eventuali contenuti precedenti
            // appeso i 2 elementi 
            container_buttons.appendChild(bottone1);
            container_buttons.appendChild(bottone2);
            // aggiunto funzione che parte al click dell'elemento
            bottone1.addEventListener("click",
            function()
            {
               // comando usato per inserire email nel nostro array
               archivi.push(emailUser);
               // ricontrollo dell'array se presente useremail
               for(let i=0;i<archivi.length;i++)
               // comando inserito per rimuovere stile precedente
               {messaggio_risposta.classList.remove ("bg-danger");
                  
                  if(emailUser == archivi[i])
                  {
                     
                     // se la variabile sopra riportata è vera noi inseriamo un elemento a schermo
                     messaggio_risposta.innerText = "Puoi accedere all'archivio, la tua email è presente";
                     messaggio_risposta.classList.add("p-1", "bg-success");

                     container_risposta.innerHTML = "";  // Rimuovi eventuali contenuti precedenti
                     container_risposta.appendChild(messaggio_risposta);
                     console.log(messaggio_risposta);
                     break;
                  }
               }
            }
            
            )
            // aggiunto funzione che parte al click dell'elemento
            bottone2.addEventListener("click",
            function()
            {
               location.reload();
            }
            )
        }
    }
});





