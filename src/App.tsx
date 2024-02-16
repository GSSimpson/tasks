import React from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import "./App.css";

function App(): JSX.Element {
    return (
        <div className="App">
            <Container>
                <Row>
                    <Col>
                        <div
                            style={{
                                backgroundColor: "red",
                                width: "80%",
                                height: "20%"
                            }}
                        ></div>
                        <img
                            style={{ width: "100%" }}
                            src="https://s1.cdn.autoevolution.com/images/news/gallery/you-can-thank-bill-gates-for-these-errors-on-car-screens-and-billboards_1.jpg"
                            alt=":("
                        />
                    </Col>
                    <Col>
                        <div
                            style={{
                                backgroundColor: "red",
                                width: "80%",
                                height: "20%"
                            }}
                        ></div>
                        <header className="App-header">
                            Gabriel Simpson - UD CISC275 with React Hooks and
                            TypeScript
                        </header>
                        <h1>header text</h1>
                        <p>
                            Edit <code>src/App.tsx</code> and save. This page
                            will automatically reload.
                        </p>
                        <ul>
                            <li>bullet 1</li>
                            <li>bullet 2</li>
                            <li>bullet 3</li>
                        </ul>
                        <Button onClick={() => console.log("Hello World!")}>
                            Log Hello World
                        </Button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
