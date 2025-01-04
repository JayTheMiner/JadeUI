import { html, unsafeCSS } from 'lit';
import { JdComponentBase } from './JdComponentBase.js';
import JdButtonCss from '../styles/JdButton.css'; // 외부 CSS 파일 로드

export class JdButton extends JdComponentBase {
    static properties = {
        variant: { type: String },  // 'text', 'outlined', 'contained'
        color: { type: String },    // 'primary', 'secondary', 'error'
        size: { type: String },     // 'small', 'medium', 'large'
        disabled: { type: Boolean },
        fullWidth: { type: Boolean },
        startIcon: { type: String }, // 아이콘 클래스나 이름
        endIcon: { type: String },
        loading: { type: Boolean },
    };

    constructor() {
        super();
        this.variant = 'contained';
        this.color = 'primary';
        this.size = 'medium';
        this.disabled = false;
        this.fullWidth = false;
        this.loading = false;
        this.startIcon = '';
        this.endIcon = '';
    }

    static styles = [JdComponentBase.styles, unsafeCSS(JdButtonCss)];


    render() {
        return html`
      <button ?disabled=${this.disabled} @click=${this.handleClick}>
        ${this.startIcon ? html`<span class="icon">${this.startIcon}</span>` : ''}
        ${this.loading ? html`<span class="loader">Loading...</span>` : html`<slot></slot>`}
        ${this.endIcon ? html`<span class="icon">${this.endIcon}</span>` : ''}
      </button>
    `;
    }
}

customElements.define('jd-button', JdButton);
