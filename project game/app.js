let allGames = document.getElementById('allGames');
let filterPlatforms = document.getElementById('filterPlatforms');
let filterGenres = document.getElementById('filterGenres');
let btnSearch = document.getElementById('btnSearch');
let btnClear = document.getElementById('btnClear');
let inputSearch = document.getElementById('inputSearch');

renderProject(GAMES);

function renderProject(list) {
  let htmlAllGames = '';
  list.forEach(gameItem => {
    htmlAllGames +=/*html*/`
  <div class="col-md-6 col-xl-4">
    <div class="card mb-3">
      <div class="bg-image">
        <img src="${gameItem.background_image}" class="img-fluid" />
      </div>
      <div class="card-body p-3">
        <div class="d-flex justify-content-between align-items-center">
          <span class="released-date">${gameItem.released}</span>
          <span class="badge badge-success metascore">${gameItem.metacritic}</span>
        </div>
        <h3 class="card-title mt-2">${gameItem.name}</h3>
        <div class="table-info">
          <table class="table table-sm mb-0">
            <tbody>
              <tr>
                <td>Rating</td>
                <td class="text-end">${gameItem.rating}</td>
              </tr>
              <tr>
                <td>Platforms</td>
                <td class="text-end">
                  ${renderPlatforms(gameItem.parent_platforms)}
                </td>
              </tr>
              <tr>
                <td>Genres</td>
                <td class="text-end">
                  ${renderGenres(gameItem.genres)}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>`;
  })
  allGames.innerHTML = htmlAllGames;
}
function renderPlatforms(platforms) {
  let html = '';
  platforms.forEach(item => {
    html +=/*html*/ `<span class="badge badge-primary">${item.platform.name}</span> `;
  });
  return html;
}
function renderGenres(genres) {
  let html = '';
  genres.forEach(item => {
    html +=/*html*/ `<span class="badge badge-info">${item.name}</span> `;
  });
  return html;
}

let PLATFORMS = [];
GAMES.forEach(gameItem => {
  const parentPlatforms = gameItem.parent_platforms;
  parentPlatforms.forEach(parentPlatformItem => {
    PLATFORMS.push(parentPlatformItem.platform)
    PLATFORMS = PLATFORMS.filter((PLATFORM, index, self) =>
      index === self.findIndex((i) => (
        i.id === PLATFORM.id && i.name === PLATFORM.name
      ))
    )
  });
});
let GENRES = [];
GAMES.forEach(gameItem => {
  const genres = gameItem.genres;
  genres.forEach(genresItem => {
    GENRES.push(genresItem)
    GENRES = GENRES.filter((GENRE, index, self) =>
      index === self.findIndex((i) => (
        i.id === GENRE.id && i.name === GENRE.name
      ))
    )
  });
});
function renderFilterArea() {
  let htmlPlatform = '';
  PLATFORMS.forEach(platformItem => {
    htmlPlatform +=/*html*/`
    <div class="form-check">
      <input class="form-check-input" type="checkbox" value="${platformItem.id}" id="platform-${platformItem.id}" />    
      <label class="form-check-label" for="platform-${platformItem.id}">
        ${platformItem.name}
      </label>
    </div>`;
  });
  filterPlatforms.innerHTML = htmlPlatform;
  let htmlGenres = '';
  GENRES.forEach(genresItem => {
    htmlGenres +=/*html*/`
    <div class="form-check">
    <input class="form-check-input" type="checkbox" value="${genresItem.id}" id="platform-${genresItem.id}" />    
    <label class="form-check-label" for="platform-${genresItem.id}">
      ${genresItem.name}
    </label>
  </div>`;
  })
  filterGenres.innerHTML = htmlGenres;
}
renderFilterArea();

btnSearch.addEventListener('click', function searchInput() {
  let search = inputSearch.value.trim().toLowerCase();
  let checkPlatforms = document.querySelectorAll('#filterPlatforms input');
  let checkGenres = document.querySelectorAll('#filterGenres input');
  let platform = [];
  let genres = [];

  checkPlatforms.forEach((item) => {
    if (item.checked) {
      platform.push(parseInt(item.value));
    }
  });
  checkGenres.forEach((item) => {
    if (item.checked) {
      genres.push(parseInt(item.value));
    }
  });
  let arrSearch = GAMES.filter(function (gameItem) {
    return gameItem.name.toLowerCase().includes(search);
  });
  if (platform.length > 0) {
    arrSearch = arrSearch.filter(function (gameItem) {
      return gameItem.parent_platforms.some(platformId => platform.includes(platformId.platform.id));
    });
  }
  if (genres.length > 0) {
    arrSearch = arrSearch.filter(function (gameItem) {
      return gameItem.genres.some(genresId => genres.includes(genresId.id));
    });
  }
  renderProject(arrSearch);
})
btnClear.addEventListener('click', function clearInput() {
  inputSearch.value = '';
  let checkPlatforms = document.querySelectorAll('#filterPlatforms input');
  let checkGenres = document.querySelectorAll('#filterGenres input');
  checkPlatforms.forEach((item) => {
    item.checked = false;
  });
  checkGenres.forEach((item) => {
    item.checked = false;
  });
  renderProject(GAMES);
})