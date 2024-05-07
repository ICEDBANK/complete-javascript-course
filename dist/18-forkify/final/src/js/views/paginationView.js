import View from"./View.js";import icons from"url:../../img/icons.svg";class PaginationView extends View{_parentElement=document.querySelector(".pagination");addHandlerClick(t){this._parentElement.addEventListener("click",function(n){var n=n.target.closest(".btn--inline");n&&(n=+n.dataset.goto,t(n))})}_generateMarkup(){var n=this._data.page,t=Math.ceil(this._data.results.length/this._data.resultsPerPage);return 1===n&&1<t?`
        <button data-goto="${n+1}" class="btn--inline pagination__btn--next">
          <span>Page ${n+1}</span>
          <svg class="search__icon">
            <use href="${icons}#icon-arrow-right"></use>
          </svg>
        </button>
      `:n===t&&1<t?`
        <button data-goto="${n-1}" class="btn--inline pagination__btn--prev">
          <svg class="search__icon">
            <use href="${icons}#icon-arrow-left"></use>
          </svg>
          <span>Page ${n-1}</span>
        </button>
      `:n<t?`
        <button data-goto="${n-1}" class="btn--inline pagination__btn--prev">
          <svg class="search__icon">
            <use href="${icons}#icon-arrow-left"></use>
          </svg>
          <span>Page ${n-1}</span>
        </button>
        <button data-goto="${n+1}" class="btn--inline pagination__btn--next">
          <span>Page ${n+1}</span>
          <svg class="search__icon">
            <use href="${icons}#icon-arrow-right"></use>
          </svg>
        </button>
      `:""}}export default new PaginationView;