import { useState } from "react";

export default function NoteFormOptimize(props) {
  const [data, setData] = useState({
    title: '',
    priority: 'low',
    category: 'work',
    description: '',
  })

  const onClickAdd = props.onClickAdd;


  function handleChangeTitle(event) {
    data.title = event.target.value;
    const newData = { ...data };
    setData(newData);
  }

  function handleChangePriority(event) {
    data.priority = event.target.value;
    const newData = { ...data };
    setData(newData);
  }

  function handleChangeCategory(event) {
    data.category = event.target.value;
    const newData = { ...data };
    setData(newData);
  }

  function handleChangeDescription(event) {
    data.description = event.target.value;
    const newData = { ...data };
    setData(newData);
  }


  function handleAddNoteItem() {
    onClickAdd(data)
    setData({
      title: '',
      priority: 'low',
      category: 'work',
      description: '',
    })
  }

  return (
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
              placeholder="Nhập tiêu đề ghi chú..."
              className="w-full px-3 py-2 bg-white border-2 border-blue-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-300 focus:border-teal-400 text-gray-700 placeholder-gray-400"
              value={data.title}
              onChange={handleChangeTitle}
            />
          </div>

          {/* Grid cho Priority và Category */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Select cho Priority */}
            <div>
              <label htmlFor="priority" className="block text-sm font-semibold text-teal-700 mb-1">
                Mức độ ưu tiên
              </label>
              <select
                id="priority"
                className="w-full px-3 py-2 bg-white border-2 border-blue-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-300 focus:border-teal-400 text-gray-700"
                onChange={handleChangePriority}
                value={data.priority}
              >
                <option value="low">Thấp</option>
                <option value="medium">Trung bình</option>
                <option value="high">Cao</option>
              </select>
            </div>

            {/* Select cho Category */}
            <div>
              <label htmlFor="category" className="block text-sm font-semibold text-teal-700 mb-1">
                Danh mục
              </label>
              <select
                id="category"
                className="w-full px-3 py-2 bg-white border-2 border-blue-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-300 focus:border-teal-400 text-gray-700" onChange={handleChangeCategory}
                value={data.category}
              >
                <option value="work">Công việc</option>
                <option value="personal">Cá nhân</option>
                <option value="ideas">Ý tưởng</option>
              </select>
            </div>
          </div>

          {/* Textarea cho Description */}
          <div>
            <label htmlFor="description" className="block text-sm font-semibold text-teal-700 mb-1">
              Mô tả
            </label>
            <textarea
              id="description"
              rows="5"
              placeholder="Nhập mô tả chi tiết..."
              className="w-full px-3 py-2 bg-white border-2 border-blue-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-300 focus:border-teal-400 text-gray-700 placeholder-gray-400 resize-none" onChange={handleChangeDescription}
              value={data.description}
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="button"
              className="px-6 py-2 bg-gradient-to-r from-teal-500 to-blue-500 text-white font-semibold rounded-lg shadow-md hover:from-teal-600 hover:to-blue-600 focus:outline-none focus:ring-3 focus:ring-teal-300 transform hover:scale-105 transition-all duration-200" onClick={handleAddNoteItem}
            >
              Thêm Ghi Chú
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}