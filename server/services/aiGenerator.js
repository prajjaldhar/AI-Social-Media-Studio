// AI layer using Ollama
// No API key
// No paid service
// Runs locally on the student's computer

export async function generateSocialPost({
  businessName,
  businessType,
  offer,
}) {
  // 1. Create a prompt for the AI
  const prompt = `
You are an AI social media marketing assistant.

Create an Instagram marketing post for this business.

Business Name: ${businessName}
Business Type: ${businessType}
Offer: ${offer}

Generate:

1. An engaging Instagram caption
2. A practical Reel idea
3. A short Call To Action (CTA)
4. 5 relevant hashtags

Requirements:
- Make the caption engaging and natural.
- Keep it suitable for Instagram.
- Mention the business name.
- Clearly mention the offer.
- Make the Reel idea easy to shoot using a phone.
- Hashtags should be relevant to the business.
- Return ONLY valid JSON.
- Do not use markdown.
- Do not add explanations outside the JSON.

Return exactly this format:

{
  "caption": "Your caption here",
  "reelIdea": "Your reel idea here",
  "cta": "Your CTA here",
  "hashtags": [
    "#hashtag1",
    "#hashtag2",
    "#hashtag3",
    "#hashtag4",
    "#hashtag5"
  ]
}
`;

  try {
    // 2. Send prompt to Ollama
    const response = await fetch("http://localhost:11434/api/generate", {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        model: "llama3.2:3b",
        prompt: prompt,
        stream: false,
      }),
    });

    // 3. Check if Ollama responded successfully
    if (!response.ok) {
      throw new Error("Ollama request failed");
    }

    const data = await response.json();

    // 4. Ollama returns the AI response as text
    const aiText = data.response;

    // 5. Convert AI's JSON text into JavaScript object
    const result = JSON.parse(aiText);

    // 6. Return structured response
    return {
      businessName,
      businessType,
      caption: result.caption,
      reelIdea: result.reelIdea,
      cta: result.cta,
      hashtags: result.hashtags,
    };
  } catch (error) {
    console.error("Ollama Error:", error);

    throw new Error("Could not generate content. Make sure Ollama is running.");
  }
}
