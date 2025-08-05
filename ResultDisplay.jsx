export default function ResultDisplay({ correct, spoken }) {
  return (
    <div className="mt-4 text-xl text-center">
      <p className="text-gray-800">คุณพูดว่า: <strong>{spoken}</strong></p>
      {correct ? (
        <p className="text-green-600 font-bold">✅ พูดถูกต้อง!</p>
      ) : (
        <p className="text-red-600 font-bold">❌ ไม่ตรงกับคำที่กำหนด</p>
      )}
    </div>
  );
}
