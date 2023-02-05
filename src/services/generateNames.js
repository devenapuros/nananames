const cohere = require("cohere-ai");
cohere.init("EZgX20J3Yt1f4zfNKpoRn3pB1j0we7KSxSxXSqqO"); // This is your trial API key
(async () => {
    const response = await cohere.generate({
        model: "command-xlarge-nightly",
        prompt: "Generate a list of twelve funny names for a pet, which is a snake and has the following characteristics:\npython snake, yellow and green color , brown spots all over the body.",
        max_tokens: 300,
        temperature: 1.2,
        k: 0,
        p: 0.75,
        frequency_penalty: 0,
        presence_penalty: 0,
        stop_sequences: [],
        return_likelihoods: "NONE",
    });
    console.log(response.body.generations[0].text);
})();
