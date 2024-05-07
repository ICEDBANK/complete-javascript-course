import icons from"url:../../img/icons.svg";export default class View{_data;render(e,r=!0){if(!e||Array.isArray(e)&&0===e.length)return this.renderError();this._data=e;e=this._generateMarkup();if(!r)return e;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",e)}update(e){this._data=e;e=this._generateMarkup(),e=document.createRange().createContextualFragment(e),e=Array.from(e.querySelectorAll("*"));const s=Array.from(this._parentElement.querySelectorAll("*"));e.forEach((e,r)=>{const t=s[r];e.isEqualNode(t)||""===e.firstChild?.nodeValue.trim()||(t.textContent=e.textContent),e.isEqualNode(t)||Array.from(e.attributes).forEach(e=>t.setAttribute(e.name,e.value))})}_clear(){this._parentElement.innerHTML=""}renderSpinner(){var e=`
      <div class="spinner">
        <svg>
          <use href="${icons}#icon-loader"></use>
        </svg>
      </div>
    `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",e)}renderError(e=this._errorMessage){e=`
      <div class="error">
        <div>
          <svg>
            <use href="${icons}#icon-alert-triangle"></use>
          </svg>
        </div>
        <p>${e}</p>
      </div>
    `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",e)}renderMessage(e=this._message){e=`
      <div class="message">
        <div>
          <svg>
            <use href="${icons}#icon-smile"></use>
          </svg>
        </div>
        <p>${e}</p>
      </div>
    `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",e)}}