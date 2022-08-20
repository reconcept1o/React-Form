import React from 'react'
import {Link} from 'react-router-dom'


function Inform({form}) {
  return (
    <div>
      <h5> Name:{form.mail}</h5>
      <h5>pass:{form.pass}</h5>
      {/* <h5>date:{form.date}</h5> */}
      <Link to="/" className="X"><button> Back </button></Link>
    </div>
  );
}

export default Inform
