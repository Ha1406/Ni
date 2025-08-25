export default function NoteItem(props) {
  const data = props.data;
  const onClickDelete = props.onClickDelete;

  const id = data.id;
  const title = data.title;
  const priority = data.priority;
  const category = data.category;
  const description = data.description;
  let categoryName = '';
  let priorityName = '';
  let bgColor = '';

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

  bgColor = `p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 border-l-4  bg-gradient-to-r ${bgColor}`;

  function handleDeleteNoteItem() {
    onClickDelete(id)
  }


  return (
    <div className={bgColor} >
      {/* Header với title và nút xóa */}
      <div className="flex justify-between items-start mb-3">
        <div className="flex-1">
          <h3 className="text-lg font-bold text-gray-800">{title}</h3>
        </div>

        <button
          className="ml-3 p-1.5 text-red-400 hover:text-red-600 hover:bg-red-100 rounded-full transition-all duration-200"
          title="Xóa ghi chú" onClick={handleDeleteNoteItem}
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
      <p className="text-gray-700 text-sm leading-relaxed mb-3">
        {description}
      </p>

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