import { html, css } from 'lit';
import { JdComponentBase } from './JdComponentBase.js';

export class JdButton extends JdComponentBase {
    static styles = [
        JdComponentBase.styles, // 베이스 스타일 포함
        css`
      :host {
        display: inline-block;
      }

      button {
        padding: 8px 16px;
        font-size: 16px;
        border: 1px solid #ccc;
        border-radius: 4px;
        background-color: #f0f0f0;
        color: #333;
        cursor: pointer;
        transition: background-color 0.2s;
      }

      button:hover {
        background-color: #e0e0e0;
      }

      button:disabled {
        background-color: #ccc;
        cursor: not-allowed;
      }
    `,
    ];

    render() {
        return html`
      <button
        ?disabled=${this.disabled}
        @click=${this.handleClick}
      >
        <slot></slot>
      </button>
    `;
    }
}

customElements.define('jd-button', JdButton);
