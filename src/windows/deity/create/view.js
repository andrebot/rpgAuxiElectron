'use strict';

const React = require('react');
const { render } = require('react-dom');
const { Provider } = require('react-redux');
const { createStore } = require('redux');
const CreateDeityWindow = require('./components/create-deity/create-deity-container');
const CreateDeityApp = require('./reducers');

const store = createStore(CreateDeityApp);

render(
  <Provider store={store}>
    <CreateDeityWindow />
  </Provider>,
  document.getElementById('container')
);


// (function View() {
//   'use strict';

//   let myAutoComplete = null;

//   $(document).ready(initWindow);

//   function initWindow() {
//     $('select').material_select();
//     $('.chips').material_chip();
//     $('.chips-placeholder').material_chip({
//       placeholder: 'Enter a domain',
//       secondaryPlaceholder: '+Domain',
//     });

//     myAutoComplete = new autoComplete({
//       selector: '.chips-placeholder input',
//       minChars: 1,
//       source(term, suggest) {
//         const lowTerms = term.toLowerCase();
//         const choices = ['ActionScript', 'AppleScript', 'Asp'];
//         const matches = [];

//         choices.forEach((choise) => {
//           if (choise.toLowerCase().indexOf(lowTerms) >= 0) {
//             matches.push(choise);
//           }
//         });

//         suggest(matches);
//       }
//     });
//   }
// }());
