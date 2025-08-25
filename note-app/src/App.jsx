import { useState } from "react";

let DEMODATA = [
  {
    id: 1,
    title: 'Họp team dự án website',
    priority: 'high',
    category: 'work',
    description:
      'Thảo luận về tiến độ dự án và phân công công việc cho tuần tới. Cần chuẩn bị báo cáo tiến độ và demo sản phẩm.',
  },
  {
    id: 2,
    title: 'Mua sắm cuối tuần',
    priority: 'medium',
    category: 'personal',
    description:
      'Danh sách mua sắm: thực phẩm, rau củ, thịt cá, sữa, bánh mì. Nhớ ghé siêu thị Metro để mua đồ với giá tốt.',
  },
  {
    id: 3,
    title: 'Ý tưởng app quản lý tài chính',
    priority: 'low',
    category: 'ideas',
    description:
      'Phát triển ứng dụng giúp người dùng theo dõi thu chi, lập ngân sách và đầu tư thông minh. Tích hợp AI để đưa ra lời khuyên tài chính.',
  },
  {
    id: 4,
    title: 'Review code và merge PR',
    priority: 'high',
    category: 'work',
    description:
      'Kiểm tra code của team, test các tính năng mới và merge pull request vào branch main. Đảm bảo không có bug trước khi deploy.',
  },
  {
    id: 5,
    title: 'Lên kế hoạch du lịch Đà Lạt',
    priority: 'medium',
    category: 'personal',
    description:
      'Tìm hiểu các địa điểm tham quan, đặt khách sạn và lên lịch trình chi tiết cho chuyến du lịch 3 ngày 2 đêm.',
  },
  {
    id: 6,
    title: 'Học React Native',
    priority: 'low',
    category: 'ideas',
    description:
      'Bắt đầu học React Native để phát triển ứng dụng mobile. Tìm hiểu về navigation, state management và deployment.',
  },
];

export default function App() {
  const [notes, setNotes] = useState([...DEMODATA]);
  // 1
  const [formData, setFormData] = useState({
    title: '',
    priority: 'low',
    category: 'work',
    description: '',
  })

  console.log(formData);

  // 2
  function handleChangeValue(e) {
    const target = e.target;
    const value = target.value
    const name = target.name
    formData[name] = value
    const newFormData = { ...formData }
    setFormData(newFormData)
  }

  function handleDelete(id) {

    const newNotes = notes.filter(item => item.id !== id);
    setNotes(newNotes);
  }

  function handleAdd() {
    const lastElement = notes[notes.length - 1].id;

    formData.id = lastElement + 1
    // console.log(newNote);
    // notes.push(newNote)
    notes.push(formData)
    // const newNotes = notes
    const newNotes = [...notes]
    setNotes(newNotes);
  }


  const noteListItem = notes.map((demo, index) => {
    let title = demo.title;
    let description = demo.description;
    let category = demo.category;
    let categoryName = '';
    let priority = demo.priority;
    let priorityName = '';
    let bgColor = '';
    let id = demo.id;

    if (category == 'ideas') {
      categoryName = 'Ý tưởng';
    } else if (category == 'work') {
      categoryName = 'Công việc';
    } else if (category == 'personal') {
      categoryName = 'Cá nhân';
    }
    if (priority == 'low') {
      priorityName = 'Thấp';
      bgColor = 'from-green-50 to-emerald-50 border-green-400';
    } else if (priority == 'medium') {
      priorityName = 'Trung';
      bgColor = 'from-yellow-50 to-amber-50 border-yellow-400';
    } else if (priority == 'high') {
      priorityName = 'Cao';
      bgColor = 'from-red-50 to-pink-50 border-red-400';
    }

    bgColor = `p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 border-l-4  bg-gradient-to-r ${bgColor}`

    return (
      <div className={bgColor} key={index} >
        {/* Header với title và nút xóa */}
        <div className="flex justify-between items-start mb-3">
          <div className="flex-1">
            <h3 className="text-lg font-bold text-gray-800">{title}</h3>
          </div>

          <button
            className="ml-3 p-1.5 text-red-400 hover:text-red-600 hover:bg-red-100 rounded-full transition-all duration-200"
            title="Xóa ghi chú" onClick={() => { handleDelete(id) }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Nội dung mô tả */}
        <p className="text-gray-700 text-sm leading-relaxed mb-3">{description}</p>

        {/* Footer với thông tin category và priority */}
        <div className="flex justify-between items-center pt-2 border-t border-gray-200">
          <div className="flex items-center">
            <span className="text-xs font-medium text-teal-700 bg-teal-100 px-2 py-1 rounded-full">
              {categoryName}
            </span>
          </div>
          <div className="flex items-center">
            <span className="text-xs font-semibold text-teal-600">{priorityName}</span>
          </div>
        </div>
      </div>
    )
  }

  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50">
      <div className="container mx-auto p-4">
        <h1 className="text-4xl font-bold text-center mb-6 text-teal-800 drop-shadow-sm">My Notes App</h1>

        {/* Layout responsive: Desktop 2 cột (4:6), Mobile dọc */}
        <div className="grid grid-cols-1 lg:grid-cols-10 gap-6">
          {/* Component form để thêm note mới - 4/10 */}
          <div className="lg:col-span-4">
            <h2 className="text-2xl font-bold text-center mb-4 text-teal-800">Thêm Ghi Chú Mới</h2>

            {/* Form tĩnh */}
            <div className="bg-gradient-to-r from-blue-100 to-cyan-100 rounded-xl shadow-md border border-blue-200 p-5">
              <form className="space-y-4">
                {/* Input cho Title */}
                <div>
                  <label htmlFor="title" className="block text-sm font-semibold text-teal-700 mb-1">
                    Tiêu đề
                  </label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    placeholder="Nhập tiêu đề ghi chú..."
                    className="w-full px-3 py-2 bg-white border-2 border-blue-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-300 focus:border-teal-400 text-gray-700 placeholder-gray-400"
                    // onChange={handleChangeTitle}
                    // 3
                    onChange={handleChangeValue}
                  />
                </div>

                {/* Grid cho Priority và Category */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Select cho Priority */}
                  <div>
                    <label htmlFor="priorityValue" className="block text-sm font-semibold text-teal-700 mb-1">
                      Mức độ ưu tiên
                    </label>
                    <select
                      id="priorityValue"
                      name="priority"
                      // onChange={handleChangePriority}
                      // 4
                      onChange={handleChangeValue}
                      className="w-full px-3 py-2 bg-white border-2 border-blue-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-300 focus:border-teal-400 text-gray-700"
                    >
                      <option value="low">Thấp</option>
                      <option value="medium">Trung bình</option>
                      <option value="high">Cao</option>
                    </select>
                  </div>

                  {/* Select cho Category */}
                  <div>
                    <label htmlFor="categoryValue" className="block text-sm font-semibold text-teal-700 mb-1">
                      Danh mục
                    </label>
                    <select
                      id="categoryValue"
                      name="category"
                      // onChange={handleChangeCategory}
                      // 5
                      onChange={handleChangeValue}
                      className="w-full px-3 py-2 bg-white border-2 border-blue-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-300 focus:border-teal-400 text-gray-700"
                    >
                      <option value="work">Công việc</option>
                      <option value="personal">Cá nhân</option>
                      <option value="ideas">Ý tưởng</option>
                    </select>
                  </div>
                </div>

                {/* Textarea cho Description */}
                <div>
                  <label htmlFor="descriptionValue" className="block text-sm font-semibold text-teal-700 mb-1">
                    Mô tả
                  </label>
                  <textarea
                    id="descriptionValue"
                    rows="5"
                    name="description"
                    // onChange={handleChangeDescription}
                    // 6
                    onChange={handleChangeValue}
                    placeholder="Nhập mô tả chi tiết..."
                    className="w-full px-3 py-2 bg-white border-2 border-blue-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-300 focus:border-teal-400 text-gray-700 placeholder-gray-400 resize-none"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div className="text-center">
                  <button
                    type="button"
                    className="px-6 py-2 bg-gradient-to-r from-teal-500 to-blue-500 text-white font-semibold rounded-lg shadow-md hover:from-teal-600 hover:to-blue-600 focus:outline-none focus:ring-3 focus:ring-teal-300 transform hover:scale-105 transition-all duration-200" onClick={handleAdd}
                  >
                    Thêm Ghi Chú
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Component hiển thị danh sách notes - 6/10 */}
          <div className="lg:col-span-6">
            <h2 className="text-2xl font-bold text-center mb-4 text-teal-800">Danh Sách Ghi Chú</h2>

            {/* Danh sách notes tĩnh */}
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
              {/* Note Card 1 - High Priority */}
              {noteListItem}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
