type Listener<T> = (arg: T) => void;

export class Observable<T> {
    private listeners: Array<Listener<T>> = [];

    addListener(listener: Listener<T>) {
        this.listeners.push(listener);
    }

    removeListener(listener: Listener<T>) {
        this.listeners = this.listeners.filter((l) => l !== listener);
    }

    emit(value: T) {
        this.listeners.forEach((listener) => {
            listener(value);
        });
    }
}

// export interface Obs<T> {
//     (): T;
//     (value: T): void;
//     subscribe(callback: (value: T) => void): void;
// }

// export const obs = <T>(initialValue: T): Obs<T> => {
//     let value = initialValue;
//     let observable = new Observable<T>();

//     const accessor = (newValue?: T) => {
//         if (newValue !== undefined) {
//             value = newValue;
//             observable.emit(value);
//         } else {
//             return value;
//         }
//     };

//     accessor.subscribe = observable.addListener.bind(observable);

//     return accessor as any;
// };
