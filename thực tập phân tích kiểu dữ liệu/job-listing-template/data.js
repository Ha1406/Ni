export const CATEGORY = [
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

export const COMPANY = [
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

export const FORM_OF_WORK = [
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

export const JOBS = [
    {
        id: 1,
        name: 'ReactJS Developer (Upto 2000 USD)',
        salaryMin: 12,
        salaryMax: 15,
        categoryId: 1,
        publishDate: '2025-03-05 10:20:30',
        companyId: 4,
        workPlace: 'Hà Nội',
        minExperienceYear: 3,
        workType: 2,
        request: [1, 2, 3, 4]
    },
    {
        id: 2,
        name: 'Frontend Developer (15 - 25 trieu VND)',
        salary_min: 12,
        salary_max: 15,
        categoryId: 1,
        publish_date: '2025-03-05 10:20:30',
        companyId: 5,
        address: 'Hồ Chí Minh',
        minExperienceYear: 2,
        workType: 3,
        request: [1, 2, 3, 4]
    },
    {
        id: 3,
        name: 'Chuyên Viên Phân Tích Dữ Liệu Bất Động Sản Úc ',
        salary_min: 13,
        salary_max: 17,
        categoryId: 1,
        publish_date: '2025-03-05 10:20:30',
        companyId: 5,
        address: 'Hà Nội',
        minExperienceYear: 3,
        workType: 3,
        request: [1, 5, 3]
    },
    {
        id: 4,
        name: 'C++ Developer (Upto 2000 USD)',
        salary_min: 42,
        salary_max: 50,
        categoryId: 1,
        publish_date: '2025-03-05 10:20:30',
        companyId: 5,
        address: 'Đà Nẵng',
        minExperienceYear: 2,
        workType: 3,
        request: [1, 2, 7, 4]
    },
    {
        id: 5,
        name: 'Chuyên Viên Giải Pháp (Nghỉ T7 - Chủ Nhật, Thu Nhập Hấp Dẫn) ',
        salary_min: 18,
        salary_max: 20,
        categoryId: 1,
        publish_date: '2025-03-05 10:20:30',
        companyId: 5,
        address: 'Hà Nội',
        minExperienceYear: 1,
        workType: 3,
        request: [1, 2, 3, 4]
    },
    {
        id: 6,
        name: 'IT Leader',
        salary_min: 12,
        salary_max: 15,
        categoryId: 1,
        publish_date: '2025-03-05 10:20:30',
        companyId: 5,
        address: 'Hồ Chí Minh',
        minExperienceYear: 5,
        workType: 3,
        request: [1, 2, 3, 7, 6]
    },
    {
        id: 7,
        name: 'Chuyên Viên Kinh Doanh, Phát Triển Sản Phẩm Dịch Vụ Nội Dung Số (Nghỉ Thứ 7 - Chủ Nhật, Thu Nhập Hấp Dẫn)',
        salary_min: 17,
        salary_max: 20,
        categoryId: 1,
        publish_date: '2025-03-05 10:20:30',
        companyId: 5,
        address: 'Hà Nội',
        minExperienceYear: 1,
        workType: 3,
        request: [1, 2, 3, 4, 5, 6]
    },
    {
        id: 8,
        name: 'Nhân Viên Thiết Kế Đồ Họa',
        salary_min: 12,
        salary_max: 50,
        categoryId: 1,
        publish_date: '2025-03-05 10:20:30',
        companyId: 5,
        address: 'Hà Nội',
        minExperienceYear: 3,
        workType: 3,
        request: [1, 2, 7, 4]
    },
    {
        id: 9,
        name: 'Middle/ Senior Business Analyst - 3 Ex - Salary Range 2000$',
        salary_min: 30,
        salary_max: 50,
        categoryId: 1,
        publish_date: '2025-03-05 10:20:30',
        companyId: 5,
        address: 'Hà Nội',
        minExperienceYear: 3,
        workType: 3,
        request: [1, 2, 3, 4, 6]
    },
    {
        id: 10,
        name: 'Nhân Viên Thiết Kế, Thu Nhập 14 - 18 Triệu, Tại Hà Nội',
        salary_min: 14,
        salary_max: 18,
        categoryId: 1,
        publish_date: '2025-03-05 10:20:30',
        companyId: 5,
        address: 'Hồ Chí Minh',
        minExperienceYear: 3,
        workType: 3,
        request: [1, 2, 3, 4, 6, 7]
    },
];

export const REQUEST = [
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