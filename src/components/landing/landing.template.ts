const landingTemplate: { name: string; props: any }[] = [
  {
    name: 'HeroView',
    props: {},
  },
  {
    name: 'WelcomeView',
    props: {},
  },
  {
    name: 'StatsView',
    props: {
      stats: [
        {
          category: 'attendees',
          stat: '500+',
        },
        {
          category: 'first time hackers',
          stat: '47%',
        },
        {
          category: 'projects',
          stat: '80+',
        },
        {
          category: '$ in prizes',
          stat: '10,000+',
        },
      ],
    },
  },
];

export default landingTemplate;