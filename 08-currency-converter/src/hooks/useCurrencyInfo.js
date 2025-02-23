// also custom hooks should be made with .js extension 

// since, const [state,setState] = useState(0)
// any function which returns array or (any value for that sake i want) would be custom hook of its own.

// Example:

// function hello() {
//     return [];
// }

import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  // effect will only activate if the values in the list change.
  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
    )
      .then((res) => res.json())
      .then((res) => setData(res[currency]));

    console.log(data);
  }, [currency]);
  console.log(data);

  return data;
}

export default useCurrencyInfo