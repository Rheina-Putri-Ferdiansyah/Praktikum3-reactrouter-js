import React from 'react';
import Utama from './Components/utama';
import {Link} from 'react-router-dom';

class App extends React.Component{
  render(){
    return(
      <div class="navbar navbar-expand-lg navbar-dark bg-dark ">
      <div>
        <hr />
        <Link to="/">Beranda</Link> |
        <Link to="/tentangsaya">Tentang saya</Link> |
        <Link to="/karya">Karya</Link> |
        <Link to="/kontak">Kontak</Link> <hr />
        <p><Utama /></p>
      </div>
      </div>
    );
  }
}

export default App;