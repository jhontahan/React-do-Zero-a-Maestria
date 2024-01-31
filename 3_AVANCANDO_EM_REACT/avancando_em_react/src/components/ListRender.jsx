import { useState } from "react"

const ListRender = () => {

    const [list] = useState(["Jhonathan", "Cayo", "Weverton"]);

    const [users, setUsers] = useState([
        {id: 1, name: "Lucas", age: 26},
        {id: 2, name: "Godoy", age: 30},
        {id: 3, name: "David", age: 28},
    ])

    const deletRandom = () => {
        const randomNumber = Math.floor(Math.random() * 4);

        setUsers((prevUsers) => {
            return prevUsers.filter((user) => randomNumber !== user.id);
        })
    }

  return (
    <div>
        <ul>
            {list.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>

        <ul>
            {users.map((user) => (
                <li key={user.id}>{user.name} - {user.age}</li>
            ))}
        </ul>

        <button onClick={deletRandom}>Deletar um usuario aleatorio</button>


    </div>
  )
}

export default ListRender