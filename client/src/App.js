import React, { useState } from 'react';
import { Router } from '@reach/router';
import { Main } from './Views/Main';
import { AutoresForm } from './Components/AutoresForm';
import { AutoresUpdate } from './Components/AutoresUpdate';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { navigate } from '@reach/router';
import axios from 'axios';

function App() {
  const [autores, setAutores] = useState([]);
  const [errors, setErrors] = useState([]);

  const createAutores = (autor) => {
    axios.post('http://localhost:9000/api/autores', autor)
      .then(res => {
        console.log(res);
        setAutores([...autores, res.data]);
        navigate("/");
      })
      .catch(err => {
        console.log(err)
        const errorResponse = err.response.data.errors;
        const errorArr = [];
        for (const key of Object.keys(errorResponse)) {
          errorArr.push(errorResponse[key].message);
        }
        setErrors(errorArr);
      });
  }

  return (
    <div className="App">
      <Router>
        <Main path="/" initialText='We have quotes by:'/>
        <AutoresForm path="/new" initialText='Add a new author:' onSubmitProp={createAutores} initialValue='' errors={errors}/>
        <AutoresUpdate path="/edit/:id" />
      </Router>
    </div>
  );
}

export default App;
