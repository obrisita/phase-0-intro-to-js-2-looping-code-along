const names = ["Susie", "Omar J", "Micah"]

function writeCards(names, event) {
    const message = []
     for (let i = 0; i < names.length; i++) {
         message[i] = `Thank you, ${names[i]}, for the wonderful ${event} gift!`
         debugger;
     }
     return message;
}
writeCards(names, "birthday");

function countDown(num) {
    while (num>= 0){
        console.log(num)
        num--
    }
}