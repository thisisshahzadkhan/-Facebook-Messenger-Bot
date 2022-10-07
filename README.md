# Facebook-Messenger-Bot
# Task 1
<br/>
    - setup database credentials, facebook auth token, facebook verify token, sendGrid token in .env <br />
    - add webhook (POST/GET) url in facebook developer portal along with verify token <br />
    - To start project <br />
        <ul>
        <li>run node app.js<li>
        <li>ngrok http 3000 --region=us<li>
        </ul>
    <br />
# Task 3
<br/>
    - To start project run `node seeder.js` <br />
    - <b>Explaination:</b> Every DB has some limit at which the data can be written to it. To handle that issue the data should be divided into chunks<br/>
    - <b>Description:</b> The data has been feeded to DB in bulk/chunk/batch of 10 for explaination sake. In reality this number should be equal to the number of records at which the data can be written to DB.  


