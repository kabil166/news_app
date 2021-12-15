import './App.css';
import {ContextProvider} from './Context'
import News from './News';
function App() {
  return (
    <div className="App">
      <ContextProvider>
        <News />
      </ContextProvider>
    </div>
  );
}

export default App;
