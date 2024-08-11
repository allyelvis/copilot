const copilot = require('./copilot');

// Example: Suggest code for a function
copilot.suggestCode("Write a function in JavaScript that takes an array of numbers and returns the sum.");

// Example: Generate documentation for a code snippet
const codeSnippet = `
function addNumbers(arr) {
    return arr.reduce((acc, num) => acc + num, 0);
}
`;
copilot.generateDocumentation(codeSnippet);
