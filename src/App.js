import './App.css';
import { FormApp } from './components/MainComponent/FormApp';

import { MyButton } from './components/utils/buttons/Button/MyButton';
import {useState} from 'react'
function App() {
  let [submit,setSubmit]=useState(false)
  const [countId,setCountId] = useState(1)
  const submitFunc = () =>{
    setSubmit(!submit)
    setCountId(1)
  }
  return (
    <div className="App">
    <FormApp submit={submit} submitFunc={submitFunc} countId={countId} setCountId={setCountId} />
    <div className="divSubmit">
    <MyButton className="button" onClick={()=>submitFunc()} text={'Submit'} view={'submit'}/>
    </div> 
    </div>
  );
}

export default App;
