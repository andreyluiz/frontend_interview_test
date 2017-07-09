# Front-End Interview Test [![Build Status](https://travis-ci.org/andreyluiz/frontend_interview_test.svg?branch=master)](https://travis-ci.org/andreyluiz/frontend_interview_test)

This is a simple front-end code challenge created to serve two purposes:

1. Show off your skills,
1. Give us a better understanding of your skills.

## The Task

The programming challenge exists in 2 parts:
* Part A: HTML + CSS
* Part B: Javascript

### PART A: HTML + CSS

![Screen](https://raw.githubusercontent.com/mcmakler/frontend_interview_test/master/assets/fe_test_example_screen.png)

* Create a layout based on the given screen (fe_test_example_screen.png).
* Style the layout consistently and beautifully, adhering as closely to the design as possible.
* **NOTE:** You are free to use any preprocessor you wish, or write raw CSS. *Bonus points for an explanation of your choice.*

### PART B: Javascript

* Consume our public API @ https://api.mcmakler.de/v1/advertisements to retrieve a list of advertisements of vacant apartments.
* Display the first 10 advertisements in the HTML + CSS layout created in step A, sticking to the layout, placing data where it fits.
* **NOTE:** You are free to use any framework you wish, or do it VanillaJS style. *Bonus points for an explanation of your choice.*

## Additional Instructions

* Leave comments where you were not sure how to properly proceed.

## Bonus Points

* Test.
* Clean code!
* Knowledge of application flow.
* Knowledge of modern best practices/coding patterns.
* Demonstration of good state management.
* Usage of frameworks/supersets.
* Pixel perfection.
* Componential thinking.
* Usage of linters.
* Git hooks.

## Resolution

I created a simple application with React and Redux.

For React, the only lib I used was react-flexbox-grid to prevent me from using additional CSS for the flexbox layout.

For Redux I used the following:

 - axios: To perform promise based http requests;
 - lodash: To facilitate array processing operations;
 - react-redux: To connect with React;
 - redux: The core library;
 - redux-duck: For nice state declaration standard (see src/state/index.js);
 - redux-thunk: To create async actions;
 - reselect: To create state selectors.

I used SASS with CSS Modules. This decision was based in my current experience with React. React is bad at scoping CSS, so CSS Modules solve this problem (I could use Styled Components too). I choose SASS because it offers a nice composition and syntax tooling.

The application structure is something I developed by test and errors, during my experience with React. It's a structure that scales very well. I have an application with 1000+ Components (not counting the containers and state declarations) in this structure and it is maintainable and testable. Sadly it is a private project and it is in a private Gitlab repo.

I'm improving this structure to use Styled Components and get rid of CSS/SASS. But it is a WIP for my next projects.

### Part A

Done with SASS and React Components.

### Part B

Done with Redux and state processing.

## About the Bonus Points

* Test: `yarn test`;
* Clean code: I always try to use the techniques in [clean-code-javascript](https://github.com/ryanmcdermott/clean-code-javascript);
* Knowledge of application flow: check;
* Knowledge of modern best practices/coding patterns: check;
* Demonstration of good state management: Redux :) ;
* Usage of frameworks/supersets: React;
* Pixel perfection: check;
* Componential thinking: check;
* Usage of linters: `yarn lint` and `yarn flow`;
* Git hooks: 
