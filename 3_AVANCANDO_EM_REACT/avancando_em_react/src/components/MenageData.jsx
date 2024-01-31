import { useState } from "react";

const MenageData = () => {


    let someData = 10;

    const [number, setNumber] = useState(15);

  return (
    <div>
        <div>
            <p>Valor: {someData}</p>
            <button onClick={() => {someData = 15}}>Mudar variavel</button>
        </div>
        <div>
            <p>Valor: {number}</p>
            <button onClick={() => {setNumber(20)}}>Mudar variavel</button>
        </div>
    </div>
  )
}

export default MenageData