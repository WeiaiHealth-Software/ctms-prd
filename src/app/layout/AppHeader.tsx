import { Bell, Settings } from 'lucide-react'
import { useLocation } from 'react-router'

function getTitle(pathname: string) {
  if (pathname.startsWith('/projects/') && pathname.includes('/subjects/')) return '受试者详情'
  if (pathname.startsWith('/projects/')) return '项目详情'
  if (pathname.startsWith('/projects')) return '项目管理'
  if (pathname.startsWith('/appointments')) return '预约复查管理'
  if (pathname.startsWith('/templates/builder')) return '动态表单引擎'
  if (pathname.startsWith('/templates')) return '表单样板间'
  return 'Dashboard'
}

export default function AppHeader() {
  const location = useLocation()

  const title = getTitle(location.pathname)

  return (
    <header className="h-16 bg-white border-b border-slate-200 px-6 flex items-center justify-between shrink-0">
      {/* 左侧：页面标题 */}
      <div className="flex items-center gap-3">
        <h1 className="text-lg font-bold text-slate-900">{title}</h1>
      </div>

      {/* 右侧：个人信息、消息、设置 */}
      <div className="flex items-center gap-4">
        {/* 消息与设置 */}
        <div className="flex items-center gap-1.5 border-r border-slate-200 pr-4">
          <button className="relative p-2 rounded-full hover:bg-slate-100 text-slate-500 transition-colors">
            <Bell className="w-5 h-5" />
            <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
          </button>
          <button className="p-2 rounded-full hover:bg-slate-100 text-slate-500 transition-colors">
            <Settings className="w-5 h-5" />
          </button>
        </div>

        {/* 个人信息 */}
        <div className="flex items-center gap-3 cursor-pointer hover:bg-slate-50 p-1.5 pr-2 rounded-lg transition-colors">
          <div className="text-right hidden sm:block">
            <div className="text-sm font-medium text-slate-700">管理员</div>
            <div className="text-xs text-slate-400">admin@crs.com</div>
          </div>
          <div className="w-9 h-9 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-bold shadow-sm">
            AD
          </div>
        </div>
      </div>
    </header>
  )
}
