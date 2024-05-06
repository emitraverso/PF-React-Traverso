import './Brand.css'
import {NavLink} from 'react-router-dom'

function Brand(){
    return(
        <NavLink to={'/'}><img src="../img/logo-blue.png" alt="img logo" /></NavLink>
        
    ); 
  }

  export default Brand;