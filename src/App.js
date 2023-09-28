import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: "",password:""
  });

  function validateForm(){
    if(contact.fName.length==0){
      alert('First Name cannot be Empty!')
      return;
    }

    if(contact.email.length==0)
    {
      alert('Email Address can not be empty')
      return;
    }

    if (contact.password.length < 8) {
      alert(
        'Invalid Form, Password must contain greater than or equal to 8 characters.',
      )
      return
    }
  }

  function handleChange(event) {
    const { name, value } = event.target;

    setContact(prevValue => {
      if (name === "fName") {
        return {
          fName: value,
          lName: prevValue.lName,
          email: prevValue.email,
          password:prevValue.password
        };
      } else if (name === "lName") {
        return {
          fName: prevValue.fName,
          lName: value,
          email: prevValue.email,
          password:prevValue.password
        };
      } else if (name === "email") {
        return {
          fName: prevValue.fName,
          lName: prevValue.lName,
          email: value,
          password:prevValue.password
        };
      }
      else if(name==="password"){
        return {
          fName: prevValue.fName,
          lName: prevValue.lName,
          email: prevValue.email,
          password:value
        };
      }
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form onSubmit>
        <input
          onChange={handleChange}
          value={contact.fName}
          name="fName"
          placeholder="First Name"
        />
        <input
          onChange={handleChange}
          value={contact.lName}
          name="lName"
          placeholder="Last Name"
        />
        <input
          onChange={handleChange}
          value={contact.email}
          name="email"
          placeholder="Email"
        />
        <input
          onChange={handleChange}
          value={contact.password}
          name="password"
          type="password"
          placeholder="Enter your password"
        />
        <button onClick={()=>{validateForm()}}>Submit</button>
      </form>
    </div>
  );
}

export default App;


