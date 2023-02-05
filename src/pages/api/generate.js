import cohere from "cohere-ai";
cohere.init("EZgX20J3Yt1f4zfNKpoRn3pB1j0we7KSxSxXSqqO"); // This is your trial API key

export default async function handler(req, res) {
    let params = req.body;
    console.log("Params", params);
    res.status(200).json({ name: "John Doe" });
}
