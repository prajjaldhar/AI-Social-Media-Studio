import React, { useState } from "react";

const API = "http://localhost:5000/api";

function App() {
  const [form, setForm] = useState({
    businessName: "",
    businessType: "restaurant",
    offer: "",
  });

  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  function handleChange(event) {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  }

  async function generatePost(event) {
    event.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const response = await fetch(`${API}/generate`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message);
      }

      setResult(data);
    } catch (error) {
      setMessage(error.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="app">
      <header>
        <div>
          <p className="eyebrow">MERN + AI MINI PROJECT</p>

          <h1>AI Social Media Studio</h1>

          <p className="subtitle">
            Create social media content for a local business in seconds.
          </p>
        </div>

        <div className="ai-badge">🤖 AI</div>
      </header>

      <main>
        {/* Business Form */}
        <section className="card">
          <h2>1. Tell us about the business</h2>

          <form onSubmit={generatePost}>
            <label>Business Name</label>

            <input
              name="businessName"
              value={form.businessName}
              onChange={handleChange}
              placeholder="e.g. Sharma Cafe"
              required
            />

            <label>Business Type</label>

            <select
              name="businessType"
              value={form.businessType}
              onChange={handleChange}
            >
              <option value="restaurant">Restaurant</option>
              <option value="cafe">Cafe</option>
              <option value="salon">Salon</option>
              <option value="gym">Gym</option>
              <option value="clothing">Clothing Store</option>
              <option value="other">Other</option>
            </select>

            <label>Product / Offer</label>

            <input
              name="offer"
              value={form.offer}
              onChange={handleChange}
              placeholder="e.g. Buy 1 Get 1 Burger"
              required
            />

            <button type="submit" disabled={loading}>
              {loading ? "Creating..." : "✨ Generate Post"}
            </button>
          </form>

          {message && <p className="message">{message}</p>}
        </section>

        {/* AI Result */}
        <section className="card result-card">
          <h2>2. Your AI-generated content</h2>

          {!result ? (
            <div className="empty">
              <div className="big-emoji">💡</div>

              <p>Enter business details and click Generate Post.</p>
            </div>
          ) : (
            <>
              <div className="content-box">
                <h3>📱 Instagram Caption</h3>

                <p className="caption">{result.caption}</p>
              </div>

              <div className="content-box">
                <h3>🎬 Reel Idea</h3>

                <p>{result.reelIdea}</p>
              </div>

              <div className="content-box">
                <h3>#️⃣ Hashtags</h3>

                <div className="tags">
                  {result.hashtags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </>
          )}
        </section>
      </main>
    </div>
  );
}

export default App;
