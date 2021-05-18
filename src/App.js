import './App.css';
import TitlebarGridList from './GrillaImagenes';
import RedesSocialesTop from './RedesSocialesTop';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="imagenes/logo1.png" className="App-logo" alt="logo" />
       <div className="App-title">
        <h2>Paris Skate</h2>
        <p>
        POR SKATERS PARA SKATERS
        </p>
        </div>
      </header>  
        
        <div>
        <TitlebarGridList />
        <a
          className="App-link"
          href="https://listado.mercadolibre.com.ar/_CustId_183402154"
          target="_blank"
          rel="noopener noreferrer"
        >
          Mira todas mis pubicaciones!
        </a>
        </div>
        <div className="Footer">
         <a> Seguinos en:</a>
          <RedesSocialesTop />
        </div>
    </div>
  );
}

export default App;
