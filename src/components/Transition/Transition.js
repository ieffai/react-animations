import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';
import { Transition } from 'react-transition-group';
import './Transition.scss';

const TransitionElement = () => {

    const [loaderVisible, setLoaderVisible] = useState(false);

    useEffect(() => {
        setTimeout(() => setLoaderVisible(true), 1000)
        setTimeout(() => setLoaderVisible(false), 5000)
    }, [])

    const clickHandler = () => {
        setLoaderVisible(!loaderVisible);
    }
    return (
        <div className="page">
            <h1>TRANSITION</h1>
            <Button variant="primary" onClick={clickHandler}>
                {loaderVisible ? 'hide' : 'show'}
            </Button>
            <div className='wrap'>
                <Transition
                    in={loaderVisible}
                    timeout={500}
                    mountOnEnter
                    unmountOnExit
                    onEnter={() => console.log('onEnter')}
                    onEntering={() => console.log('onEntering')}
                    onEntered={() => console.log('onEntered')}
                    onExit={() => console.log('onExit')}
                    onExiting={() => console.log('onExiting')}
                    onExited={() => console.log('onExited')}

                >
                    {state => <div className={`circle ${state}`} />}
                </Transition>
            </div>
        </div>
    )
}

export default TransitionElement