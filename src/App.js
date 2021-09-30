import './App.css';
import { FormApp } from './components/FormApp';
import { MyButton } from './components/utils/buttons/Button/MyButton';

function App() {
  return (
    <div className="App">
    <FormApp/>
    <div className="divSubmit">
    <MyButton className="button" text={'Submit'} view={'submit'}/>
    </div> 
    </div>
  );
}

export default App;
