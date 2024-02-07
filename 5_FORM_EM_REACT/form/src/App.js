import './App.css';
import MyForm from './components/MyForm';

function App() {
  return (
    <div className="App">
      <h2>Forms</h2>
      <MyForm user={{name: "jhonathan", email: "jhonathan@gmail.com", bio: "prog", role: "Admin"}}/>
      
    </div>
  );
}

export default App;
