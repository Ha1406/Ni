
export default function Button2Child(props) {
  const onSendX = props.onSendX;

  function handleIncreaseCount() {
    const x = 2;
    onSendX(x)
  }

  return (
    <>
      <button
        className="inline-block rounded-sm border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:ring-3 focus:outline-hidden"
        onClick={handleIncreaseCount}>
        Child + 2
      </button>
    </>
  )
}