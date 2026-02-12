interface ButtonProps {
  ariaLabel: string;
  type: "button" | "submit" | "reset";
  value: string;
  handleAction?: () => void;
}

export default function Button({ ariaLabel, type, value, handleAction }: ButtonProps) {
  return (
    <button
      className='w-full bg-neutral-blue-800 text-white font-bold rounded-lg p-4 cursor-pointer hover:bg-primary-red duration-300'
      aria-label={ariaLabel}
      type={type}
      onClick={handleAction}
    >
      {value}
    </button>
  )
}
