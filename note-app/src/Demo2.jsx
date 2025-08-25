import { useState } from "react";
import NoteForm from "./NoteForm";
import NoteFormOptimize from "./NoteFormOptimize";
import NoteList from "./NoteList";
import NoteFormOptimizeFinal from "./NoteFormOptimizeFinal";

const DEMODATA = [
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
function Demo2() {
  const [notes, setNotes] = useState([...DEMODATA]);

  function handleDelete(id) {
    if (confirm('Xóa?')) {
      const newNotes = notes.filter(item => item.id !== id);
      setNotes(newNotes);
    }
  }

  function handleAdd(data) {
    const lastId = notes[notes.length - 1].id;

    data.id = lastId + 1
    notes.push(data)
    const newNotes = [...notes]
    setNotes(newNotes);
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50">
      <div className="container mx-auto p-4">
        <h1 className="text-4xl font-bold text-center mb-6 text-teal-800 drop-shadow-sm">My Notes App</h1>

        {/* Layout responsive: Desktop 2 cột (4:6), Mobile dọc */}
        <div className="grid grid-cols-1 lg:grid-cols-10 gap-6">
          {/* Component form để thêm note mới - 4/10 */}
          {/* <NoteForm onClickAdd={handleAdd} /> */}
          {/* <NoteFormOptimize onClickAdd={handleAdd} /> */}
          <NoteFormOptimizeFinal onClickAdd={handleAdd} />

          {/* Component hiển thị danh sách notes - 6/10 */}
          <NoteList notes={notes} onClickDelete={handleDelete} />
        </div>
      </div>
    </div>
  );
}

export default Demo2;
