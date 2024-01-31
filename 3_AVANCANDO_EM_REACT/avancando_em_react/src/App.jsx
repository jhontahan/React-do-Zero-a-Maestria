import { useState } from 'react';
import './App.css';

import Foto from "./assets/perfil.jpg"
import ConditionalRender from './components/ConditionalRender';
import ListRender from './components/ListRender';
import MenageData from './components/MenageData';
import ShowUserName from './components/ShowUserName';
import CarDetails from './components/CarDetails';
import Fragment from './components/Fragment';
import Container from './components/Container';
import ExecuteFunction from './components/ExecuteFunction';
import Message from './components/Message';
import ChangeMessageState from './components/ChangeMessageState';
import UserDatail from './components/UserDatail';

function App() {

  const [user] = useState("Jhonathan Cruz")

  const cars = [
    {id: 1, brand: "Chevrolet", color: "Preto", newCar: false, km: 58000},
    {id: 2, brand: "Gol", color: "Vermelho", newCar: true, km: 0},
    {id: 3, brand: "Renault", color: "Azul", newCar: true, km: 0},
  ]

  const userDetail = [
    {id: 1, nome: "Jhonathan", idade: 25, profissao: "Programador"},
    {id: 2, nome: "Pedro", idade: 10, profissao: "Estudante"},
    {id: 3, nome: "Gabriel", idade: 18, profissao: "Vagabundo"},
  ]

  function showMessage(){
    console.log("Evento do componente pai");
  }

  const [message, setMessage] = useState("");

  const handleMessage = (msg) => {
    setMessage(msg);
  }

  return (
    <div className="App">
      <h1>Avançando em React</h1>

      <div>
        <img src="/palmeiras.png" alt="Maior do mundo" />
      </div>

      <div>
        <img src={Foto} alt="Eu" />
      </div>

      <MenageData />
      <ListRender/>
      <ConditionalRender/>
      <ShowUserName name={user} />
      <CarDetails brand="WW" km={1000} color="Azul" nenewCarw={false}/>
      <CarDetails brand="Gol" km={0} color="Verde" newCar={true}/>
      
      {cars.map((car) => (
        <CarDetails brand={car.brand} km={car.km} color={car.color} newCar={car.newCar} key={car.id}/>
      ))}

      <Fragment />

      <Container > 
        <p>E este é o conteúdo</p>
      </Container>

      {/*Funções como props */}
      <ExecuteFunction myFunction={showMessage}/>

       {/*state lift */}
       <Message msg={message}/>
       <ChangeMessageState handleMessage={handleMessage}/>

       {userDetail.map((user) => (
        <UserDatail key={user.id} nome={user.nome} idade={user.idade} profissao={user.profissao}/>
      ))}

    </div>
  );
}

export default App;
