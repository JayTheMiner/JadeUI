import { html, unsafeCSS } from 'lit';
import { JdComponentBase } from './JdComponentBase.js';
import styles from '../styles/JdButton.css'; // 버튼 스타일 로드

export class JdButton extends JdComponentBase {
    static styles = [JdComponentBase.styles, unsafeCSS(styles)]; // 베이스 스타일 포함

    render() {
        return html`
      <button ?disabled=${this.disabled} @click=${this.handleClick}>
        <slot></slot>
      </button>
    `;
    }
}

customElements.define('jd-button', JdButton);
