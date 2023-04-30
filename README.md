
# Full Stasis

"Full Stasis" is a mobile application that is focused on making it easier to plan ones life while targeting the battle of burnout, This application uses color coordination to sort and organize ones daily events. This included unmovable, tentative and personal events. This application was built using React Native Firebase which is a custom library that combines the power of React Native with the tools and service of Firebase




## Authors

- [Vincent Sanchez](https://www.github.com/ironson22)


## Introduction to FullStasis

What is the problem that I am aiming to Solve?

The burnout that people experience from a busy life

Why am I solving this problem?

I am attempting to solve the problem of burnout because this can affect anyone that has multiple task in their life that need to be in a balance with their already busy schedule. With this application they will hopefully regain some time management focus to work and live more efficiently
## What are the high-level functional and non-functional requirements that you supported in your project?

This Application had to support the following:

High Level Functions:

Easy Login

Color Coordinated List

Persistent State even when interrupted

Cloud Hosted Information

Easy to use interface

Ability to manage different task in each event list

Low Level Function:

Each page must load within 5 Seconds

An error page must be shown if there was an error

User must be able to login with a Google Account
## Project Demo

Loom Link: https://www.loom.com/share/c690fa67bcef40329e4cef798914e5fd
## Technology Design Decisions

The Technology or tool that were used in this project are as follows along with the reason they were chosen:

Software or tool name | Reason for Choosing it
Visual Studio Code | One of the best Editors for JSX

React Native Firebase | One of the easiest way to integrate firebase

Firebase Authentication | Allows for use with Google Authentication

Firebase Cloud Database | Allow for easy setup to store or read information with React Native Firebase

Google Pixel 6A (Android 13) | A Phone with the newest Version of Android to be used at Showcase

Android Studio (Android 13) | Allow for Advanced configuration of Android Emulator

Metro Bundler | Included with React Native Framework

Github | One of the largest commonly Used Version Management hubs for code projects

Google Cloud Logging | Due to Firebase being a Google Cloud Service this is included when installing Firebase

Are there any Industry Standard items from the list above?
Yes, React Native, Google Cloud Logging, Github, and Visual Studio Code

Was this application deploy to the cloud?
Yes, The database is hosted using Firestorm for Firebase with is a Google Cloud Service

Does this application support any DevOps items?
Yes, this application has been setup with Downtime Alerts in the Firebase Console as well as Google Cloud Logging

## Did you learn any new technologies for this project?
Yes, both the front end framework(React Native) and the back end database service(Firebase) were completely new to me at the start of this project

Why were these chosen: 
I chose to use React Native as this is considered to be one of the industry standard for Mobile Development and will have many tutorial and online documentation on its uses. I chose Firebase as it was a Service from Google Cloud that was often used for Small development project that allow for a easy to use database and authentication service for most frameworks
## What technical approach did you take?

What are some of the things you had to start with?
I first started with some guides on Udemy to begin to get familar with React Native as well as state management using useState and setState. I then proceeded to use Youtube and the documentation on React Native Firebase to learn how to use Firebase database in order to store user task based on their unique Google Id

I then began working on a UI Desgin which is as follows:
![CST- 452 UI Design](https://user-images.githubusercontent.com/5006228/235368397-e1d94059-e05e-4677-8070-9278f1293968.jpg)

As well as a sitemap for how the pages will lead into each out:
![CST - 452-Sitemap](https://user-images.githubusercontent.com/5006228/235368362-2cbb789f-041b-4d7f-a4c6-aebd7451b8ae.jpeg)

after the site map was completed I needed to understand how the data would be moved as the user signed in and view their task so I made a flowchart:
![CST-451 Flow Chart](https://user-images.githubusercontent.com/5006228/235368427-a14c6091-c39e-4255-9514-0717e35657c9.jpg)
## What risks and challenges did you have?
The risk that this project had was that I did not know or have worked with before either of the mobile framework React Native or the Google cloud service Firebase. I was in new unfamiliar territory when starting this project. I also had never worked with an Android emulator and was unsure of how to configure it at first as well (i.e screen dimensions, Android version)


How did you overcome these and what resources did you use?
The way that these risk were overcome was the month prior to the begin of the devement phase I had start to do a research phase where I was creating the small sample that React Native has on their website as well as some samples that would be hosted on an Android device to learn to interact with ADB with is the package in the Android SDK that allows developer to use local devices for testing. 

What risk management approaches did you take?
The first thing that I did was a Risk evaluation where I identified the highest risk items and listed them, the next step that I did was make a risk response strategy(How were the risk that were found going to be minimized). The result was that I as the main developer for this project would need to seek tutorials and guides for the unknown packages of this project in order to successfully meet my goal.
## What outstanding issues do you have?

The outstanding issues that are in the mobile application currently are:

No edit feature for the users

No way of switch list while currently look at a list, the user must first go back to the page with all event list and then select another

No current IOS support, This is an issue as Apple devices are one of the most common in the United States

This Project is not publicly hosted beyond this github so in order for another person to install this application on their device they would have to use the React Native CLI to build it onto their device as this project does not currently has a .apk file for users to download
