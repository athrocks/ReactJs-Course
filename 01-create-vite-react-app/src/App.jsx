import Chai from "./Chai";
import Variable from "./Variable";

function App() {
  return (
    // jsx can return only one component so we use <></> to wrap multiple components.
    <>
      <Chai />
      <h3>Chai Aur React with vite | Atharva</h3>
      <Variable />
    </>
  );
}

export default App;
