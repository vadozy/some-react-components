import SortControl from 'components/button-ribbon';
import './App.css';

function App() {
  return (
    <div className='App' data-testid='app-root'>
      <SortControl p1='some_prop_1' />
    </div>
  );
}

export default App;
