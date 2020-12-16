# NoteTaker

Link to the deployed Heroku app: https://vinces-note-taker.herokuapp.com/

[![License: NPM](https://img.shields.io/badge/License-NPM%20Package-green.svg)](https://www.npmjs.com/)

![Vince's Note Taker](./11NoteTakergif.gif)
 
 ## Description 
A app that saves, deletes, and reads notes. It runs on a Express.js server using Node.js and it is deployed on Heroku.
The app has 3 simple API calls that allow it to function on a server.

#### Get Notes API
The get notes API simply reads the db.json file and then displays that information on the page using JSON and Express. There is nothing more to it.

#### Post Notes API
The post notes API first gets the note information in the HTML inputs, and then it gets/reads the current database information in db.json file. Then, it pushes the new note information into the note array inside the db.json file. After that, it assigns a unique id for each and every single note so that the app has a way of identifying, reading, and deleting the notes. This makes it so that the id matches the index plus 1. If any of the notes have an index of 0 then the app is unable to read that note. Finally, it overwrites the db.json file with the new array along with the new note and refreshes the page for the user.

#### Delete Notes API
The delete note API first reads the db.json file to see all of the current notes. Then, it identifies which note that the user wishes to delete by filtering through the array by using the findIndex method. After that, it splices the array which removes the identified note that the user whishes to delete. After all of this, it overwrites the db.json file with the same array except for the removed note and refreshes the page.

#### Get index.html & Get notes.html
This app uses Express.js to identify the static path, which is currently the public path, as the path that contains all of the files that make up this web page. This app also uses JSON to read, write, and translate all of these JavaScript objects in a beautiful format that is user friendly and doplyable of Heroku.
 
# Table of Contents 
- [Installation](#installation) 
- [Usage](#usage) 
- [Contribution](#contribution) 
- [Tests](#tests) 
- [License](#license) 
- [Questions](#questions) 

## Installation 
To install, run the following command:
```
npm i
```

## Usage
This app is intended to be used for taking notes and saving them for later.

## License 
This application is covered by: NPM Package
 
## Contribution 
Contact me using the info in the questions.
 
## Tests 
To test the app locally on your machine, clone the repository, install it by seeing [Installation](#installation), and then run the server by using the following command:

```
node app.js
```

Or you may test the app live on the Heroku page:
https://vinces-note-taker.herokuapp.com/
Be aware that others can see the notes you are taking. The notes are not saved locally, they are saved live on the Heroku cloud.
 
## Questions 
If you have any questions feel free to contact: 
 
[GitHub](https://github.com/vmcgargill) 
 
Email: [vincentmcgargill@gmail.com](mailto:vincentmcgargill@gmail.com)
