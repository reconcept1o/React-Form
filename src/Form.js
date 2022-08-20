import React from 'react'
import {Link} from 'react-router-dom'

function Form({form,handleChange}) {
  return (
    <div>
      





<form className="container-fluid col-3"  > 
  <div clasName="form-floating mb-3">
  <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" name="mail" value={form.mail}  onChange={handleChange} />
  <label for="floatingInput">Email address</label>
</div>
<div className="form-floating">
  <input type="password" className="form-control " id="floatingPassword" placeholder="Password "name="pass" value={form.pass}  onChange={handleChange}/>
  <label for="floatingPassword">Password</label>
</div>

<div class="form-check" >
<label className="form-check-label mx-2 " for="flexRadioDefault1">
I am over 18
  </label>
  <input className="form-check-input mx-2" type="radio" name="date" onChange={handleChange} value={form.date} />
</div>




  <Link to="/inform"> <button type="submit" className="btn btn-primary my-5 " name="button" >Submit</button></Link>
</form>

 </div>

  )
}

export default Form
