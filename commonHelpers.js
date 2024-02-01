import{a as g,i as u,S as h}from"./assets/vendor-951421c8.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&l(c)}).observe(document,{childList:!0,subtree:!0});function r(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerpolicy&&(n.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?n.credentials="include":t.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function l(t){if(t.ep)return;t.ep=!0;const n=r(t);fetch(t.href,n)}})();const o={form:document.querySelector(".form"),ulContainer:document.querySelector(".list_gallery"),loader:document.querySelector(".loader"),buttonSearch:document.querySelector(".button"),buttonLoadMore:document.querySelector(".button-more")},m=e=>e.map(({webformatURL:s,largeImageURL:r,tags:l,likes:t,views:n,comments:c,downloads:f})=>`<li class="gallery-item">
          <a
            class="gallery-link"
            href="${r}"
          >
            <img
              class="gallery-image"
              src="${s}"
              alt="${l}"
            />
          </a>
          <div class="coments">
            <p class="comments-title">
              Likes<span class="comments-text">${t}</span>
            </p>
            <p class="comments-title">
              Views<span class="comments-text">${n}</span>
            </p>
            <p class="comments-title">
              Comments<span class="comments-text">${c}</span>
            </p>
            <p class="comments-title">
              Downloads<span class="comments-text">${f}</span>
            </p>
          </div>
        </li>`).join(""),b="https://pixabay.com/api/",L="41980985-8125375fe1d9f9e65ca18808e";function p({query:e,page:s=1,per_page:r}){return g.get(`${b}`,{params:{key:L,q:e,image_type:"photo",image_type:"horizontal",safesearch:!0,per_page:r,page:s}}).then(({data:l})=>l)}const y="is-hidden";function v(e){e.classList.add(y)}function M(e){e.classList.remove(y)}function F(e){e.disabled=!1}function S(e){e.disabled=!0}const a={hide:v,show:M,enable:F,disable:S},i={query:"",page:1,maxPage:0,per_page:40};o.loader.style.display="none";o.form.addEventListener("submit",k);async function k(e){e.preventDefault(),o.ulContainer.innerHTML="",i.page=1,o.loader.style.display="block";const s=e.currentTarget;if(i.query=s.elements.text.value.trim(),!i.query){o.loader.style.display="none",o.buttonLoadMore.removeEventListener("click",d),a.hide(o.buttonLoadMore),u.error({message:"Sorry, you have not entered anything!",position:"topRight",backgroundColor:"#EF4040",color:"#FAFAFB"});return}try{const{hits:r,totalHits:l}=await p(i);i.maxPage=Math.ceil(l/i.per_page),o.loader.style.display="none",r.length===0&&(a.hide(o.buttonLoadMore),u.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",backgroundColor:"#EF4040",color:"#FAFAFB"})),o.ulContainer.innerHTML=m(r),new h(".list_gallery a",{caption:!0,captionsData:"alt",captionPosition:"bottom",captionDelay:250}).refresh(),r.length>0&&r.length!==l?(a.show(o.buttonLoadMore),o.buttonLoadMore.addEventListener("click",d)):a.hide(o.buttonLoadMore)}catch(r){console.log(r),o.loader.style.display="none"}}async function d(){i.page+=1,a.disable(a);try{const{hits:e}=await p(i),s=m(e);o.ulContainer.insertAdjacentHTML("beforeend",s);const r=o.ulContainer.getBoundingClientRect();console.log(r),window.scrollBy({top:800,left:50,behavior:"smooth"})}catch(e){console.log(e)}finally{a.enable(a),i.page===i.maxPage&&(a.hide(a),u.error({message:"We are sorry, but you have reached the end of search results.",position:"topRight",backgroundColor:"#EF4040",color:"#FAFAFB"}),o.buttonLoadMore.removeEventListener("click",d))}}
//# sourceMappingURL=commonHelpers.js.map
