export const jobs = [
  {
    id: 1,
    date: { from: '2017-07-01', to: null },
    title: 'VP Software Developer (UI)',
    company: 'Bank of America, Merrill Lynch',
    location: 'NYC, NY',
    contentHtml: `
    <ul>
      <li>Lead by example a team of UI developers</li>
      <li>Migrated the legacy AngularJS codebase to React JS (utilized Hooks and Context API) in the OpenFin container</li>
      <li>Integrated TanStack (React) Query and Zustand to improve performance and simplify state management</li>
      <li>Implemented “No-Code” Form Builder, utilizing Formik and Yup Schema</li>
      <li>Integrated Authentication layer with OAuth2, OpenID Connect and JSON Web Tokens</li>
      <li>Implemented data driven cross-business applications using AngularJS, Twitter Bootstrap, and Kendo UI</li>
      <li>Performed code reorganization and cleanup of the UI codebase: split the implementation into functional components,
      followed the latest Angular patterns in the legacy AngularJS implementation to prepare for the transition to the latest version
      of the framework, modernized the UI setup by integrating the NPM and Webpack, as well as JEST</li>
      <li>Prototyped the solutions and worked on the Proof of Concepts</li>
      <li>Hosted daily scrum meetings with the UI team</li>
      <li>Interviewed candidates for the UI positions for multiple teams</li>
    </ul>`,
  },
  {
    id: 2,
    date: { from: '2015-12-01', to: '2017-06-01' },
    title: 'Senior Software Developer (UI)',
    company: 'Sailthru',
    location: 'NYC, NY',
    contentHtml: `
    <ul>
      <li>Implemented new (Angular, React) and enhanced existing (PHP) web pages/applications</li>
      <li>Developed a ‘Living Style-guide’ based on custom Twitter Bootstrap theme and Fabricator site generator</li>
      <li>Participated in reorganization of a legacy JavaScript codebase</li>
      <li>Performed daily standup meetings and code reviews of other UI developers</li>
    </ul>`,
  },
  {
    id: 3,
    date: { from: '2014-09-01', to: '2015-11-01' },
    title: 'Associate Applications Developer (UI)',
    company: 'JP Morgan Chase',
    location: 'NYC, NY',
    contentHtml: `
    <ul>
      <li>Responsible for Client Side development of financial web applications</li>
      <li>Participated in development of internal and client facing applications, utilizing MVC and MVVM patterns of Ext JS</li>
      <li>Used HTML5, CSS3, Twitter Bootstrap, jQuery, jQuery UI, HighCharts and other client-side libraries and frameworks</li>
    </ul>`,
  },
  {
    id: 4,
    date: { from: '2013-10-01', to: '2014-08-01' },
    title: 'Senior Web Developer',
    company: 'MTV Networks (Social Media group)',
    location: 'NYC, NY',
    contentHtml: `
    <ul>
      <li>Responsible for building cutting-edge front-end web technologies that implement a high-quality user experience, utilizing
      HTML5, CSS3, LESS and JS</li>
      <li>Worked closely with Product Developers to build prototypes of the Social Media widgets, for the family of Viacom products:
      MTV, VH1, Comedy Central, CMT, Nickelodeon, Logo, Game Trailers, and others</li>
      <li>Implemented Social Media widgets to support responsive transformations</li>
      <li>Implemented a style guide, based on HTML5, CSS3 and LESS preprocessor</li>
    </ul>`,
  },
  {
    id: 5,
    date: { from: '2010-05-01', to: '2013-10-01' },
    title: 'Web Developer',
    company: 'MTV Networks (Digital Music group)',
    location: 'NYC, NY',
    contentHtml: `
    <ul>
      <li>Implemented and participated in development of MTV Artist Platform, MTV Hive, MTV Music, and MTV Music Meter</li>
      <li>Enhanced MTV Artist Platform to be responsive and platform-independent</li>
      <li>Implemented a custom 'video wall' template for MTV Artists promo pages, utilizing HTML5 video with Flash fallback</li>
      <li>Developed and maintained responsive, device-agnostic WordPress theme for MTV Hive blog</li>
      <li>Supported XML transformations, utilizing XSLT, Freemarker, and GSP</li>
      <li>Developed and integrated server side functionality using Grails Server Pages and Freemarker</li>
    </ul>`,
  },
  {
    id: 6,
    date: { from: '2006-10-01', to: '2010-05-01' },
    title: 'Web Developer',
    company: 'Kit Digital (formerly The FeedRoom)',
    location: 'NYC, NY',
    contentHtml: `
    <ul>
      <li>Developed the front-end interface for the video libraries and players of the Fortune 1000 companies: HP, Intel, NY Times,
      US News, SUN Microsystems, Digotel Olympics, Barnes & Noble, Pentagon</li>
      <li>Utilized HTML, JavaScript, CSS, and Adobe Flex to develop UI</li>
      <li>Supported the release process by remotely logging into the servers and providing the technical assistance</li>
    </ul>`,
  },
  {
    id: 7,
    date: { from: '2005-05-01', to: '2006-10-01' },
    title: 'Web Developer',
    company: 'ITS Department CUNY, Brooklyn College',
    location: 'NYC, NY',
    contentHtml: `
    <ul>
      <li>Produced web pages using PHP, HTML, JavaScript, and CSS</li>
      <li>Prepared and maintained functional and technical materials to support site development and usage</li>
    </ul>`,
  },
  {
    id: 8,
    date: { from: '2004-09-01', to: '2006-01-01' },
    title: 'Web Developer',
    company: 'Digital Art Department CUNY, Brooklyn College',
    location: 'NYC, NY',
    contentHtml: `
    <ul>
      <li>Maintained Departmental Web Site</li>
    </ul>`,
  },
];

export const education = [
  {
    id: 1,
    date: { from: '2002-01-01', to: '2006-02-01' },
    degree: 'BS',
    college: 'CUNY, Brooklyn College',
    major: 'Computer Science and Information Technologies',
    minor: 'Multimedia Computing',
    gpa: 3.55,
    location: 'Brooklyn, NY',
  },
  {
    id: 2,
    date: { from: '1995-09-01', to: '2000-06-01' },
    degree: 'BE',
    college: 'Rostov State University of Transport Communications',
    major: 'Mechanical Engineering',
    minor: null,
    gpa: 3.75,
    location: 'Rostov-on-Don, RUS',
  },
];

export const user = {
  id: 1,
  name: 'Dmitriy Zutler',
  email: 'dmitriy.zutler@gmail.com',
  address: {
    street: '448 Neptune Avenue',
    suite: 'Apt. 16G',
    city: 'Brooklyn',
    state: 'NY',
    zipcode: '11224',
  },
  phone: '1-(646)-331-4725',
  website: 'http://www.linkedin.com/in/zutler',
};

export const skills = [
  {
    Languages: [
      'JavaScript(ES5, ES6)',
      'TypeScript',
      'HTML(5)',
      'CSS(3)',
      'Sass',
    ],
  },
  { Frameworks: ['React', 'NextJs', 'Angular', 'ExtJS', 'jQuery'] },
  {
    Editors: ['VS Code', 'Sublime', 'Atom', 'WebStorm'],
  },
  { Bundlers: ['Webpack', 'Vite', 'Gulp', 'Grunt'] },
  { CMS: ['GitHub', 'Bitbucket', 'SVN', 'CVS', 'TFS'] },
  { Grids: ['AG-Grid', 'UI-Grid', 'Kendo-Grid'] },
  { 'UI Frameworks': ['Material-UI', 'Bootstrap', 'Chakra-UI', 'Kendo-UI'] },
  {
    'Other Skills': [
      'Agile development methodologies',
      'Team leadership',
      'Code reviews',
      'Technical architecture',
      'Automated testing',
    ],
  },
  { Databases: ['MySQL', 'MongoDB'] },
];
