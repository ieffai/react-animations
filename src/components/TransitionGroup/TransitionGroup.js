import React, { useState } from 'react'
import './TransitionGroup.scss';
import { Button } from 'react-bootstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const TransitionGroupElement = () => {
    const todos = [
        {
            id: 1,
            text: 'TEXT1'
        },
        {
            id: 2,
            text: 'TEXT2'
        },
        {
            id: 3,
            text: 'TEXT3'
        },
        {
            id: 4,
            text: 'TEXT4'
        },
        {
            id: 5,
            text: 'TEXT5'
        },
    ]
    const [text, setText] = useState('');
    const [list, setList] = useState(todos);

    const inputHandler = (e) => {
        setText(e.target.value);
    }
    const addTodo = () => {
        const newTodo = { id: Date.now(), text };
        setList([...list, newTodo])
    }

    const delTodo = (id) => {
        const filtered = list.filter(item => item.id !== id);
        setList(filtered)
    }

    return (
        <div className='page'>
            <div>
                <input
                    onChange={inputHandler}
                    value={text}
                    type='text' />
                <Button
                    onClick={addTodo}
                    variant="primary">Add</Button>
            </div>
            <TransitionGroup component="ul">
                {list.map(({ id, text }) =>
                    <CSSTransition
                        key={id}
                        timeout={500}
                        classNames='todo'
                    >
                        <li
                            className='todo'
                            onClick={() => delTodo(id)}
                        >
                            {id} {text}
                        </li>
                    </CSSTransition>
                )}
            </TransitionGroup>
        </div>
    )
}

export default TransitionGroupElement