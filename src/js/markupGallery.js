export function markupGallery({
  webformatURL,
  largeImageURL,
  tags,
  likes,
  views,
  comments,
  downloads,
}) {
  return `<li class="gallery-item">
          <a
            class="gallery-link"
            href="${largeImageURL}"
          >
            <img
              class="gallery-image"
              src="${webformatURL}"
              alt="${tags}"
            />
          </a>
          <div class="coments">
            <p class="comments-title">
              Likes<span class="comments-text">${likes}</span>
            </p>
            <p class="comments-title">
              Views<span class="comments-text">${views}</span>
            </p>
            <p class="comments-title">
              Comments<span class="comments-text">${comments}</span>
            </p>
            <p class="comments-title">
              Downloads<span class="comments-text">${downloads}</span>
            </p>
          </div>
        </li>`;
}
