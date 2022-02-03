import 'whatwg-fetch';





function makeRequestLikeANoob() {
    let response = fetch('http://localhost:8080/');
    console.log(response);

    console.log(JSON.stringify(response.json()));
}











function makeHeavyRequestAsync() {
    fetch('http://localhost:8080/').then((response) => {
        console.log(response);
        response.json().then((resp, _reje) => {
            console.log(JSON.stringify(resp));
        })
        .catch((_err) => {
            console.log("Error!");
        });
    });
}

// async function makeHeavyRequestAsync() {
//     try {
//         let response = await fetch('http://localhost:8080/');
    
//         console.log(JSON.stringify(await response.json()));
//     } catch(_err) {
//         console.log("Error!");
//     }
// }


export {makeHeavyRequestAsync, makeRequestLikeANoob};




