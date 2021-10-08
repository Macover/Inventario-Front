import './App.css';
import ComponenteAlbum from './Components/ComponenteAlbum.js';
import CovidComponente from './Components/CovidComponente.js'
import RolComponente from './Components/RolComponente.js'
import AreaComponente from './Components/ComponenteArea.js'
import UsuarioComponente from './Components/ComponenteUsuarios.js'
import ItemComponente from './Components/ComponenteItem.js'
import CategoriaItemComponente from './Components/ComponenteCategoriaItem.js'
import EstatusItems from './Components/ComponenteEstatusItem.js'

function App() {
  return (
    <div className="App">
      <UsuarioComponente/>
      <RolComponente/>
      {/* <CovidComponente/> */}
      {/* <AreaComponente/> */}
      <ItemComponente/>
      {/* <CategoriaItemComponente/> */}
      {/* <EstatusItems/> */}
      {/* <ComponenteAlbum/> */}
    </div>
  );
}

export default App;
