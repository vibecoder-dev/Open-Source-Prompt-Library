# open-source-prompt-library/open-source-prompt-library/README.md

# Open Source Prompt Library

Welcome to the Open Source Prompt Library! This project is designed to provide a collection of prompts that can be used for various purposes, including coding, writing, and brainstorming. The library is built using Next.js, TypeScript, and TailwindCSS, ensuring a modern and responsive user experience.

## Features

- **Prompt Listing**: Browse through a collection of prompts displayed as cards.
- **Search Functionality**: Filter prompts by title or description using the search bar.
- **Category Filtering**: Filter prompts based on categories.
- **Detailed View**: Click on a prompt to view its details and copy the prompt text to your clipboard.
- **Responsive Design**: The application is fully responsive and works on various devices.

## Project Structure

```
open-source-prompt-library
├── public
│   └── favicon.ico
├── src
│   ├── app
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── prompts
│   │   │   └── page.tsx
│   │   └── prompts
│   │       └── [id]
│                 └── page.tsx
│   ├── components
│   │   ├── PromptCard.tsx
│   │   ├── PromptList.tsx
│   │   └── Navbar.tsx
│   ├── data
│   │   └── prompts.json
│   ├── styles
│   │   └── globals.css
│   └── types
│       └── prompt.ts
├── .gitignore
├── next.config.js
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── tsconfig.json
```

## Installation

To get started with the Open Source Prompt Library, follow these steps:

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/open-source-prompt-library.git
   ```

2. Navigate to the project directory:
   ```
   cd open-source-prompt-library
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Run the development server:
   ```
   npm run dev
   ```

5. Open your browser and navigate to `http://localhost:3000` to see the application in action.

## Dependencies

This project uses the following dependencies:

- Next.js
- React
- React DOM
- TypeScript
- TailwindCSS
- PostCSS
- Autoprefixer
- Lucide React

## Contributing

Contributions are welcome! If you have suggestions for improvements or new features, feel free to open an issue or submit a pull request.

## License

This project is open-source and available under the [MIT License](LICENSE).