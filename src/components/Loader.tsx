import { FaSpinner } from "react-icons/fa";

export default function Loader() {
  return (
    <div>
      <FaSpinner
        className="w-16 h-16 text-white animate-spin"
      />
    </div>
  )
}
