import React from 'react';

import logProps from '../hoc/log-props';

function Counter({count, onButtonPlusClick, onButtonMinusClick}) {
    return (
        <div className="wrapper">
            <button className="button" onClick={onButtonPlusClick}>+</button>
            <span className="count">{count}</span>
            <button className="button" onClick={onButtonMinusClick}>-</button>
        </div>
    );
}

export default logProps(Counter);