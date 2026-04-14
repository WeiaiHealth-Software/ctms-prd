import { classNames } from '../../../lib/classNames'

export type VisitItem = {
  id: string
  name: string
  planDate: string
  actualDate?: string
  status: string
}

type VisitTimelineProps = {
  visits: VisitItem[]
  selectedVisitId: string
  onSelect: (visitId: string) => void
}

export default function VisitTimeline({
  visits,
  selectedVisitId,
  onSelect,
}: VisitTimelineProps) {
  return (
    <div className="relative pl-3 pb-4">
      {/* 垂直参考线 */}
      <div className="absolute top-4 bottom-4 left-[1.25rem] w-[2px] bg-slate-200"></div>

      <div className="space-y-6 relative">
        {visits.map((visit) => {
          const active = selectedVisitId === visit.id

          return (
            <button
              key={visit.id}
              onClick={() => onSelect(visit.id)}
              className="flex items-center gap-4 w-full text-left group"
            >
              <div className="relative flex items-center justify-center w-4 h-4 z-10 bg-white">
                {active ? (
                  <div className="w-4 h-4 rounded-full border-2 border-blue-600 bg-white flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                  </div>
                ) : (
                  <div className="w-3.5 h-3.5 rounded-full border-2 border-slate-300 bg-white group-hover:border-blue-400"></div>
                )}
              </div>
              <div className={classNames(
                'font-medium text-sm transition flex-1',
                active ? 'text-blue-600' : 'text-slate-500 group-hover:text-slate-800'
              )}>
                {visit.name}
              </div>
            </button>
          )
        })}
      </div>
    </div>
  )
}
