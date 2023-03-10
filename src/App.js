import logo from './logo.svg';
import './App.css';
import Reto3 from './components/Reto3';

  function App()
  {
    return(
      <div className="App">
        <Reto3 
        imgu="scarletwitch"
        titulo="Bruja Escarlata"
        textouno="Se profetiza que destruira el cosmos"
        imgn="icon-ethereum"
        texto2="0.041 ETH"
        img="icon-clock"
        texto3="5 days left"
        imagen="image-avatar"
        t1="Creation of"
        t2="Wanda Maximoff"
      />

      <Reto3 
        imgu="sombra"
        titulo="analista"
        textouno="estudia objetos extraños"
        imgn="icon-ethereum"
        texto2="0.041 ETH"
        img="icon-clock"
        texto3="2 days left"
        imagen="image-avatar"
        t1="Creation of"
        t2="Lola Mento"
      />

      <Reto3 
        imgu="gato"
        titulo="Diseñador Grafico"
        textouno="Espero entregarte diseños que te hagan reir"
        imgn="icon-ethereum"
        texto2="0.041 ETH"
        img="icon-clock"
        texto3="20 days left"
        imagen="image-avatar"
        t1="Creation of"
        t2="Gato"
      />
    </div> 
    )
  }


export default App;