import { HfInference } from "@huggingface/inference";

const HF_TOKEN = process.env.REACT_APP_HF_TOKEN; // Ensure this is set in your .env file

// Initialize client
// Note: In a production app, API calls should ideally go through a backend to hide the API key.
const client = new HfInference(HF_TOKEN);

/**
 * Generates an image based on a text prompt using Hugging Face Inference API.
 * Uses the 'Tongyi-MAI/Z-Image-Turbo' model via 'fal-ai' provider if configured, 
 * or falls back to standard inference.
 * 
 * @param {string} prompt - The text description for the image.
 * @returns {Promise<string>} - A promise that resolves to the image URL (data URL).
 */
export const generateAIImage = async (prompt) => {
    if (!HF_TOKEN) {
        throw new Error("Missing Hugging Face API Token. Please set REACT_APP_HF_TOKEN in your .env file.");
    }

    try {
        const response = await client.textToImage({
            model: "stabilityai/stable-diffusion-xl-base-1.0",
            inputs: prompt,
            parameters: {
                width: 1024,
                height: 1024,
            },
        });

        // Convert Blob to Data URL
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onloadend = () => resolve(reader.result);
            reader.onerror = reject;
            reader.readAsDataURL(response);
        });
    } catch (error) {
        console.error("AI Image Generation Error:", error);
        throw error;
    }
};
