import type { Experience } from '@section/experience/Experience'

const experiences: Experience[] = [
  {
    title: 'Freelancer', start: 2017, end: null, description: 'Certified and passionate software engineer, I am expert in the development of web applications and websites (high volume sites, intranets, CRMs). I help you in the realization of your project from its conception to its delivery.<br />Being an entrepreneur since 2017, I had the opportunity to collaborate with a large number of clients including fortune 50 companies in their digital transformations.<br />I have a real interest in user ergonomics, optimization and quality of the application in accordance with good practices.', logo: 'freelance.png', company: 'freelance',
  },
  {
    title: 'AWS Certified x4', start: 2022, description: '<a target="_blank" href="https://www.credly.com/badges/be7e5536-9e30-43c2-a198-4367d5f97615/public_url">AWS Certified Solutions Architect – Associate</a><br /><a target="_blank" href="https://www.credly.com/badges/e749a2f6-1fb0-4f6e-a8fb-5db2e02d9181/public_url">AWS Certified SysOps Administrator – Associate</a><br /><a target="_blank" href="https://www.credly.com/badges/a2dc8af6-5098-45a8-8571-68be1e3e2014/public_url">AWS Certified Developer – Associate</a><br /><a target="_blank" href="https://www.credly.com/badges/3f7e4cf4-adec-4b31-9a4d-19e31d12533d/public_url">AWS Certified Cloud Practitioner</a>', logo: 'aws.png', company: 'freelance',
  },
  {
    title: 'TOEIC', start: 2022, description: '970 / 990 <br /><br />  <a target="_blank" href="https://www.etsglobal.org/fr/en/digital-score-report/AF2990DE526BA7ABBAD8E904C93630088612FAFE5CBBFB8C9CBC8F31561462CCNHBITGZ0N0JXTVhOUkN0WHF1ZldhTXhBVHNoZ2lWS2hKQU9rUHJGRERpZyt4V3dp">Certification</a>', logo: 'graduation.png', company: 'freelance',
  },
  {
    title: 'Computer science Master\'s degree',
    start: 2018,
    end: 2019,
    subtitle: 'Epitech Paris, France',
    description: "Master's degree in Computer Science at the end of my fifth year at Epitech Paris, a French computer science school",
    highlights: [
      {
        content: ['Advanced web programming', 'Mobile programming', 'AI Programming', 'Development of the Android version of <a href=\'/work/Agora\'>AGORA</a>, an application for connecting a project leader and a talent to make an idea a reality'],
      },
    ],
    logo: 'graduation.png',
    company: 'school',
  },
  {
    title: 'Epitech Barcelona',
    start: 2017,
    end: 2018,
    subtitle: 'Barcelone, Espagne',
    description: 'Year of opening to the professional world at Epitech Barcelona',
    highlights: [
      {
        content: ['Marketing', 'Finance', 'Project management', 'Development of an end-of-year project aimed at optimizing urban traffic via sensors placed on red lights'],
      },
    ],
    logo: 'graduation.png',
    company: 'school',
  },
  {
    title: 'Computer science Bachelor\'s degree',
    start: 2014,
    end: 2017,
    subtitle: 'Epitech Marseille, France',
    description: 'Epitech is a French computer science school<br />Its alternative pedagogy through immersion and centered around projects has allowed me to be autonomous and to learn to learn in order to constantly evolve in a constantly changing industry',
    highlights: [
      {
        title: 'Third year',
        content: ['Development of advanced software (applications, video games) in C, C++', 'Networking (socket, VOIP)', 'Threading', 'AI Programming', 'Software architecture', 'Web programming', 'Functional programming using OCAML'],
      },
      {
        title: 'Second year',
        content: ['Development of software (algorithms, video games) in C, C++', 'Threading', 'Networking (socket)', 'GUI', 'Software architecture'],
      },
      {
        title: 'First year',
        content: ['Development of command line projects in C', 'Algorithms, algorithmic complexity', 'Data structures (lists, graphs, AST, B-tree ..)'],
      },

    ],
    logo: 'graduation.png',
    company: 'school',
  },
]

export default experiences
