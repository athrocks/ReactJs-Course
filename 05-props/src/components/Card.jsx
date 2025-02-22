function Card(props) {
  console.log(props);

  return (
    <div className="max-w-sm mx-auto bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center space-y-3">
      <h2 className="text-xl text-black font-semibold">{props.fullName}</h2>
      <p className="text-gray-600">ABCD</p>
      <p className="text-gray-500 text-sm">📍 DEFGH</p>
      <p className="text-gray-500 text-sm">✉️ NHHJ</p>
    </div>
  );
}

export default Card;
