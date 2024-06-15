import axios from "axios";

export async function postQuestion(question) {
  try {
    const response = await axios.post(
      "http://127.0.0.1:8001/ask",
      { text: question },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log(response);
    return response.data.response;
  } catch (e) {
    console.log(e);
  }
}
