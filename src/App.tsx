import React, { useState } from "react";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CheckBox,
  Heading,
  RangeInput,
  Spinner,
  TextArea,
} from "grommet";
import "./App.css";
import axios, { AxiosResponse } from "axios";
import { Launch } from "grommet-icons";
function App() {
  const [running, setRunning] = useState(false);
  const [Advanced, setAdvanced] = useState(true);
  const [context, setContext] = useState("");
  const [res, setRes] = useState<AxiosResponse | undefined>();
  const [temp, setTemp] = useState(0.1);
  async function run() {
    setRunning(true);
    let res;
    try {
      res = await axios.post(process.env.REACT_APP_URL!, {
        context: context,
        temp: temp,
      });
    } catch (err) {
      console.log(err);
    }
    setRes(res);
    setRunning(false);
  }
  return (
    <div className="app">
      <Card width="large" background="light">
        <CardHeader pad="medium">
          <Heading level="2" margin="none">
            GPT-J
          </Heading>
        </CardHeader>
        <CardBody pad="medium">
          <TextArea
            placeholder="Context to generate"
            disabled={running}
            value={context}
            onChange={(e) => {
              setContext(e.target.value);
            }}
          />
          <p>
            <strong>{context}</strong>
            {res ? res.data.text : null}
          </p>
          <p>Advanced Options</p>
          <CheckBox
            checked={Advanced}
            onChange={() => setAdvanced(!Advanced)}
            disabled={running}
          />
          {Advanced ? (
            <div>
              <p>Temperature: {temp}</p>
              <RangeInput
                max={1}
                min={0.01}
                step={0.01}
                value={temp}
                onChange={(e) => setTemp(parseFloat(e.target.value))}
                disabled={running}
              />
            </div>
          ) : null}
        </CardBody>
        <CardFooter
          pad="small"
          background="light"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <Button
            label={running ? "Running" : "Run"}
            hoverIndicator
            icon={running ? <Spinner /> : <Launch />}
            disabled={running}
            onClick={run}
          />
        </CardFooter>
      </Card>
    </div>
  );
}

export default App;
