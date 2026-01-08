export const ChatDetail = () =>{
  return (<>
  <div className="flex-1 p-4 overflow-y-auto flex flex-col-reverse gap-3 bg-gray-50">
      {/* Messages (reverse order for "scroll to bottom" effect) */}
      <div className="flex flex-col gap-3">
        {/* You can map messages here */}
        <div className="flex justify-end">
          <div className="bg-teal-600 text-white rounded-lg px-4 py-2 max-w-[70%] shadow">
            Hi Alice! How are you?
            <div className="text-xs text-gray-200 mt-1 text-right">
              10:01
            </div>
          </div>
        </div>
        <div className="flex justify-start">
          <div className="bg-gray-200 text-gray-900 rounded-lg px-4 py-2 max-w-[70%] shadow">
            Hello! I'm good, thanks! 😊
            <div className="text-xs text-gray-500 mt-1 text-left">
              10:02
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <div className="bg-teal-600 text-white rounded-lg px-4 py-2 max-w-[70%] shadow">
            Do you have a moment to talk?
            <div className="text-xs text-gray-200 mt-1 text-right">
              10:03
            </div>
          </div>
        </div>
      </div>
    </div>
  </>)
}