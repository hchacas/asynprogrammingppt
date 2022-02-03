

/**
 * Hello
 * Bye
 * How are you? 
 */
async function exampleOfAsyncFunction() {
    console.log('Hello');
    await asyncFunction();
    console.log('Bye');
}

function asyncFunction() {
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            howAreYou();
            resolve();
        }, 1000);
    })
    
}

function howAreYou(){
    console.log('How are you?');
}




export {exampleOfAsyncFunction};