import { selectObjects } from '../PageObjects/selectObjects';

describe('Tools-QA scenarios', () => {
it.only('should select even items from the grid and validate highlights', () => {
    const selectedItems = ['Two', 'Four', 'Six', 'Eight'];
    const unselectedItems = ['One', 'Three', 'Five', 'Seven', 'Nine'];
    selectObjects.visit();
    selectObjects.clickGrid();
    selectObjects.clickItems(selectedItems);
    selectedItems.forEach(item => {
      selectObjects.getGridItem(item)
        .should('have.class', 'active');
    });
    unselectedItems.forEach(item => {
      selectObjects.getGridItem(item)
        .should('not.have.class', 'active');
    });
  });
});