import React, { useState } from 'react';
import 'App.css';
import { Container, Row, Col, Form, Table } from 'react-bootstrap';

const SliderRow: React.FC<{
  valueIndex: number,
  onChangeValueIndex: (val: number) => void,
  selectedFlg?: boolean,
  onClickParameter?: () => void,
  valueList: string[]
}> = ({valueIndex, onChangeValueIndex, selectedFlg, onClickParameter, valueList}) => {
  return (
    <tr>
      {
        selectedFlg
        ? <td className="text-right align-middle bg-info font-weight-bold"
            onClick={onClickParameter}>{valueList[valueIndex]}</td>
        : <td className="text-right align-middle font-weight-bold"
            onClick={onClickParameter}>{valueList[valueIndex]}</td>
      }
      <td>
        <Form.Control type="range" min={0} max={valueList.length - 1} step="1" value={'' + valueIndex}
          onChange={(e: React.FormEvent<HTMLInputElement>) => onChangeValueIndex(parseInt(e.currentTarget.value))}/>
      </td>
    </tr>
  );
};

const App: React.FC = () => {
  const [fValueIndex, setFValueIndex] = useState(3);
  const [speedIndex, setSpeedIndex] = useState(6);
  const [isoIndex, setIsoIndex] = useState(1);
  const [evIndex, setEvIndex] = useState(5);
  const [fValueIndex2, setFValueIndex2] = useState(3);
  const [speedIndex2, setSpeedIndex2] = useState(6);
  const [isoIndex2, setIsoIndex2] = useState(1);
  const [evIndex2, setEvIndex2] = useState(5);
  const [selectedParameterIndex, setSelectedParameterIndex] = useState(2);

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
                  <SliderRow valueIndex={fValueIndex} onChangeValueIndex={setFValueIndex}
                    valueList={['F1', 'F1.4', 'F2', 'F2.8', 'F4', 'F5.6', 'F8', 'F11']}/>
                  <SliderRow valueIndex={speedIndex} onChangeValueIndex={setSpeedIndex}
                    valueList={['1[s]', '1/2[s]', '1/4[s]', '1/8[s]', '1/15[s]', '1/30[s]', '1/60[s]', '1/125[s]', '1/250[s]']}/>
                  <SliderRow valueIndex={isoIndex} onChangeValueIndex={setIsoIndex}
                    valueList={['ISO100', 'ISO200', 'ISO400', 'ISO800', 'ISO1600', 'ISO3200', 'ISO6400', 'ISO12800', 'ISO25600']}/>
                  <SliderRow valueIndex={evIndex} onChangeValueIndex={setEvIndex}
                    valueList={['EV-5.0', 'EV-4.0', 'EV-3.0', 'EV-2.0', 'EV-1.0', 'EV+0.0', 'EV+1.0', 'EV+2.0', 'EV+3.0', 'EV+4.0', 'EV+5.0']}/>
                </tbody>
              </Table>
            </Form.Group>
            <Form.Label className="font-weight-bold">
              変更後の値
            </Form.Label>
            <Form.Group>
              <Table bordered size="sm">
              <tbody>
                  <SliderRow valueIndex={fValueIndex2} onChangeValueIndex={setFValueIndex2}
                    valueList={['F1', 'F1.4', 'F2', 'F2.8', 'F4', 'F5.6', 'F8', 'F11']}
                    selectedFlg={selectedParameterIndex == 0}
                    onClickParameter={() => setSelectedParameterIndex(0)}/>
                  <SliderRow valueIndex={speedIndex2} onChangeValueIndex={setSpeedIndex2}
                    valueList={['1[s]', '1/2[s]', '1/4[s]', '1/8[s]', '1/15[s]', '1/30[s]', '1/60[s]', '1/125[s]', '1/250[s]']}
                    selectedFlg={selectedParameterIndex == 1}
                    onClickParameter={() => setSelectedParameterIndex(1)}/>
                  <SliderRow valueIndex={isoIndex2} onChangeValueIndex={setIsoIndex2}
                    valueList={['ISO100', 'ISO200', 'ISO400', 'ISO800', 'ISO1600', 'ISO3200', 'ISO6400', 'ISO12800', 'ISO25600']}
                    selectedFlg={selectedParameterIndex == 2}
                    onClickParameter={() => setSelectedParameterIndex(2)}/>
                  <SliderRow valueIndex={evIndex2} onChangeValueIndex={setEvIndex2}
                    valueList={['EV-5.0', 'EV-4.0', 'EV-3.0', 'EV-2.0', 'EV-1.0', 'EV+0.0', 'EV+1.0', 'EV+2.0', 'EV+3.0', 'EV+4.0', 'EV+5.0']}
                    selectedFlg={selectedParameterIndex == 3}
                    onClickParameter={() => setSelectedParameterIndex(3)}/>
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
