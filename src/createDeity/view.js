(function View() {
  'use strict';

  $(document).ready(initWindow);

  function initWindow() {
    $('select').material_select();
    $('.chips').material_chip();
    $('.chips-placeholder').material_chip({
      placeholder: 'Enter a domain',
      secondaryPlaceholder: '+Domain',
    });

    const myAutoComplete = new autoComplete({
      selector: '.chips-placeholder input',
      minChar: 1,
      source(term, suggest) {
        const lowTerms = term.toLowerCase();
        const choices = ['ActionScript', 'AppleScript', 'Asp'];
        const matches = [];

        for (let i = 0; i < choices.length; i++) {
          if (~choices[i].toLowerCase().indexOf(lowTerms)) {
            matches.push(choices[i]);
          }
        }

        suggest(matches);
      }
    });
  }
}());
