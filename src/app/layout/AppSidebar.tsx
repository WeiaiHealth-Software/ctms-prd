import { useState } from 'react'
import { CalendarDays, FolderKanban, LayoutTemplate, RefreshCw, ChevronLeft, ChevronRight, Activity, ChevronDown } from 'lucide-react'
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
  const [isCollapsed, setIsCollapsed] = useState(false)

  return (
    <aside 
      className={classNames(
        "bg-white border-r border-slate-200 flex flex-col shrink-0 transition-all duration-300 relative",
        isCollapsed ? "w-20" : "w-64"
      )}
    >
      {/* 顶部 Logo 与标题 */}
      <div className="h-16 flex items-center px-4 gap-3 border-b border-slate-100 shrink-0">
        <div className="w-8 h-8 rounded bg-blue-600 text-white flex items-center justify-center shrink-0">
          <Activity className="w-5 h-5" />
        </div>
        {!isCollapsed && (
          <span className="font-bold text-slate-900 truncate text-base">
            惟翎 · 科研管理系统
          </span>
        )}
      </div>

      {/* 中间 Tab 导航 */}
      <nav className="flex-1 overflow-y-auto py-4 px-3 space-y-1">
        {/* 这里模拟一个一级菜单的标题，如果是展开状态 */}
        {!isCollapsed && (
          <div className="px-3 py-2 text-xs font-semibold text-slate-400 mb-1 flex items-center justify-between">
            <span>EDC 电子数据采集</span>
            <ChevronDown className="w-4 h-4" />
          </div>
        )}
        
        {navItems.map((item) => {
          const Icon = item.icon
          return (
            <NavLink
              key={item.to}
              to={item.to}
              title={isCollapsed ? item.label : undefined}
              className={({ isActive }) =>
                classNames(
                  'w-full flex items-center rounded-lg transition-colors duration-200',
                  isCollapsed ? 'justify-center p-3' : 'px-3 py-2.5 gap-3 text-sm',
                  isActive
                    ? 'bg-blue-50 text-blue-600 font-semibold'
                    : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                )
              }
            >
              <Icon className="w-5 h-5 shrink-0" />
              {!isCollapsed && <span className="truncate">{item.label}</span>}
            </NavLink>
          )
        })}
      </nav>

      {/* 底部固定区域：刷新按钮、版本号、折叠按钮 */}
      <div className="h-14 border-t border-slate-200 flex items-center justify-between px-4 shrink-0 text-slate-400">
        {!isCollapsed ? (
          <>
            <div className="flex flex-col text-xs">
              <span className="font-medium text-slate-500">v1.0.0</span>
              <span className="text-slate-400 scale-90 origin-left">commitid</span>
            </div>
            <div className="flex items-center gap-1">
              <button 
                className="p-1.5 hover:bg-slate-100 rounded-md transition-colors"
                title="刷新"
                onClick={() => window.location.reload()}
              >
                <RefreshCw className="w-4 h-4" />
              </button>
              <button 
                className="p-1.5 hover:bg-slate-100 rounded-md transition-colors"
                onClick={() => setIsCollapsed(true)}
                title="收起侧边栏"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
            </div>
          </>
        ) : (
          <div className="w-full flex flex-col items-center gap-3">
            <button 
              className="p-1.5 hover:bg-slate-100 rounded-md transition-colors"
              onClick={() => setIsCollapsed(false)}
              title="展开侧边栏"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </aside>
  )
}
