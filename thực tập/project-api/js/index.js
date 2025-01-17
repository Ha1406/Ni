const BASE_URL = 'https://apiforlearning.zendvn.com/api/v2/';
const elmtrendingPostFirst = document.getElementById('trending-post-first');
const elmAreaCategories = document.getElementById('area-categories');
const elmTypes = document.getElementById('elm-types');


axios.get(`${BASE_URL}articles?offset=1&limit=4`).then((response) => {
    const articles = response.data.data;
    let html = '';
    let html12 = '';
    let html34 = '<div class="col-md-12 col-xs-12 col-sm-12 col-lg-4"><div class="row mt-3 mt-lg-0">';
    for (let i = 0; i < 2; i++) {
        html12 +=/*html*/ `
    <div class="col-md-6 col-xs-12 col-lg-4">
        <div class="featured-slider mr-md-3 mr-lg-3">
            <div class="item" style="background-image:url(${articles[i].thumb})">
                <div class="post-content">
                    <h2 class="slider-post-title">
                        <a href="single-post.html">${articles[i].title}</a>
                    </h2>
                    <div class="post-meta mt-2">
                        <span class="posted-time"><i class="fa fa-clock-o mr-2 text-danger"></i>${articles[i].publish_date}</span>
                        <span class="post-author">
                            by
                            <a href="author.html">${articles[i].author}</a>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `;
    }
    for (let i = 2; i < 4; i++) {
        html34 += /*html*/`
    <div class="col-lg-12 col-xs-12 col-sm-6 col-md-6">
        <div class="post-featured-style" style="background-image:url(${articles[i].thumb})">
            <div class="post-content">
                <h2 class="post-title">
                    <a href="single-post.html">${articles[i].title}</a>
                </h2>
                <div class="post-meta mt-2">
                    <span class="posted-time"><i class="fa fa-clock-o mr-2 text-danger"></i>${articles[i].publish_date}</span>
                    <span class="post-author">
                        <span> by </span>
                        <a href="author.html">${articles[i].author}</a>
                    </span>
                </div>
            </div>
        </div>
    </div>`;
    }
    html34 += ' </div> </div> ';
    html = html12 + html34;
    elmtrendingPostFirst.innerHTML = html;
})


axios.get(`${BASE_URL}categories_news/articles?limit_cate=2&limit=5`).then((response) => {
    const categories = response.data.data;
    let html = '';

    categories.forEach(item => {
        let articles = item.articles;
        let htmlArticleRight = '';

        let htmlArticleLeft = /*html*/`
        <div class="post-thumbnail">
        <a href="single-post.html">
            <img class="img-fluid" src="${articles[0].thumb}" alt="post-thumbnail">
        </a>
    </div>
    <div class="post-content">
        <h2 class="post-title mt-3">
            <a href="single-post.html">${articles[0].title}</a>
        </h2>
        <div class="post-meta mb-2">
            <span class="posted-time"><i class="fa fa-clock-o mr-2"></i>${articles[0].publish_date}</span>
            <span class="post-author">
                by
                <a href="author.html">${articles[0].author}</a>
            </span>
        </div>
        <p>Lumbersexual meh sustainable Thundercats meditation kogi. Tilde Pitchfork
            vegan, gentrify minim
            elit semiotics non messenger bag Austin which roasted</p>

    </div>`;
        for (let i = 1; i < 5; i++) {
            htmlArticleRight += /*html*/`
<div class="post-block-wrapper post-float clearfix">
    <div class="post-thumbnail">
        <a href="single-post.html">
            <img class="img-fluid" src="${articles[i].thumb}" alt="post-thumbnail">
        </a>
    </div>
    <div class="post-content">
        <h2 class="post-title title-sm">
            <a href="single-post.html">${articles[i].title}</a>
        </h2>
        <div class="post-meta">
            <span class="posted-time"><i class="fa fa-clock-o mr-2"></i>${articles[0].publish_date}</span>
        </div>
    </div>
</div>
 `
        }
        html +=/*html*/ `
<div class="news-style-two" id="change-title">
    <h3 class="news-title">
        <span>${item.name}</span>
    </h3>
    <div class="row">
        <div class="col-md-6 col-sm-6">
            <div class="post-block-wrapper clearfix">
                ${htmlArticleLeft}
            </div>
        </div>
        <div class="col-md-6 col-sm-6">
            <div class="post-list-block m-top-0" id="articles">
                 ${htmlArticleRight}
            </div>
        </div>
    </div>
</div>
`;
    })
    elmAreaCategories.innerHTML = html;
})
axios.get(`${BASE_URL}categories_news/articles?limit_cate=3&limit=4`).then((response) => {
    const categories = response.data.data;
    let html = '';

    categories.forEach(item => {
        let articles = item.articles;
        let htmlArticleTop = '';
        let htmlArticleBottom = '';

        htmlArticleTop +=/*html*/`
        <div class="post-overlay-wrapper clearfix">
            <div class="post-thumbnail">
                <img class="img-fluid" src="${articles[0].thumb}" alt="post-thumbnail" />
            </div>

            <div class="post-content">
                <h2 class="post-title ">
                    <a href="single-post.html">${articles[0].title}</a>
                </h2>
                <div class="post-meta white">
                    <span class="posted-time">${articles[0].publish_date}</span>
                    <span class="post-author">by
                        <a href="author.html">${articles[0].author}</a>
                    </span>
                    <span class="pull-right">
                        <i class="fa fa-comments"></i>
                        <a href="single-post.html#comments">05</a>
                    </span>
                </div>
            </div>
        </div>
        `
        for (let i = 1; i < 4; i++) {
            htmlArticleBottom +=/*html*/`
            <div class="post-block-wrapper post-float clearfix">
            <div class="post-thumbnail">
                <img class="img-fluid" src="${articles[i].thumb}" alt="post-thumbnail" />

            </div>

            <div class="post-content">
                <h2 class="post-title title-sm">
                    <a href="single-post.html">${articles[i].title}</a>
                </h2>
                <div class="post-meta">
                    <span class="posted-time">${articles[i].publish_date}</span>
                </div>
            </div>
        </div>`
        }
        html +=/*html*/`
    <div class="col-lg-4 col-md-6">
        <div class="block">
            <h3 class="news-title">
                <span>${item.name}</span>
            </h3>
            ${htmlArticleTop} 
            <div class="post-list-block">
                ${htmlArticleBottom}
            </div>
        </div>
    </div>
        `
    })
    elmTypes.innerHTML = html
})