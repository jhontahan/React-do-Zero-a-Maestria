const Events = () => {
    
    const handleMyEvent = (e) =>{
        alert("Ativou o evento!");
        console.log(e);
    };

    const renderSomething = (x) => {
        if(x){
            return <h1>X verdadeiro</h1>;
        } else {
            return <h1>X falso</h1>;
        }
    };

    return(
        <div>
            <div>
                <button onClick={handleMyEvent}>Clique Aqui!</button>
            </div>
            <div>
                <button onClick={() => alert("Clicou aqui tambem") }>Clique aqui tambem</button>
            </div>
            {renderSomething(true)}
            {renderSomething(false)}
        </div>
    )
}

export default Events;