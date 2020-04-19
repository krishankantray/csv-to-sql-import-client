# CSV to SQL import


[![N|Solid](https://raw.githubusercontent.com/krishankantray/temp/master/visit_button.JPG)](https://suspicious-carson-2627ba.netlify.app/)

Github : [Front-End Part](https://github.com/krishankantray/csv-to-sql-import-client)

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; [Back-End Part](https://github.com/krishankantray/csv-to-sql-import-server)

##### **What is this app all about ?**
This app allows users to import a .csv file and save it in MySQL. The .csv file needs to be in a specified format, something like  this .
Once the data is saved we can see and delete the table data on the front-end.

##### **Whats there on back-end and front-end ?**

  - **Back-End :**
    - NodeJS
    - ExpressJS
    - MySQL
  - **Front-End :**
    - ReactJS
    
Here is the SQL table structure :
| Field         | Type         |
|---------------|--------------|
| id            | int(11)      |
| level_col     | varchar(255) |
| cvss          | varchar(255) |
| title         | varchar(255) |
| vulnerability | varchar(255) |
| solution      | varchar(255) |
| reference_col | varchar(255) |

##### **Where is it deployed ?**

Client side app ( React app ) is deployed on [Netlify](https://www.netlify.com/)
Server side app ( Node app ) is deployed on [Heroku](https://www.heroku.com/)
MySQL database is deployed on Remote [Mysql](https://remotemysql.com/)

##### **How to run it locally ?**
To run it locally we need to clone two git repositories, one for the server and other for the client ( front-end).

***To clone the client repo :***
```git clone https://github.com/krishankantray/csv-to-sql-import-client.git  ```

***To clone the server repo :***
```git clone https://github.com/krishankantray/csv-to-sql-import-server.git```

The above git setup is for online server auto deployment on **Heroku** and **Netlify** .
We need to make some changes in it to run it locally.

**First we setup the server locally  :**
- Open the directory : ```csv-to-sql-import-server``` ,  in any vscode or any other editor.
- If you have a local MySql db then do replace the details in the ```app>>config>>db.config.js```

If you don't have a local MySql db then leave it as it is.  
Now, open terminal ( *in the directory* : csv-to-sql-import-server ),
- ```npm install```
- ```npm start```

It should print in terminal : ```Server is running on port 9000.```
>( Make sure there is nothing previously running on port 9000, if there is then change the >port from line 25 of server.js )

**To test if all APIs are working, open postman and use following APIs** 
- GET call for obtaining all the records, url should be : ```http://localhost:9000/customers/```.
- GET call for single records by id, for eg :  ```http://localhost:9000/customers/963```
- POST call for bulk create records  : ```http://localhost:9000/bulkcreate``` This call needs a body to be passed
- POST call for single create records  ```http://localhost:9000/customers``` This call needs a body to be passed
- DELETE call for all records deletion   ```http://localhost:9000/customers ```
- DELETE call for records deletion   ```http://localhost:9000/customers/963 ```
- PUT call to update a single record ```http://localhost:9000/customers/963```

**Now, we will configure the local front-end ( React app ) :** 
We only need to make some changes in ```App.js``` within ``src`` directory. 
Just change the line ```35```, ```69``` and ```97```, i.e we need to change the URL of all the fetch calls from Apps.js.
*For Example :* 
```
35 : Before  https://csv-to-sql-import.herokuapp.com/bulkcreate
35 : After     http:localhost:9000/bulkcreate
```
Similarly for line ```69``` and ```97```, just replace this part of URL - 
```https://csv-to-sql-import.herokuapp.com```
with 
```http:localhost:9000```
and rest of the part of url remains same. 

Now, its time to run the app

Goto the folder ```csv-to-sql-import-client``` in terminal 
- ```npm install ```
- ```npm start```

It should automatically start in browser, wait for few seconds and if it doesn't loads then open it manually -``` http://localhost:3000/ ```
Now, the app is running locally. 

If there is any issue in running it then let me know in comments.
