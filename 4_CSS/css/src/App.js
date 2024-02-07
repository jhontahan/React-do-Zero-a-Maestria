import MyComponent from './components/MyComponent';
import './App.css';
import Title from './components/Title';

function App() {

  const n = 15;

  const redTitle = true;

  return (
    <div className="App">
      <h1>React com CSS</h1>
      <MyComponent />
      <p>Este é o paragrafo do app.js</p>

      <p style={{color: "blue", backgroundColor: "red"}}>
        Este elemento foi estilizado de forma inline
      </p>
      
      <h2 style={n < 10 ? ({color: "purple"}) : ({color: "pink"})}>CSS dinamico</h2>

      <h2 style={n > 10 ? ({color: "purple"}) : ({color: "pink"})}>CSS dinamico</h2>

      <h2 className={redTitle ? "red-title" : "title"}>Este titulo vai ter classe dinamico</h2>

      <h2 className={!redTitle ? "red-title" : "title"}>Este titulo vai ter classe dinamico</h2>


      {/*CSS COMPONENT */}
      <Title/>
      
      
    </div>
  );
}

export default App;
