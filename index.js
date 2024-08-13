import { OpenAI } from "openai";

const openai = new OpenAI({
  apiKey:'',
  dangerouslyAllowBrowser: true
});

document.getElementById('translate-btn').addEventListener('click', async () => {
  const textToTranslate = document.getElementById('text-to-translate').value;
  const selectedLanguage = document.querySelector('input[name="language"]:checked')?.value;

  if (!selectedLanguage) {
    console.error("No language selected");
    return;
  }

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: "You are a helpful assistant that translates text.Give just the answer."},
        { role: "user", content: `Translate the following text to ${selectedLanguage}: "${textToTranslate}"` }
      ],
      max_tokens: 60,
    });

    document.getElementById('original-text').textContent = textToTranslate;
    document.getElementById('translated-text').textContent = response.choices[0].message.content.trim();
    document.querySelector('.result-section').classList.remove('hidden');
  } catch (error) {
    console.error('Translation failed:', error);
  }
});

document.getElementById('start-over').addEventListener('click', () => {
  document.getElementById('text-to-translate').value = '';
  document.getElementById('original-text').textContent = '';
  document.getElementById('translated-text').textContent = '';
  document.querySelector('.result-section').classList.add('hidden');
});
