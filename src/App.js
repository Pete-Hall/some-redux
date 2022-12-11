import './App.css';
import Counter from './Components/Counter/Counter';
import { ReduxCounter } from './Components/ReduxCounter/ReduxCounter';

function App() {
  return (
    <div className="App">
      <Counter />
      <ReduxCounter />
    </div>
  );
}

export default App;
