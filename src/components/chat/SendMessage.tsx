export const SendMessage = () => {
  return (
    <>
      {/* Input Field */}
      <form className="p-4 border-t bg-white flex items-center gap-2">
        <input
          className="flex-1 border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500 bg-gray-50"
          placeholder="Type your message..."
        />
        <button
          type="submit"
          className="bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700 active:scale-95 transition"
        >
          Send
        </button>
      </form>
    </>
  );
}