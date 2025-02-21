const items = ['Tập thể dục buổi sáng', 'Review task', 'Quay video chia sẻ', 'Cập nhật giáo trình', 'Fix bug dự án X', 'Họp team'];
let elmTotalList = document.getElementById('total-list');
let numberOfJobs = document.querySelector('#display-progress');
let html = '';
let elmchangeColor = document.getElementById('changeColor');
let html2 = '';
let listItems = items.length;
numberOfJobs.innerHTML = /*html*/`<span id="display-progress">Còn ${listItems} công việc chưa hoàn thành</span>`

items.forEach(function (item) {
  html +=/*html*/`
  <div class="check-list">
    <input type="checkbox" class="check" onchange="toggleCheckBox()">${item}
  </div>`
  elmTotalList.innerHTML = html;
  html2 +=/*html*/`
  <span class="status-badge "></span>`
  elmchangeColor.innerHTML = html2;
});
function toggleCheckBox() {
  let elm = document.querySelectorAll('.check')
  let totalComplete = 0;
  let html = '';
  elm.forEach(function (elm) {
    if (elm.checked) {
      totalComplete++;
    }
  })
  const elStatusBadges = document.querySelectorAll('.status-badge');
  for (let i = 0; i < elStatusBadges.length; i++) {
    if (i < totalComplete) {
      elStatusBadges[i].style.backgroundColor = '#788EFF';
    } else {
      elStatusBadges[i].style.backgroundColor = '#fff';
    }
  }
  const totalUnComplete = listItems - totalComplete;
  html +=/*html*/`
<span id="display-progress">Còn ${totalUnComplete} công việc chưa hoàn thành</span>`
  numberOfJobs.innerHTML = html
  if (totalUnComplete == 0) {
    numberOfJobs.innerHTML = 'Đã hoàn thành'
  }
}