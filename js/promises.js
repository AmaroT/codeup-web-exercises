// const myPromise = fetch('https://api.github.com/users/AmaroT/events/public', {headers: {"Authorization" : `gitHubKey`}});
//
// myPromise.then(response => console.log(response.json()
//     .then(function(data){
//     console.log(data);
//         console.log(data[0].actor.login);
//         console.log(data[0].created_at);
//})))

//last commit that user made. Refernce the github api documentation to achieve this.

let getLastCommit = (username) =>{
    fetch(  `https://api.github.com/users/AmaroT/events`, {headers: {"authorization": `token ${gitHubKey}`}})
        .then((resp) => {
            console.log(resp);
            resp.json()
                .then((json) => {
                    console.log(json);
                    for(let event of json) {
                        if(event.type === "pushEvent"){
                            let localeString = new Data(event.create_at). toLocaleString("en_US");
                            let commit = event.payload.commits[0];
                            console.log(`Last commit made by ${username} at ${localeString}: \n${commit.sha.slice(-5)}`)
                            break;
                        }
                    }
                });
        });
};
//getLastCommit("AmaroT");
console.log(getLastCommit(''));

//Write a function named wait that accepts a number as a parameter, and returns a promise that resolves after the passed number of milliseconds.
let wait =(delay) => new Promise((resolve, _) => {
    setTimeout (() => {
        resolve();
    }, delay);
});
wait(3000).then(() => {console.log('amarot')});
