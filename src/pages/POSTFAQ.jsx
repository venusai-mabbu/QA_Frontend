import React, { useState } from "react";
import './POSTFAQ.css'

const POSTFAQ = () => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!section || !question || !answer) {
      alert("All fields are required!");
      return;
    }

    const faqData = { "section":section, "question":question, "answer":answer };
    try {
      const response = await fetch("https://faqs-git-main-venusais-projects-15ab873f.vercel.appapi/faqs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(faqData),
      });
      
      const data = await response.json();
      if (response.ok) {
        alert("FAQ added successfully!");
        setQuestion("");
        setAnswer("");
      } else {
        alert(`Error: ${data.message}`);
      }
    } catch (error) {
      console.error("Error submitting FAQ:", error);
    }
  };

  return (
<div className="faq-container">
<h2>Add New FAQ</h2>

      <form onSubmit={handleSubmit}>
        <label>Section:</label>
        <select value={section} onChange={(e) => setSection(e.target.value)} required>
          <option value="">Select Section</option>
          <option value="java">Java</option>
          <option value="dbms">DBMS</option>
          <option value="os">OS</option>
          <option value="cn">Computer Networks</option>
          <option value="js">JS</option>
          <option value="react">React</option>

          <option value="api">API</option>
          <option value="aws">AWS</option>
          <option value="aws">Docker</option>

        </select>

        <label>Question:</label>
        <textarea 
          value={question} 
          onChange={(e) => setQuestion(e.target.value)} 
          required
          rows="3"
          placeholder="Enter the question..."
        />

        <label>Answer:</label>
        <textarea 
          value={answer} 
          onChange={(e) => setAnswer(e.target.value)} 
          required
          rows="5"
          placeholder="Enter the answer..."
        />

        <button type="submit" >
          Submit
        </button>
      </form>
    </div>
  );
};

export default POSTFAQ;
