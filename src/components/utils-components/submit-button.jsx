export default function SubmitButton({ children }) {
  return (
    <button
      type="submit"
      className="border-2 w-3/12 mr-5 self-end border-blue-500 rounded-lg px-3 py-2 text-blue-500 cursor-pointer hover:bg-blue-500 hover:text-white"
    >
      {children}
    </button>
  );
}
