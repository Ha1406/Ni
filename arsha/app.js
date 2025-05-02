var iso = new Isotope('.grid', {
  // options
});
const elBtnPortfolioFilter = document.querySelectorAll('.btn-portfolio-filter');

for (let i = 0; i < elBtnPortfolioFilter.length; i++) {
  const element = elBtnPortfolioFilter[i];

  element.addEventListener('click', function () {
    const filterValue = element.dataset.filter;
    iso.arrange({ filter: filterValue });
  })
}
const carousel = new bootstrap.Carousel('#abc')