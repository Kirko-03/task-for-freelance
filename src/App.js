import './App.css';
import { FormApp } from './components/MainComponent/FormApp';
import {SubmitPanel} from './components/MainComponent/SubmitPanel'
import { MyButton } from './components/utils/buttons/Button/MyButton';
import {useState} from 'react'
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
