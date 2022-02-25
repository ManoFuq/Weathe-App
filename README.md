# Weather Journal App
## Table of Contents
- Title
- Table of Contents
- Used languages
- Used invironment and packages 
- Descreption
## Used languages
1. HTML
2. CSS
3. JavaScript
## - Used invironment and packages 
1. Node.js
2. express 
3. cors
4. body-parser
## Descreption
# server.js
1. I defined the projectData object which will contain the data later
2. Set the **express** framework to app variable
3. Set the **body-parser** middleWare and the **cors** mechanism packages
4. Set a function to listen to the port and returns a string says the port is working
5. Set the **GET** route and function
6. Set the **POST** route and function 
# app.js
1. I started with defining the global variables
2. Then set EventListener to the generate button runs **performeAction** function
3. The performAction function contains 3 functions **(getData, postData, updateUI)** chained together with **.then()** method
4. Define **getData** function
5. Define **postData** function
6. Define **updateUi** function