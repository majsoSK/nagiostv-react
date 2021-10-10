import { atom } from 'recoil';
// Import Polyfills
import 'url-search-params-polyfill';

// turn on demo mode if ?demo=true or we are hosting on nagiostv.com
// demo mode uses fake data and rotates through a couple of alerts as an example
const urlParams = new URLSearchParams(window.location.search);
const isDemoMode = urlParams.get('demo') === 'true' || window.location.hostname === 'nagiostv.com';
//console.log('isDemoMode is ', isDemoMode);

const isStressTestMode = urlParams.get('stresstest') === 'true';

// turn on debug mode if ?debug=true
const isDebugMode = urlParams.get('debug') === 'true';

// use fake data (dev) if ?fakedata=true
const useFakeSampleData = urlParams.get('fakedata') === 'true' || isDemoMode;
//console.log('useFakeSampleData is ', useFakeSampleData);


const bigStateInitial = {
 
  //**************************************************************************** */
  // state which is used internally by NagiosTV
  //**************************************************************************** */

  currentVersion: 69, // This gets incremented with each new release (manually)
  currentVersionString: '0.8.0-test', // This gets incremented with each new release (manually)
  latestVersion: 0,
  latestVersionString: '',
  lastVersionCheckTime: 0,

  isDemoMode,
  isDebugMode,
  isStressTestMode,
  useFakeSampleData,

  isRemoteSettingsLoaded: false,
  isCookieLoaded: false, // I have this to render things only after cookie is loaded
  isDoneLoading: false,

  commentlistError: false,
  commentlistErrorMessage: '',
  commentlistLastUpdate: 0,
  commentlist: {},

  hostgroupError: false,
  hostgroupErrorMessage: '',
  hostgroupLastUpdate: 0,
  hostgroup: {},
  
  hideFilters: true,
  isLeftPanelOpen: false,
};

export const clientSettingsInitial = {
  // audio and visual settings
  
  titleString: 'NagiosTV',
  dataSource: 'cgi',
  baseUrl: '/nagios/cgi-bin/', // Base path to Nagios cgi-bin folder
  livestatusPath: 'connectors/livestatus.php',

  fetchHostFrequency: 30, // seconds
  fetchServiceFrequency: 30, // seconds
  fetchAlertFrequency: 60, // seconds
  fetchHostGroupFrequency: 3600, // seconds
  fetchCommentFrequency: 120, // seconds

  alertDaysBack: 30,
  alertHoursBack: 24,
  alertMaxItems: 1000,

  hideSummarySection: false,

  hideServiceSection: false,
  hideServicePending: false,
  hideServiceWarning: false,
  hideServiceUnknown: false,
  hideServiceCritical: false,
  hideServiceAcked: false,
  hideServiceScheduled: false,
  hideServiceFlapping: false,
  hideServiceSoft: false,
  hideServiceNotificationsDisabled: false,
  serviceSortOrder: 'newest',

  hideHostSection: false,
  hideHostPending: false,
  hideHostDown: false,
  hideHostUnreachable: false,
  hideHostAcked: false,
  hideHostScheduled: false,
  hideHostFlapping: false,
  hideHostSoft: false,
  hideHostNotificationsDisabled: false,
  hostSortOrder: 'newest',

  hideHistory: false,
  hideHistoryTitle: false,
  hideHistoryChart: false,

  hideAlertSoft: false,

  hostgroupFilter: '',
  
  versionCheckDays: 1,

  language: 'English',
  locale: 'en',
  dateFormat: 'llll',
  clockDateFormat: 'll',
  clockTimeFormat: 'LTS',

  // // audio and visual
  fontSizeEm: '1em',
  customLogoEnabled: false,
  customLogoUrl: './sample-image/resedit.png',
  flynnEnabled: false,
  flynnConcernedAt: 1,
  flynnAngryAt: 2,
  flynnBloodyAt: 4,
  flynnCssScale: '0.5',
  showEmoji: false,
  speakItems: false,
  speakItemsVoice: '',
  playSoundEffects: false,
  soundEffectCritical: './sample-audio/critical.mp3',
  soundEffectWarning: './sample-audio/warning.mp3',
  soundEffectOk: './sample-audio/ok.mp3',
  showNextCheckInProgressBar: true,
  hideHamburgerMenu: false,
  hideBottomMenu: false,
  automaticScroll: false,
  automaticScrollTimeMultiplier: 4,
};

export const bigStateAtom = atom({
  key: 'bigStateAtom',
  default: bigStateInitial,
});

export const clientSettingsAtom = atom({
  key: 'clientSettingsAtom',
  default: clientSettingsInitial,
});
