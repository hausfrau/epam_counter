import React, { Component } from "react";

import Counter from './components/Counter';

class App extends Component {
    state = {
        count: 0
    };

    render() {
        const { count } = this.state;

        return (
            <div className="container">
                <Counter count={count}
                         onButtonPlusClick={() => this.setState({ count: count + 1 })}
                         onButtonMinusClick={() => this.setState({ count: count - 1 })} />
            </div>
        );
    }
}

export default App;