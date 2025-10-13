import './App.css';
import Home from './components/Home'

function App() {
  const title  = "Bem vindo ao projeto react-bootstrap"
const links = [
  {label: 'Cards', href: 'cards.html'},
  {label: 'Botões', href: 'buttons.html'},
  {label: 'Formulários', href: 'forms.html'},
  {label: 'Navbar', href: 'navbar.html'},
  {label: 'Layout', href: 'layout.html'}
] 

  return (
   <div>
    <Home title={title} links={links} />
    </div>
  );
}

export default App;
