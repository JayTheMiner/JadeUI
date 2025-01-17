import { html, unsafeCSS } from 'lit';
import { JdComponentBase } from './JdComponentBase.js';
import JdButtonCss from '../styles/JdButton.css';

// todo: size fullWidth startIcon endIcon loading
export class JdButton extends JdComponentBase {
    /**
     * Lit property definitions
     * Defines attributes and properties that the component can accept.
     */
    static properties = {
        variant: { type: String },   // Button style: 'default', 'common', 'text'
        color: { type: String },     // Button color: 'default', 'common', 'success', 'error'
        size: { type: String },      // Button size: 'default', 'small', 'large'
        disabled: { type: Boolean }, // Disabled state: true or false
        fullWidth: { type: Boolean }, // Full-width button: spans 100% of parent width
        startIcon: { type: String },  // Icon on the left side: to be replaced with an SVG library
        endIcon: { type: String },    // Icon on the right side: to be replaced with an SVG library
        loading: { type: Boolean },   // Loading state: true shows a loader
    };

    /**
     * Lit styles
     * Combines the base component's styles and button-specific styles.
     */
    static styles = [JdComponentBase.styles, unsafeCSS(JdButtonCss)];

    /**
     * Constructor
     * Initializes the component and sets default values.
     */
    constructor() {
        super();
        this.init();
    }

    /**
     * Initialize default property values.
     */
    init() {
        this.variant = 'default';
        this.color = 'default';
        this.size = 'default';
        this.disabled = false;
        this.fullWidth = false;
        this.loading = false;
        this.startIcon = '';
        this.endIcon = '';
    }

    /**
     * Lit render function
     * Renders the button element with appropriate attributes and child elements.
     * @returns {TemplateResult} Rendered HTML template
     */
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
