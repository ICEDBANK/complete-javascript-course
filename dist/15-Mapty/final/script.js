"use strict";class Workout{date=new Date;id=(Date.now()+"").slice(-10);clicks=0;constructor(t,e,o){this.coords=t,this.distance=e,this.duration=o}_setDescription(){this.description=""+this.type[0].toUpperCase()+this.type.slice(1)+` on ${["January","February","March","April","May","June","July","August","September","October","November","December"][this.date.getMonth()]} `+this.date.getDate()}click(){this.clicks++}}class Running extends Workout{type="running";constructor(t,e,o,s){super(t,e,o),this.cadence=s,this.calcPace(),this._setDescription()}calcPace(){return this.pace=this.duration/this.distance,this.pace}}class Cycling extends Workout{type="cycling";constructor(t,e,o,s){super(t,e,o),this.elevationGain=s,this.calcSpeed(),this._setDescription()}calcSpeed(){return this.speed=this.distance/(this.duration/60),this.speed}}const form=document.querySelector(".form"),containerWorkouts=document.querySelector(".workouts"),inputType=document.querySelector(".form__input--type"),inputDistance=document.querySelector(".form__input--distance"),inputDuration=document.querySelector(".form__input--duration"),inputCadence=document.querySelector(".form__input--cadence"),inputElevation=document.querySelector(".form__input--elevation");class App{#map;#mapZoomLevel=13;#mapEvent;#workouts=[];constructor(){this._getPosition(),this._getLocalStorage(),form.addEventListener("submit",this._newWorkout.bind(this)),inputType.addEventListener("change",this._toggleElevationField),containerWorkouts.addEventListener("click",this._moveToPopup.bind(this))}_getPosition(){navigator.geolocation&&navigator.geolocation.getCurrentPosition(this._loadMap.bind(this),function(){alert("Could not get your position")})}_loadMap(t){var e=t.coords["latitude"],t=t.coords["longitude"],e=[e,t];this.#map=L.map("map").setView(e,this.#mapZoomLevel),L.tileLayer("https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png",{attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(this.#map),this.#map.on("click",this._showForm.bind(this)),this.#workouts.forEach(t=>{this._renderWorkoutMarker(t)})}_showForm(t){this.#mapEvent=t,form.classList.remove("hidden"),inputDistance.focus()}_hideForm(){inputDistance.value=inputDuration.value=inputCadence.value=inputElevation.value="",form.style.display="none",form.classList.add("hidden"),setTimeout(()=>form.style.display="grid",1e3)}_toggleElevationField(){inputElevation.closest(".form__row").classList.toggle("form__row--hidden"),inputCadence.closest(".form__row").classList.toggle("form__row--hidden")}_newWorkout(t){var e=(...t)=>t.every(t=>Number.isFinite(t)),o=(...t)=>t.every(t=>0<t),t=(t.preventDefault(),inputType.value),s=+inputDistance.value,i=+inputDuration.value,{lat:n,lng:a}=this.#mapEvent.latlng;let r;if("running"===t){var u=+inputCadence.value;if(!e(s,i,u)||!o(s,i,u))return alert("Inputs have to be positive numbers!");r=new Running([n,a],s,i,u)}if("cycling"===t){u=+inputElevation.value;if(!e(s,i,u)||!o(s,i))return alert("Inputs have to be positive numbers!");r=new Cycling([n,a],s,i,u)}this.#workouts.push(r),this._renderWorkoutMarker(r),this._renderWorkout(r),this._hideForm(),this._setLocalStorage()}_renderWorkoutMarker(t){L.marker(t.coords).addTo(this.#map).bindPopup(L.popup({maxWidth:250,minWidth:100,autoClose:!1,closeOnClick:!1,className:t.type+"-popup"})).setPopupContent(`${"running"===t.type?"🏃‍♂️":"🚴‍♀️"} `+t.description).openPopup()}_renderWorkout(t){let e=`
      <li class="workout workout--${t.type}" data-id="${t.id}">
        <h2 class="workout__title">${t.description}</h2>
        <div class="workout__details">
          <span class="workout__icon">${"running"===t.type?"🏃‍♂️":"🚴‍♀️"}</span>
          <span class="workout__value">${t.distance}</span>
          <span class="workout__unit">km</span>
        </div>
        <div class="workout__details">
          <span class="workout__icon">⏱</span>
          <span class="workout__value">${t.duration}</span>
          <span class="workout__unit">min</span>
        </div>
    `;"running"===t.type&&(e+=`
        <div class="workout__details">
          <span class="workout__icon">⚡️</span>
          <span class="workout__value">${t.pace.toFixed(1)}</span>
          <span class="workout__unit">min/km</span>
        </div>
        <div class="workout__details">
          <span class="workout__icon">🦶🏼</span>
          <span class="workout__value">${t.cadence}</span>
          <span class="workout__unit">spm</span>
        </div>
      </li>
      `),"cycling"===t.type&&(e+=`
        <div class="workout__details">
          <span class="workout__icon">⚡️</span>
          <span class="workout__value">${t.speed.toFixed(1)}</span>
          <span class="workout__unit">km/h</span>
        </div>
        <div class="workout__details">
          <span class="workout__icon">⛰</span>
          <span class="workout__value">${t.elevationGain}</span>
          <span class="workout__unit">m</span>
        </div>
      </li>
      `),form.insertAdjacentHTML("afterend",e)}_moveToPopup(t){if(this.#map){const e=t.target.closest(".workout");e&&(t=this.#workouts.find(t=>t.id===e.dataset.id),this.#map.setView(t.coords,this.#mapZoomLevel,{animate:!0,pan:{duration:1}}))}}_setLocalStorage(){localStorage.setItem("workouts",JSON.stringify(this.#workouts))}_getLocalStorage(){var t=JSON.parse(localStorage.getItem("workouts"));t&&(this.#workouts=t,this.#workouts.forEach(t=>{this._renderWorkout(t)}))}reset(){localStorage.removeItem("workouts"),location.reload()}}const app=new App;