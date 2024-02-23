
//In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa

const invited = ["Mario", "Emilio", "Ale", "Stefano", "Giovanni"];
const user_invited = prompt("Insert your name");

let invitated = false;

for (let i = 0; i < invited.length; i++) {
    if (invited[i] === user_invited) {
        invitated = true;
        console.log("You are in");
        break; 
    }
}

if (!invitated) {
    console.log("Try another time");
}
