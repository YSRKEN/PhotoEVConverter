import React, { useState, useEffect } from 'react';
import 'App.css';
import { Container, Row, Col, Form, Table } from 'react-bootstrap';

const F_VALUE_LIST: string[] = [
  "F1",
  "F1.1",
  "F1.3",
  "F1.4",
  "F1.6",
  "F1.8",
  "F2",
  "F2.2",
  "F2.5",
  "F2.8",
  "F3.2",
  "F3.6",
  "F4",
  "F4.5",
  "F5",
  "F5.6",
  "F6.3",
  "F7.1",
  "F8",
  "F9",
  "F10",
  "F11",
  "F13",
  "F14",
  "F16"
];

const SPEED_VALUE_LIST: string[] = [
  "60[s]",
  "50[s]",
  "40[s]",
  "30[s]",
  "25[s]",
  "20[s]",
  "15[s]",
  "13[s]",
  "10[s]",
  "8[s]",
  "6[s]",
  "5[s]",
  "4[s]",
  "3.2[s]",
  "2.5[s]",
  "2[s]",
  "1.6[s]",
  "1.3[s]",
  "1[s]",
  "0.8[s]",
  "0.6[s]",
  "0.5[s]",
  "0.4[s]",
  "0.3[s]",
  "1/4[s]",
  "1/5[s]",
  "1/6[s]",
  "1/8[s]",
  "1/10[s]",
  "1/13[s]",
  "1/15[s]",
  "1/20[s]",
  "1/25[s]",
  "1/30[s]",
  "1/40[s]",
  "1/50[s]",
  "1/60[s]",
  "1/80[s]",
  "1/100[s]",
  "1/125[s]",
  "1/160[s]",
  "1/200[s]",
  "1/250[s]",
  "1/320[s]",
  "1/400[s]",
  "1/500[s]",
  "1/640[s]",
  "1/800[s]",
  "1/1000[s]",
  "1/1250[s]",
  "1/1600[s]",
  "1/2000[s]",
  "1/2500[s]",
  "1/3200[s]",
  "1/4000[s]",
  "1/5000[s]",
  "1/6400[s]",
  "1/8000[s]"
];

const ISO_VALUE_LIST: string[] = [
  "ISO50",
  "ISO64",
  "ISO80",
  "ISO100",
  "ISO125",
  "ISO160",
  "ISO200",
  "ISO250",
  "ISO320",
  "ISO400",
  "ISO500",
  "ISO640",
  "ISO800",
  "ISO1000",
  "ISO1250",
  "ISO1600",
  "ISO2000",
  "ISO2500",
  "ISO3200",
  "ISO4000",
  "ISO5000",
  "ISO6400",
  "ISO8000",
  "ISO10000",
  "ISO12800",
  "ISO16000",
  "ISO20000",
  "ISO25600",
  "ISO32000",
  "ISO40000",
  "ISO51200"
].reverse();

const EV_VALUE_LIST: string[] = [
  'EV-5.0',
  'EV-4 2/3',
  'EV-4 1/3',
  'EV-4.0',
  'EV-3 2/3',
  'EV-3 1/3',
  'EV-3.0',
  'EV-2 2/3',
  'EV-2 1/3',
  'EV-2.0',
  'EV-1 2/3',
  'EV-1 1/3',
  'EV-1.0',
  'EV-2/3',
  'EV-1/3',
  'EV+0.0',
  'EV+1/3',
  'EV+2/3',
  'EV+1.0',
  'EV+1 1/3',
  'EV+1 2/3',
  'EV+2.0',
  'EV+2 1/3',
  'EV+2 2/3',
  'EV+3.0',
  'EV+3 1/3',
  'EV+3 2/3',
  'EV+4.0',
  'EV+4 1/3',
  'EV+4 2/3',
  'EV+5.0'
];

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
  const [fValueIndex, setFValueIndex] = useState(9);
  const [speedIndex, setSpeedIndex] = useState(36);
  const [isoIndex, setIsoIndex] = useState(24);
  const [evIndex, setEvIndex] = useState(15);

  const [fValueIndex2, setFValueIndex2] = useState(9);
  const [speedIndex2, setSpeedIndex2] = useState(36);
  const [isoIndex2, setIsoIndex2] = useState(24);
  const [evIndex2, setEvIndex2] = useState(15);

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
                    valueList={F_VALUE_LIST} />
                  <SliderRow valueIndex={speedIndex} onChangeValueIndex={setSpeedIndex}
                    valueList={SPEED_VALUE_LIST} />
                  <SliderRow valueIndex={isoIndex} onChangeValueIndex={setIsoIndex}
                    valueList={ISO_VALUE_LIST} />
                  <SliderRow valueIndex={evIndex} onChangeValueIndex={setEvIndex}
                    valueList={EV_VALUE_LIST} />
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
                    valueList={F_VALUE_LIST}
                    selectedFlg={selectedParameterIndex === 0}
                    onClickParameter={() => setSelectedParameterIndex(0)} />
                  <SliderRow valueIndex={speedIndex2} onChangeValueIndex={v => onChangeSecondParameter(1, v)}
                    valueList={SPEED_VALUE_LIST}
                    selectedFlg={selectedParameterIndex === 1}
                    onClickParameter={() => setSelectedParameterIndex(1)} />
                  <SliderRow valueIndex={isoIndex2} onChangeValueIndex={v => onChangeSecondParameter(2, v)}
                    valueList={ISO_VALUE_LIST}
                    selectedFlg={selectedParameterIndex === 2}
                    onClickParameter={() => setSelectedParameterIndex(2)} />
                  <SliderRow valueIndex={evIndex2} onChangeValueIndex={v => onChangeSecondParameter(3, v)}
                    valueList={EV_VALUE_LIST}
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
