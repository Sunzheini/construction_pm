/**
 * Imports
 * In order to be able to use imports in index.js in index.html, put: type="module" in the script tag:
 * <script type="module" src="index.js"></script>!
 */
import {createElement} from "./support/createDomElement.js";


/**
 * Selection of needed elements from the DOM.
 */
const tableBody = document.getElementsByClassName('table-body')[0];
const largeButtonImport = document.getElementsByClassName('large-button-import')[0];
const largeButtonExport = document.getElementsByClassName('large-button-export')[0];
const smallButtonPlus = document.getElementsByClassName('small-button-plus')[0];
const smallButtonMinus = document.getElementsByClassName('small-button-minus')[0];


/**
 * Attaching event listeners.
 */
// largeButtonImport.addEventListener('click', importTable);
// largeButtonExport.addEventListener('click', exportTable);
smallButtonPlus.addEventListener('click', addRow);
smallButtonMinus.addEventListener('click', removeRow);


/**
 * Functions.
 */
function addRow() {
    // Create a new table row
    const newRow = createElement('tr', tableBody, null, ['table-body-row']);

    // Create cells for each column in the row
    const cell1 = createElement('td', newRow, 'New Requirement', ['table-body-cell'], null, { contentEditable: true });
    const cell2 = createElement('td', newRow, 'New Description', ['table-body-cell'], null, { contentEditable: true });
    const cell3 = createElement('td', newRow, 'New Formula', ['table-body-cell'], null, { contentEditable: true });
    const cell4 = createElement('td', newRow, 'New Result', ['table-body-cell'], null, { contentEditable: true });

    // Add blur event listeners to save content when cells lose focus
    cell1.addEventListener('blur', () => saveCellContent(cell1));
    cell2.addEventListener('blur', () => saveCellContent(cell2));
    cell3.addEventListener('blur', () => saveCellContent(cell3));
    cell4.addEventListener('blur', () => saveCellContent(cell4));
}


// Function to save content when a cell loses focus
function saveCellContent(cell) {
    // Retrieve and save the content of the cell
    const content = cell.textContent;
    // You can save the content to your data structure or perform any necessary actions
    console.log('Content saved:', content);
}


function removeRow() {
    // Get the table body
    const tableBody = document.getElementsByClassName('table-body')[0];

    // Check if there are rows to remove
    if (tableBody.children.length > 0) {
        // Get the last row of the table body
        const lastRow = tableBody.lastChild;

        // Remove the last row
        tableBody.removeChild(lastRow);
    } else {
        console.log('No rows to remove.');
    }
}
