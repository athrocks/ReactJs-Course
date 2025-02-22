// Component name should start with a capital letter.
// Component should be a function which returns a JSX element.

function Variable() {
  const username = "@throcks07";
  const age = 22;
  return (
    <>
      <h4>Chai Pi Lo {username}</h4>
      <h5>hi I am {age} years old</h5>
    </>
  );
}

export default Variable;
