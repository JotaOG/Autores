import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from '@reach/router';
import axios from "axios";
import { AutoresList } from "../Components/AutoresList";

export const Main = (props) => {
  const [state, setState] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    axios.get('http://localhost:9000/api/autores')
      .then(res => {
        setState(res.data.autores);
        setIsLoading(true);
      })
      .catch(err => console.log(err));
  }, []);

  const removeFromDom = (autoresId) => {
    setState(state.filter(autor => autor._id !== autoresId))
  }

  return (
    <Container>
      <Row>
        <Col>
          <h1>Favorite authors</h1>
          <Link to='/new'>Add an author</Link>
          <p>{props.initialText}</p>
          {isLoading && <AutoresList state={state} removeFromDom={removeFromDom}/>}
        </Col>
      </Row>
    </Container>
  );
};
