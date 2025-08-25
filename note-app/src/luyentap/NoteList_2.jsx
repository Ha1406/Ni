import NoteItem_2 from "./NoteItem_2";

export default function NoteList_2(props) {
  const notes = props.notes;
  const onClickDelete = props.onClickDelete;
  const onCheckNote = props.onCheckNote;

  const notelist = notes.map((note, index) =>
    <NoteItem_2 key={index} data={note} onClickDelete={onClickDelete} onCheckNote={onCheckNote} />
  );
  return (
    <div className="lg:col-span-6">
      {/* <h2 className="text-2xl font-bold text-center mb-4 text-teal-800">Danh Sách Ghi Chú</h2> */}

      {/* Danh sách notes tĩnh */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
        {notelist}
      </div>
    </div>
  )
}