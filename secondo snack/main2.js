console.log("10");


//L’utente inserisce due parole in successione, con due prompt.
//Il software stampa prima la parola più corta, poi la parola più lunga.


const password1 = prompt("Type you first password");
const password2 = prompt("type you second password");


const user1_pass_lenght = password1.length

const user2_pass_lenght = password2.length


if (password1.length > password2.length) {
    console.log(password2).length;

} else if (password1.length < password2.length) {
    console.log(password1.length);
} else {
 
    console.log("type password different ");
}
