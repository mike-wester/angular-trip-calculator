# AngularTripCalculator

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## The Challenge

We would like for you to build a basic page/app that calculates the expenses for a
group of students who like to go on trips. In it, you will need to submit data to an
endpoint that you will build, render to the page all required information, and
include a submit button to display the end calculation. The app does not need to
conform to any existing brand styles.
Use your skills, experience, and judgement as a front-end engineer to make this
page look great—ensure the requirements are met and style the cards however
you want. Use this project to show off your style and skills!

## Guidelines

Our group of students agrees in advance to share expenses equally, but it is not
practical to share every expense as it occurs. Thus, individuals in the group Pay for
particular things, such as meals, hotels, taxi rides, and plane tickets. After the trip,
each student’s expenses are tallied, and money is exchanged so that the net cost
to each is the same, to within one cent. In the past, this money exchange has
been tedious and time consuming. Your job is to compute, from a list of students
and their personal expenses from the trip, the minimum amount of money that
must change hands in order to equalize (within one cent) all the students’ costs.
So, for example, Adriana, Bao, and Camden took a trip together; Adriana incurred
expenses of $5.75, $35.00, and $12.79, Bao paid out $12.00, $15.00, and $23.23,
and Camden covered $10.00, $20.00, $38.41, and $45.00. Adriana’s total was
$53.54, Bao’s was $50.23, and Camden shelled out $113.41. The total cost of the
trip was thus $217.18, and thus equal shares would be $72.39 1/3 cents.
Therefore, Adriana owes Camden $18.85, and Bao owes Camden $22.16.

For the sake of simplicity, it is safe to assume three students, two of which pay
much less than the third; however, if you want to make it a general-purpose
solver to work with any number of students, please feel free.

## Requirements
* Preferred application framework: Angular or React
* Page should be fully responsive and mobile friendly
* Page must have a header and footer
* Page should contain the following fields (per student):
    * Name
    * Expenses
* Must use Sass as a preprocessor
* Must write the styles yourself and not use a third-party CSS framework.
* The page should have a Calculate button
* The page should show how much each student needs to pay out to anyother students
* The endpoint should be a NodeJS Web API using a recent version of NodeJS and following RESTful principles. Use any npm packages that you find helpful; if there is anything other than ‘npm install’ required to run your project properly, they must be documented
* The code for this should be saved to GitHub

## Evaluation
Once you’re happy with your work here, send the link to your repo to your
recruiter. They will, in turn, pass that link on to the engineering team for review.
From there, the team will evaluate the code based on the following:

* Feature Completeness: did the submission meet or exceed the listed requirements?
* Future proofing: how well will submitted code grow as needs change or evolve?
* Maintainability: how clean or well-organized is the submitted code?
* Code Quality: does the code show a strong understanding of the technology?
* Creativity: does the submission show novel solutions unique decision decisions?