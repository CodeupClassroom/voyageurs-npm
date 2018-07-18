"use strict";

// const name = require('./req');
// console.log(name);

















// ================= REQUIRE AS A SINGLE VALUE

    // const message = require('./require-example');
    // console.log(message);


// ================= REQUIRE AS A SINGLE OBJECT

    // const { sayName, additionalMessage } = require('./require-example'); // using destructuring
    //
    // console.log(additionalMessage);
    // sayName('Justin');

// ================= IMPORT WITH SEPARATE EXPORTS
//
//     import  {importMessage as message, anotherMessage, sayLastName}  from './import-example.js';
//
//     console.log(message);
//     console.log(anotherMessage);
//     sayLastName('Reich');


// ================= IMPORT WITH A SINGLE EXPORT

    // import { importMessage, anotherMessage, sayLastName } from './import-example.js';
    // console.log(importMessage);
    // console.log(anotherMessage);
    // sayLastName('Reich');


// ================= IMPORT SINGLE OBJECT WITH EXPORT DEFAULT

    // import importExample from './import-example.js';
    // console.log(importExample.importMessage);
    // console.log(importExample.anotherMessage);


// ================= API EXAMPLE


    import keys from './import-example.js';

    const token = keys.GITHUB_API_TOKEN;

    const getEvents = (username) => {
        const options = {
            headers: {
                Authorization: `token ${token}`,
            }
        };
        const url = `https://api.github.com/users/${username}/events/public`;
        return fetch(url);
    };

    getEvents('jreich5')
        .then(response => response.json())
        .then(data => {console.log(data)})
        .catch(e => console.log(e));