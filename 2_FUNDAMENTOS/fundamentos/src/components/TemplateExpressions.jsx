const TemplateExpressions = () => {
    
    const name = "Jhonathan";

    const data = {
        age: 25,
        job: "Programador",
    };
    
    return(
        <div>
            <h1>Olá {name}, tudo bem?</h1>
            <p>Voce atua como: {data.job}</p>
        </div>
    )
}

export default TemplateExpressions;