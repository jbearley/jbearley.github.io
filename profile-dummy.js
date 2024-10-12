const profileData = {
  title: 'Profile',
  name: 'Jacob',
  sub_title: 'College Student',
  about: {
    intro: `Hi I'm Jacob and this is my website`,
    contact: {
      email: 'jacobearley01.com',
      phone: '+1-3129526833',
      address: 'Des Moines, IA'
    }
  },

  
  
  education: [
    {
      school: 'Drake University',
      duration: '2020 - 2024',
      courses: 'Computer Organization and Assembly Language, Human-Computer Interaction, Programming Languages, Software Engineering, The Theory of Computation, Vector Calculus'

    },
  ],
  skills: [
    {
      category: 'Language/Framework Sklls',
      topics: ['JavaScript', 'Python', 'Ruby', 'HTML/CSS', 'Node.js']
    },
    {
      category: 'Soft SKills',
      topics: [
        'Strong Communication', 'Support skills', 'Experience in a team'
      ]
    },
    {
      category: 'Productivity Skills',
      topics: ['Git', 'Microsoft Office', 'Node.js', 'Postgres']
    }
  ],
  projects: [
    {
      title: 'Smily Face Web Extension',
      duration: 'Dec - Dec 2023',
      link: 'https://github.com/jbearley/webExtension',
      desc: `- Developed an in-depth understanding surrounding JSON and its use in Browser Extensions.\n
      - Used HTML, CSS, and Javascript to create a functional multi-platform extension to create an image on any compatible webpage.\n
      `
    },
    {
      title: 'Pokemon Team Builder',
      duration: 'Dec - Dec 2023',
      link: 'https://github.com/jbearley/pokemon',
      desc: `-Inspired by the popular TV series and trading card game, this platform allows the user to select from over 500 types of pokemon to create a personalized team.\n
      -Usage of PostgreSQL, a database management system, for RESTful backend API services to store API pulls for the pokemon images, statistics, and accessory details.\n
      -Usage of Unit Test to optimize performance of code and prevent failure in the pipeline.\n
      `
    },
    {
      title: '2d Engine',
      duration: 'Dec - Dec 2023',
      link: 'https://github.com/jbearley/2d_engine',
      desc: `-Individually designed computer generated objects and environment using Ruby in order to simulate similar conditions of air resistance and projectiles launched from a constant angle.\n
      -Gained a better ability to implement Newtonian Physics in a Euclidean space using variables such as Gravity, Velocity, Acceleration required to demonstrate realistic motion.\n
      `
    },
    {
      title: 'Music Rec',
      duration: 'Dec - Dec 2023',
      link: 'https://github.com/jbearley/music_rec',
      desc: `-Collaborated with teammates to develop a Ruby program that recommends 5 songs to a user based on the genre selected and the randomization of the 25 song pool selected.\n
      -Developed an engine using a collaborative filtering algorithm.\n 
      `
    }
  ],
  experiences: [
    {
      organization: 'Whodat Team',
      title: `Pokemon Team Builder`,
      date: '2022 - 2023',
      desc: 'Myself and 3 of my peers set out to build a product that captured the fun behind one of our favorite childhood games Pokemon.'
    
    }
  ],
  certifications: [
    {
      desc: `BS Computer Science minor Mathematics (Graduation 2024)`,
      date: 'May 2024'
    }
  ],
  events: []
};