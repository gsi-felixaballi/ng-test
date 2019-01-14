# NgTest 

﻿## Introduction

The goal of this technical test is to develop a new project from scratch in **Angular 4** code. So then we would like to receive your code with the following requirements/checklist of TODOs: 

1. Define an adequate project structure and application organization 
2. Develop an Application that contains a *Menu, Header and Footer*. 
Get a free online CSS based on *Bootstrap*. Check for free default examples you might feel comfortable with. We don’t want you to define a CSS template. 3. On top of the above-mentioned application, develop 3 screens that will be explained in the current document; **Dashboard, Crimeservers List View and Crimeservers Detail**. 
4. Provide a description of the optimizations that you would do in order to install the application in a production environment. 
5. **(OPTIONAL)** Develop an independent functionality; **Blueliv Community Service**, which purpose is to act as a service provider for a module that prints data to console output. See description of it in further lines 
Please take into account modularization, component definition and code structure. We would like to see at least one example of unit testing. 

### Functionality Description 
**Dashboard**

The look and feel of the dashboard should be the following one: 
Features/hints: 
- All data to display can be mocked with the data provided in JSON with the current test. Take into account how to mock it, thinking about which is the best place into the application organization. Simulate that the data comes from a remote server as a JSON response. 
- Choose the charting library you feel more comfortable with. Recommended to review any of the following: Amcharts, ng2-charts, chartsjs. 
- Once the user clicks on any of the widgets (blue squares), data displayed on the main chart should change according to new data. See an example below: 
- The proposed screen is a proposal for you. If you feel like you want to introduce new design patterns, feel free to do it. 
- The dashboard should be accessible from the Menu. 
Crimeservers List View 
The look and feel of the dashboard should be the following one: 
Features/hints: 
- All data to display can be mocked with the data provided in JSON with the current test. Take into account how to mock it, thinking about which is the best place into the application organization. Simulate that the data comes from a remote server as a JSON response. 
- All the entries should link to the same “Crimeservers Detail” screen which is defined in the next section. The user should access to the detail by clicking on the magnifying glass at the top-right of the screen. 
- The proposed screen is a proposal for you. If you feel like you want to introduce new design patterns, feel free to do it. 
- The Crimeservers list should be accessible from the Menu. 
Crimeservers Detail 
The look and feel of the dashboard should be the following one: 
Features/hints: 
- All data to display can be mocked with the data provided in the Screenshot with the current test. Take into account how to mock it, thinking about which is the best place into the application organization. Simulate that the data comes from a remote server as a JSON response. 
- The proposed screen is a proposal for you. If you feel like you want to introduce new design patterns, feel free to do it. 
- Consider using the following library for visualization charts: 
    - GOJS: https://gojs.net/latest/index.html o GOJS Examples: https://gojs.net/latest/samples/index.html o GOJS Angular Code Example: https://gojs.net/latest/samples/angular.html o GOJS Angular Code Example (Github): 
     https://github.com/NorthwoodsSoftware/GoJS/tree/master/projects/angular-basic 

**Blueliv Community Service (OPTIONAL)**

We would like you to develop a module that: 
Could be integrated with the previous app if desired 
Gets URLs of Blueliv Community (https://community.blueliv.com) using our API defined at: https://community.blueliv.com/#!/docs/consumer 
In order to do so, you need to: 
1. Register a free user 2. Generate a API token at https://community.blueliv.com/#!/get-started/ 
The module do the following: 
- A service that gets all the information from our community API ( Remote Server ) 
- Get all “sparks” ( entries ) querying by TAG = BOTNET in order to print to console output the following information: 
    - Create data o Title of the spark o Tags o Number of IoCs 
- The specific API endpoint we want you to use is: “LIST SPARKS BY TAG” and you can consider doing infinite scroll by interacting with the following parameters: 
- Since id o Limit

## For Local Deployment
$ `git clone https://github.com/gsi-alejandro/ng-test.git && cd ng-test`

$ `npm i -g serve` (optional you can use any other npm package to create the local server)

$ `ng build --prod && serve -s dist`

Then go to the shown url in console by serve npm package.

$ `ng test` (to see run test)

Notice: The @angular/cli package must be installed
