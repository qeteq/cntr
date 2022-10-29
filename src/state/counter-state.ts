import { Observable } from '../utils/observable';

export class CounterState extends Observable<number> {
    private count = 0;

    constructor(initialValue = 0) {
        super();
        this.count = initialValue;
    }

    increment() {
        this.set(this.count + 1);
    }

    decrement() {
        this.set(this.count - 1);
    }

    set(newCount: number) {
        this.count = newCount;
        this.emit(this.count);
    }

    get(): number {
        return this.count;
    }
}
