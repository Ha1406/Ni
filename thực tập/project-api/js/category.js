const BASE_URL = 'https://apiforlearning.zendvn.com/api/v2/';
const elmManyArticles = document.getElementById('viewpost');
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = parseInt(urlParams.get('id'));

axios.get(`${BASE_URL}articles?offset=3&limit=4`).then((response) => {
    const items = response.data.data;
    let html = '';

    function truncateText(text, wordLimit) {
        const words = text.split(' ');

        if (words.length <= wordLimit) {
            return text;
        }
        return words.slice(0, wordLimit).join(' ') + '...';
    }
    items.forEach(item => {
        const truncatedDescription = truncateText(item.content, 18);

        html += /*html*/`
        <div class="col-md-6 col-sm-6">
            <div class="post-block-wrapper post-grid-view clearfix">
                <div class="post-thumbnail">
                    <a href="article.html?id=${item.id}">
                        <img class="img-fluid" src="${item.thumb}" alt="post-thumbnail" />
                    </a>
                </div>
                <div class="post-content">
                    <h2 class="post-title mt-3">
                        <a href="article.html?id=${item.id}">${item.title}</a>
                    </h2>
                    <div class="post-meta">
                        <span class="posted-time">${item.publish_date}</span>
                        <span class="post-author">by
                            <a href="author.html">${item.author}</a>
                        </span>
                    </div>
                    <p>${truncatedDescription}</p>
                </div>
            </div>
        </div>`;
    });
    elmManyArticles.innerHTML = html;
});
