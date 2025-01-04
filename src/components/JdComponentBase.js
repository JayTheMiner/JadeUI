import { LitElement, unsafeCSS } from 'lit';
import JdComponentBaseCss from '../styles/JdComponentBase.css';

export class JdComponentBase extends LitElement {
    static styles = unsafeCSS(JdComponentBaseCss);

    static properties = {
        disabled: { type: Boolean },
    };

    constructor() {
        super();
        this.disabled = false;
    }

    handleClick(event) {
        if (this.disabled) {
            event.preventDefault();
            event.stopPropagation();
            console.warn('Component is disabled');
        }
    }
}
