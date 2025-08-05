import React, { useEffect } from "react";

export default function SpeechResult({ result, expectedWord }) {
  useEffect(() => {
    if (!result) return;

    const isCorrect = result.trim() === expectedWord;

    const audio = new Audio(
      isCorrect
        ? "/sounds/correct.mp3"
        : "/sounds/wrong.mp3"
    );
    audio.play();
  }, [result, expectedWord]);

  return (
    <div className="text-xl mt-4 text-center">
      {result ? (
        result.trim() === expectedWord ? (
          <p className="text-green-600 font-bold">✔️ ถูกต้อง!</p>
        ) : (
          <p className="text-red-600 font-bold">❌ ลองใหม่อีกครั้ง</p>
        )
      ) : (
        <p className="text-gray-500">พูดคำศัพท์เพื่อเริ่ม</p>
      )}
    </div>
  );
}
