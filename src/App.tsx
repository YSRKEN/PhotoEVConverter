import React, { useState, useEffect } from 'react';
import 'App.css';
import { Container, Row, Col, Form, Table } from 'react-bootstrap';

const SliderRow: React.FC<{
  valueIndex: number,
  onChangeValueIndex: (val: number) => void,
  selectedFlg?: boolean,
  onClickParameter?: () => void,
  valueList: string[]
}> = ({ valueIndex, onChangeValueIndex, selectedFlg, onClickParameter, valueList }) => {
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
          onChange={(e: React.FormEvent<HTMLInputElement>) => onChangeValueIndex(parseInt(e.currentTarget.value))} />
      </td>
    </tr>
  );
};

const App: React.FC = () => {
  const [fValueIndex, setFValueIndex] = useState(3);
  const [speedIndex, setSpeedIndex] = useState(6);
  const [isoIndex, setIsoIndex] = useState(7);
  const [evIndex, setEvIndex] = useState(5);
  const [fValueIndex2, setFValueIndex2] = useState(3);
  const [speedIndex2, setSpeedIndex2] = useState(6);
  const [isoIndex2, setIsoIndex2] = useState(7);
  const [evIndex2, setEvIndex2] = useState(5);
  const [selectedParameterIndex, setSelectedParameterIndex] = useState(2);

  useEffect(() => {
    const sum1 = fValueIndex + speedIndex + isoIndex + evIndex;
    const sum2 = fValueIndex2 + speedIndex2 + isoIndex2 + evIndex2;
    const diff = sum1 - sum2;
    switch (selectedParameterIndex) {
      case 0:
        setFValueIndex2(fValueIndex2 - diff);
        break;
      case 1:
        setSpeedIndex2(speedIndex2 - diff);
        break;
      case 2:
        setIsoIndex2(isoIndex2 - diff);
        break;
      case 3:
        setEvIndex2(evIndex2 - diff);
        break;
    }
  }, [fValueIndex, speedIndex, isoIndex, evIndex]);

  useEffect(() => {
    const sum1 = fValueIndex + speedIndex + isoIndex + evIndex;
    const sum2 = fValueIndex2 + speedIndex2 + isoIndex2 + evIndex2;
    const diff = sum1 - sum2;
    switch (selectedParameterIndex) {
      case 0:
        setFValueIndex2(diff + fValueIndex2);
        break;
      case 1:
        setSpeedIndex2(diff + speedIndex2);
        break;
      case 2:
        setIsoIndex2(diff + isoIndex2);
        break;
      case 3:
        setEvIndex2(diff + evIndex2);
        break;
    }
  }, [fValueIndex2, speedIndex2, isoIndex2, evIndex2]);

  const onChangeSecondParameter = (parameterIndex: number, parameterValue: number) => {
    if (selectedParameterIndex === parameterIndex) {
      return;
    }
    switch (parameterIndex) {
      case 0:
        setFValueIndex2(parameterValue);
        break;
      case 1:
        setSpeedIndex2(parameterValue);
        break;
      case 2:
        setIsoIndex2(parameterValue);
        break;
      case 3:
        setEvIndex2(parameterValue);
        break;
    }
  }

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
                    valueList={['F1', 'F1.4', 'F2', 'F2.8', 'F4', 'F5.6', 'F8', 'F11']} />
                  <SliderRow valueIndex={speedIndex} onChangeValueIndex={setSpeedIndex}
                    valueList={['1[s]', '1/2[s]', '1/4[s]', '1/8[s]', '1/15[s]', '1/30[s]', '1/60[s]', '1/125[s]', '1/250[s]']} />
                  <SliderRow valueIndex={isoIndex} onChangeValueIndex={setIsoIndex}
                    valueList={['ISO25600', 'ISO12800', 'ISO6400', 'ISO3200', 'ISO1600', 'ISO800', 'ISO400', 'ISO200', 'ISO100']} />
                  <SliderRow valueIndex={evIndex} onChangeValueIndex={setEvIndex}
                    valueList={['EV-5.0', 'EV-4.0', 'EV-3.0', 'EV-2.0', 'EV-1.0', 'EV+0.0', 'EV+1.0', 'EV+2.0', 'EV+3.0', 'EV+4.0', 'EV+5.0']} />
                </tbody>
              </Table>
            </Form.Group>
            <Form.Label className="font-weight-bold">
              変更後の値
            </Form.Label>
            <Form.Group>
              <Table bordered size="sm">
                <tbody>
                  <SliderRow valueIndex={fValueIndex2} onChangeValueIndex={v => onChangeSecondParameter(0, v)}
                    valueList={['F1', 'F1.4', 'F2', 'F2.8', 'F4', 'F5.6', 'F8', 'F11']}
                    selectedFlg={selectedParameterIndex === 0}
                    onClickParameter={() => setSelectedParameterIndex(0)} />
                  <SliderRow valueIndex={speedIndex2} onChangeValueIndex={v => onChangeSecondParameter(1, v)}
                    valueList={['1[s]', '1/2[s]', '1/4[s]', '1/8[s]', '1/15[s]', '1/30[s]', '1/60[s]', '1/125[s]', '1/250[s]']}
                    selectedFlg={selectedParameterIndex === 1}
                    onClickParameter={() => setSelectedParameterIndex(1)} />
                  <SliderRow valueIndex={isoIndex2} onChangeValueIndex={v => onChangeSecondParameter(2, v)}
                    valueList={['ISO25600', 'ISO12800', 'ISO6400', 'ISO3200', 'ISO1600', 'ISO800', 'ISO400', 'ISO200', 'ISO100']}
                    selectedFlg={selectedParameterIndex === 2}
                    onClickParameter={() => setSelectedParameterIndex(2)} />
                  <SliderRow valueIndex={evIndex2} onChangeValueIndex={v => onChangeSecondParameter(3, v)}
                    valueList={['EV-5.0', 'EV-4.0', 'EV-3.0', 'EV-2.0', 'EV-1.0', 'EV+0.0', 'EV+1.0', 'EV+2.0', 'EV+3.0', 'EV+4.0', 'EV+5.0']}
                    selectedFlg={selectedParameterIndex === 3}
                    onClickParameter={() => setSelectedParameterIndex(3)} />
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
