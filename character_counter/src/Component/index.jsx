import { useState } from "react";
import { Copy, Check } from "lucide-react";
import "./styles.css";

export const CharacterCount = () => {
  const [text, setText] = useState("");
  const [isCopied, setIsCopied] = useState(false);

  // Clipboard copy function
  const handleCopyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setIsCopied(true);

      // Reset the copied state after 2 seconds
      setTimeout(() => {
        setIsCopied(false);
      }, 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
      alert("Failed to copy text");
    }
  };

  return (
    <div className="character-count-container">
      <div className="character-count-header">
        Character Counter
        {text && (
          <button
            onClick={handleCopyToClipboard}
            className="copy-button"
            title={isCopied ? "Copied!" : "Copy to Clipboard"}
          >
            {isCopied ? <Check color="white" /> : <Copy color="white" />}
          </button>
        )}
      </div>
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
