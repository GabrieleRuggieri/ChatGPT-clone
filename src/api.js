// api.js

export const fetchResponse = async (message, apiKey) => {
    const apiUrl = 'https://api.openai.com/v1/chat/completions';
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`
    };
  
    const data = {
      "model": "gpt-3.5-turbo",
      "messages": [
        { role: "system", content: "You are a helpful assistant." },
        { role: "user", content: message }
      ],
      "temperature": 0.7
    };
  
    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers,
        body: JSON.stringify(data)
      });
  
      const result = await response.json();
      if (response.ok) {
        return result.choices[0].message.content;
      } else {
        throw new Error("Error: Incorrect API key provided. You can find your API key at https://platform.openai.com/account/api-keys.");
      }
    } catch (error) {
      console.error('Fetch error:', error);
      throw error;
    }
  };
  