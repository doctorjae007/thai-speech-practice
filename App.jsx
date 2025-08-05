import { useState } from "react";
import WordDisplay from "./components/WordDisplay";
import MicButton from "./components/MicButton";
import ResultDisplay from "./components/ResultDisplay";
import NextButton from "./components/NextButton";
import wordList from "./data/wordList";

export default function App() {
  const [word, setWord] = useState(getRandomWord());
  const [spokenWord, setSpokenWord] = useState("");
  const [result, setResult] = useState(null);

  function getRandomWord() {
    const index = Math.floor(Math.random() * wordList.length);
    return wordList[index];
  }

  const playSound = (url) => {
    const audio = new Audio(url);
    audio.play();
  };

  const handleSpeechResult = (text) => {
    setSpokenWord(text);
    const isCorrect = text.trim() === word.trim();
    setResult(isCorrect);

    // ✅ เล่นเสียงตามผลลัพธ์
    if (isCorrect) {
      playSound("/src/sound/correct.mp3");
    } else {
      playSound("/src/sound/wrong.mp3");
    }
  };

  const handleNext = () => {
    setWord(getRandomWord());
    setSpokenWord("");
    setResult(null);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-blue-50 p-4">
      <h1 className="text-4xl font-bold mb-6 text-gray-800">ฝึกอ่านออกเสียง</h1>
      <WordDisplay word={word} />
      <MicButton onResult={handleSpeechResult} />
      {result !== null && (
        <>
          <ResultDisplay correct={result} spoken={spokenWord} />
          <NextButton onClick={handleNext} />
        </>
      )}
    </div>
  );
}
