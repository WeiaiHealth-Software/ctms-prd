import { CalendarDays, FolderKanban, LayoutTemplate } from 'lucide-react'
import { NavLink } from 'react-router'
import { classNames } from '../../lib/classNames'

const navItems = [
  {
    to: '/projects',
    label: '项目管理',
    icon: FolderKanban,
  },
  {
    to: '/appointments',
    label: '预约复查管理',
    icon: CalendarDays,
  },
  {
    to: '/templates',
    label: '表单样板间',
    icon: LayoutTemplate,
  },
]

export default function AppSidebar() {
  return (
    <aside className="w-72 bg-white border-r border-slate-200 p-4 flex flex-col shrink-0">
      <div className="h-16 px-3 flex items-center gap-3 border-b border-slate-100">
        <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold text-lg">
          W
        </div>
        <div>
          <div className="text-base font-bold text-slate-900">惟翎 · EDC</div>
          <div className="text-xs text-slate-400">数据采集系统</div>
        </div>
      </div>

      <nav className="mt-6 space-y-2">
        {navItems.map((item) => {
          const Icon = item.icon
          return (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                classNames(
                  'w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm transition',
                  isActive
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                )
              }
            >
              <Icon className="w-4 h-4" />
              <span>{item.label}</span>
            </NavLink>
          )
        })}
      </nav>

      <div className="mt-auto p-3 rounded-xl bg-slate-50 border border-slate-200">
        <div className="text-xs text-slate-400">当前登录</div>
        <div className="mt-2 flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-sm font-bold">
            PI
          </div>
          <div>
            <div className="text-sm font-medium text-slate-800">Admin</div>
            <div className="text-xs text-slate-400">系统管理员</div>
          </div>
        </div>
      </div>
    </aside>
  )
}
