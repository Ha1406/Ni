import { useState } from "react";

export default function NoteForm_2(props) {
  const notes = props.notes;
  const onClickAdd = props.onClickAdd;
  const onClickSearch = props.onClickSearch;
  // const onChangePriority = props.onChangePriority;
  const onClickClear = props.onClickClear;

  const [title, setTitle] = useState('');
  const [priority, setPriority] = useState('low');
  const [category, setCategory] = useState('work');
  const [description, setDescription] = useState('');
  const [search, setSearch] = useState('');
  const [findPriority, setFindPriority] = useState('all');
  const [findCategory, setFindCategory] = useState('all');
  const [arrange, setArrange] = useState('all');


  function handleChangeTitle(event) {
    setTitle(event.target.value);
    console.log(event.target.value);
  }
  function handleChangePriority(event) {
    setPriority(event.target.value);
    console.log(event.target.value);
  }
  function handleChangeCategory(event) {
    setCategory(event.target.value);
    console.log(event.target.value);
  }
  function handleChangeDescription(event) {
    setDescription(event.target.value);
    console.log(event.target.value);
  }
  function handleAddNoteItem(event) {
    const formData = {
      title: title,
      priority: priority,
      category: category,
      description: description,
    };

    onClickAdd(formData);
    setTitle('');
    setPriority('low');
    setCategory('work');
    setDescription('');
  }
  function handleSearch(event) {
    setSearch(event.target.value)

  }
  function btnSearch() {
    onClickSearch(search, findPriority, findCategory, arrange);
  }
  function btnClear() {
    onClickClear();
    setSearch('');
    setFindPriority('all');
    setFindCategory('all');
  }
  function handlefindPriority(event) {
    setFindPriority(event.target.value)
  }
  function handlefindCategory(event) {
    setFindCategory(event.target.value)
  }
  function handleArrange(event) {
    setArrange(event.target.value)
  }

  return (
    <>
      <div className="lg:col-span-4">


        {/* Form tĩnh */}
        <div className="bg-gradient-to-r from-blue-100 to-cyan-100 rounded-xl shadow-md border border-blue-200 p-5">
          <form className="space-y-4">
            {/* Input cho Search */}
            <div>
              <div>
                <label htmlFor="search" className="block text-sm font-semibold text-teal-700 mb-1">
                  Tìm kiếm
                </label>
                <input
                  type="text"
                  id="search"
                  placeholder="Tìm kiếm..."
                  className="w-full px-3 py-2 bg-white border-2 border-blue-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-300 focus:border-teal-400 text-gray-700 placeholder-gray-400" onChange={handleSearch} value={search}
                />
              </div>
              {/* Grid cho Priority và Category */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Select cho Priority */}
                <div>
                  <label htmlFor="priority" className="block text-sm font-semibold text-teal-700 mb-1">
                    Mức độ ưu tiên
                  </label>
                  <select
                    id="priority"
                    className="w-full px-3 py-2 bg-white border-2 border-blue-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-300 focus:border-teal-400 text-gray-700"
                    onChange={handlefindPriority} value={findPriority}
                  >
                    <option value="all">Tất cả</option>
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
                    className="w-full px-3 py-2 bg-white border-2 border-blue-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-300 focus:border-teal-400 text-gray-700"
                    onChange={handlefindCategory} value={findCategory}
                  >
                    <option value="all">Tất cả</option>
                    <option value="work">Công việc</option>
                    <option value="personal">Cá nhân</option>
                    <option value="ideas">Ý tưởng</option>
                  </select>
                </div>
                {/* Select cho thứ tự */}
                <div>
                  <label htmlFor="priority" className="block text-sm font-semibold text-teal-700 mb-1">
                    Thứ tự
                  </label>
                  <select
                    id="priority"
                    className="w-full px-3 py-2 bg-white border-2 border-blue-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-300 focus:border-teal-400 text-gray-700"
                    onChange={handleArrange} value={arrange}
                  >
                    <option value="all">Mặc định</option>
                    <option value="increase">A-Z</option>
                    <option value="decrease">Z-A</option>
                  </select>
                </div>
              </div>
              <div className="flex justify-around mt-3">
                <button
                  type="button"
                  className="px-3 py-2 bg-gradient-to-r from-teal-500 to-blue-500 text-white font-semibold rounded-lg shadow-md hover:from-teal-600 hover:to-blue-600 focus:outline-none focus:ring-3 focus:ring-teal-300 transform hover:scale-105 transition-all duration-200" onClick={btnSearch}
                >
                  Search
                </button>
                <button
                  type="button"
                  className="px-3 py-2 bg-gradient-to-r from-blue-500 to-teal-500 text-white font-semibold rounded-lg shadow-md hover:from-blue-600 hover:to-teal-600 focus:outline-none focus:ring-3 focus:ring-teal-300 transform hover:scale-105 transition-all duration-200" onClick={btnClear}
                >
                  Clear
                </button>
              </div>
            </div>

            <hr />

            <h2 className="text-2xl font-bold text-center mb-4 text-teal-800">Thêm Ghi Chú Mới</h2>

            {/* Input cho Title */}
            <div>
              <label htmlFor="title" className="block text-sm font-semibold text-teal-700 mb-1">
                Tiêu đề
              </label>
              <input
                type="text"
                id="title"
                placeholder="Nhập tiêu đề ghi chú..."
                className="w-full px-3 py-2 bg-white border-2 border-blue-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-300 focus:border-teal-400 text-gray-700 placeholder-gray-400" onChange={handleChangeTitle} value={title}
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
                  className="w-full px-3 py-2 bg-white border-2 border-blue-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-300 focus:border-teal-400 text-gray-700" onChange={handleChangePriority} value={priority}
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
                  className="w-full px-3 py-2 bg-white border-2 border-blue-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-300 focus:border-teal-400 text-gray-700" onChange={handleChangeCategory} value={category}
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
                rows="4"
                placeholder="Nhập mô tả chi tiết..."
                className="w-full px-3 py-2 bg-white border-2 border-blue-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-300 focus:border-teal-400 text-gray-700 placeholder-gray-400 resize-none" onChange={handleChangeDescription} value={description}
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
    </>
  )
}