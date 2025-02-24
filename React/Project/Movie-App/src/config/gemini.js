import { GoogleGenerativeAI } from "@google/generative-ai";

// Initialize the Gemini API with your API key
const genAI = new GoogleGenerativeAI("AIzaSyCXFv82iImIv_i0MvPSAhM9A6BdBiKnAEI");

// Create a reusable model instance
export const getGeminiModel = async () => {
  return genAI.getGenerativeModel({ model: "gemini-pro" });
};

// Function to get movie recommendations
export const getMovieRecommendations = async (watchlist) => {
  try {
    const model = await getGeminiModel();
    console.log(model);
    console.log(watchlist);

    // Create a prompt based on the user's watchlist
    const prompt = `Based on these movies in the user's watchlist: 
    ${watchlist.map((movie) => `- ${movie.title}`)}
    
    Please recommend 5 similar movies. For each movie, provide:
    - Title
    - Brief reason why it's recommended
    - Confidence score (0-100)
    
    Return the response in this JSON format:
    {
      "recommendations": [
        {
          "title": "Movie Title",
          "reason": "Reason for recommendation",
          "confidence": 85
        }
      ]
    }`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    // Parse the JSON response
    return JSON.parse(text);
  } catch (error) {
    console.error("Error getting recommendations:", error);
    return { recommendations: [] };
  }
};
