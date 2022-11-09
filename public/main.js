import '../styles/main.scss'; // You have to import your styles for them to work. Comment in this line

import {
  htmlStructure, header, startSortingBtn
} from '../components/htmlComps';

import events from '../utils/events/events';

const startApp = () => {
  htmlStructure(); // always load first
  header();
  startSortingBtn();
  events(); // always load last
};

startApp();
