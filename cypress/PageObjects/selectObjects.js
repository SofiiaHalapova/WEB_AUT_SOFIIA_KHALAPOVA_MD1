import { BasePage } from '../PageObjects/basePage';

export class selectObjects extends BasePage {
  static get url() {
    return '/'; 
  }

  static get gridTab() { 
    return cy.get('#demo-tab-grid', { timeout: 10000 }); 
  }
  
  static getGridItem(label) {
    return cy.get('#gridContainer').contains('li', label);
  }

  static clickGrid() {
    this.gridTab.should('be.visible').click();
  }

  static clickItems(items) {
    items.forEach(item => {
      this.getGridItem(item).click({ force: true });
    });
  }
}