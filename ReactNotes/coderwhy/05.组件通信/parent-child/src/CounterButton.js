import React from 'react';

export default function CounterButton(props) {
    const { operator, btnClick } = props;
    return <button onClick={btnClick}>{operator}</button>
}