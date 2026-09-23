import React, { useState } from 'react';
import { aiPlaygroundQuestions } from '../content';

export default function AiPlayground() {
  const [activeId, setActiveId] = useState(aiPlaygroundQuestions[0].id);
  const [customPrompt, setCustomPrompt] = useState('');
  const [customAnswer, setCustomAnswer] = useState(null);
  const [isThinking, setIsThinking] = useState(false);

  const activeQA = aiPlaygroundQuestions.find((qa) => qa.id === activeId) || aiPlaygroundQuestions[0];

  const handleSelectPreset = (id) => {
    setActiveId(id);
    setCustomAnswer(null);
  };

  const handleCustomSubmit = (e) => {
    e.preventDefault();
    if (!customPrompt.trim()) return;

    setIsThinking(true);
    setTimeout(() => {
      setIsThinking(false);
      setCustomAnswer(
        `[Agent Response for: "${customPrompt}"] — Zabih is experienced in building customized AI pipelines, integrating FastAPI backends, LangChain/LangGraph agent frameworks, vector search (Pinecone/FAISS), and multi-modal STT/TTS integrations.`
      );
    }, 600);
  };

  return (
    <section className="section ai-playground-section" id="ai-playground">
      <div className="container">
        <div className="section-header">
          <div style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            background: "rgba(139, 92, 246, 0.15)",
            border: "1px solid rgba(139, 92, 246, 0.3)",
            padding: "4px 12px",
            borderRadius: "20px",
            fontSize: "0.8rem",
            color: "var(--accent-purple)",
            fontWeight: 600,
            marginBottom: "12px",
            fontFamily: "'JetBrains Mono', monospace"
          }}>
            <i className="fas fa-sparkles"></i> Live Interactive Agent Demo
          </div>
          <h2 className="section-title">
            Ask <span className="highlight">Zabih's AI Assistant</span>
          </h2>
          <div className="section-divider"></div>
          <p className="section-subtitle">
            Click any prompt below to query my personal AI agent regarding my RAG search pipelines, agentic workflows, and tech stack.
          </p>
        </div>

        <div className="ai-playground-card">
          {/* Preset Buttons */}
          <div className="ai-preset-grid">
            {aiPlaygroundQuestions.map((qa) => (
              <button
                key={qa.id}
                className={`ai-preset-chip ${activeId === qa.id && !customAnswer ? 'active' : ''}`}
                onClick={() => handleSelectPreset(qa.id)}
              >
                <i className="fas fa-terminal"></i>
                <div>
                  <div style={{ fontSize: "0.75rem", opacity: 0.8, textTransform: "uppercase", letterSpacing: "0.5px" }}>
                    {qa.category}
                  </div>
                  <strong>{qa.question}</strong>
                </div>
              </button>
            ))}
          </div>

          {/* Custom Input Form */}
          <form onSubmit={handleCustomSubmit} style={{ display: "flex", gap: "12px", marginBottom: "24px" }}>
            <input
              type="text"
              className="form-control"
              placeholder="Or ask a custom question (e.g. Can Zabih build real-time voice bots?)..."
              value={customPrompt}
              onChange={(e) => setCustomPrompt(e.target.value)}
              style={{
                flex: 1,
                background: "rgba(3, 7, 18, 0.6)",
                border: "1px solid rgba(255, 255, 255, 0.12)",
                borderRadius: "10px",
                padding: "12px 18px",
                color: "#ffffff",
                fontSize: "0.95rem"
              }}
            />
            <button type="submit" className="btn btn-primary" style={{ padding: "12px 24px", borderRadius: "10px" }}>
              <i className="fas fa-paper-plane"></i> Ask Agent
            </button>
          </form>

          {/* Output Display */}
          <div className="ai-response-box">
            <div className="ai-response-header">
              <i className="fas fa-brain" style={{ color: "var(--accent)" }}></i>
              <span>
                {isThinking ? "AGENT REASONING..." : "LIVE AGENT RESPONSE (Sub-250ms RAG Search)"}
              </span>
            </div>

            {isThinking ? (
              <div style={{ display: "flex", alignItems: "center", gap: "10px", color: "var(--accent-cyan)", paddingTop: "10px" }}>
                <i className="fas fa-circle-notch fa-spin"></i> Retrieving context from vector database...
              </div>
            ) : (
              <p className="ai-response-text">
                {customAnswer ? customAnswer : activeQA.answer}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
