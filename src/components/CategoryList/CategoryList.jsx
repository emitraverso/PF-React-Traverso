import './CategoryList.css'
import {NavLink} from 'react-router-dom'

function CategoryList(){
    return(
        <nav>
            <ul className='category-list'>
                <li><NavLink to={'/'} className={({ isActive }) => (isActive ? "active-link" : "nav-link")}>Inicio</NavLink></li>
                <li><NavLink to={'/category/almacenamiento'} className={({ isActive }) => (isActive ? "active-link" : "nav-link")}>Almacenamiento</NavLink></li>
                <li><NavLink to={'/category/distribucion'} className={({ isActive }) => (isActive ? "active-link" : "nav-link")}>Distribución</NavLink></li>
                <li><NavLink to={'/category/tecnologia'} className={({ isActive }) => (isActive ? "active-link" : "nav-link")}>Tecnología</NavLink></li>
                <li><NavLink to={'/category/comercioexterior'} className={({ isActive }) => (isActive ? "active-link" : "nav-link")}>Comercio Exterior</NavLink></li>
            </ul>
        </nav>
    );
}

export default CategoryList;