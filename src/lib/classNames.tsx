export function classNames(...list: Array<string | false | null | undefined>) {
  return list.filter(Boolean).join(' ')
}
