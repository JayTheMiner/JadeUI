import { LitElement, unsafeCSS } from 'lit';
import styles from '../styles/JdComponentBase.css'; // CSS 파일 로드

export class JdComponentBase extends LitElement {
    static styles = unsafeCSS(styles); // CSS를 unsafeCSS로 래핑하여 사용

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
