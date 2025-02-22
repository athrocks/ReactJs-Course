import "./App.css";
import Card from "./components/Card";
import ProfileCard from "./components/ProfileCard";

function App() {
  // objects, arr you pass in {} in props
  let myObj = {
    userName:"atharva",
    age:22
  }

  let myArr  = [1,2,3];

  return (
    <>
      {/* fullName and someObj are props passed to Card.jsx */}
      <Card fullName="OwlMama"  someObj={myObj} arr={myArr}/>

      <br/>
      
      <ProfileCard
        name="atharva"
        position="SDE Intern"
        location="Banglore"
        email="atharva@gmail.com"
      />
    </>
  );
}

export default App;
