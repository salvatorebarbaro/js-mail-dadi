// inserisci il maniaco che guarda il pulsante
// per prima cosa noi dobbiamo dichiarare le 2 variabili
// dichiareremo le variabili per il numero utente ed il numero del pc
// successivamente per ogni numero sia utente che pc andremo a calcolarlo tramite questa funzione esempio=(scelta_computer = Math.floor(Math.random() * 5)+1;)
//  andremo a restituire il valore all' interno degli input con id numero utente per il numero randomico dell utente mentre faremo la stessa cosa che al posto dell'utente sara per il computer
// successivamente andremo a compire dei controlli sui 2  valori e dopo andremo a controllare secondo i nostri paramentri e restituiremo i valoria  schermo 


// Dichiarazione variabile associata al pulsante
const buttonElement = document.querySelector("#pulsante");

// Dichiarazione variabile associata al div risultato
const risultato = document.querySelector("#risultato");



// Aggiungi un ascoltatore di eventi al pulsante
buttonElement.addEventListener("click", function() 
{

    // Svuota il contenuto del div risultato cosi da non avere tutti i risultati incolonnati
    risultato.innerHTML = "";

    // Dichiarazione variabili per il numero utente ed il numero del computer
    let numeroUtente = Math.floor(Math.random() * 6) + 1;
    let numeroComputer = Math.floor(Math.random() * 6) + 1;

    // Assegnamento dei valori agli input
    document.getElementById("numeroUtente").value = `${numeroUtente}`;
    document.getElementById("numeroComputer").value = `${numeroComputer}`;

    // Creazione di un nuovo elemento div
    const newElement = document.createElement("div");
    // class list usata per dare più classi al nostro elemento

    // problema riscontrato nel centrare il div 
    
    newElement.classList.add("col", "d-flex", "justify-content-center","text-center", "fs-3");
    

    // Confronto e visualizzazione del risultato
    if (numeroUtente === numeroComputer) 
    {
        // Se i numeri sono uguali, mostra un messaggio di pareggio
        newElement.innerHTML += `${"Hai pareggiato!"}`;
        // classe usata per inserire la classe colore al nostro new element
        newElement.className=("text-warning");
        risultato.append(newElement);
    } else if (numeroUtente > numeroComputer) 
    {
        // Se il numero dell'utente è maggiore, mostra un messaggio di vittoria
        newElement.innerHTML += `${"Hai vinto bravo!!"}`;
        newElement.className=("text-danger");
        risultato.append(newElement);
    } else 
    {
        // Se il numero del computer è maggiore, mostra un messaggio di sconfitta
        newElement.innerHTML += `${"Hai perso bravo, avevo scommesso sul computer!!"}`;
        newElement.className=("text-success");
        risultato.appendChild(newElement);
    }
});







