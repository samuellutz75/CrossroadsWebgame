export default function Button({ children }) {
  return (
    <button
      className="
        w-48 h-24
        bg-white text-gray-800 font-medium
        border border-gray-300 rounded-lg shadow-sm
        flex items-center justify-center text-center
        p-2 break-words
        text-base
      "
    >
      {children}
    </button>
  );
}
