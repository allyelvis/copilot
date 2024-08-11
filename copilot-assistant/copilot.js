require('dotenv').config();
const { Configuration, OpenAIApi } = require('openai');

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

async function generateResponse(prompt, maxTokens = 150) {
    try {
        const response = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: prompt,
            max_tokens: maxTokens,
            temperature: 0.7,
        });

        return response.data.choices[0].text.trim();
    } catch (error) {
        console.error("Error generating response:", error);
        return "Sorry, I couldn't generate a response.";
    }
}

async function suggestCode(query) {
    const response = await generateResponse(query);
    console.log("Suggested Code:\n", response);
}

async function generateDocumentation(codeSnippet) {
    const query = `Generate documentation for the following code:\n\n${codeSnippet}`;
    const response = await generateResponse(query);
    console.log("Generated Documentation:\n", response);
}

module.exports = {
    suggestCode,
    generateDocumentation,
};
