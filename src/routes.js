/**
 * This is the overall list of routes handled by `scratch-www`.
 * Each route is either a redirect or a page.
 * Pages are webpack build outputs.
 * Redirects are handled by `configure-fastly.js`.
 */

/**
 * @typedef {(Page|Redirect)} Route An entry in the list of routes.
 */

/**
 * @typedef {Object} Page Routing information for a rendered page.
 * @property {string} name The name of the route. For pages (non-redirects), this is the name of the HTML file.
 * @property {string} pattern The URL pattern that the route matches.
 * @property {string} [routeAlias] An alias for the route pattern (see `README.md`).
 * @property {string} view The view file that the page should render. Corresponds to files in `src/views/`.
 * @property {string} title The title of the page.
 * @property {string} [intlName] The name of the intl file to use for this page.
 * @property {string} [viewportWidth] The viewport width to use for this page.
 * @property {boolean} [dynamicMetaTags] If true, suppresses `template.ejs`'s logic for meta tags and title.
 */

/**
 * @typedef {Object} Redirect Routing information for a redirect.
 * @property {string} name The name of the route. For pages (non-redirects), this is the name of the HTML file.
 * @property {string} pattern The URL pattern that the route matches.
 * @property {string} [routeAlias] An alias for the route pattern (see `README.md`).
 * @property {string} redirect The URL to redirect to.
 */

/**
 * @type {Route[]}
 */
const routes = [
    {
        name: 'about',
        pattern: '^/about/?$',
        routeAlias: '/about/?$',
        view: 'about/about',
        title: 'About'
    },
    {
        name: 'annual-report',
        pattern: '^/annual-report/?(\\?.*)?$',
        routeAlias: '/annual-report/?$',
        view: 'annual-report/2021/annual-report',
        title: 'Annual Report 2021',
        intlName: 'annual-report-2021',
        viewportWidth: 'device-width'
    },
    {
        name: 'annual-report-2019',
        pattern: '^/annual-report/2019/?(\\?.*)?$',
        routeAlias: '/annual-report/2019/?$',
        view: 'annual-report/2019/annual-report',
        title: 'Annual Report 2019',
        viewportWidth: 'device-width'
    },
    {
        name: 'annual-report-2020',
        pattern: '^/annual-report/2020/?(\\?.*)?$',
        routeAlias: '/annual-report/2020/?$',
        view: 'annual-report/2020/annual-report',
        title: 'Annual Report 2020',
        viewportWidth: 'device-width'
    },
    {
        name: 'annual-report-2021',
        pattern: '^/annual-report/2021/?(\\?.*)?$',
        routeAlias: '/annual-report/2021/?$',
        view: 'annual-report/2021/annual-report',
        title: 'Annual Report 2021',
        viewportWidth: 'device-width'
    },
    {
        name: 'camp',
        pattern: '^/camp/?$',
        routeAlias: '/camp/?$',
        view: 'camp/camp',
        title: 'Down Deep'
    },
    {
        name: 'conference-index',
        pattern: '^/conference/?(\\?.*)?$',
        routeAlias: '/conference(?!/20[1-2][0-9])',
        redirect: 'https://www.scratchfoundation.org/scratch-conference'
    },
    {
        name: 'conference-index-2017',
        pattern: '^/conference/2017/?$',
        routeAlias: '/conference(?!/20[1-2][0-9])',
        view: 'conference/2017/index/index',
        title: 'Scratch Conference',
        viewportWidth: 'device-width'
    },
    {
        name: 'conference-details-2018',
        pattern: '^/conference/2018/:id/details/?$',
        routeAlias: '/conference(?!/20[1-2][0-9])',
        view: 'conference/2018/details/details',
        title: 'Event Details'
    },
    {
        name: 'conference-expectations-2018',
        pattern: '^/conference/2018/expect/?$',
        routeAlias: '/conference(?!/20[1-2][0-9])',
        view: 'conference/2018/expect/expect',
        title: 'What to Expect'
    },
    {
        name: 'conference-index-2018',
        pattern: '^/conference/2018/?$',
        routeAlias: '/conference(?!/20[1-2][0-9])',
        view: 'conference/2018/index/index',
        title: 'Scratch Conference',
        viewportWidth: 'device-width'
    },
    {
        name: 'conference-plan-2018',
        pattern: '^/conference/2018/plan/?$',
        routeAlias: '/conference(?!/20[1-2][0-9])',
        view: 'conference/2018/plan/plan',
        title: 'Plan Your Visit'
    },
    {
        name: 'conference-schedule-2018',
        pattern: '^/conference/2018/schedule/?$',
        routeAlias: '/conference(?!/20[1-2][0-9])',
        view: 'conference/2018/schedule/schedule',
        title: 'Conference Schedule'
    },
    {
        name: 'conference-index-2019',
        pattern: '^/conference/2019/?$',
        routeAlias: '/conference(?!/20[1-2][0-9])',
        view: 'conference/2019/index/index',
        title: 'Scratch Conferences',
        viewportWidth: 'device-width'
    },
    {
        name: 'conference-index-2020',
        pattern: '^/conference/2020/?$',
        routeAlias: '/conference(?!/20[1-2][0-9])',
        redirect: '/conference/2021'
    },
    {
        name: 'conference-index-2021',
        pattern: '^/conference/2021/?$',
        routeAlias: '/conference(?!/20[1-2][0-9])',
        view: 'conference/2021/index/index',
        title: 'Scratch Conferences',
        viewportWidth: 'device-width'
    },
    {
        name: 'conference-index-2022',
        pattern: '^/conference/2022/?$',
        routeAlias: '/conference(?!/20[1-2][0-9])',
        redirect: 'https://www.scratchfoundation.org/scratch-conference'
    },
    {
        name: 'connect',
        pattern: '^/connect/?$',
        routeAlias: '/connect/?$',
        redirect: 'https://eepurl.com/cws7_f'
    },
    {
        name: 'contact-us',
        pattern: '^/contact-us/?(\\?.*)?$',
        routeAlias: '/contact-us/?',
        view: 'contact-us/contact-us',
        title: 'Contact Us',
        viewportWidth: 'device-width'
    },
    {
        name: 'cookies',
        pattern: '^/cookies/?$',
        routeAlias: '/cookies/?',
        view: 'cookies/cookies',
        title: 'Cookie Policy'
    },
    {
        name: 'credits',
        pattern: '^/credits/?$',
        routeAlias: '/info/(cards|credits|faq|donate)/?$',
        view: 'credits/credits',
        title: 'Credits'
    },
    {
        name: 'developers',
        pattern: '^/developers/?$',
        routeAlias: '/developers/?$',
        view: 'developers/developers',
        title: 'Developers'
    },
    {
        name: 'dmca',
        pattern: '^/DMCA/?$',
        routeAlias: '/DMCA/?$',
        view: 'dmca/dmca',
        title: 'DMCA'
    },
    {
        name: 'download',
        pattern: '^/download/?(\\?.*)?$',
        routeAlias: '/download',
        view: 'download/download',
        title: 'Scratch Offline Editor'
    },
    {
        name: 'educator-landing',
        pattern: '^/educators/?(\\?.*)?$',
        routeAlias: '/educators(?:/(faq|register|waiting))?/?(\\?.*)?$',
        view: 'teachers/landing/landing',
        title: 'Educators'
    },
    {
        name: 'ethics',
        pattern: '^/code-of-ethics/?$',
        routeAlias: '/code-of-ethics/?$',
        view: 'ethics/ethics',
        title: 'Research Code of Ethics'
    },
    {
        name: 'explore',
        pattern: '^/explore/:projects(projects|studios)/:all/?$',
        routeAlias: '/explore(?!/ajax)',
        view: 'explore/explore',
        title: 'Explore'
    },
    {
        name: 'faq',
        pattern: '^/faq/?(\\?.*)?$',
        routeAlias: '/faq',
        view: 'faq/faq',
        title: 'FAQ'
    },
    {
        name: 'guidelines',
        pattern: '^/community_guidelines/?$',
        routeAlias: '/community_guidelines/?$',
        view: 'guidelines/guidelines',
        title: 'Scratch Community Guidelines'
    },
    {
        name: 'ideas',
        pattern: '^/ideas/?(\\?.*)?$',
        routeAlias: '/ideas/?\\??',
        view: 'ideas/ideas',
        title: 'Ideas'
    },
    {
        name: 'jobs-redirect',
        pattern: '^/jobs/?(\\?.*)?$',
        redirect: 'https://www.scratchfoundation.org/careers'
    },
    {
        name: 'join',
        pattern: '^/join/?$',
        routeAlias: '/join/?$',
        view: 'join/join',
        title: 'Join Scratch'
    },
    {
        name: 'messages',
        pattern: '^/messages/?$',
        routeAlias: '/messages(?!/ajax)',
        view: 'messages/container',
        title: 'Messages'
    },
    {
        name: 'projects',
        pattern: '^/projects(/editor|(/\\d+(/editor|/fullscreen)?)?)?/?(\\?.*)?$',
        routeAlias: '/projects/?$',
        view: 'preview/preview',
        title: 'Scratch Project',
        dynamicMetaTags: true
    },
    {
        name: 'embed',
        pattern: '^/projects/\\d+/embed/?(\\?.*)?$',
        routeAlias: '/projects/?$',
        view: 'preview/embed',
        title: 'Scratch Project',
        dynamicMetaTags: true
    },
    {
        name: 'parents',
        pattern: '^/parents/?(\\?.*)?$',
        routeAlias: '/parents/',
        view: 'parents/parents',
        title: 'For Parents'
    },
    {
        name: 'preview-faq-redirect',
        pattern: '^/preview-faq/?$',
        routeAlias: '/preview-faq',
        redirect: '/3faq'
    },
    {
        name: 'privacypolicy',
        pattern: '^/privacy_policy/?$',
        routeAlias: '/privacy_policy/?$',
        view: 'privacypolicy/privacypolicy',
        title: 'Privacy Policy'
    },
    {
        name: 'privacypolicy-apps',
        pattern: '^/privacy_policy/apps?$',
        routeAlias: '/privacy_policy/apps?$',
        view: 'privacypolicy-apps/privacypolicy-apps',
        title: 'Privacy Policy'
    },
    {
        name: 'research',
        pattern: '^/research/?$',
        routeAlias: '/research',
        view: 'research/research',
        title: 'Research'
    },
    {
        name: 'scratch_1.4',
        pattern: '^/scratch_1.4/?$',
        routeAlias: '/scratch_1.4',
        view: 'scratch_1.4/scratch_1.4',
        title: 'Scratch 1.4'
    },
    {
        name: 'become-a-scratcher',
        pattern: '^/become-a-scratcher/?$',
        routeAlias: '/become-a-scratcher',
        view: 'become-a-scratcher/become-a-scratcher',
        title: 'Become a Scratcher'
    },
    {
        name: 'download-scratch2',
        pattern: '^/download/scratch2/?(\\?.*)?$',
        routeAlias: '/download/scratch2',
        view: 'download/scratch2/download',
        title: 'Scratch 2.0'
    },
    {
        name: 'download-scratch-link',
        pattern: '^/download/scratch-link/?(\\?.*)?$',
        routeAlias: '/download/scratch-link',
        view: 'download/scratch-link/download',
        title: 'Scratch Link Download'
    },
    {
        name: 'download-scratch-link-redirect',
        pattern: '^/download/link/?(\\?.*)?$',
        routeAlias: '/download/link',
        redirect: '/download/scratch-link'
    },
    {
        name: 'search',
        pattern: '^/search/:projects/?$',
        routeAlias: '/search',
        view: 'search/search',
        title: 'Search'
    },
    {
        name: 'splash',
        pattern: '^/?$',
        routeAlias: '/?$',
        view: 'splash/splash',
        title: 'Imagine, Program, Share'
    },
    {
        name: 'starter-projects',
        pattern: '^/starter-projects/?$',
        routeAlias: '/starter-projects/?$',
        view: 'starter-projects/starter-projects',
        title: 'Starter Projects'
    },
    {
        name: 'starter-projects-redirect',
        pattern: '^/starter_projects/?$',
        routeAlias: '/starter_projects/?$',
        redirect: '/starter-projects'
    },
    {
        name: 'student-complete-registration',
        pattern: '^/classes/complete_registration',
        routeAlias: '/classes/(complete_registration|.+/register/.+)',
        view: 'studentcompleteregistration/studentcompleteregistration',
        title: 'Complete your Registration'
    },
    {
        name: 'student-registration',
        pattern: '^/classes/:id/register/:token',
        routeAlias: '/classes/(complete_registration|.+/register/.+)',
        view: 'studentregistration/studentregistration',
        title: 'Class Registration'
    },
    {
        name: 'student-registration-token-only',
        pattern: '^/signup/:token',
        routeAlias: '/signup/.+',
        view: 'studentregistration/studentregistration',
        title: 'Class Registration'
    },
    {
        name: 'studio',
        pattern: '^/studios/\\d+(/projects|/curators|/activity|/comments)?/?(\\?.*)?$',
        routeAlias: '/studios/?$',
        view: 'studio/studio',
        title: 'Scratch Studio',
        dynamicMetaTags: true
    },
    {
        name: 'teacher-faq',
        pattern: '^/educators/faq/?(\\?.*)?$',
        routeAlias: '/educators(?:/(faq|register|waiting))?/?(\\?.*)?$',
        view: 'teachers/faq/faq',
        title: 'Teacher Accounts FAQ'
    },
    {
        name: 'teacherregistration',
        pattern: '^/educators/register/?(\\?.*)?$',
        routeAlias: '/educators(?:/(faq|register|waiting))?/?(\\?.*)?$',
        view: 'teacherregistration/teacherregistration',
        title: 'Teacher Registration'
    },
    {
        name: 'teacherwaitingroom',
        pattern: '^/educators/waiting',
        routeAlias: '/educators(?:/(faq|register|waiting))?/?(\\?.*)?$',
        view: 'teacherwaitingroom/teacherwaitingroom',
        title: 'Thank you for requesting a Scratch Teacher Account'
    },
    {
        name: 'terms',
        pattern: '^/terms_of_use/?$',
        routeAlias: '/terms_of_use/?$',
        view: 'terms/terms',
        title: 'Scratch Terms of Use'
    },
    {
        name: 'wedo2',
        pattern: '^/wedo/?(\\?.*)?$',
        routeAlias: '/wedo/?$',
        view: 'wedo2/wedo2',
        title: 'WeDo 2.0'
    },
    {
        name: 'wedo2-legacy',
        pattern: '^/wedo-legacy/?$',
        routeAlias: '/wedo-legacy/?$',
        view: 'wedo2-legacy/wedo2',
        title: 'LEGO WeDo'
    },
    {
        name: 'ev3',
        pattern: '^/ev3/?(\\?.*)?$',
        routeAlias: '/ev3/?$',
        view: 'ev3/ev3',
        title: 'LEGO MINDSTORMS EV3'
    },
    {
        name: 'microbit',
        pattern: '^/microbit/?(\\?.*)?$',
        routeAlias: '/microbit/?$',
        view: 'microbit/microbit',
        title: 'micro:bit'
    },
    {
        name: 'vernier',
        pattern: '^/vernier/?(\\?.*)?$',
        routeAlias: '/vernier/?$',
        view: 'gdxfor/gdxfor',
        title: 'Vernier Go Direct Force and Acceleration'
    },
    {
        name: 'boost',
        pattern: '^/boost/?(\\?.*)?$',
        routeAlias: '/boost/?$',
        view: 'boost/boost',
        title: 'LEGO BOOST'
    },
    {
        name: '3-faq-redirect',
        pattern: '^/3faq/?$',
        routeAlias: '/3faq/?$',
        redirect: '/faq#scratch3'
    },
    {
        name: 'credits-redirect',
        pattern: '^/info/credits/?$',
        routeAlias: '/info/(cards|credits|faq|donate)/?$',
        redirect: '/credits'
    },
    {
        name: 'faq-redirect',
        pattern: '^/info/faq/?$',
        routeAlias: '/info/(cards|credits|faq|donate)/?$',
        redirect: '/faq'
    },
    {
        name: 'donate-redirect',
        pattern: '^/info/donate/?',
        routeAlias: '/info/(cards|credits|faq|donate)/?$',
        redirect: 'https://www.scratchfoundation.org/donate'
    },
    {
        name: 'donate-redirect2',
        pattern: '^/donate/?$',
        routeAlias: '/donate/?$',
        redirect: 'https://www.scratchfoundation.org/donate'
    },
    {
        name: 'download-redirect',
        pattern: '^/scratch2download/?(\\?.*)?$',
        routeAlias: '/scratch2download',
        redirect: '/download'
    },
    {
        name: 'explore-projects-redirect',
        pattern: '^/explore/projects/?$',
        routeAlias: '/explore(?!/ajax)',
        redirect: '/explore/projects/all'
    },
    {
        name: 'explore-redirect',
        pattern: '^/explore/?$',
        routeAlias: '/explore(?!/ajax)',
        redirect: '/explore/projects/all'
    },
    {
        name: 'explore-studios-redirect',
        pattern: '^/explore/studios/?$',
        routeAlias: '/explore(?!/ajax)',
        redirect: '/explore/studios/all'
    },
    {
        name: 'info-cards-redirect',
        pattern: '^/info/cards/?$',
        redirect: '/ideas'
    },
    {
        name: 'help-redirect',
        pattern: '^/help/?(\\?.*)?$',
        routeAlias: '/help/?(\\?.*)?$',
        redirect: '/ideas'
    },
    {
        name: 'hoc-redirect',
        pattern: '^/hoc/?(\\?.*)?$',
        routeAlias: '/hoc/?\\??',
        redirect: '/ideas'
    },
    {
        name: 'hoc2014-redirect',
        pattern: '^/hoc2014/?(\\?.*)?$',
        routeAlias: '/hoc2014/?\\??',
        redirect: '/ideas'
    },
    {
        name: 'info-redirect',
        pattern: '^/info/?(\\?.*)?$',
        routeAlias: '/info/?(\\?.*)?$',
        redirect: '/ideas'
    },
    {
        name: 'register-redirect',
        pattern: '^/accounts/standalone-registration/?$',
        routeAlias: '/accounts/standalone-registration/',
        redirect: '/join'
    },
    {
        name: 'research-redirect',
        pattern: '^/info/research/?$',
        routeAlias: '/info/research',
        redirect: '/research'
    },
    {
        name: 'search-redirect',
        pattern: '^/search/?$',
        routeAlias: '/search',
        redirect: '/search/projects'
    },
    {
        name: 'sec-redirect',
        pattern: '^/sec/?$',
        routeAlias: '/sec',
        redirect: 'https://sip.scratch.mit.edu/sec'
    },
    {
        name: 'splash-redirect',
        pattern: '^///?$',
        redirect: '/'
    },
    {
        name: 'store',
        pattern: '^/store/?$',
        routeAlias: '/store',
        redirect: 'https://scratch-foundation.myshopify.com'
    },
    {
        name: 'tips-redirect',
        pattern: '^/tips/?(\\?.*)?$',
        routeAlias: '/tips/?\\??',
        redirect: '/ideas'
    },
    {
        name: 'things-to-try-redirect',
        pattern: '^/go/?(\\?.*)?$',
        routeAlias: '/go/?\\??',
        redirect: '/ideas'
    },
    {
        name: 'all-tutorials-redirect',
        pattern: '^/tutorials/?$',
        redirect: '/projects/editor/?tutorial=all'
    },
    {
        name: 'create-tutorial-redirect',
        pattern: '^/create/?$',
        redirect: '/projects/editor/?tutorial=getStarted'
    },
    {
        name: 'name-tutorial-redirect',
        pattern: '^/name/?$',
        redirect: '/projects/editor/?tutorial=name'
    },
    {
        name: 'music-tutorial-redirect',
        pattern: '^/music/?$',
        redirect: '/projects/editor/?tutorial=music'
    },
    {
        name: 'story-tutorial-redirect',
        pattern: '^/story/?$',
        redirect: '/projects/editor/?tutorial=tell-a-story'
    },
    {
        name: 'pong-tutorial-redirect',
        pattern: '^/pong/?$',
        redirect: '/projects/editor/?tutorial=pong'
    },
    {
        name: 'animateacharacter-tutorial-redirect',
        pattern: '^/animate-a-character/?$',
        redirect: '/projects/editor/?tutorial=animate-a-character'
    },
    {
        name: 'videosensing-tutorial-redirect',
        pattern: '^/video-sensing/?$',
        redirect: '/projects/editor/?tutorial=video-sensing'
    },
    {
        name: 'clicker-tutorial-redirect',
        pattern: '^/clicker/?$',
        redirect: '/projects/editor/?tutorial=clicker-game'
    },
    {
        name: 'chase-tutorial-redirect',
        pattern: '^/chase/?$',
        redirect: '/projects/editor/?tutorial=chase-game'
    },
    {
        name: 'jazz-tutorial-redirect',
        pattern: '^/jazz/?$',
        redirect: '/projects/editor/?tutorial=music'
    },
    {
        name: 'catch-tutorial-redirect',
        pattern: '^/catch/?$',
        redirect: '/ideas'
    },
    {
        name: 'dance-tutorial-redirect',
        pattern: '^/dance/?$',
        redirect: '/ideas'
    },
    {
        name: 'fly-tutorial-redirect',
        pattern: '^/fly/?$',
        routeAlias: '/(makeit)?fly/?$',
        redirect: '/projects/editor/?tutorial=make-it-fly'
    },
    {
        name: 'makeitfly-tutorial-redirect',
        pattern: '^/makeitfly/?$',
        routeAlias: '/(makeit)?fly/?$',
        redirect: '/projects/editor/?tutorial=make-it-fly'
    },
    {
        name: 'imagine-if-tutorial-redirect',
        pattern: '^/imagine/?(\\?.*)?$',
        redirect: '/projects/editor/?tutorial=imagine'
    },
    {
        name: 'pet-tutorial-redirect',
        pattern: '^/pet/?$',
        redirect: '/ideas'
    },
    {
        name: 'racegame-tutorial-redirect',
        pattern: '^/racegame/?$',
        redirect: '/ideas'
    },
    {
        name: 'hide-tutorial-redirect',
        pattern: '^/hide/?$',
        redirect: '/ideas'
    },
    {
        name: 'fashion-tutorial-redirect',
        pattern: '^/fashion/?$',
        redirect: '/ideas'
    },
    {
        name: 'dressup-tutorial-redirect',
        pattern: '^/dressup/?$',
        redirect: '/ideas'
    },
    {
        name: 'card-tutorial-redirect',
        pattern: '^/card/?$',
        redirect: '/ideas'
    },
    {
        name: 'valentines-tutorial-redirect',
        pattern: '^/valentines/?$',
        redirect: '/ideas'
    },
    {
        name: 'bearstack-tutorial-redirect',
        pattern: '^/bearstack/?$',
        redirect: '/ideas'
    },
    {
        name: 'talking-tales-tutorial-redirect',
        pattern: '^/talking-tales/?(\\?.*)?$',
        redirect: '/projects/editor?tutorial=talking'
    },
    {
        name: 'code-a-cartoon-tutorial-redirect',
        pattern: '^/code-a-cartoon/?(\\?.*)?$',
        redirect: '/projects/331474033/editor/?tutorial=code-cartoon'
    },
    {
        name: 'favorite-tutorial-redirect',
        pattern: '^/favorite/?$',
        redirect: '/ideas'
    },
    {
        name: 'hoops-tutorial-redirect',
        pattern: '^/hoops/?$',
        redirect: '/ideas'
    },
    {
        name: 'soccer-tutorial-redirect',
        pattern: '^/soccer/?$',
        redirect: '/ideas'
    },
    {
        name: 'codeweek-tutorial-redirect',
        pattern: '^/codeweekeu/?$',
        redirect: '/ideas'
    },
    {
        name: 'madewithcode-tutorial-redirects',
        pattern: '^/madewithcode-(name|card)/?$',
        redirect: '/ideas'
    },
    {
        name: 'odetocode-tutorial-redirect',
        pattern: '^/odetocode/?$',
        redirect: '/ideas'
    },
    {
        name: 'makey-tutorial-redirects',
        pattern: '^/makey(piano|drum)?/?$',
        redirect: '/ideas'
    },
    {
        name: 'bird-redirect',
        pattern: '^/bird/?$',
        redirect: '/ideas'
    }
];

if (process.env.NODE_ENV === 'development') {
    routes.push(
        {
            name: 'components',
            pattern: '^/components/?$',
            view: 'components/components',
            title: 'Components'
        }
    );
}

module.exports = routes;