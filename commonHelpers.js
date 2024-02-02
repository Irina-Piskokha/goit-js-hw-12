import{a as h,S as b,i as u}from"./assets/vendor-eeed083b.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function r(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerpolicy&&(n.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?n.credentials="include":t.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(t){if(t.ep)return;t.ep=!0;const n=r(t);fetch(t.href,n)}})();const o={form:document.querySelector(".form"),ulContainer:document.querySelector(".list_gallery"),loader:document.querySelector(".loader"),buttonSearch:document.querySelector(".button"),buttonLoadMore:document.querySelector(".button-more")},m=e=>e.map(({webformatURL:s,largeImageURL:r,tags:a,likes:t,views:n,comments:c,downloads:g})=>`<li class="gallery-item">
          <a
            class="gallery-link"
            href="${r}"
          >
            <img
              class="gallery-image"
              src="${s}"
              alt="${a}"
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
              Downloads<span class="comments-text">${g}</span>
            </p>
          </div>
        </li>`).join(""),L="https://pixabay.com/api/",M="41980985-8125375fe1d9f9e65ca18808e";function p({query:e,page:s=1,per_page:r}){return h.get(`${L}`,{params:{key:M,q:e,image_type:"photo",image_type:"horizontal",safesearch:!0,per_page:r,page:s}}).then(({data:a})=>a)}const y="is-hidden";function v(e){e.classList.add(y)}function S(e){e.classList.remove(y)}function F(e){e.disabled=!1}function k(e){e.disabled=!0}const l={hide:v,show:S,enable:F,disable:k},f=new b(".list_gallery a",{caption:!0,captionsData:"alt",captionPosition:"bottom",captionDelay:250}),i={query:"",page:1,maxPage:0,per_page:40};o.loader.style.display="none";o.form.addEventListener("submit",q);async function q(e){e.preventDefault(),o.ulContainer.innerHTML="",i.page=1,o.loader.style.display="block";const s=e.currentTarget;if(i.query=s.elements.text.value.trim(),!i.query){o.loader.style.display="none",o.buttonLoadMore.removeEventListener("click",d),l.hide(o.buttonLoadMore),u.error({message:"Sorry, you have not entered anything!",position:"topRight",backgroundColor:"#EF4040",color:"#FAFAFB"});return}try{const{hits:r,total:a}=await p(i);i.maxPage=Math.ceil(a/40),o.loader.style.display="none",r.length===0&&(l.hide(o.buttonLoadMore),u.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",backgroundColor:"#EF4040",color:"#FAFAFB"})),o.ulContainer.innerHTML=m(r),f.refresh(),r.length>0&&r.length!==a?(l.show(o.buttonLoadMore),o.buttonLoadMore.addEventListener("click",d)):l.hide(o.buttonLoadMore)}catch(r){console.log(r),o.loader.style.display="none"}}async function d(){i.page+=1,l.disable(l);try{const{hits:e}=await p(i),s=m(e);o.ulContainer.insertAdjacentHTML("beforeend",s),f.refresh();const r=document.querySelector(".gallery-item").getBoundingClientRect();console.log(r),window.scrollBy({top:r.height*1.3,left:0,behavior:"smooth"})}catch(e){console.log(e)}finally{l.enable(l),i.page===i.maxPage&&(o.buttonLoadMore.style.display="none",u.error({message:"We are sorry, but you have reached the end of search results.",position:"topRight",backgroundColor:"#EF4040",color:"#FAFAFB"}),o.buttonLoadMore.removeEventListener("click",d))}}
//# sourceMappingURL=commonHelpers.js.map
