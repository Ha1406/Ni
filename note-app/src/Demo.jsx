import { useState } from "react";
import NoteForm_2 from "./luyentap/NoteForm_2";
import NoteList_2 from "./luyentap/NoteList_2";

let DEMODATA = [
  {
    id: 1,
    title: 'A Họp team dự án website',
    priority: 'high',
    category: 'work',
    description:
      'Thảo luận về tiến độ dự án và phân công công việc cho tuần tới. Cần chuẩn bị báo cáo tiến độ và demo sản phẩm.',
    completed: true,
  },
  {
    id: 2,
    title: 'Mua sắm cuối tuần',
    priority: 'medium',
    category: 'personal',
    description:
      'Danh sách mua sắm: thực phẩm, rau củ, thịt cá, sữa, bánh mì. Nhớ ghé siêu thị Metro để mua đồ với giá tốt.',
    completed: false,
  },
  {
    id: 3,
    title: 'Ý tưởng app quản lý tài chính team',
    priority: 'low',
    category: 'ideas',
    description:
      'Phát triển ứng dụng giúp người dùng theo dõi thu chi, lập ngân sách và đầu tư thông minh. Tích hợp AI để đưa ra lời khuyên tài chính.',
    completed: true,
  },
  {
    id: 4,
    title: 'C Review code và merge PR',
    priority: 'high',
    category: 'work',
    description:
      'Kiểm tra code của team, test các tính năng mới và merge pull request vào branch main. Đảm bảo không có bug trước khi deploy.',
    completed: true,
  },
  {
    id: 5,
    title: 'Lên kế hoạch du lịch Đà Lạt',
    priority: 'medium',
    category: 'personal',
    description:
      'Tìm hiểu các địa điểm tham quan, đặt khách sạn và lên lịch trình chi tiết cho chuyến du lịch 3 ngày 2 đêm.',
    completed: true,
  },
  {
    id: 6,
    title: 'B Học React Native team',
    priority: 'low',
    category: 'personal',
    description:
      'Bắt đầu học React Native để phát triển ứng dụng mobile. Tìm hiểu về navigation, state management và deployment.',
    completed: false,
  },
];
function Demo() {
  const [notes, setNotes] = useState([...DEMODATA]);
  const [searchKeyword, setSearchKeyword] = useState('');
  const [searchKeyPriority, setSearchKeyPriority] = useState('all');
  const [searchKeyCategory, setSearchKeyCategory] = useState('all');
  const [searchKeyArrange, setSearchKeyArrange] = useState('all');

  function handleDelete(id) {
    if (confirm('Xóa?')) {
      const newNotes = notes.filter(item => item.id !== id);
      setNotes(newNotes);
    }
  }

  function handleAdd(note) {
    const newNote = {
      ...note,
      id: notes.length + 1,
    };
    setNotes([...notes, newNote]);
    console.log(newNote);
  }

  function handleCheckNote(id, newCompleted) {
    console.log('event', id, newCompleted);

    for (let index = 0; index < notes.length; index++) {
      console.log(notes[index].id);

      if (notes[index].id === id) {
        notes[index].completed = newCompleted;
        break;
      }
    }
    setNotes([...notes]);
  }


  function handleSearch(keyword, priority, category, arrange) {
    setSearchKeyword(keyword)
    setSearchKeyPriority(priority)
    setSearchKeyCategory(category)
    setSearchKeyArrange(arrange)
  }

  function handleClear() {
    setSearchKeyword('');
    setSearchKeyCategory('all');
    setSearchKeyPriority('all');
  }

  // google
  function removeVietnameseAccents(str) {
    // Chuẩn hóa chuỗi về dạng NFD (Normalization Form Canonical Decomposition)
    // để tách các ký tự dấu thành các ký tự riêng biệt
    str = str.normalize('NFD');

    // Loại bỏ các ký tự dấu kết hợp (diacritics)
    // [\u0300-\u036f] là dải mã Unicode cho các ký tự dấu kết hợp
    str = str.replace(/[\u0300-\u036f]/g, '');

    // Xử lý ký tự đặc biệt "đ" vì normalize không xử lý riêng ký tự này
    str = str.replace(/đ/g, 'd'); // Hoặc có thể là 'D' tùy vào mục đích

    return str;
  }

  let filterNotes = [...notes];

  console.log(searchKeyArrange);

  if (searchKeyword) {
    const searchText = removeVietnameseAccents(searchKeyword.toLowerCase());
    filterNotes = filterNotes.filter(item => {
      const normalizedTitle = removeVietnameseAccents(item.title.toLowerCase());
      return normalizedTitle.includes(searchText);
    });
  }



  // neu co chon do uu tien => loc them lan nua
  if (searchKeyPriority !== 'all') {
    filterNotes = filterNotes.filter(item => {
      return item.priority === searchKeyPriority;
    });
  }


  // neu co chon do danh muc => loc them lan nua
  if (searchKeyCategory !== 'all') {
    filterNotes = filterNotes.filter(item => {
      return item.category === searchKeyCategory;
    });
  }

  if (searchKeyArrange == 'increase') {

    filterNotes.sort((a, b) => {
      const nameA = a.title.toLowerCase();
      const nameB = b.title.toLowerCase();
      if (nameA < nameB) {
        return -1; // a đứng trước b
      }
      if (nameA > nameB) {
        return 1;  // b đứng trước a
      }
      return 0;
    })
  } else if (searchKeyArrange == 'decrease') {
    filterNotes.sort((a, b) => {
      const nameA = a.title.toLowerCase();
      const nameB = b.title.toLowerCase();
      if (nameA < nameB) {
        return 1;
      }
      if (nameA > nameB) {
        return -1;
      }
      return 0;
    })
  }



  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50">
      <div className="container mx-auto p-4">
        <h1 className="text-4xl font-bold text-center mb-4 text-teal-800 drop-shadow-sm">My Notes App</h1>
        <h2 className="text-2xl font-bold text-end mb-4 text-teal-800">Danh Sách Ghi Chú</h2>

        {/* Layout responsive: Desktop 2 cột (4:6), Mobile dọc */}
        <div className="grid grid-cols-1 lg:grid-cols-10 gap-6">
          {/* Component form để thêm note mới - 4/10 */}
          <NoteForm_2 onClickAdd={handleAdd} onClickSearch={handleSearch} onClickClear={handleClear} />

          {/* Component hiển thị danh sách notes - 6/10 */}
          <NoteList_2 notes={filterNotes} onClickDelete={handleDelete} onCheckNote={handleCheckNote} />
        </div>
      </div>
    </div>
  );
}

export default Demo;
