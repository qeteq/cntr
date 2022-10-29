import { Component } from '../component';
import { CounterState } from '../state/counter-state';
import { Button } from './button';
import { NumberComponent } from './number';

export class Counter extends Component {
    constructor(
        state: CounterState,
        { prefix, onremove }: { prefix: string; onremove: () => void }
    ) {
        super('div', { className: 'counter' });

        const number = new NumberComponent(state, { prefix });

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

        const remove = new Button({
            text: 'remove',
            onclick: () => onremove(),
        });

        this.node.append(
            number.node,
            increment.node,
            decrement.node,
            reset.node,
            remove.node
        );
    }
}
