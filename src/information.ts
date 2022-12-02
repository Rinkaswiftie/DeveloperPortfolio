//todo: Splash Screen
const splashScreen = {
  enabled: true,
  duration: 2000
};

const introduction = {
  username: 'Rinka Viswathirupathi',
  title: 'I\'m Rinka.',
  welcomeAvatar: "../../assets/images/laptopWave.png",
  subTitle:
    `I\'m a passionate software developer 👩‍💻 from Chennai, a city in the southern part of India.
    Getting to be creative 🛠️ and trying something new is why I ❤️ what I do.
    \nLets connect to discuss a project or just want to say hi? My Inbox is open for all.`
  ,
  resumeLink:
    'https://drive.google.com/',
  display: true
};


const socialMediaLinks = {
  github: 'https://github.com/Rinkaswiftie',
  linkedin: 'https://www.linkedin.com/in/rinka-v',
  gmail: '',
  gitlab: '',
  medium: '',
  stackoverflow: '',
  display: true
};


const skillsSection = {
  title: 'About Me',
  skillsAvatar: "../../assets/images/studying.png",
  subTitle: 'A passionate developer who loves exploring different technologies',
  skills: [
    '⚡ Ever since I was a kid I\'ve had a flair for technology and computers.',
    '⚡ I was first introduced to programming in my high school and It was love at first sight.',
    '⚡ Data structures and algorithms are my favorite areas in tech.',
    '⚡ I\'m working towards becoming a well rounded application developer who comes up with creative solutions.',
    '⚡ Fixing bugs, solving tough hard problems, watching actual users using something I built are a few reasons why i love being a developer.',
    '⚡ I have a bachelors degree in Information technology.',
    '⚡ When I\'m not working, I love listening to music and spending time in nature. '
  ],

  /* Make Sure to add badge links from https://github.com/alexandresanlim/Badges4-README.md-Profile */
  softwareSkillsHeader:'Technologies I\'ve dipped my toes in...',
  softwareSkillsImage: "../../assets/images/reading.png",
  softwareSkills: [
    {
      skillName: 'Java',
      badgeURL : 'https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=java&logoColor=white'
    },
    {
      skillName: 'scala',
      badgeURL : 'https://img.shields.io/badge/Scala-DC322F?style=for-the-badge&logo=scala&logoColor=white'
    },
    {
      skillName: 'html-5',
      badgeURL : 'https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white'
    },
    {
      skillName: 'css3',
      badgeURL : 'https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white'
    },
    {
      skillName: 'LESS',
      badgeURL : 'https://img.shields.io/badge/less-2B4C80?style=for-the-badge&logo=less&logoColor=white'
    },
    {
      skillName: 'JavaScript',
      badgeURL : 'https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E'
    },
    {
      skillName: 'TypeScript',
      badgeURL : 'https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white'
    },
    {
      skillName: 'Angular',
      badgeURL : 'https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white'
    },
    {
      skillName: 'Apache Spark',
      badgeURL : 'https://img.shields.io/badge/Apache_Spark-FFFFFF?style=for-the-badge&logo=apachespark&logoColor=#E35A16'
    }
    ,
    {
      skillName: 'Databricks',
      badgeURL : 'https://img.shields.io/badge/Databricks-FF3621?style=for-the-badge&logo=Databricks&logoColor=white'
    },
    {
      skillName: 'Node.js',
      badgeURL : 'https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white'
    },
    {
      skillName: 'Express.js',
      badgeURL : 'https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white'
    },
    {
      skillName: 'React.js',
      badgeURL : 'https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB'
    },
    {
      skillName: 'Cassandra',
      badgeURL : 'https://img.shields.io/badge/Cassandra-1287B1?style=for-the-badge&logo=apache%20cassandra&logoColor=white'
    },
    {
      skillName: 'Postgres',
      badgeURL : 'https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white'
    },
    {
      skillName: 'MongoDB',
      badgeURL : 'https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white'
    },
    {
      skillName: 'Git',
      badgeURL : 'https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white'
    },
    {
      skillName: 'SpringBoot',
      badgeURL : 'https://img.shields.io/badge/Spring_Boot-F2F4F9?style=for-the-badge&logo=spring-boot'
    },
    {
      skillName: 'GraphQL',
      badgeURL : 'https://img.shields.io/badge/GraphQl-E10098?style=for-the-badge&logo=graphql&logoColor=white'
    },
    {
      skillName: 'swift',
      badgeURL : 'https://img.shields.io/badge/Swift-FA7343?style=for-the-badge&logo=swift&logoColor=white'
    },
    {
      skillName: '.Net Core',
      badgeURL : 'https://img.shields.io/badge/.NET-512BD4?style=for-the-badge&logo=dotnet&logoColor=white'
    },
    {
      skillName: 'Redis',
      badgeURL : 'https://img.shields.io/badge/redis-%23DD0031.svg?&style=for-the-badge&logo=redis&logoColor=white'
    },
    {
      skillName: 'Swagger',
      badgeURL : 'https://img.shields.io/badge/Swagger-85EA2D?style=for-the-badge&logo=Swagger&logoColor=white'
    }
  ],
  display: true
};

//include education, work expericence and others
const myJourney = {
  display: true,
  experience: [
    {
      role: 'Air bnb',
      short_note: 'Software developer',
      company: 'Meenakshi Sundararajan Engineering College',
      companyLogo: "../../assets/images/msec.jpg",
      date: 'Sep 2017 – Jun 2021',
      desc: '',
      keyNotes: [
        'Favorite Subject: Data structures and different Algorithms.',
        'Anna University - Rank holder - 22.',
        'Served as the class representative and coordinated various activities for my batch for four years',
        'Coordinated Astra - 2K19 National symposium conducted by department.'
      ]
    },
    {
      role: 'Trainee Digital Analyst',
      company: 'Propel Technology Group',
      short_note: '(formerly Acies Global)',
      companyLogo: "../../assets/images/propel.png",
      date: 'Sep 2020 – Jun 2021',
      desc: '',
      keyNotes: [
        'Explored Scala, Apache Spark 3 and Apache Cassandra.',
        'Developed a module in an ongoing project which processes large volumes of financial data to compute complex tax calculations.',
        'Understood complex tax calculation requirements and rewrote an existing module and improved processing performance by 50%.'
      ]
    },
    {
      role: 'Senior Developer',
      company: 'Propel Technology Group',
      short_note: '(formerly Acies Global)',
      companyLogo: "../../assets/images/propel.png",
      date: 'Jul 2021 – Present',
      desc: '',
      keyNotes: [
        'Played an active part in the full stack development of two major features in a US Tax Calculation project.',
        'Conducted various R&D activities to improve performance of existing modules in the project.',
        'Explored GraphQL using Spring Boot as a part of R&d Activities',
        'Mentored and trained two newbies into the project.'
      ]
    }
  ]
};

/* Your Open Source Section to View Your GitHub Pinned Projects
To know how to get GitHub key look at readme.md */
const openSource = {
  showGithubProfile: 'true', // Set true or false to show Contact profile using GitHub, defaults to true
  display: true // Set false to hide this section, defaults to true
};


// Achievement Section
// Include certificates, talks etc
const achievementSection = {
  title: 'Achievements And Certifications 🏆 ',
  subtitle:
    'Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !',

  achievementsCards: [
    {
      title: 'Radiant Award',
      subtitle:
        'For becoming the superhero of the project',
      image: "../../assets/images/radiant.png",
      imageAlt: 'Radiant Award',
      footerLink: [
        {
          name: 'Award Letter',
          url: 'https://drive.google.com/'
        }
      ]
    },
    {
      title: 'Design and Analysis of Algorithms',
      subtitle:
        'Topper - Top 5% - NPTEL online certification course - Design and analysis of algorithms - IIT Madras',
      image: "../../assets/images/nptel.jpg",
      imageAlt: 'NPTEL certificate',
      footerLink: [
        {
          name: 'View certificate',
          url: 'https://drive.google.com/'
        }
      ]
    },

    {
      title: 'CS50 Course',
      subtitle: 'Completed Online CS50 course from Harvard in 2021',
      image: "../../assets/images/cs50.png",
      imageAlt: 'CS50',
      footerLink: [
        {name: 'Certificate of completion', url:'https://drive.google.com/'}
      ]
    }
  ],
  display: true
};

export {
  introduction,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  myJourney,
  openSource,
  achievementSection
};
