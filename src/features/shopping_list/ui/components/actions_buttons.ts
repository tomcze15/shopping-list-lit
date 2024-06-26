import { css, html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import ShoppingListEventEmitter from '@features/shopping_list/events/shopping_list_event_emitter';
import '@shared/components/basic_button';

@customElement('actions-buttons')
export class ActionsButtons extends LitElement {
  static override styles = css`
    :host {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }
  `;

  private _handleCheckAllProduct = () => {
    ShoppingListEventEmitter.emitCheckAllProducts();
  };

  private _handleUncheckAllProduct = () => {
    ShoppingListEventEmitter.emitUncheckAllProducts();
  };

  private _handleDeleteAllProduct = () => {
    ShoppingListEventEmitter.emitDeleteAllProducts();
  };

  override render() {
    return html`
      <div>
        <basic-button
          .type="${'success'}"
          .onClick="${this._handleCheckAllProduct}"
          ><span>Check All</span></basic-button
        >
        <basic-button .onClick="${this._handleUncheckAllProduct}"
          ><span>Uncheck All</span></basic-button
        >
      </div>

      <basic-button
        .type="${'error'}"
        .onClick="${this._handleDeleteAllProduct}"
        ><span>Delete All</span></basic-button
      >
    `;
  }
}
