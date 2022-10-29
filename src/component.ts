export class Component {
    public readonly node: HTMLElement;

    constructor(tag = 'div', properties?: Record<string, any>) {
        this.node = document.createElement(tag);

        if (properties) {
            Object.assign(this.node, properties);
        }
    }
}
