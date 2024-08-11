const copilot = require('./copilot');

copilot.suggestCode("Write a function in JavaScript that takes an array of numbers and returns the sum.");

const codeSnippet = `
function addNumbers(arr) {
    return arr.reduce((acc, num) => acc + num, 0);
}
`;
copilot.generateDocumentation(codeSnippet);
