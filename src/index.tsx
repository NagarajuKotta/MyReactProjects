import React, { useState } from "react";
import { render } from "react-dom";

import "./styles.css";

function App() {
  const [datas, setDatas] = useState([]);
  React.useEffect(() => {
    fetch(`https://api.coinmarketcap.com/v1/ticker/?limit=10`)
      .then(res => res.json())
      .then(json => setDatas(json));
  }, []);

  return (
    <div>
      <ul>
        {datas.map(el => (
          <li>
            {el.name}: {el.price_usd}
          </li>
        ))}
      </ul>
    </div>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
