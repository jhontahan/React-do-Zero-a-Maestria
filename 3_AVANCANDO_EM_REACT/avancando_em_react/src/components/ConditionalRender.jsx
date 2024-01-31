import { useState } from "react"

const ConditionalRender = () => {

    //const [x] = useState(false);

    const [name, setName] = useState("Jhonathan");

  return (
    // <div>
        
    //     <h1>Isso será exibido?</h1>
    //     {x && <p>Se x for true, sim.</p>}
    //     {!x && <p>Agora o X é falso</p>}

    // </div>

    <div>
        {name === "Jhonathan" ? 
        (
        <div>

            <p>é jhonathan</p>
        
        </div>
        ) : 
        
        (<p>Não é jhonathan</p>)}

        <button onClick={() => setName("Jorge")}>Clique aqui</button>
    </div>
  )
}

export default ConditionalRender