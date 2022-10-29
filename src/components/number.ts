import { Component } from '../component';
import { CounterState } from '../state/counter-state';

export class NumberComponent extends Component {
    private prefix: string;
    private state: CounterState;

    constructor(state: CounterState, { prefix }: { prefix: string }) {
        super('div');
        this.state = state;
        this.prefix = prefix;

        state.addListener(this.update);
        this.update(state.get());
    }

    update = (value: number) => {
        this.node.textContent = `Count ${this.prefix}: ${value}`;
    };

    destroy(): void {
        this.state.removeListener(this.update);
        super.destroy();
    }
}
