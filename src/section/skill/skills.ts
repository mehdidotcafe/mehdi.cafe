import type { Skill } from '@section/skill/Skill'

const skills: Skill[] = [
  {
    name: 'Web', logo: 'web', color: '#29154e', experience: 8, kind: 'other', logoType: 'svg',
  },
  {
    name: 'Android', logo: 'android', color: '#29154e', experience: 1, kind: 'other', isVisible: false,
  },
  {
    name: 'iOS', logo: 'ios', color: '#29154e', experience: 1, kind: 'other', isVisible: false,
  },

  {
    name: 'Javascript', logo: 'javascript', color: '#efdb5f', experience: 8, kind: 'language', logoType: 'svg',
  },
  {
    name: 'Typescript', logo: 'typescript', color: '#2d79c7', experience: 6, kind: 'language', logoType: 'svg',
  },
  {
    name: 'NodeJS', logo: 'node', color: '#94b84d', experience: 6, kind: 'framework', logoType: 'svg',
  },
  {
    name: 'Nest', logo: 'nest', color: '#e0234e', experience: 1, kind: 'framework', logoType: 'svg',
  },
  {
    name: 'React', logo: 'react', color: '#61dafb', experience: 6, kind: 'framework', logoType: 'svg',
  },
  {
    name: 'Next', logo: 'next', color: '#000000', experience: 1, kind: 'framework', logoType: 'svg',
  },
  {
    name: 'Angular', logo: 'angular', color: '#c30e2e', experience: 3, kind: 'framework', isVisible: false, logoType: 'svg',
  },
  {
    name: 'jQuery', logo: 'jquery', color: '#0865a6', experience: 3, isFilterable: false, isVisible: false, kind: 'framework',
  },

  {
    name: 'PHP', logo: 'php', color: '#4d588e', experience: 3, kind: 'language', logoType: 'svg',
  },
  {
    name: 'Laravel', logo: 'laravel', color: '#fb503b', experience: 2, kind: 'framework', logoType: 'svg',
  },
  {
    name: 'Symfony', logo: 'symfony', color: '#000000', experience: 0.5, isFilterable: false, isVisible: false, kind: 'framework',
  },

  {
    name: 'Redis', logo: 'redis', color: '#FFFFFF', experience: 3, isVisible: true, kind: 'database', logoType: 'svg',
  },
  {
    name: 'mySQL', logo: 'mysql', color: '#00546b', experience: 6, isVisible: true, kind: 'database', logoType: 'svg',
  },
  {
    name: 'Postgresql', logo: 'postgresql', color: '#336791', experience: 1, isVisible: false, kind: 'database', logoType: 'svg',
  },
  {
    name: 'MongoDB', logo: 'mongo', color: '#69b23f', experience: 1, isVisible: false, kind: 'database', logoType: 'svg',
  },
  {
    name: 'neo4j', logo: 'neo4j', color: '#ffffff', experience: 1, isVisible: false, kind: 'database',
  },

  {
    name: 'Java', logo: 'java', color: '#096eb6', experience: 0.5, isFilterable: false, isVisible: false, kind: 'language',
  },
  {
    name: 'Kotlin', logo: 'kotlin', color: '#4680de', experience: 1, isFilterable: false, isVisible: false, kind: 'language',
  },
  {
    name: 'Swift', logo: 'swift', color: '#f36938', experience: 0.5, isFilterable: false, isVisible: false, kind: 'language',
  },
  {
    name: 'C', logo: 'c', color: '#7f8b99', experience: 3, isFilterable: false, kind: 'language', logoType: 'svg',
  },
  {
    name: 'C++', logo: 'c++', color: '#004482', experience: 3, isFilterable: false, kind: 'language', logoType: 'svg',
  },
  {
    name: 'Haskell', logo: 'haskell', color: '#5e5086', experience: 1, isFilterable: false, kind: 'language', logoType: 'svg',
  },
  {
    name: 'Storybook', logo: 'storybook', color: '#fe4785', experience: 1, isFilterable: false, isVisible: false, kind: 'tool',
  },
  {
    name: 'Eslint', logo: 'eslint', color: '#dedcff', experience: 4, isFilterable: false, isVisible: false, kind: 'tool',
  },
  {
    name: 'Jest', logo: 'jest', color: '#ffffff', experience: 3, isFilterable: false, isVisible: false, kind: 'tool',
  },
  {
    name: 'PHPUnit', logo: 'phpunit', color: '#b5b7fe', experience: 1, isFilterable: false, isVisible: false, kind: 'tool',
  },

  {
    name: 'Corona', logo: 'corona', color: '#f47e20', experience: 1, isFilterable: false, isVisible: false, kind: 'framework',
  },

  {
    name: 'Git', logo: 'git', color: '#f05033', experience: 8, isFilterable: false, isVisible: false, kind: 'tool',
  },

  {
    name: 'Chrome', logo: 'chrome', color: '#49ae48', experience: 0.5, isFilterable: false, isVisible: false, kind: 'other',
  },
  {
    name: 'Electron', logo: 'electron', color: '#6bdefb', experience: 0.5, isFilterable: false, isVisible: false, kind: 'other',
  },
  {
    name: 'PWA', logo: 'PWA', color: '#5a0fc8', experience: 0.5, isFilterable: false, isVisible: false, kind: 'other',
  },

  {
    name: 'Lua', logo: 'lua', color: '#000080', experience: 1, isFilterable: false, kind: 'language', logoType: 'svg',
  },

  {
    name: 'AWS', logo: 'aws', color: '#082739', experience: 2, kind: 'tool', logoType: 'svg',
  },
  {
    name: 'GCP', logo: 'gcp', color: '#FFFFFF', experience: 1, kind: 'tool', logoType: 'svg', isVisible: true, isFilterable: true,
  },

  {
    name: 'Heroku', logo: 'heroku', color: '#6663a2', experience: 1, kind: 'tool', logoType: 'svg', isVisible: false,
  },

  {
    name: 'Terraform', logo: 'terraform', color: '#ffffff', experience: 1, kind: 'tool', isFilterable: true, logoType: 'svg',
  },

  {
    name: 'Github', logo: 'github', color: '#ffffff', experience: 6, isFilterable: false, isVisible: false, kind: 'tool',
  },
  {
    name: 'Gitlab', logo: 'gitlab', color: '#ffffff', experience: 3, isFilterable: false, isVisible: false, kind: 'tool',
  },
  {
    name: 'Jenkins', logo: 'jenkins', color: '#ffffff', experience: 1, isFilterable: false, isVisible: false, kind: 'tool',
  },
  {
    name: 'Docker', logo: 'docker', color: '#ffffff', experience: 1, isFilterable: false, isVisible: false, kind: 'tool',
  },

  {
    name: 'Datadog', logo: 'datadog', color: '#ffffff', experience: 1, kind: 'tool', isVisible: false, isFilterable: false,
  },
]

export default skills
