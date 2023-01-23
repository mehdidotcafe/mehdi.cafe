import type { Experience } from '@section/experience/Experience'

const experiences: Experience[] = [
  {
    title: 'Freelancer', start: 2017, end: null, description: 'Ingénieur logiciel passionné et certifié, je suis expert dans le développement d\'applications web et de sites internet (sites à haut volume, intranets, CRMs). Je vous accompagne dans la réalisation de votre projet de sa conception à sa livraison.<br />Étant entrepreneur depuis 2017, j\'ai eu l\'occasion de collaborer avec un grand nombre de clients dont des entreprises du fortune 50 dans leurs transformations digitales.<br />Je porte un vrai intérêt sur les problématiques d\'ergonomie utilisateur, d\'optimisation et de qualité de l\'application dans le respect des bonnes pratiques', logo: 'freelance.png', company: 'freelance',
  },
  {
    title: 'Certifié AWS x4', start: 2022, description: '<a target="_blank" href="https://www.credly.com/badges/be7e5536-9e30-43c2-a198-4367d5f97615/public_url">AWS Certified Solutions Architect – Associate</a><br /><a target="_blank" href="https://www.credly.com/badges/e749a2f6-1fb0-4f6e-a8fb-5db2e02d9181/public_url">AWS Certified SysOps Administrator – Associate</a><br /><a target="_blank" href="https://www.credly.com/badges/a2dc8af6-5098-45a8-8571-68be1e3e2014/public_url">AWS Certified Developer – Associate</a><br /><a target="_blank" href="https://www.credly.com/badges/3f7e4cf4-adec-4b31-9a4d-19e31d12533d/public_url">AWS Certified Cloud Practitioner</a>', logo: 'aws.png', company: 'freelance',
  },
  {
    title: 'TOEIC', start: 2022, description: '970 / 990 <br /><br />  <a target="_blank" href="https://www.etsglobal.org/fr/en/digital-score-report/AF2990DE526BA7ABBAD8E904C93630088612FAFE5CBBFB8C9CBC8F31561462CCNHBITGZ0N0JXTVhOUkN0WHF1ZldhTXhBVHNoZ2lWS2hKQU9rUHJGRERpZyt4V3dp">Certification</a>', logo: 'graduation.png', company: 'freelance',
  },
  {
    title: 'Master en informatique',
    start: 2018,
    end: 2019,
    subtitle: 'Epitech Paris, France',
    description: "Obtention d'un Master en Informatique à l'issue de ma cinquième année à Epitech Paris",
    highlights: [
      {
        content: ['Programmation web avancée', 'Programmation mobile', 'Intelligence artificielle', 'Réalisation de la version Android d\'<a href=\'/work/Agora\'>AGORA</a>, application de mise en relation entre un porteur de projet et un talent pour concrétiser une idée'],
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
    description: "Année d'ouverture au monde professionnel à Epitech Barcelone.",
    highlights: [
      {
        content: ['Marketing', 'Finance', 'Gestion de projet', 'Réalisation d\'un projet de fin d\'année visant à optimiser le trafic urbain via des sensors placés sur des feux rouges'],
      },
    ],
    logo: 'graduation.png',
    company: 'school',
  },
  {
    title: 'Bachelor en informatique',
    start: 2014,
    end: 2017,
    subtitle: 'Epitech Marseille, France',
    description: 'Epitech est une école d\'informatique.<br />Sa pédagogie alternative par l\'immersion et centré autour de projets m\'a permis d\'être autonome et d\'apprendre à apprendre afin d\'évoluer en permanence dans un secteur qui change en permanence',
    highlights: [
      {
        title: 'Troisième année',
        content: ['Réalisation de logiciels (applications, jeux vidéo) avancés en C, C++', 'Réseau (socket, VOIP)', 'Threading', 'Inteligence artificielle', 'Architecture logicielle', 'Programmation web', 'Programmation fonctionnelle en OCAML'],
      },
      {
        title: 'Deuxième année',
        content: ['Réalisation de logiciels (Algorithmes, jeux vidéo) en C et C++', 'Threading', 'Réseau', 'Interfaces graphiques', 'Architecture logicielle'],
      },
      {
        title: 'Première année',
        content: ['Réalisation de projets en ligne de commande en C', 'Algorithmique, complexité algorithmique', 'Structures de données (listes, graphs, AST, B-tree ..)'],
      },

    ],
    logo: 'graduation.png',
    company: 'school',
  },
  {
    title: 'Lycée Thiers',
    start: 2014,
    subtitle: 'Marseille, France',
    description: 'Baccalauréat Scientifique',
    logo: 'graduation.png',
  },
]

export default experiences
