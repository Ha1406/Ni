
export default function Button1(props) {
  const onSendY = props.onSendY;

  function handleDecreaseCount() {
    const y = 1;
    onSendY(y)
    console.log('123');

  }

  return (
    <button
      className="inline-block rounded-sm border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:ring-3 focus:outline-hidden" onClick={handleDecreaseCount}>
      - 1
    </button>
  )
}