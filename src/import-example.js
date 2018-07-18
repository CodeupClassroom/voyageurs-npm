// IMPORT WITH SEPARATE EXPORTS

    export const importMessage = "Hello from import example!";
    export const anotherMessage = "Another howdy!";

    export const sayLastName = lastName => {
        console.log(`My name is: ${lastName}`);
    };





// IMPORT WITH A SINGLE EXPORT

    const importMessage = "Hello from import example!";
    const anotherMessage = "Another howdy!";

    const sayLastName = lastName => {
        console.log(`My name is: ${lastName}`);
    };


    export default {importMessage, anotherMessage, sayLastName};
