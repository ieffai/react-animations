import React from "react";
import { SwitchTransition, CSSTransition } from "react-transition-group";
import { Button, Form } from "react-bootstrap";
import './SwitchTransition.scss';

const modes = ["out-in", "in-out"];

const SwitchTransitionElement = () => {
    const [mode, setMode] = React.useState("out-in");
    const [state, setState] = React.useState(true);
    return (
        <div className='page'>
            <h1>SWITCH TRANSITION</h1>
            <div className="modes">
                <div className="label">Mode:</div>
                {modes.map(m => (
                    <Form.Check
                        key={m}
                        custom
                        inline
                        label={m}
                        id={`mode=msContentScript${m}`}
                        type="radio"
                        name="mode"
                        checked={mode === m}
                        value={m}
                        onChange={event => {
                            setMode(event.target.value);
                        }}
                    />
                ))}
            </div>
            <div className="container">
                <SwitchTransition mode={mode}>
                    <CSSTransition
                        key={state}
                        addEndListener={(node, done) => {
                            node.addEventListener("transitionend", done, false);
                        }}
                        classNames="fade"
                    >
                        <div className="button-container">
                            <Button onClick={() => setState(state => !state)}>
                                {state ? "Hello, world!" : "Goodbye, world!"}
                            </Button>
                        </div>
                    </CSSTransition>
                </SwitchTransition>
            </div>
        </div>
    );
}
export default SwitchTransitionElement
