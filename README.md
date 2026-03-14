In this lab, I built a small server using Express.js that requests data from the
Useless Facts API using Axios. I reformatted the API response before sending 
it to the client so the data would be cleaner and easier to use. 
This helps reduce unnecessary information and makes the response 
more efficient. I also learned that sending a generic error message in the catch block is 
safer because it prevents exposing server details. Finally,
the application could support other languages by adding a query parameter such as ?language=de when requesting data from the API.
