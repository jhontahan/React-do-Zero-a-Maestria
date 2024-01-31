function CarDetails({brand, km, color, newCar, id}) {
  
  
    return (
    <div>
        
        <h2>Detalhes do carro</h2>
        <ul>
            <li key={id}>Marca: {brand}</li>
            <li key={id}>Km: {km}</li>
            <li key={id}>Cor: {color}</li>
        </ul>

        {newCar && <p>este carro é novo</p>}

    </div>
  )
}

export default CarDetails