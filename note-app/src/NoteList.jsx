import NoteItem from "./NoteItem";

export default function NoteList(props) {
  const notes = props.notes
  const onClickDelete = props.onClickDelete

  const notelist = notes.map((note, index) =>
    <NoteItem key={index} data={note} onClickDelete={onClickDelete} />
  );

  return (
    <div className="lg:col-span-6">
      <h2 className="text-2xl font-bold text-center mb-4 text-teal-800">Danh Sách Ghi Chú</h2>
      {/* Danh sách notes tĩnh */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
        {/* <NoteItem /> */}
        {notelist}
      </div>
    </div>
  )
}