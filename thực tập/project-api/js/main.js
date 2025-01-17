const elmMenu = document.getElementById('menu');
const elmTrendingPostSecond = document.getElementById('trending-post-second');

axios.get(`${BASE_URL}categories_news`).then((response) => {
  const categories = response.data.data;
  let htmlMenu = '';
  let htmlMenuOther = '';
  categories.forEach((item, index) => {
    if (index < 3) {
      htmlMenu += `<li class="nav-item">  <a class="nav-link" href="category.html?id=${item.id}">${item.name}</a></li>`;
    } else {
      htmlMenuOther += `<a class="dropdown-item" href="category.html?id=${item.id}">${item.name}</a>`;
    }
  });
  elmMenu.innerHTML = htmlMenu + /*html */
    `<li class="nav-item dropdown">
     <a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown"
         aria-haspopup="true" aria-expanded="false">
         Danh mục khác
     </a>
     <div class="dropdown-menu">
         ${htmlMenuOther}
     </div>
   </li>`;
})

axios.get(`${BASE_URL}articles?offset=0&limit=6`).then((response) => {
  const articles = response.data.data;
  let html = '';

  articles.forEach(item => {
    html +=/*html */
      `<div class="post-block-wrapper post-float ">
  <div class="post-thumbnail">
      <a href="single-post.html">
          <img class="img-fluid" src="${item.thumb}" alt="post-thumbnail" />
      </a>
  </div>
  <div class="post-content">
      <h2 class="post-title title-sm">
          <a href="single-post.html">${item.title}</a>
      </h2>
      <div class="post-meta">
          <span class="posted-time"><i class="fa fa-clock-o mr-1"></i>${item.publish_date}</span>
      </div>
  </div>
</div>`;
  })
  elmTrendingPostSecond.innerHTML = html;
})