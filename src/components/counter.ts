import { Component } from '../component';
import { State } from '../state';
import { Button } from './button';
import { NumberComponent } from './number';

export class Counter extends Component {
    constructor(state: State) {
        super('div', { className: 'counter' });

        const number = new NumberComponent(state);

        const increment = new Button({
            text: '+',
            onclick: () => {
                state.increment();
            },
        });

        const decrement = new Button({
            text: '-',
            onclick: () => {
                state.decrement();
            },
        });

        const reset = new Button({
            text: 'reset',
            onclick: () => state.set(0),
        });

        this.node.append(number.node, increment.node, decrement.node, reset.node);
    }
}
