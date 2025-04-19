import{a as d,i as a,S as h}from"./assets/vendor-BjRz3xa9.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const p="https://pixabay.com/api/",g="49758649-878ce1f589e8b6bdc26fd775c";function y(o){return d.get(`${p}`,{params:{key:g,q:o,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:21}}).then(r=>(r.data.hits.length||a.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),r.data.hits)).catch()}const c=document.querySelector(".gallery"),f=document.querySelector(".loader");var L=new h(".gallery-link",{captionsData:"alt",captionDelay:250});function b(o){const r=o.map(({webformatURL:i,largeImageURL:n,tags:e,likes:t,views:s,comments:u,downloads:m})=>`<li class="gallery-item">
    <a class="gallery-link" href="${n}">
    <img
      class="gallery-image"
      src="${i}"
      alt="${e}"
    />
   </a>
    <ul class="info">
      <li class="info-item">
        <h3 class="info-title">Likes</h3>
        <p class="info-text">${t}</p>
      </li>
      <li class="info-item"><h3 class="info-title">Views</h3> <p class="info-text">${s}</p></li>
      <li class="info-item"><h3 class="info-title">Comments</h3> <p class="info-text">${u}</p></li>
      <li class="info-item"><h3 class="info-title">Downloads</h3> <p class="info-text">${m}</p></li>
    </ul>
    </li>`).join("");c.insertAdjacentHTML("beforeend",r),L.refresh()}function x(){c.innerHTML=""}function S(){f.classList.remove("hiden")}function l(){setTimeout(()=>{f.classList.add("hiden")},1e3)}const $=document.querySelector(".form");$.addEventListener("submit",w);function w(o){o.preventDefault(),S();const r=o.currentTarget.elements["search-text"].value.trim();if(r===""){a.info({title:"Caution",message:"You forgot important data",position:"topLeft"}),l();return}y(r).then(i=>{if(!i||i.length===0){a.warning({title:"No Results",message:"No images found for your search.",position:"topRight"});return}x(),b(i)}).catch(i=>{console.error(i),a.error({title:"Error",message:"An error occurred while fetching images.",position:"topRight"})}).finally(()=>l())}
//# sourceMappingURL=index.js.map
