import { Component } from '../component';
import { AppState } from '../state/app-state';
import { Button } from './button';
import { Counter } from './counter';

export class App extends Component {
    private state: AppState;
    private children: Record<number, Component> = {};

    constructor(state: AppState) {
        super('div');
        this.state = state;

        const addButton = new Button({
            text: 'Add',
            onclick: () => {
                state.add();
            },
        });

        this.node.append(addButton.node);

        state.addListener(this.update);
        state.get().forEach(({ id }) => this.update({ type: 'add', id }));
    }

    update = ({ type, id }: any) => {
        const counters = this.state.get();
        const lastCounter = counters[counters.length - 1];

        counters.forEach;

        if (type === 'add') {
            let counter = new Counter(lastCounter.counter, {
                prefix: '#' + lastCounter.id,
                onremove: () => {
                    this.state.remove(lastCounter.id);
                },
            });

            this.children[id] = counter;
            this.node.append(counter.node);
        } else if (type === 'remove') {
            this.children[id].destroy();
        }
    };
}
