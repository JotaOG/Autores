import axios from 'axios';
import React from 'react';
import { Button } from 'react-bootstrap';

export const DeleteAutoresButton = (props) => {
    const { autoresId, successCallback } = props
    const deleteAutores = () => {
        axios.delete('http://localhost:9000/api/autores/' + autoresId)
            .then(response => successCallback())
            .catch(error => console.log(error));
    }
    return <Button type='button' onClick={deleteAutores}>Delete</Button>
}
