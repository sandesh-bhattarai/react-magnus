import { NavLink } from "react-router";
{
  /* KPI CARD COMPONENT */
}
function KpiCard({ title, value, change, icon }: any) {
  // Color for change
  const isNegative = `${change}`.startsWith("-");
  return (
    <div className="bg-white rounded shadow p-5 flex items-center gap-4">
      <span className="text-3xl">{icon}</span>
      <div>
        <div className="text-xs font-semibold text-gray-400">{title}</div>
        <div className="text-xl font-bold text-gray-800">{value}</div>
        <div
          className={`text-xs mt-1 font-medium ${
            isNegative ? "text-red-500" : "text-green-700"
          }`}
        >
          {change}
        </div>
      </div>
    </div>
  );
}

{
  /* SHORTCUT BUTTON COMPONENT */
}

function ShortcutButton({ label, icon, to }: any) {
  return (
    <NavLink
      to={to}
      className="flex flex-col items-center bg-teal-100 text-teal-800 hover:bg-teal-200 rounded p-4 transition shadow group"
    >
      <span className="text-3xl mb-2 group-hover:scale-110 transition">
        {icon}
      </span>
      <span className="font-semibold">{label}</span>
    </NavLink>
  );
}

export default function AdminDashboard() {
  return (
    <>
      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <KpiCard title="Users" value="1,200" change="+5%" icon="👤" />
        <KpiCard title="Revenue" value="$13,200" change="+8%" icon="💰" />
        <KpiCard title="Active Sessions" value="307" change="-2%" icon="📈" />
        <KpiCard title="Issues" value="12" change="+1" icon="⚠️" />
      </div>

      {/* Shortcuts */}
      <div className="mb-8 grid grid-cols-1 md:grid-cols-4 gap-4">
        <ShortcutButton label="Manage Users" icon="👥" to="/admin/user" />
        <ShortcutButton label="Create Report" icon="📝" to="/admin/report" />
        <ShortcutButton label="Analytics" icon="📊" to="/admin/analytics" />
        <ShortcutButton label="Settings" icon="⚙️" to="/admin/settings" />
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Table */}
        <div className="bg-white rounded shadow p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Recent Users</h2>
          <div className="overflow-x-auto">
            <table className="w-full table-auto">
              <thead>
                <tr>
                  <th className="px-4 py-2 border-b text-left">Name</th>
                  <th className="px-4 py-2 border-b text-left">Email</th>
                  <th className="px-4 py-2 border-b text-left">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-4 py-2 border-b">Jane Doe</td>
                  <td className="px-4 py-2 border-b">jane@doe.com</td>
                  <td className="px-4 py-2 border-b">
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded">
                      Active
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-b">John Smith</td>
                  <td className="px-4 py-2 border-b">john@smith.com</td>
                  <td className="px-4 py-2 border-b">
                    <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded">
                      Pending
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-b">Alex Kim</td>
                  <td className="px-4 py-2 border-b">alex@kim.com</td>
                  <td className="px-4 py-2 border-b">
                    <span className="bg-red-100 text-red-800 px-2 py-1 rounded">
                      Disabled
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Graph (Placeholder) */}
        <div className="bg-white rounded shadow p-6 mb-8 flex flex-col items-center">
          <h2 className="text-xl font-semibold mb-4">User Growth</h2>
          {/* Simple fake graph placeholder */}
          <div className="w-full h-48 flex items-center justify-center">
            <svg width="100%" height="100%" viewBox="0 0 300 150">
              <polyline
                fill="none"
                stroke="#14b8a6"
                strokeWidth="4"
                points="0,120 40,100 80,95 120,85 160,60 200,80 240,50 280,65 300,30"
              />
              <circle cx="300" cy="30" r="5" fill="#14b8a6" />
            </svg>
          </div>
          <div className="text-gray-500 mt-2 text-sm">Last 8 weeks</div>
        </div>
      </div>
    </>
  );
}
