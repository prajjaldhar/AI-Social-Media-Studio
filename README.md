# 🤖 AI Social Media Studio

**AI Social Media Studio** is a beginner-friendly **Generative AI + MERN Stack project** that helps small businesses create social media content using a **local Large Language Model (LLM)** powered by **Ollama**.

Enter a business name, business type, and offer — and the application generates an AI-powered:

- ✍️ Instagram caption
- 🎬 Reel idea
- 📢 Call-to-action (CTA)
- #️⃣ Relevant hashtags

The project is designed to demonstrate how a **React frontend, Node.js/Express backend, and local AI model** can work together to build a practical AI application.

---

## 🚀 Why This Project?

Creating social media content can be time-consuming for small businesses.

AI Social Media Studio simplifies the process:

```text
Business Details
       ↓
React Frontend
       ↓
Express.js API
       ↓
Prompt Engineering
       ↓
Ollama + Llama 3.2
       ↓
AI Generated Content
       ↓
React UI
```

Instead of using predefined templates, the application can use a **local LLM** to dynamically generate content based on the user's business information.

---

## ✨ Features

### 🤖 AI Content Generation

Generate social media content using a locally running LLM through Ollama.

### ✍️ AI Instagram Caption Generator

Generate engaging captions based on:

- Business name
- Business type
- Current offer

### 🎬 AI Reel Ideas

The application generates practical short-form video ideas that can be recorded using a smartphone.

### 📢 AI Call-to-Action

Generate business-specific CTAs such as:

- Order Now
- Visit Us Today
- Book Your Appointment
- Shop Now

### #️⃣ AI Hashtag Generator

Generate relevant hashtags based on the business and its category.

### 🔐 No API Key Required

The local Ollama setup means the project can run without:

- OpenAI API keys
- Paid AI APIs
- Credit cards
- Cloud billing

### 💻 Beginner Friendly

The project demonstrates the basic architecture required to build a real-world **Generative AI application using JavaScript**.

---

# 🛠️ Tech Stack

## Frontend

- React.js
- JavaScript
- HTML
- CSS

## Backend

- Node.js
- Express.js
- REST API

## AI

- Ollama
- Llama 3.2
- Large Language Models (LLMs)
- Prompt Engineering
- Generative AI

## Development Tools

- VS Code
- npm
- Git
- GitHub

---

# 🧠 How It Works

The application follows a simple client-server-AI architecture.

```text
                USER
                  │
                  ▼
          ┌──────────────┐
          │ React.js UI  │
          └──────┬───────┘
                 │
                 │ POST /api/generate
                 ▼
          ┌──────────────┐
          │  Express.js  │
          │   Backend    │
          └──────┬───────┘
                 │
                 │ Prompt
                 ▼
          ┌──────────────┐
          │    Ollama    │
          │ Local AI     │
          └──────┬───────┘
                 │
                 │ AI Response
                 ▼
          ┌──────────────┐
          │ Llama 3.2    │
          │     LLM      │
          └──────┬───────┘
                 │
                 ▼
          Express Backend
                 │
                 ▼
             React UI
```

---

# 📂 Project Structure

```text
ai-social-media-studio/
│
├── client/
│   ├── src/
│   │   ├── components/
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   └── package.json
│
├── server/
│   ├── services/
│   │   └── aiGenerator.js
│   │
│   ├── server.js
│   ├── package.json
│   └── .env
│
├── README.md
└── .gitignore
```

---

# ⚙️ Prerequisites

Before running the project, make sure you have installed:

### Node.js

Check your installation:

```bash
node --version
```

### npm

```bash
npm --version
```

### Ollama

Install Ollama on your computer and verify:

```bash
ollama --version
```

---

# 🧠 Install the AI Model

This project uses **Llama 3.2 3B** through Ollama.

Download the model:

```bash
ollama pull llama3.2:3b
```

You can test the model with:

```bash
ollama run llama3.2:3b
```

---

# 📦 Installation

Clone the repository:

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

Move into the project:

```bash
cd ai-social-media-studio
```

---

## Backend Setup

```bash
cd server
```

Install dependencies:

```bash
npm install
```

Start the backend:

```bash
npm run dev
```

The server should run on:

```text
http://localhost:5000
```

---

## Frontend Setup

Open another terminal:

```bash
cd client
```

Install dependencies:

```bash
npm install
```

Start React:

```bash
npm run dev
```

Open the URL shown by Vite in your browser.

---

# 🔌 API Endpoint

## Generate Social Media Content

### Request

```http
POST /api/generate
```

### Request Body

```json
{
  "businessName": "Chai Junction",
  "businessType": "cafe",
  "offer": "Buy 1 Get 1 Free"
}
```

### Example Response

```json
{
  "businessName": "Chai Junction",
  "businessType": "cafe",
  "caption": "Your chai break just got twice as exciting! ☕🔥",
  "reelIdea": "Start with a close-up of steaming chai...",
  "cta": "Grab your second cup today!",
  "hashtags": [
    "#ChaiJunction",
    "#ChaiLovers",
    "#CafeVibes",
    "#FoodReels",
    "#LocalBusiness"
  ]
}
```

---

# 🧩 Important Code Concept

The project separates the **AI generation logic** from the Express API.

The main function is:

```javascript
generateSocialPost({
  businessName,
  businessType,
  offer,
});
```

This makes the application easier to modify.

Today:

```text
React
 ↓
Express
 ↓
Ollama
 ↓
Llama 3.2
```

In the future, the same function could be connected to another LLM provider without completely rebuilding the frontend.

---

# 🧪 Example Businesses

The application can be used for different types of businesses:

| Business          | Example Offer     |
| ----------------- | ----------------- |
| ☕ Cafe           | Buy 1 Get 1 Free  |
| 🍕 Restaurant     | 20% Off           |
| 💇 Salon          | Flat ₹500 Off     |
| 🏋️ Gym            | First Month Free  |
| 👕 Clothing Store | Weekend Sale      |
| 📱 Electronics    | Festival Discount |
| 🛍️ Local Business | Special Offer     |

---

# 🎓 What Students Can Learn

This project is especially useful as a beginner **AI + MERN Stack project**.

Students can learn:

### JavaScript

- Functions
- Objects
- Arrays
- Async/Await
- Fetch API
- JSON

### React

- Components
- Forms
- State management
- API requests
- Rendering dynamic data

### Node.js & Express

- REST APIs
- Routes
- Request/Response
- Middleware
- Error handling

### Generative AI

- What is an LLM?
- What is Ollama?
- What is a local LLM?
- Prompt engineering
- Sending prompts to an AI model
- Processing AI responses
- Structured JSON output

### Full-Stack Architecture

Students also learn how:

```text
Frontend
   ↓
Backend API
   ↓
AI Model
   ↓
Backend
   ↓
Frontend
```

works in a real application.

---

# 🔒 Privacy

Because the AI model runs locally through Ollama, prompts can be processed on the user's own machine instead of being sent to a third-party cloud AI API.

This makes the project useful for learning about **local AI and privacy-focused GenAI applications**.

---

# 🚀 Future Improvements

Possible improvements include:

- 🖼️ AI image generation
- 📅 Social media content calendar
- 📊 Content performance analytics
- 💾 MongoDB integration
- 🔐 User authentication
- 📱 Instagram/Facebook publishing integration
- 🎨 Brand voice customization
- 🌐 Multi-language content generation
- 🎯 Audience-specific prompts
- 📈 AI-powered content recommendations
- 🧠 Multiple local LLM support
- 💬 AI marketing assistant
- 📄 Export posts as PDF
- 🔄 Regenerate / improve content
- 📝 Tone selection: Professional, Funny, Premium, Casual

---

# 🌟 Learning Goal

This project is not just a social media generator.

It demonstrates a fundamental **Generative AI application architecture**:

```text
User Input
    ↓
Prompt
    ↓
LLM
    ↓
Structured AI Output
    ↓
Application UI
```

The same architecture can be extended to build:

- AI chatbots
- AI writing assistants
- AI customer-support systems
- AI education platforms
- AI marketing tools
- RAG applications
- AI agents

---

# 🤝 Contributing

Contributions are welcome!

1. Fork the repository
2. Create a new branch

```bash
git checkout -b feature/new-feature
```

3. Make your changes
4. Commit your changes

```bash
git commit -m "Add new feature"
```

5. Push the branch

```bash
git push origin feature/new-feature
```

6. Create a Pull Request

---

# 📄 License

This project is available for educational and learning purposes.

---

# 🔑 SEO Keywords

AI Social Media Studio, AI Social Media Generator, AI Instagram Caption Generator, AI Content Generator, Generative AI Project, MERN Stack AI Project, React AI Project, Node.js AI Project, Express.js AI Application, Ollama AI Project, Ollama Llama 3.2, Local LLM, Local AI, Llama 3.2, Generative AI with JavaScript, AI Marketing Tool, Social Media Automation, Instagram Content Generator, AI Project for Students, Beginner AI Project, MERN Stack Project, JavaScript AI Project, Full Stack AI Application, Prompt Engineering Project.
