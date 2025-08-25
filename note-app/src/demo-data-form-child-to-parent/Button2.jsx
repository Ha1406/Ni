import Button2Child from "./Button2Child";

export default function Button2(props) {
  const onSendX = props.onSendX;

  // function handleIncreaseCount() {
  //   const x = 2;
  //   onSendX(x)
  //   // console.log('123');

  // }

  return (
    <>
      <button
        className="inline-block rounded-sm border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:ring-3 focus:outline-hidden"
      // onClick={handleIncreaseCount}
      >
        + 2
      </button>
      <Button2Child onSendX={onSendX} />
    </>
  )
}