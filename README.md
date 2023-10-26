## Description

This is a ticketing system that I built called Strombo. Users can log into their own profile to create projects along with tickets for those projects. Tickets can then be claimed by a user and will show up in their tasks. Once a user claims a ticket, the status of the ticket will automatically be changed to "In progress" until the ticket is marked as complete. There is also functionality built in to reopen tickets that were previously marked as complete if needed.

You can find the live demo [here](https://strombo-workforce-management.onrender.com/).

<img src="/client/src/assets/images/home.png">
<img src="/client/src/assets/images/preview.png">
<img src="/client/src/assets/images/project.png">
<img src="/client/src/assets/images/tasks.png">
<img src="/client/src/assets/images/ticket.png">





## Technology Used

- JWT Authentication
- React with Redux Toolkit for app-wide state management
- Tailwindcss with Daisy UI
- Node.js with Express
- Mongoose/MongoDB 
- Heroku

## What I Learned

- That MongoDB is not very efficient at managing relational data and that using mongoose makes this a little easier.
- How to determine which technologies to use based on what my expectations are of the project
- Implementing JWT for user authentication
- Writing custom react hooks

## Things to improve

- Mobile responsiveness
- Performance
