import View from './View.js';

import icons from 'url:../../img/icons.svg';

class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');

  _generateMarkup() {
    // calculate how many pages we need
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );
    console.log(numPages);

    // Page 1 and there are other pages
    // page 1, and there are NO other pages
    // Last page
    // Other page
  }
}

export default new PaginationView();
