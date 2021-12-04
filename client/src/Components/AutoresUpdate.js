import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { AutoresForm } from "./AutoresForm";
import { navigate } from "@reach/router";
import axios from "axios";

export const AutoresUpdate = (props) => {
  const [errors, setErrors] = useState([]);
  const [autor, setAutor] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:9000/api/autores/" + props.id)
      .then((res) => {
        setAutor(res.data);
        setLoading(true);
      })
      .catch((err) => console.log(err));
  }, [props.id]);

  const updateAutores = (autores) => {
    console.log(autores);
    axios
      .put("http://localhost:9000/api/autores/" + props.id, autores)
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .catch((err) => {
        console.log(err)
        const errorResponse = err.response.data.errors;
        const errorArr = [];
        for (const key of Object.keys(errorResponse)) {
          errorArr.push(errorResponse[key].message);
        }
        setErrors(errorArr);
      });
  };

  return (
    <Container>
      {loading && (
        <AutoresForm
          initialText="Edit this author:"
          onSubmitProp={updateAutores}
          initialValue={autor}
          errors={errors}
        />
      )}
    </Container>
  );
};
