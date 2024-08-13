Here’s the updated README including the OpenAI dependency information:

---

# PollyGlot AI Translator

![license](https://img.shields.io/badge/license-MIT-blue.svg)

> PollyGlot is an AI-powered translation tool designed to provide perfect translations every time. This mini project utilizes the OpenAI API to translate text between multiple languages, offering a simple and intuitive interface for users.

![preview](public/assets/translator_preview.jpg)

## Features

- **Multi-language Support**: Translate text into multiple languages, including French, Spanish, and Japanese.
- **User-Friendly Interface**: Simple and clean design, making it easy for users to input text and receive translations quickly.
- **Powered by OpenAI**: Leverages the OpenAI API for accurate and context-aware translations.

## Getting Started

### Prerequisites

- **Node.js and npm**: Ensure you have Node.js and npm installed on your system.

### Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/AscilCH/AI-Translator.git
   cd AI-Translator
   ```

2. **Install Dependencies**

   Install the necessary npm packages, including the OpenAI API client:

   ```bash
   npm install openai
   npm install
   ```

3. **Set Up OpenAI API Key**

   Create a `.env` file in the root of your project and add your OpenAI API key:

   ```bash
   OPENAI_API_KEY=your_openai_api_key
   ```

4. **Run the Application**

   Start the application using the following command:

   ```bash
   npm start
   ```

   The application will be available at `http://localhost:3000`.
   ![image](https://github.com/user-attachments/assets/fdad432e-3b5d-4514-840d-6578112624b1)


## Usage

1. **Input Text**: Enter the text you want to translate in the "Text to translate" field.
2. **Select Language**: Choose the language you want to translate the text into.
3. **Translate**: Click the "Translate" button to get the translation.

## Technologies Used

- **React.js**: Frontend library for building the user interface.
- **OpenAI API**: Provides the translation capabilities using AI models.
- **CSS/SCSS**: Used for styling the application.

## License

This project is licensed under the MIT License. See the [LICENSE](https://github.com/AscilCH/AI-Translator/blob/main/LICENSE.md) file for more information.

## Contact

For questions or support regarding this project:

- **Email**: [ascil.chtioui@gmail.com](mailto:ascil.chtioui@gmail.com)

---

This README now includes details on the OpenAI dependency and how to set up the API key. You can further customize it if needed!
