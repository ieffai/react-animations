import React, { useState } from 'react'
import { CSSTransition } from 'react-transition-group';
import { Button } from 'react-bootstrap';
import './CSSTransition.scss';

const CSSTransitionElement = () => {
    const [loaderVisible, setLoaderVisible] = useState(false);

    const clickHandler = () => {
        setLoaderVisible(!loaderVisible);
    }
    return (
        <div className="page">
            <h1>CSS TRANSITION</h1>
            <Button variant="primary"
                onClick={clickHandler}
            >
                {loaderVisible ? 'hide' : 'show'}
            </Button>
            <div className='wrap'>
                <CSSTransition
                    in={loaderVisible}
                    timeout={2000}
                    classNames={{
                        enterActive: 'circle-show',
                        enterDone: 'circle-rotate',
                        exitActive: 'circle-hide'
                    }}
                    mountOnEnter
                    unmountOnExit
                >
                    <div className={`circle`} />
                </CSSTransition>
            </div>
        </div>
    )
}

export default CSSTransitionElement