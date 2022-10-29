import { Observable } from '../utils/observable';
import { CounterState } from './counter-state';
import { idGenerator } from '../utils/id';

interface CounterEntry {
    id: number;
    counter: CounterState;
}

export class AppState extends Observable<{ type: 'add' | 'remove'; id: number }> {
    private counters: CounterEntry[];

    nextId: () => number;

    constructor() {
        super();
        this.nextId = idGenerator();
        this.counters = [
            {
                id: this.nextId(),
                counter: new CounterState(),
            },
        ];
    }

    add() {
        let id = this.nextId();
        this.counters.push({
            id: id,
            counter: new CounterState(),
        });
        this.emit({ type: 'add', id });
    }

    remove(id: number) {
        this.counters = this.counters.filter((counter) => id !== counter.id);
        this.emit({ type: 'remove', id });
    }

    get(): ReadonlyArray<CounterEntry> {
        return this.counters;
    }
}
