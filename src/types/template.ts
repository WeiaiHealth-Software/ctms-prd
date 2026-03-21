export type Template = {
  id: string
  name: string
  type: string
  version: string
  fields: number
  updatedAt: string
  status: string
  sections: { title: string; items: string[] }[]
}
