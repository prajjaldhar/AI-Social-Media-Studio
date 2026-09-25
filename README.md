# AI Social Media Studio 🚀

A beginner-friendly MERN-style workshop project for 2nd-year college students.

## What students build

A small web app for local businesses:

1. Enter business name
2. Choose business type
3. Enter an offer/product
4. Click **Generate Post**
5. App creates:
   - Instagram caption
   - Reel idea
   - hashtags
6. Save generated post
7. View saved posts

## Why this version is workshop-friendly

- No paid API
- No API key
- No login/authentication
- No complicated AI SDK
- React + Express are visible and easy to explain
- MongoDB is optional

### Important teaching note

The default "AI" engine is a **local rule-based generator** so the workshop can run at zero cost and without internet/API problems. Explain to students:

> "Today we are learning the product architecture. In a production app, this generator can be replaced by a real LLM API without changing the React UI."

The code intentionally keeps the AI layer in one file:
`server/services/aiGenerator.js`

Later, that file can be replaced by Gemini, Hugging Face, Ollama, etc.

## Run

### 1. Server

```bash
cd server
npm install
npm run dev
```

Server: http://localhost:5000

### 2. Client

Open another terminal:

```bash
cd client
npm install
npm run dev
```

Client: http://localhost:5173

## Optional MongoDB

The app works without MongoDB.

If you have MongoDB Atlas/local MongoDB, create:

`server/.env`

```env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/social_studio
```

Without `MONGO_URI`, the server stores posts in memory for the current run.

## 60-minute teaching plan

### 0–5 min — Show the finished app

Ask:
"Imagine you own a momo shop. What would you post on Instagram tonight?"

Enter the business details and generate a post.

### 5–15 min — React

Explain:
- component
- state
- input
- button
- form submit

### 15–25 min — Express API

Show:

`POST /api/generate`

React sends JSON -> Express receives it -> generator returns JSON.

### 25–35 min — AI layer

Open:

`server/services/aiGenerator.js`

Explain the idea of:
Input -> instructions -> generated content.

Then explain that the workshop uses a zero-cost local generator to avoid API keys and bills.

### 35–45 min — Save posts

Show:

`POST /api/posts`

Explain how a real MongoDB collection would store:
business, type, offer, caption, reelIdea, hashtags.

### 45–55 min — Students experiment

Give them examples:
- cafe
- gym
- salon
- clothing store
- mobile shop
- bakery

### 55–60 min — Startup discussion

Ask:
"Who would pay for this?"

Possible customers:
- local shops
- salons
- cafes
- gyms
- small Instagram businesses

Possible model:
- Free: 5 posts/month
- Pro: ₹99/month
- Business: ₹299/month

## Architecture

```text
React
  |
  | POST /api/generate
  v
Express / Node
  |
  v
AI Generator
  |
  v
JSON response
  |
  v
React UI

React
  |
  | POST /api/posts
  v
MongoDB (optional)
```
