export type Experience = {
  title: string
  subtitle?: string
  start: number
  // If endDate is null, it means the experience is still ongoing
  // If endDate is undefined, the experience will not be shown as range
  end?: number | null
  description: string
  logo: string
  projectUrl?: string
  company?: string
  isVisible?: boolean
}
