(()=>{"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,r(o.key),o)}}function n(t,e,n){return(e=r(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(e){var n=function(e,n){if("object"!==t(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,"string");if("object"!==t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===t(n)?n:String(n)}var o=function(){function t(e,r,o,i,u){var a=e.name,c=e.link,l=e.likes,s=e.owner;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),n(this,"_name",void 0),n(this,"_link",void 0),n(this,"_templateSelector",void 0),n(this,"_newCard",void 0),n(this,"_likeButton",void 0),n(this,"_deleteButton",void 0),n(this,"_imgButton",void 0),n(this,"_launchZoomCard",void 0),n(this,"_numLikes",void 0),n(this,"_ownerId",void 0),this._name=a,this._link=c,this._numLikes=l.length,this._templateSelector=r,this._handleCardClick=o,this._handleDeleteClick=i,this._ownerId=s._id,this._checkCardOwnership=u}var r,o;return r=t,(o=[{key:"_getTemplate",value:function(){return document.querySelector(this._templateSelector).content.querySelector(".card").cloneNode(!0)}},{key:"_customizeCard",value:function(){var t=this._newCard.querySelector(".card__image");this._newCard.querySelector(".card__caption-title").textContent=this._name,t.setAttribute("src",this._link),t.setAttribute("alt","".concat("Фото места под названием"," ").concat(this._name)),this._newCard.querySelector(".card__likes-number").textContent=this._numLikes;var e=this._newCard.querySelector(".card__button-delete");this._checkCardOwnership(this._ownerId)&&e.classList.add("card__button-delete_visible")}},{key:"_likeCard",value:function(){this._likeButton.classList.toggle("card__button-like_active")}},{key:"_deleteCard",value:function(){this._newCard.remove(),this._newCard=null}},{key:"_addEventListeners",value:function(){var t=this;this._likeButton=this._newCard.querySelector(".card__button-like"),this._deleteButton=this._newCard.querySelector(".card__button-delete"),this._imgButton=this._newCard.querySelector(".card__image"),this._likeButton.addEventListener("click",(function(){return t._likeCard()})),this._deleteButton.addEventListener("click",(function(e){return t._handleDeleteClick(e)})),this._imgButton.addEventListener("click",(function(){console.log(t._name,t._link),t._handleCardClick(t._name,t._link)}))}},{key:"createCard",value:function(){return this._newCard=this._getTemplate(),this._customizeCard(),this._addEventListeners(),this._newCard}}])&&e(r.prototype,o),Object.defineProperty(r,"prototype",{writable:!1}),t}();function i(t){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}function u(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,c(r.key),r)}}function a(t,e,n){return(e=c(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function c(t){var e=function(t,e){if("object"!==i(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==i(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===i(e)?e:String(e)}var l=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),a(this,"_form",void 0),a(this,"_config",void 0),a(this,"_inputs",void 0),a(this,"_submitButton",void 0),this._form=n,this._config=e,this._inputs=Array.from(this._form.querySelectorAll(this._config.inputSelector)),this._submitButton=this._form.querySelector(this._config.submitButtonSelector)}var e,n;return e=t,(n=[{key:"_showInputError",value:function(t,e){var n=this._form.querySelector(".".concat(t.name,"-error"));t.classList.add(this._config.inputErrorClass),n.textContent=e,n.classList.add(this._config.errorClass)}},{key:"_hideInputError",value:function(t){var e=this._form.querySelector(".".concat(t.name,"-error"));t.classList.remove(this._config.inputErrorClass),e.classList.remove(this._config.errorClass),e.textContent=""}},{key:"_checkInputValidity",value:function(t){t.validity.valid?this._hideInputError(t):this._showInputError(t,t.validationMessage)}},{key:"_hasInvalidInput",value:function(){return this._inputs.some((function(t){return!t.validity.valid}))}},{key:"_toggleSubmitButtonState",value:function(){this._hasInvalidInput(this._inputs)?(this._submitButton.setAttribute("disabled",""),this._submitButton.classList.add(this._config.inactiveButtonClass)):(this._submitButton.removeAttribute("disabled"),this._submitButton.classList.remove(this._config.inactiveButtonClass))}},{key:"_setEventListeners",value:function(){var t=this;this._toggleSubmitButtonState(),this._inputs.forEach((function(e){e.addEventListener("input",(function(){t._checkInputValidity(e),t._toggleSubmitButtonState()}))}))}},{key:"resetValidation",value:function(){var t=this;this._toggleSubmitButtonState(),this._inputs.forEach((function(e){t._hideInputError(e)}))}},{key:"enableValidation",value:function(){this._setEventListeners()}}])&&u(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function s(t){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s(t)}function f(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,p(r.key),r)}}function p(t){var e=function(t,e){if("object"!==s(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==s(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===s(e)?e:String(e)}var y=function(){function t(e,n){e.items;var r,o,i,u=e.renderer;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,i=void 0,(o=p(o="_container"))in r?Object.defineProperty(r,o,{value:i,enumerable:!0,configurable:!0,writable:!0}):r[o]=i,this._renderer=u,this._container=document.querySelector(n)}var e,n;return e=t,(n=[{key:"addItem",value:function(t){this._container.prepend(t)}},{key:"renderItems",value:function(t){var e=this;t.reverse().forEach((function(t){e._renderer(t)}))}}])&&f(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function d(t){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},d(t)}function v(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,b(r.key),r)}}function b(t){var e=function(t,e){if("object"!==d(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==d(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===d(e)?e:String(e)}var h=function(){function t(e){var n,r,o;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,o=void 0,(r=b(r="_popup"))in n?Object.defineProperty(n,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[r]=o,this._popup=document.querySelector(e),this._handleEscCloseBinded=this._handleEscClose.bind(this)}var e,n;return e=t,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscCloseBinded)}},{key:"close",value:function(){document.removeEventListener("keydown",this._handleEscCloseBinded),this._popup.classList.remove("popup_opened")}},{key:"_handleEscClose",value:function(t){"Escape"===t.key&&this.close()}},{key:"setEventListeners",value:function(){var t=this;this._popup.addEventListener("mousedown",(function(e){e.target!==t._popup&&e.target!==t._popup.querySelector(".popup__close")||t.close()}))}}])&&v(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function m(t){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},m(t)}function _(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,O(r.key),r)}}function g(){return g="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=S(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},g.apply(this,arguments)}function S(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=C(t)););return t}function w(t,e){return w=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},w(t,e)}function k(t,e){if(e&&("object"===m(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return E(t)}function E(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function C(t){return C=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},C(t)}function j(t,e,n){return(e=O(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function O(t){var e=function(t,e){if("object"!==m(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==m(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===m(e)?e:String(e)}var P=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&w(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=C(r);if(o){var n=C(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return k(this,t)});function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),j(E(e=i.call(this,t)),"_popupImg",void 0),j(E(e),"_popupCaption",void 0),e._popupImg=e._popup.querySelector(".popup__img"),e._popupCaption=e._popup.querySelector(".popup__caption"),e}return e=u,(n=[{key:"open",value:function(t,e){g(C(u.prototype),"open",this).call(this),this._popupImg.setAttribute("src",e),this._popupImg.setAttribute("alt","".concat("Фото места под названием"," ").concat(t)),this._popupCaption.textContent=t}}])&&_(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(h);function I(t){return I="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},I(t)}function L(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,V(r.key),r)}}function B(){return B="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=q(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},B.apply(this,arguments)}function q(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=R(t)););return t}function T(t,e){return T=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},T(t,e)}function A(t,e){if(e&&("object"===I(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return U(t)}function U(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function R(t){return R=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},R(t)}function x(t,e,n){return(e=V(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function V(t){var e=function(t,e){if("object"!==I(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==I(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===I(e)?e:String(e)}var N=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&T(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=R(r);if(o){var n=R(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return A(this,t)});function u(t,e,n){var r;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),x(U(r=i.call(this,t)),"_form",void 0),x(U(r),"_inputs",void 0),r._handleFormSubmit=e,r._resetValidation=n,r._form=r._popup.querySelector(".popup__form"),r._inputs=r._form.querySelectorAll(".popup__input"),r}return e=u,(n=[{key:"close",value:function(){this._form.reset(),this._resetValidation(),B(R(u.prototype),"close",this).call(this)}},{key:"fillInputs",value:function(t){this._inputs.forEach((function(e){e.value=t[e.name]}))}},{key:"_getInputValues",value:function(){var t={};return this._inputs.forEach((function(e){t[e.name]=e.value})),t}},{key:"setEventListeners",value:function(){var t=this;B(R(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(e){e.preventDefault(),t._handleFormSubmit(t._getInputValues())}))}}])&&L(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(h);function D(t){return D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},D(t)}function F(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,H(r.key),r)}}function z(t,e,n){return(e=H(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function H(t){var e=function(t,e){if("object"!==D(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==D(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===D(e)?e:String(e)}var J=function(){function t(e){var n=e.nameSelector,r=e.aboutSelector,o=e.avatarSelector;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),z(this,"_userNameElement",void 0),z(this,"_userAboutElement",void 0),z(this,"_userAvatarElement",void 0),z(this,"_userId",void 0),this._userNameElement=document.querySelector(n),this._userAboutElement=document.querySelector(r),this._userAvatarElement=document.querySelector(o)}var e,n;return e=t,(n=[{key:"getUserInfo",value:function(){var t={};return t.name=this._userNameElement.textContent,t.about=this._userAboutElement.textContent,t}},{key:"getUserId",value:function(){return this._userId}},{key:"setUserId",value:function(t){this._userId=t}},{key:"setUserInfo",value:function(t){var e=t.name,n=t.about;this._userNameElement.textContent=e,this._userAboutElement.textContent=n}},{key:"setUserAvatar",value:function(t){this._userAvatarElement.src=t}}])&&F(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function M(t){return M="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},M(t)}function Z(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,K(r.key),r)}}function G(t,e,n){return(e=K(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function K(t){var e=function(t,e){if("object"!==M(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==M(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===M(e)?e:String(e)}var Q=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),G(this,"_baseUrl",void 0),G(this,"_headers",void 0),this._baseUrl=e.baseUrl,this._headers=e.headers}var e,n;return e=t,(n=[{key:"_callFetch",value:function(t,e,n,r){var o=this._headers;return o["Content-Type"]=r,fetch(this._baseUrl+t,{method:e,headers:o,body:JSON.stringify(n)}).then((function(t){return t.ok?t.json():Promise.reject(t.status)}))}},{key:"getUserInfo",value:function(){return this._callFetch("users/me")}},{key:"getInitialCards",value:function(){return this._callFetch("cards")}},{key:"updateUserInfo",value:function(t){return this._callFetch("users/me","PATCH",t,"application/json")}},{key:"addNewCard",value:function(t){return this._callFetch("cards","POST",t,"application/json")}}])&&Z(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}(),W=document.querySelector(".profile__edit-button"),X=document.querySelector(".profile__add-button"),Y=document.querySelector(".profile__avatar-button");function $(t){return new o(t,".card-template",(function(){return nt.open(t.name,t.link)}),(function(){return at.open()}),(function(t){return t===ot.getUserId()})).createCard()}var tt=new Q({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-60/",headers:{authorization:"fac9339f-e6fd-4202-9057-cf36536b9501"}});tt.getUserInfo().then((function(t){ot.setUserInfo({name:t.name,about:t.about}),ot.setUserAvatar(t.avatar),ot.setUserId(t._id)})).catch((function(t){console.log("Ошибка!!! Статус: ",t)}));var et=new y({renderer:function(t){et.addItem($(t))}},".cards__list");tt.getInitialCards().then((function(t){et.renderItems(t)})).catch((function(t){console.log("Ошибка!!! ",t)}));var nt=new P(".popup_type_zoom");nt.setEventListeners();var rt=new N(".popup_type_add",(function(t){tt.addNewCard(t).then((function(t){var e=$(t);et.addItem(e)})).catch((function(t){console.log("Ошибка!!! Статус: ",t)})),rt.close()}),(function(){return lt["add-card"].resetValidation()}));rt.setEventListeners();var ot=new J({nameSelector:".profile__name",aboutSelector:".profile__description",avatarSelector:".profile__avatar"}),it=new N(".popup_type_edit",(function(t){tt.updateUserInfo(t).then((function(t){ot.setUserInfo(t)})).catch((function(t){console.log("Ошибка!!! Статус: ",t)})),it.close()}),(function(){return lt["edit-profile"].resetValidation()}));it.setEventListeners();var ut=new N(".popup_type_avatar",(function(){}),(function(){return lt["change-avatar"].resetValidation()}));ut.setEventListeners();var at=new N(".popup_type_delete",(function(){}),(function(){return lt["delete-card"].resetValidation()}));at.setEventListeners();var ct,lt={};ct={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"},Array.from(document.querySelectorAll(ct.formSelector)).forEach((function(t){var e=new l(ct,t),n=t.getAttribute("name");lt[n]=e,e.enableValidation()})),W.addEventListener("click",(function(){it.fillInputs(ot.getUserInfo()),it.open()})),X.addEventListener("click",(function(){return rt.open()})),Y.addEventListener("click",(function(){return ut.open()}))})();
//# sourceMappingURL=main.js.map