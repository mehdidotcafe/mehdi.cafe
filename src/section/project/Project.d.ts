import { Color } from '@theme/theme'

export type Project = {
  name: string,
  logo: string,
  logoType?: string,
  color: Color,
  skills: string[],
  companies: string[],
  url?: string,
  images: string[],
  description_project: string,
  description_mission?: string[],
  recommendations: number[],
  start: string,
  end: string,
  isVisible?: boolean,
}
