import { useState } from "react";

export const CharacterCount = () => {
  const [text, setText] = useState("");
  const charLen = 0;
  const wordLen = 0;
  const sentenceLen = 0;
  const lineLen = 0;

  const handleCharacterCount = () => {
    return text.length;
  };
  const handleWordCount = () => {};
  const handleSentencesCount = () => {};
  const handleLineCount = () => {};

  return (
    <>
      <h1>Character Count</h1>
      <form>
        <textarea
          name="txtAre"
          placeholder="Type Something..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          rows={8}
        ></textarea>
        <p>Character Count : {}</p>
        <p>Word Count : {handleWordCount}</p>
        <p>Sentences Count : {handleSentencesCount}</p>
        <p>Line Count : {handleLineCount}</p>
      </form>
    </>
  );
};
