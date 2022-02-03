
/**
 * Hello
 * How are you? 
 * Bye
 */
function exampleOfSynchronousFunction() {
    console.log('Hello');
    bloquingOperation();
    console.log('Bye');
}



function bloquingOperation() {
    let now = new Date().getTime();
    while(new Date().getTime() < now + 5000){ }
    console.log('How are you?');
}

export {exampleOfSynchronousFunction};