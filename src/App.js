import {ContextProvider} from './components/Context'
import './App.css';
import Inputs from './components/Inputs';
import Cards from './components/Cards';

function App() {
  return (
    <ContextProvider>
        <Inputs/>
        
    </ContextProvider>
  );
}

export default App;
