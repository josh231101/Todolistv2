# Todo list :pushpin:

<img src="/public/images/example.png"> <br>

Welcome to todolistv2 repository!<br>
This project it's basically a todolist where you can create you own paths to make new todolists,don't worry if you close the tab, THEY ARE STORED IN MongoDB Atlas!!.<br>
**GO AND CHECK [TODO LIST WEB APP!](https://lit-castle-40725.herokuapp.com/)**

## Features:fire:

This page it able to do the next things<br>
1. Create your list.<br>
2. Use the + to add notes.
3. Creat your own lists by adding a route url + /newtodolist!<br>

## Tech Stack :computer:

:sunny: **Frontend:** HTML,CSS & Bootstrap<br>

:sunny: **Backend:** Node.js, express, MongoDB, mongoose, EJS


## Setup/Installation :notebook:
**Requirements:**
- Node<br>
- MongoDB and an account for your mongoDB Atlas<br>

To make sure you have installed node and mongoDB write in your terminal <br>

```
$ node --version
$ mongo --version
```

To have the repo in your local computer, follow the next steps: <br>

Clone the repository in your terminal: <br>
```
$ git clone https://github.com/josh231101/Todolistv2.git
```

Make sure you are in the correct folder. <br>

Initialize npm, then install all the modules required:<br>

```

$ npm init
$ npm install express body-parser https ejs mongoose

```

Go the app.js and change the `mongoose.connect` const an change it for your account and password <br>

You are now ready to run the blogsite in your localhost:<br>

```
$ node app.js
```

## TODO:pencil:

- :zap: Creating todolist for each user.<br>
- :zap: Adding new colours and personalisation for the users.