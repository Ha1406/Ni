export default function NoteItem_2(props) {
  const data = props.data;
  const id = data.id;
  const title = data.title;
  const priority = data.priority;
  const category = data.category;
  const description = data.description;
  const onClickDelete = props.onClickDelete;
  const onCheckNote = props.onCheckNote;
  const completed = data.completed;
  let priorityName = '';
  let categoryName = '';
  let bgColor = '';
  let lineThrough = '';
  let checkedInput = '';

  if (priority === 'low') {
    priorityName = 'Thấp';
    bgColor = 'from-green-50 to-emerald-50 border-green-400';
  } else if (priority === 'medium') {
    priorityName = 'Trung bình';
    bgColor = 'from-yellow-50 to-amber-50 border-yellow-400';
  } else if (priority === 'high') {
    priorityName = 'Cao';
    bgColor = 'from-red-50 to-pink-50 border-red-400';
  }
  if (category === 'work') {
    categoryName = 'Công việc';
  } else if (category === 'personal') {
    categoryName = 'Cá nhân';
  } else if (category === 'ideas') {
    categoryName = 'Ý tưởng';
  }
  // console.log(completed);

  if (completed == true) {
    lineThrough = 'line-through';
    checkedInput = 'checked';
  }
  lineThrough = `text-lg font-bold text-gray-800 ${lineThrough}`
  bgColor = `p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 border-l-4 bg-gradient-to-r ${bgColor}`;

  function handleDeleteNoteItem() {
    onClickDelete(id);
  }
  function checkNoteItem(event) {
    onCheckNote(id, event.target.checked);
  }

  return (
    <>
      {/* Note Card 1 - High Priority */}
      <div className={bgColor}>
        {/* Header với title và nút xóa */}
        <div className="flex justify-between items-start mb-3">
          <div className="flex-1">
            <h3 className={lineThrough}>{title}</h3>
          </div>
          <input type="checkbox" name="line-throught" id="line-throught" onChange={checkNoteItem} checked={checkedInput} />
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

    </>
  )
}