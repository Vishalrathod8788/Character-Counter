import { useState } from "react";
import "./styles.css";

export const CharacterCount = () => {
  const [text, setText] = useState("");
  return (
    <div className="character-count-container">
      <div className="character-count-header">Character Counter</div>
      <form>
        <textarea
          className="character-count-textarea"
          name="txtArea"
          placeholder="Start typing or paste to begin"
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></textarea>
        <div className="character-count-stats">
          <div className="character-count-stat">
            <span className="character-count-stat-label">Chars</span>
            <span className="character-count-stat-value">{text.length}</span>
          </div>
          <div className="character-count-stat">
            <span className="character-count-stat-label">Words</span>
            <span className="character-count-stat-value">
              {text.trim() ? text.trim().split(/\s+/).length : 0}
            </span>
          </div>
          <div className="character-count-stat">
            <span className="character-count-stat-label">Sentences</span>
            <span className="character-count-stat-value">
              {text.split(".").length - 1}
            </span>
          </div>
          <div className="character-count-stat">
            <span className="character-count-stat-label">Paragraphs</span>
            <span className="character-count-stat-value">
              {text.split("\n").length - 1}
            </span>
          </div>
          <div className="character-count-stat">
            <span className="character-count-stat-label">Spaces</span>
            <span className="character-count-stat-value">
              {text.split(" ").length - 1}
            </span>
          </div>
        </div>
      </form>
    </div>
  );
};
