const BASE_URL = 'https://apiforlearning.zendvn.com/api/v2/';
const elmContent = document.getElementById('elm-content');
const elmMenu = document.getElementById('menu');
const scrollBar = document.getElementById('scroll-bar');

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
axios.get(`${BASE_URL}categories_news/3/articles?limit=1`).then((response) => {
  const items = response.data.data;
  let html = '';
  items.forEach(item => {
    html +=/*html*/`
<div class="post-header mb-5">
        <h2 class="post-title">
           ${item.title}
        </h2>
        <p>It was a cheerful prospect. I asked Perry what he thought about it; but he only shrugged
            his shoulders and continued a longwinded prayer he had been at for some time. He was
            wont to say that the only redeeming feature of our captivity was the ample time it gave
            him for the improvisation of prayers</p>
    </div>
    <div class="post-body">
        <div class="post-featured-image">
            <img src=" ${item.thumb}" class="img-fluid" alt="featured-image">
        </div>
        <div class="entry-content">
            <p>
                It was a cheerful prospect. I asked Perry what he thought about it; but he only
                shrugged his shoulders and continued a longwinded prayer he had been at for some
                time. He was wont to say that the only redeeming feature of our captivity was the
                ample time it gave him for the improvisation of prayers—it was becoming an obsession
                with him. The Sagoths had begun to take notice of his habit of declaiming throughout
                entire marches. One of them asked him what he was saying—to whom he was talking. The
                question gave me an idea, so I answered quickly before Perry could say anything.
            </p>
            <h2>${item.title}</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellat sapiente neque iusto praesentium adipisci itaque error, commodi laborum
                doloremque. Esse?
            </p>
            <div class="media mb-4 single-media">
                <img src=" ${item.thumb}" alt="post-ads" class="img-fluid mr-4">
                <div class="media-body">
                    <p>
                        Oblique facilisi vix ei, quo ignota appetere lucilius at. Apeirian
                        voluptatibus ius ei, an periculis imperdiet consequat sea. His ea everti
                        placerat. Ad mea utroque convenire, an quo reque aperiam, has et unum cibo
                        adipiscing. Brute instructior te vix, consequat definitiones conclusionemque
                        et usu, et per idque quaerendum. Id pro ridens appareat, vim in verear
                        pertinacia.
                    </p>
                </div>
            </div>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde cum delectus
                exercitationem
                natus quidem enim error suscipit. Iure cupiditate nobis quaerat consectetur! Vero
                aliquam,
                amet ipsum ullam reiciendis nostrum voluptate accusantium provident ut blanditiis
                incidunt.
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates ab ratione animi
                nobis in et consequatur
                earum modi repellendus, qui, non debitis pariatur tempora consequuntur!
            </p>
        </div>
</div>
`
  })
  elmContent.innerHTML = html
})
axios.get(`${BASE_URL}categories_news/1/articles?limit=4`).then((response) => {
  const items = response.data.data;
  let htmlItems = '';

  items.forEach(item => {
    htmlItems += /*html*/`
      <div class="item">
        <div class="post-block-wrapper clearfix">
          <div class="post-thumbnail mb-0">
            <a href="single-post.html">
              <img class="img-fluid" src="${item.thumb}" alt="post-thumbnail" />
            </a>
          </div>
          <div class="post-content">
            <h2 class="post-title title-sm">
              <a href="single-post.html">${item.title}</a>
            </h2>
          </div>
        </div>
      </div>
    `;
  });

  const html = /*html*/`
    <h3 class="news-title">
      <span>Bài viết liên quan</span>
    </h3>
    <div class="news-style-two-slide">
      ${htmlItems}
    </div>
  `;
  scrollBar.innerHTML = html;
});