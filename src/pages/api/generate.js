/* eslint-disable quotes */
import cohere from "cohere-ai";
cohere.init(process.env.COHERE_API_KEY); // This is your trial API key

export default async function handler(req, res) {
    let { pet, characteristics } = req.body;
    if (!pet && !characteristics)
        res.status(400).json({
            statusText: "Missing parameters for complete the request",
        });

    let prompt = `Generate a list of twelve funny names for a pet, which is a ${pet}.`;
    if (characteristics && characteristics.length > 0) {
        prompt = `Generate a list of twelve funny names for a pet, which is a ${pet} and has the following characteristics:`;
        characteristics.map((item) => {
            prompt += ` ${item},`;
        });
    }

    const response = await cohere.generate({
        model: "command-xlarge-nightly",
        prompt,
        max_tokens: 300,
        temperature: 1.2,
        k: 0,
        p: 0.75,
        frequency_penalty: 0,
        presence_penalty: 0,
        stop_sequences: [],
        return_likelihoods: "NONE",
    });
    const names_string = response.body.generations[0].text;
    console.log(names_string);
    let names_array = names_string.split("\n");
    names_array = names_array.map((name) => {
        var match = name.match(/\d+\.(.*)/);
        if (match) {
            return match[1].trim();
        }
    });
    names_array = names_array.filter(Boolean);
    res.status(200).json({ names: names_array });
}

// res.status(200).json({ prompt });
// prompt: "Generate a list of twelve funny names for a pet, which is a snake and has the following characteristics:\npython snake, yellow and green color , brown spots all over the body.",
