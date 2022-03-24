import './styles/styles.scss';
import { publicRoutes } from './routes/publicRoutes';
import { NavLink } from 'react-router-dom';
import AppRouter from './components/AppRouter';

function App() {

  return (
    <div className="App">
      <nav className='navbar'>
        <ul className='links'>
          <li className='link'>ANIMATION TYPES</li>
          {publicRoutes.map((link) => (
            <li className='link' key={link.path}>
              <NavLink
                to={link.path}>
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <AppRouter />
    </div>
  );
}

export default App;
