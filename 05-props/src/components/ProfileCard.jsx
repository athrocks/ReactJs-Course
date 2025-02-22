// function ProfileCard(props) {
// if location not passed then India byDefault
function ProfileCard({ name, position, location = "India", email }) {
  //   console.log(props);

  console.log(name);
  console.log(position);
  console.log(location);
  console.log(email);

  return (
    <div className="max-w-sm mx-auto bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center space-y-3">
      <h2 className="text-xl text-black font-semibold">{name}</h2>
      <p className="text-gray-600">{position}</p>
      <p className="text-gray-500 text-sm">📍 {location}</p>
      <p className="text-gray-500 text-sm">✉️ {email}</p>
    </div>
  );
}

export default ProfileCard;
