import{a as m,i as c,S as p}from"./assets/vendor-951421c8.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function a(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(e){if(e.ep)return;e.ep=!0;const o=a(e);fetch(e.href,o)}})();const r={form:document.querySelector(".form"),ulContainer:document.querySelector(".list_gallery"),loader:document.querySelector(".loader"),buttonLoadMore:document.querySelector(".button")},f=t=>t.map(({webformatURL:s,largeImageURL:a,tags:n,likes:e,views:o,comments:l,downloads:d})=>`<li class="gallery-item">
          <a
            class="gallery-link"
            href="${a}"
          >
            <img
              class="gallery-image"
              src="${s}"
              alt="${n}"
            />
          </a>
          <div class="coments">
            <p class="comments-title">
              Likes<span class="comments-text">${e}</span>
            </p>
            <p class="comments-title">
              Views<span class="comments-text">${o}</span>
            </p>
            <p class="comments-title">
              Comments<span class="comments-text">${l}</span>
            </p>
            <p class="comments-title">
              Downloads<span class="comments-text">${d}</span>
            </p>
          </div>
        </li>`).join(""),y="https://pixabay.com/api/",g="41980985-8125375fe1d9f9e65ca18808e";function h(t){return m.get(`${y}`,{params:{key:g,q:t,image_type:"photo",image_type:"horizontal",safesearch:!0}}).then(({data:s})=>s)}const u="is-hidden";function b(t){t.classList.add(u)}function L(t){t.classList.remove(u)}function S(t){t.disabled=!1}function F(t){t.disabled=!0}const i={hide:b,show:L,enable:S,disable:F};r.loader.style.display="none";r.form.addEventListener("submit",k);async function k(t){t.preventDefault(),r.ulContainer.innerHTML="",r.loader.style.display="block";const s=t.currentTarget,a=s.elements.text.value.trim();try{const{hits:n}=await h(a);if(console.log(n),r.loader.style.display="none",n.length===0&&c.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",backgroundColor:"#EF4040",color:"#FAFAFB"}),!a){c.error({message:"Sorry, you have not entered anything!",position:"topRight",backgroundColor:"#EF4040",color:"#FAFAFB"});return}r.ulContainer.innerHTML=f(n),new p(".list_gallery a",{caption:!0,captionsData:"alt",captionPosition:"bottom",captionDelay:250}).refresh(),n.length>0&&n.length!==totalResults?(i.show(r.buttonLoadMore),r.buttonLoadMore.addEventListener("click",v)):i.hide(r.buttonLoadMore)}catch(n){console.log(n),r.loader.style.display="none"}finally{s.reset()}}async function v(){i.disable(i)}
//# sourceMappingURL=commonHelpers.js.map
