
// Bootstrap
import "bootstrap/dist/css/bootstrap.css";
import perrito1 from './assets/imgs/perrito1-husky.png'
import perrito2 from './assets/imgs/perrito2-bobtail.png'
import perrito3 from './assets/imgs/perrito3-sharpei.png'
import perrito4 from './assets/imgs/perrito4-beagle.png'

import './App.css'
import Header from './components/Header'
import MyCard from './components/MyCard';
import Footer from './components/Footer';

// imagenes

function App() {
  

  return (
    <>
      <Header titulo="Adopta un perrito"></Header>

      <div class="container">
        <div class="row">      
          <MyCard imagen={perrito1} nombre = "Bartolo" descripcion="Lleno de energía y listo para jugar. ¡Dale a Bartolo el hogar amoroso que se merece!" tagColor="success" tagTexto="Husky"></MyCard>      
          <MyCard imagen={perrito2} nombre = "Messi" descripcion="Es juguetón, amigable y se lleva bien con los niños y otros animales. ¡Haz de Messi parte de tu familia hoy mismo." tagColor="primary" tagTexto="Bobtail"></MyCard>      
          <MyCard imagen={perrito3} nombre = "Gohan" descripcion="Un perro de tamaño mediano con un corazón gigante. Hazte amigo de Gohan y experimenta un amor incondicional." tagColor="danger" tagTexto="Shar Pei"></MyCard>      
          <MyCard imagen={perrito4} nombre = "Princesa" descripcion="Es una compañera leal y cariñosa que adora los mimos y los abrazos. ¡Ayuda a Princesa a encontrar su final feliz." tagColor="warning" tagTexto="Beagle"></MyCard>            
        </div>
      </div>

      <Footer></Footer>
    </>
  )
}

export default App
