import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";

/**
 * `hax-the-farm`
 * 
 * @demo index.html
 * @element calender-date
 */

export class LocationSelector extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "location-selector";
  }

  constructor() {
    super();
    this.title = "";
    this.t = this.t || {};
    this.t = {
      ...this.t,
      title: "Title",
    };
    this.registerLocalization({
      context: this,
      localesPath:
        new URL("./locales/location-selector.ar.json", import.meta.url).href +
        "/../",
      locales: ["ar", "es", "hi", "zh", "pt", "bn", "ru", "fr", "ja"],
    });
  }

  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
      title: { type: String },
    };
  }

  // Lit scoped styles
  static get styles() {
    return [super.styles,
    css`
      :host {
        display: block;
        color: var(--ddd-theme-primary);
        background-color: var(--ddd-theme-accent);
        font-family: var(--ddd-font-navigation);
      }
      .wrapper {
        margin: var(--ddd-spacing-2);
        padding: var(--ddd-spacing-4);
        border: 200px
      }
      h3 span {
        font-size: var(--hax-the-farm-label-font-size, var(--ddd-font-size-s));
      }
      
      table{
        margin-left: auto;
        margin-right: auto;
        width: 100%;
        table-layout: fixed;
      }
        
      th{
        font-size: 30px;
      }

      th, td{
        width: 14%;
      }
    `];
  }

  // Lit render the HTML
  render() {
    return html`
        <div class="wrapper">
        </div>
        
        `;}

  /**
   * haxProperties integration via file reference
   */
  static get haxProperties() {
    return new URL(`./lib/${this.tag}.haxProperties.json`, import.meta.url)
      .href;
  }
}

globalThis.customElements.define(LocationSelector.tag, LocationSelector);