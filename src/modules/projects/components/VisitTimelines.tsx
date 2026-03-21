import { classNames } from '../../../lib/classNames'
import { statusClassMap } from '../../../lib/statusMap'

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
    <div className="space-y-4">
      {visits.map((visit) => {
        const active = selectedVisitId === visit.id

        return (
          <button
            key={visit.id}
            onClick={() => onSelect(visit.id)}
            className={classNames(
              'w-full text-left rounded-xl border p-4 transition',
              active ? 'border-blue-300 bg-blue-50' : 'border-slate-200 hover:border-slate-300 bg-white'
            )}
          >
            <div className="flex items-center justify-between gap-2">
              <div className="font-medium text-slate-800">{visit.name}</div>
              <span className={classNames('px-2 py-0.5 rounded-full text-xs', statusClassMap[visit.status])}>
                {visit.status}
              </span>
            </div>
            <div className="mt-2 text-xs text-slate-500">计划日期：{visit.planDate}</div>
            <div className="mt-1 text-xs text-slate-400">实际日期：{visit.actualDate || '--'}</div>
          </button>
        )
      })}
    </div>
  )
}
