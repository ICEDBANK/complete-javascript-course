"use strict";const btn=document.querySelector(".btn-country"),countriesContainer=document.querySelector(".countries"),renderCountry=function(n,e=""){e=`
  <article class="country ${e}">
    <img class="country__img" src="${n.flag}" />
    <div class="country__data">
      <h3 class="country__name">${n.name}</h3>
      <h4 class="country__region">${n.region}</h4>
      <p class="country__row"><span>👫</span>${(+n.population/1e6).toFixed(1)} people</p>
      <p class="country__row"><span>🗣️</span>${n.languages[0].name}</p>
      <p class="country__row"><span>💰</span>${n.currencies[0].name}</p>
    </div>
  </article>
  `;countriesContainer.insertAdjacentHTML("beforeend",e),countriesContainer.style.opacity=1},renderError=function(n){countriesContainer.insertAdjacentText("beforeend",n),countriesContainer.style.opacity=1},getJSON=function(n,e="Something went wrong"){return fetch(n).then(n=>{if(n.ok)return n.json();throw new Error(`${e} (${n.status})`)})};