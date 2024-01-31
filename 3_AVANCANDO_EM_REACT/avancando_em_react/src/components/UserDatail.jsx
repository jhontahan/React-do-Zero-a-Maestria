
const UserDatail = ({nome, idade, profissao}) => {


  return (
    <div>
        {idade >= 18 ? 
        (
            <h1>{nome} poderá tirar a habilitação</h1>
        ) : 
        
        (
            <h1>{nome} NÃO poderá tirar a habilitação</h1>
        )}

    </div>
  )
}

export default UserDatail