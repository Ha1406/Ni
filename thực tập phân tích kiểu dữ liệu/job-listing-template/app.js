const JOBS = [
  {
    id: 1,
    name: 'ReactJS Developer (Upto 2000 USD)',
    salaryMin: 12,
    salaryMax: 15,
    categoryId: 1,
    publishDate: '2025-03-05 10:20:30',
    companyId: 1,
    address: 'Hà Nội',
    minExperienceYear: 3,
    workType: 2,
    request: [1, 2, 3, 4],
  },
  {
    id: 2,
    name: 'Frontend Developer (15 - 25 trieu VND)',
    salaryMin: 12,
    salaryMax: 15,
    categoryId: 2,
    publishDate: '2025-03-05 10:20:30',
    companyId: 2,
    address: 'Hồ Chí Minh',
    minExperienceYear: 2,
    workType: 3,
    request: [1, 2, 3, 4],
  },
  {
    id: 3,
    name: 'Chuyên Viên Phân Tích Dữ Liệu Bất Động Sản Úc ',
    salaryMin: 13,
    salaryMax: 17,
    categoryId: 3,
    publishDate: '2025-03-05 10:20:30',
    companyId: 3,
    address: 'Hà Nội',
    minExperienceYear: 3,
    workType: 3,
    request: [1, 5, 3]

  },
  {
    id: 4,
    name: 'C++ Developer (Upto 2000 USD)',
    salaryMin: 42,
    salaryMax: 50,
    categoryId: 4,
    publishDate: '2025-03-05 10:20:30',
    companyId: 4,
    address: 'Đà Nẵng',
    minExperienceYear: 2,
    workType: 3,
    request: [1, 2, 7, 4]
  },
  {
    id: 5,
    name: 'Chuyên Viên Giải Pháp (Nghỉ T7 - Chủ Nhật, Thu Nhập Hấp Dẫn) ',
    salaryMin: 18,
    salaryMax: 20,
    categoryId: 5,
    publishDate: '2025-03-05 10:20:30',
    companyId: 5,
    address: 'Hà Nội',
    minExperienceYear: 1,
    workType: 3,
    request: [1, 2, 3, 4]
  },
  {
    id: 6,
    name: 'IT Leader',
    salaryMin: 12,
    salaryMax: 15,
    categoryId: 1,
    publishDate: '2025-03-05 10:20:30',
    companyId: 1,
    address: 'Hồ Chí Minh',
    minExperienceYear: 5,
    workType: 3,
    request: [1, 2, 3, 7, 6]
  },
  {
    id: 7,
    name: 'Chuyên Viên Kinh Doanh, Phát Triển Sản Phẩm Dịch Vụ Nội Dung Số (Nghỉ Thứ 7 - Chủ Nhật, Thu Nhập Hấp Dẫn)',
    salaryMin: 17,
    salaryMax: 20,
    categoryId: 2,
    publishDate: '2025-03-05 10:20:30',
    companyId: 2,
    address: 'Hà Nội',
    minExperienceYear: 1,
    workType: 4,
    request: [1, 2, 3, 4, 5, 6]
  },
  {
    id: 8,
    name: 'Nhân Viên Thiết Kế Đồ Họa',
    salaryMin: 12,
    salaryMax: 50,
    categoryId: 3,
    publishDate: '2025-03-05 10:20:30',
    companyId: 3,
    address: 'Hà Nội',
    minExperienceYear: 3,
    workType: 3,
    request: [1, 2, 7, 4]
  },
  {
    id: 9,
    name: 'Middle/ Senior Business Analyst - 3 Ex - Salary Range 2000$',
    salaryMin: 30,
    salaryMax: 50,
    categoryId: 4,
    publishDate: '2025-03-05 10:20:30',
    companyId: 4,
    address: 'Hà Nội',
    minExperienceYear: 3,
    workType: 1,
    request: [1, 2, 3, 4, 6]
  },
  {
    id: 10,
    name: 'Nhân Viên Thiết Kế, Thu Nhập 14 - 18 Triệu, Tại Hà Nội',
    salaryMin: 14,
    salaryMax: 18,
    categoryId: 1,
    publishDate: '2025-03-05 10:20:30',
    companyId: 5,
    address: 'Hồ Chí Minh',
    minExperienceYear: 3,
    workType: 2,
    request: [1, 2, 3, 4, 6, 7]
  },
];
const WORK_TYPE = [
  {
    id: 1,
    name: 'Toàn thời gian',
  },
  {
    id: 2,
    name: 'Bán thời gian',
  },
  {
    id: 3,
    name: 'Từ xa',
  },
  {
    id: 4,
    name: 'Khác',
  },
];
const CATEGORY = [
  {
    id: 1,
    name: 'Frontend Developer',
  },
  {
    id: 2,
    name: 'Backend Developer',
  },
  {
    id: 3,
    name: 'Project Manager',
  },
  {
    id: 4,
    name: 'Tester',
  },
  {
    id: 5,
    name: 'BA - Bussiness Analyst',
  },
];
const COMPANY = [
  {
    id: 1,
    name: 'Công Ty TNHH LG CNS VIỆT NAM',
  },
  {
    id: 2,
    name: 'CÔNG TY CỔ PHẦN CÔNG NGHỆ KIOTVIET',
  },
  {
    id: 3,
    name: 'Công ty TNHH Công nghiệp Brother Việt Nam',
  },
  {
    id: 4,
    name: 'Công ty cổ phần Công nghệ thông tin Phú Minh',
  },
  {
    id: 5,
    name: 'FPT Software',
  },
];
const REQUEST = [
  {
    id: 1,
    name: 'HTML',
  },
  {
    id: 2,
    name: 'React',
  },
  {
    id: 3,
    name: 'JavaScript',
  },
  {
    id: 4,
    name: 'Css',
  },
  {
    id: 5,
    name: 'PHP',
  },
  {
    id: 6,
    name: 'Laravel',
  },
  {
    id: 7,
    name: 'Vue',
  },
];
let elJobList = document.getElementById('jobList');
let filterJobTypes = document.getElementById('filterJobTypes');
let nameCompany = document.getElementById('nameCompany')
let filterWorkTypes = document.getElementById('filterWorkTypes');
let technologyTypes = document.getElementById('technologyTypes');
let inputSearch = document.getElementById('inputSearch');
let btnSearch = document.getElementById('btnSearch');
let minInput = document.getElementById('salaryMin');
let maxInput = document.getElementById('salaryMax');
let btnClear = document.getElementById('btnClear');

renderFilterArea();

renderList(JOBS);

function showRequestItem(content) {
  return /*html*/`<a href="#" class="badge badge-outline text-secondary fw-normal badge-pill">${content}</a> `
}
function renderFilterArea() {
  let htmljobType = '';
  CATEGORY.forEach(jobTypeItem => {
    htmljobType +=/*html*/`
    <label class="form-check">
      <input type="checkbox" class="form-check-input" name="form-type[]" value="${jobTypeItem.id}" />
      <span class="form-check-label">${jobTypeItem.name}</span>
    </label>`;
    filterJobTypes.innerHTML = htmljobType
  })
  let htmlCompany = '';
  COMPANY.forEach(companyItem => {
    htmlCompany +=/*html*/`
    <label class="form-check">
      <input type="checkbox" class="form-check-input" name="form-type[]" value="${companyItem.id}" />
      <span class="form-check-label">${companyItem.name}</span>
    </label>`;
    nameCompany.innerHTML = htmlCompany
  })
  let htmlWorkType = '';
  WORK_TYPE.forEach(workTypeItem => {
    htmlWorkType +=/*html*/`
    <label class="form-check">
      <input type="checkbox" class="form-check-input" name="form-type[]" value="${workTypeItem.id}" />
      <span class="form-check-label">${workTypeItem.name}</span>
    </label>`;
    filterWorkTypes.innerHTML = htmlWorkType
  })
  let htmlTechnologyType = '';
  REQUEST.forEach(technologyItem => {
    htmlTechnologyType +=/*html*/`
    <label class="form-check">
      <input type="checkbox" class="form-check-input" name="form-type[]" value="${technologyItem.id}" />
      <span class="form-check-label">${technologyItem.name}</span>
    </label>`;
    technologyTypes.innerHTML = htmlTechnologyType
  })
}
function renderList(list) {
  let html = '';
  list.forEach(jobItem => {
    const workTypeId = jobItem.workType;
    const workType = WORK_TYPE.find((workTypeItem) => {
      return workTypeItem.id == workTypeId
    })
    const categoryId = jobItem.categoryId;
    const category = CATEGORY.find((categoryItem) => {
      return categoryItem.id == categoryId
    })
    const companyId = jobItem.companyId;
    const company = COMPANY.find((companyItem) => {
      return companyItem.id == companyId
    })
    const requestIds = jobItem.request;
    let htmlRequest = '';
    if (requestIds.length > 3) {
      for (let i = 0; i < 3; i++) {
        const currentRequestInfo = REQUEST.find(requestItem => requestItem.id == requestIds[i]);
        htmlRequest += showRequestItem(currentRequestInfo.name);
      }
      const remainingRequest = `+${requestIds.length - 3}`;
      htmlRequest += showRequestItem(remainingRequest);
    } else {
      requestIds.forEach(requestId => {
        const currentRequestInfo = REQUEST.find(requestItem => requestItem.id == requestId);
        htmlRequest += showRequestItem(currentRequestInfo.name);
      });
    }
    html += /*html*/`
    <div class="card">
      <div class="card-body">
        <div class="row">
          <div class="col">
            <h3 class="mb-0">${jobItem.name}</h3>
          </div>
          <div class="col-auto fs-3 text-green">${jobItem.salaryMin}tr - ${jobItem.salaryMax}tr</div>
        </div>
        <div class="row">
        <div class="col-md">
        <span>${company.name}</span>
        <div class="mt-3 list-inline list-inline-dots mb-0 text-secondary d-sm-block d-none">
              <div class="list-inline-item">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                  fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                  stroke-linejoin="round" class="icon icon-inline icon-2">
                  <path
                    d="M8 9l5 5v7h-5v-4m0 4h-5v-7l5 -5m1 1v-6a1 1 0 0 1 1 -1h10a1 1 0 0 1 1 1v17h-8" />
                  <path d="M13 7l0 .01" />
                  <path d="M17 7l0 .01" />
                  <path d="M17 11l0 .01" />
                  <path d="M17 15l0 .01" />
                </svg>
                ${category.name}
              </div>
              <div class="list-inline-item">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                  fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                  stroke-linejoin="round" class="icon icon-inline icon-2">
                  <path
                    d="M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11" />
                  <path d="M9 7l4 0" />
                  <path d="M9 11l4 0" />
                </svg>
                ${workType.name}
              </div>
              <div class="list-inline-item">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                  fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                  stroke-linejoin="round" class="icon icon-inline icon-2">
                  <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                  <path
                    d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
                </svg>
                ${jobItem.address}
              </div>
            </div>
          </div>
          <div class="col-md-auto">
            <div class="mt-3 badges">
              ${htmlRequest}
            </div>
          </div>
        </div>
      </div>
    </div>`;
    elJobList.innerHTML = html;
  });
}
btnSearch.addEventListener('click', function searchInput() {
  let search = inputSearch.value.trim().toLowerCase();
  let checkCategory = document.querySelectorAll('#filterJobTypes input');
  let checkNameCompany = document.querySelectorAll('#nameCompany input');
  let checkTechnologyTypes = document.querySelectorAll('#technologyTypes input');
  let checkWorkTypes = document.querySelectorAll('#filterWorkTypes input');
  let category = [];
  let company = [];
  let technology = [];
  let workType = [];
  let min = minInput.value;
  let max = maxInput.value;

  checkCategory.forEach((item) => {
    if (item.checked) {
      category.push(parseInt(item.value));
    }
  });
  checkNameCompany.forEach((item) => {
    if (item.checked) {
      company.push(parseInt(item.value));
    }
  });
  checkWorkTypes.forEach((item) => {
    if (item.checked) {
      workType.push(parseInt(item.value));
    }
  });
  checkTechnologyTypes.forEach((item) => {
    if (item.checked) {
      technology.push(parseInt(item.value));
    }
  });
  let arrSearch = JOBS.filter(function (jobItem) {
    return jobItem.name.toLowerCase().includes(search);
  });
  if (category.length > 0) {
    arrSearch = arrSearch.filter(function (jobItem) {
      return category.includes(jobItem.categoryId);
    });
  }
  if (company.length > 0) {
    arrSearch = arrSearch.filter(function (jobItem) {
      return company.includes(jobItem.companyId);
    });
  }
  if (workType.length > 0) {
    arrSearch = arrSearch.filter(function (jobItem) {
      return workType.includes(jobItem.workType);
    });
  }
  if (technology.length > 0) {
    arrSearch = arrSearch.filter(function (jobItem) {
      return jobItem.request.some(requestId => technology.includes(requestId));
    });
  }
  if (min !== '' && max !== '') {
    arrSearch = arrSearch.filter(function (jobItem) {
      return ((jobItem.salaryMin <= parseInt(max)
        && jobItem.salaryMax >= parseInt(min)) ||
        (jobItem.salaryMax <= parseInt(max)
          && jobItem.salaryMax >= parseInt(min)));
    });
    if (min > max) {
      alert('Lương tối thiểu không được lớn hơn lương tối đa');
      elJobList.innerHTML = '';
      return;
    }
  } else if (min !== '' || max !== '') {
    alert('Vui lòng khi nhập lương cần nhập cả 2');
    elJobList.innerHTML = '';
    return;
  }
  renderList(arrSearch);

  if (arrSearch.length === 0) {
    alert('Không tìm thấy công việc phù hợp');
    elJobList.innerHTML = '';
  }
});
btnClear.addEventListener('click', function clearInput() {
  inputSearch.value = '';
  minInput.value = '';
  maxInput.value = '';
  let checkCategory = document.querySelectorAll('#filterJobTypes input');
  let checkNameCompany = document.querySelectorAll('#nameCompany input');
  let checkTechnologyTypes = document.querySelectorAll('#technologyTypes input');
  let checkWorkTypes = document.querySelectorAll('#filterWorkTypes input');

  checkCategory.forEach((item) => {
    item.checked = false;
  });
  checkNameCompany.forEach((item) => {
    item.checked = false;
  });
  checkTechnologyTypes.forEach((item) => {
    item.checked = false;
  });
  checkWorkTypes.forEach((item) => {
    item.checked = false;
  });
  renderList(JOBS);
});
// const minInput = 9;
// const maxInput = 12;
// const testArr = [
//   {
//     name: 'job1',
//     salaryMin: 10,
//     salaryMax: 15,
//   },
//   {
//     name: 'job2',
//     salaryMin: 8,
//     salaryMax: 12,
//   },
//   {
//     name: 'job3',
//     salaryMin: 13,
//     salaryMax: 20,
//   },
// ];
// const result = [];

// testArr.forEach(item => {
// if (
//   (item.salaryMin <= maxInput && item.salaryMin >= minInput) ||
//   (item.salaryMax <= maxInput && item.salaryMax >= minInput)
// ) {
//   result.push({ name: item.name, salaryMin: item.salaryMin, salaryMax: item.salaryMax });
//   }
// });