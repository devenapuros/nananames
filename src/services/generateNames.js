import cohere from "cohere-ai";

const API_KEY = "EZgX20J3Yt1f4zfNKpoRn3pB1j0we7KSxSxXSqqO";
cohere.init(API_KEY);

export const generateNames = async (pet, characteristics) => {
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
    // console.log(names_string);
    let names_array = names_string.split("\n");
    names_array = names_array.map((name) => {
        var match = name.match(/\d+\.(.*)/);
        if (match) {
            return match[1].trim();
        }
    });
    names_array = names_array.filter(Boolean);
    return names_array;
};
