export default function Button(props) {
  const { ariaLabel, type, value, handleAction } = props
  return (
    <div>
      <button
        className='w-full bg-neutral-blue-800 text-white font-bold rounded-lg p-4 cursor-pointer hover:bg-primary-red duration-300'
        aria-label={ariaLabel}
        type={type}
        onClick={handleAction}
      >
        {value}
      </button>
    </div>
  )
}
