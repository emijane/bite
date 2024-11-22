import openai
import os
from dotenv import load_dotenv

# Load the .env file
load_dotenv()

# Retrieve the API key securely
openai.api_key = os.getenv("OPENAI_API_KEY")

try:
    food_word = input("Enter a food name to search for its origin and translation: ").strip()

    response = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=[
            {"role": "system", "content": "You are a helpful assistant."},
            {
                "role": "user",
                "content": f"Find the origin country of the word {food_word}. Then translate the word {food_word} to the native language of the country. Also translate the word recipe to the native language and append it after the translated word for the food. Format the output as follows:\n\nOriginal recipe: <original word>\nCountry: <origin country>\nTranslation: <translated word> <translated word for recipe>\n\nOnly output in this format."
            }
        ]
    )
    print(response['choices'][0]['message']['content'])

except Exception as e:
    print(f"An error occurred: {e}")
