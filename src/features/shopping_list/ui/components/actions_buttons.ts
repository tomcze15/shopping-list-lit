import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import '../../../../shared/components/basic_button';
import ShoppingListEventEmitter from '../../../shopping_list/events/shopping_list_event_emitter';

@customElement('actions-buttons')
export class ActionsButtons extends LitElement {
  private _handleCheckAllProduct = () => {
    ShoppingListEventEmitter.emitCheckAllProducts();
  };

  private _handleUncheckAllProduct = () => {
    ShoppingListEventEmitter.emitUncheckAllProducts();
  };

  override render() {
    return html`
      <basic-button .onClick="${this._handleCheckAllProduct}"
        ><span>Check All</span></basic-button
      >
      <basic-button .onClick="${this._handleUncheckAllProduct}"
        ><span>Uncheck All</span></basic-button
      >
    `;
  }
}