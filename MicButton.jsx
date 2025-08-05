export default function MicButton({ onResult }) {
  const handleStart = () => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert("เบราว์เซอร์ของคุณไม่รองรับการรู้จำเสียง");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = "th-TH";
    recognition.start();

    recognition.onresult = (event) => {
      const text = event.results[0][0].transcript;
      onResult(text);
    };

    recognition.onerror = (e) => {
      console.error("เกิดข้อผิดพลาด:", e);
      alert("เกิดข้อผิดพลาดในการฟังเสียง");
    };
  };

  return (
    <button
      className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-full text-xl"
      onClick={handleStart}
    >
      🎤 กดเพื่อพูด
    </button>
  );
}
