require('dotenv').config();
const { Configuration, OpenAIApi } = require('openai');

// Initialize OpenAI API with your API key
const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

/**
 * Generate code suggestions or provide assistance based on user input.
 * @param {string} prompt - The prompt or query for assistance.
 * @param {number} [maxTokens=150] - The maximum number of tokens to generate.
 * @returns {Promise<string>} - The generated response from the API.
 */
async function generateResponse(prompt, maxTokens = 150) {
    try {
        const response = await openai.createCompletion({
            model: "text-davinci-003", // You can choose other models like "gpt-4" if available
            prompt: prompt,
            max_tokens: maxTokens,
            temperature: 0.7, // Controls the randomness; 0.7 is a good balance
        });

        return response.data.choices[0].text.trim();
    } catch (error) {
        console.error("Error generating response:", error);
        return "Sorry, I couldn't generate a response.";
    }
}

// Example use case: Assist with code generation
async function suggestCode(query) {
    const response = await generateResponse(query);
    console.log("Suggested Code:\n", response);
}

// Example use case: Provide code documentation
async function generateDocumentation(codeSnippet) {
    const query = `Generate documentation for the following code:\n\n${codeSnippet}`;
    const response = await generateResponse(query);
    console.log("Generated Documentation:\n", response);
}

// Export the functions for use in other files
module.exports = {
    suggestCode,
    generateDocumentation,
};
