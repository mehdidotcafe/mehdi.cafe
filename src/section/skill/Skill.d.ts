type Kind = 'language' | 'framework' | 'database' | 'tool' | 'other'

export type Skill = {
  name: string,
  logo: string,
  experience: number,
  color: Color,
  isFilterable?: boolean,
  isVisible?: boolean,
  kind: Kind,
}
