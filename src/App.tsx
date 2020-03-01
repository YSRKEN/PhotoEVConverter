import React from 'react';
import 'App.css';
import { Container, Row, Col, Form, Table } from 'react-bootstrap';

function App() {
  return (
    <Container>
      <Row className="my-3">
        <Col className="text-center">
          <h1>EV変換機</h1>
        </Col>
      </Row>
      <Row className="my-3">
        <Col className="mx-auto">
          <Form>
            <Form.Label className="font-weight-bold">
              元の値
            </Form.Label>
            <Form.Group>
              <Table bordered size="sm">
                <tbody>
                  <tr>
                    <td className="text-right align-middle">F2.8</td>
                    <td>
                      <Form.Control type="range" min="1" max="10" step="1" />
                    </td>
                  </tr>
                  <tr>
                    <td className="text-right align-middle">1/60[s]</td>
                    <td>
                      <Form.Control type="range" min="1" max="10" step="1" />
                    </td>
                  </tr>
                  <tr>
                    <td className="text-right align-middle">ISO200</td>
                    <td>
                      <Form.Control type="range" min="1" max="10" step="1" />
                    </td>
                  </tr>
                  <tr>
                    <td className="text-right align-middle">EV+0.0</td>
                    <td>
                      <Form.Control type="range" min="1" max="10" step="1" />
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Form.Group>
            <Form.Label className="font-weight-bold">
              変更後の値
            </Form.Label>
            <Form.Group>
              <Table bordered size="sm">
                <tbody>
                  <tr>
                    <td className="text-right align-middle">F5.6</td>
                    <td>
                      <Form.Control type="range" min="1" max="10" step="1" />
                    </td>
                  </tr>
                  <tr>
                    <td className="text-right align-middle">1/120[s]</td>
                    <td>
                      <Form.Control type="range" min="1" max="10" step="1" />
                    </td>
                  </tr>
                  <tr>
                    <td className="text-right align-middle bg-info">ISO3200</td>
                    <td>
                      <Form.Control type="range" min="1" max="10" step="1" />
                    </td>
                  </tr>
                  <tr>
                    <td className="text-right align-middle">EV+1.0</td>
                    <td>
                      <Form.Control type="range" min="1" max="10" step="1" />
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
