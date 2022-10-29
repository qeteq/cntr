import { Component } from '../component';

interface ButtonProps {
    text: string;
    onclick: () => void;
}

export class Button extends Component {
    constructor({ text, onclick }: ButtonProps) {
        super('button', { textContent: text, onclick });
    }
}
