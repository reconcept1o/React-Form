import './App.css';
import {useState} from 'react'
import {Route,Switch,Routes} from 'react-router-dom'
import Inform from './Inform'
import Form from './Form'




function App() {

const [form,setForm]=useState({mail:'',pass:'',date:''});

const handleChange=(event)=>{

  setForm({...form,[event.target.name]:event.target.value});
  console.log(form);
}

  return (
    <div className="App">
     <h2>Your information</h2>



<Switch>

<Route path="/" exact><Form form={form} handleChange={handleChange}/></Route>
<Route path="/inform"><Inform form={form} /></Route>

</Switch>



    </div> 
  );
}

export default App;
