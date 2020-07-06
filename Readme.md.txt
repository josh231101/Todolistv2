#TODO-LIST:notebook:
<img src="https://drive.google.com/file/d/1cnxjSEqjdOgBgdy_9-qwKToO0ZaBrWZ_/view?usp=sharing">
TODO-list is a project where you can make your own todo notes and create your own routes to create a new TODO list of an especific topic.For example
url/Wishlist

**GO AND CHECK THE [TODO LIST!](https://lit-castle-40725.herokuapp.com/)**

##Tech Stack
:pencil2: **Frontend: ** HTML,CSS & Bootstrap
:pencil2: **Backend: ** Node.js,express,MongoDB,mongoose

##Setup/Installation :computer:
__Requirements: __
-Node
-MongoDB
To make sure you have installed both you can write in a terminal 
```
$ node --version
$ mongo --version
```

To have the repo in your local computer, follow the next steps: 
Clone the repository in your terminal: 
`$ git clone https://github.com/josh231101/Todolistv2.git`

Make sure you are in the correct folder. Initialize npm, then install all the modules required:
```
$ npm init
$ npm i express,body-parser,mongoose,lodash
```
Change the app.js and go to the `mongoose.connect` method an set the url as:
`mongodb://localhost:27017/<dbName>`

Open two tabs of your terminal then write `mongod` in one then `mongo` in the other.
You are now ready to run the todolist in your local host, write in your terminal:
`$ node app.js`
##TODO:pencil:

-Correct the linear gradient in phones
-Create a list for each user
