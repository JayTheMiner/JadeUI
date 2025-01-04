import { LitElement, html, css } from 'lit';

class MyElement extends LitElement {
    static styles = css`
    :host {
      display: block;
      padding: 16px;
      font-size: 18px;
      background-color: #f9f9f9;
      color: #333;
      border: 1px solid #ddd;
      border-radius: 8px;
    }
  `;

    render() {
        return html`<h1>Welcome to JadeUI</h1>`;
    }
}

customElements.define('my-element', MyElement);
