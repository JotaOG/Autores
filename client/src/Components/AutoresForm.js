import React, { useState } from "react";
import { Link, navigate } from "@reach/router";
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  FormLabel,
  FormControl,
  Button,
} from "react-bootstrap";

export const AutoresForm = (props) => {
  const { initialValue } = props;
  const [name, setName] = useState(initialValue.name);
  const texto = props.initialText;
  const onHandleSubmit = (e) => {
    e.preventDefault();
    props.onSubmitProp({name});
  };

  const cancel = (e) => {
    e.stopPropagation();
    navigate('/');
}

  return (
    <Container>
      <Row>
        <Col xs={8}>
          <h1>Favorite authors</h1>
          <Link to="/">Home</Link>
          <p>{texto}</p>
          <Form onSubmit={onHandleSubmit}>
            <FormGroup>
              <FormLabel htmlFor="name">Name:</FormLabel>
              <FormControl
                type="text"
                id="name"
                placeholder="Insert author name..."
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </FormGroup>
            <Button type="button" onClick={cancel}>Cancel</Button>
            <span> </span>
            <Button type="submit">Submit</Button>
            {props.errors.map((err, idx) => <p key={idx}>{err}</p>)}
          </Form>
        </Col>
      </Row>
    </Container>
  );
};
