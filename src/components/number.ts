import { Component } from '../component';
import { State } from '../state';

export class NumberComponent extends Component {
    constructor(state: State) {
        super('div');

        state.addListener(this.update);
        this.update(state.get());
    }

    update = (value: number) => {
        this.node.textContent = `Count: ${value}`;
    };
}
