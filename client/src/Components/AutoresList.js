import { navigate } from "@reach/router";
import React from "react";
import { Row, Table, Button, Col } from "react-bootstrap";
import { DeleteAutoresButton } from "./DeleteAutoresButton";

export const AutoresList = (props) => {
  return (
    <Row>
      <Col xs={6}>
        <Table>
          <thead>
            <tr>
              <th>Author</th>
              <th>Actions</th>
              <th>available</th>
            </tr>
          </thead>
          <tbody>
            {props.state.map((elem, idx) => (
              <tr key={idx}>
                <td>{elem.name}</td>
                <td>
                  <Button
                    type="button"
                    onClick={() => navigate(`/edit/${elem._id}`)}
                  >
                    Edit
                  </Button>
                </td>
                <td>
                  <DeleteAutoresButton autoresId={elem._id} successCallback={()=>props.removeFromDom(elem._id)}/>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Col>
    </Row>
  );
};
