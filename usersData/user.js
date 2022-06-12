const user = {
  name: 'Serhii Kryvenko',
  objective: 'My objective is to obtain a Frontend developer position. Where my technical and communication skills will contribute to the success of your department and my personal growth. Interested in becoming a professional in IT-world.',
  profilePhoto: {
    src: "/images/profile.jpg",
  },
  education: [
    {
      school: 'Gromcode online University (full time) ',
      year: '2021 - 2022',
    },
    {
      school: "'Global TESOL college' Canada ",
      year: '2017',
    },
    {
      school: "'National Transport University' Kiev ",
      year: '2010 - 2015',
    },                     
  ],
  education_page: {
    mainPhoto: {
      name: 'education_main.png',
      src: "/images/secondary_pic.webp",
    },
    objective: 'In the shortest term I want to start learning Java. My plan is to become a fullstack developer in 1-2 years and learn blockchaine technologies after to be a part of WEB 3.0',
  },
  experience: [
    {
      position: 'Front-end developer',
      company: 'Softemy',
      workPeriod: 'October 2021 - Present',
      responsibilities: [
        'Writing/debugging/improving code on the daily basis',
        'Moving a legacy project from JQuery to the modern stack with React',
        'Teamwork in a scrum environment, we shared tasks between group members and implemented them in several branches on Github',
        'Completing tasks with the usage of React/Redux',
        'Code review, refactoring',
        'Conducting client demo',
        'Responsive and multi-device layouts',
        'Following Scrum methodology',
      ],
      usedTechologies: 'React, Redux, Next.js, HTML, CSS, Sass, BEM, REST API, React-router-dom, Webpack, Babel, Trello, Eslint, Slack, Figma, VSCode, GitHub',
    }
  ],
  experience_page: {
    mainPhoto: {
      name: 'experiense_main.png',
      src: '/images/experiense_main.gif',
    },
    objective: 'I\'ve gained great live experience by living in different countries. I have 1+ years of experience in Front-end and waiting to get even more in your company!',
  },
  CV: 'https://docs.google.com/document/d/17K-lX9M1hY1Wzbnh32mCWglPe17Ginx_/edit?usp=sharing&ouid=114415959102331654958&rtpof=true&sd=true',
  skills: [
    'JavaScript (ES6+)',
    'React (Router, hooks, HOC etc), Redux, Next.js',
    'Testing Framework by Jest, ESLint, Prettier',
    'HTML5 / CSS3, Sass',
    'BEM Methodology, Responsive Design & Multi-device layouts',                                
    'HTTP protocol, REST API',
    'Tools: VSCode, Git, npm, Babel, Webpack',
  ],
  skills_page: {
    mainPhoto: {
      name: 'skills_main.png',
      src: '/images/skills_main.gif',
    },
    objective: 'I\'m eager to improve my skills in Front-end development and to learn more from the best programmers in IT world. I think there is no limit of things to learn.',
  },
  portfolio: [
    {
      title: 'Airport on React-Redux Source Code ',
      link: 'https://github.com/MadWolfInTheHub/Airport_board',
      description: 'flights search clone of https://iev.aero/ with real list of flights received from this server.',
       
    },
    {
      title: 'Airport on React-Redux App ',
      link: 'https://glowing-naiad-e7dc88.netlify.app/',
      description: '',
      image: {
        src: "/images/airport_app.png",
        alt: 'airport app',
      }
    },
    {
      title: 'Calendar on React Source Code ',
      link: 'https://github.com/MadWolfInTheHub/Calendar-react',
      description: 'clone of google-calendar. You can create/edit/delete events and this information will be saved on server',
       
    },
    {
      title: 'Calendar on React App ',
      link: 'https://mellow-hummingbird-13d60b.netlify.app/',
      description: '',
      image: {
        src: "/images/calandar_on_react.png",
        alt: 'Calendar on React App',
      }
    },
    {
      title: 'Website layout Source Code ',
      link: 'https://github.com/MadWolfInTheHub/Website-layout',
      description: 'layout by Figma template. Responsive and multi-device',
       
    },
    {
      title: 'Website layout ',
      link: 'https://madwolfinthehub.github.io/Website-layout/',
      description: '',
      image: {
        src: "/images/website_layout.png",
        alt: 'website_layout',
      }
    },
  ],
  contactInfo: [
    {
      contactType: 'Facebook',
      link: 'https://www.facebook.com/sergey.krivenko.56',
      icon: 'fa-brands fa-facebook-square',
    },
    {
      contactType: 'Linkedin',
      link: 'https://www.linkedin.com/in/serhii-kryvenko-b6099a74/',
      icon: 'fa-brands fa-linkedin',
    },
    {
      contactType: 'Email',
      link: 'mailto:krivenko.serhii@icloud.com',
      icon: 'fa-solid fa-envelope',
    },
    {
      contactType: 'Phone number',
      link: 'tel:+8615698325581',
      icon: 'fa-solid fa-square-phone',
    },
  ]
}

export default user;