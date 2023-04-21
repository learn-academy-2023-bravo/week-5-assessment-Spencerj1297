# ASSESSMENT 5: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What does calling super do in a Ruby class?

Your answer: Super acts as the top level generic class for future children classes to be created from. For example there might be a Super Class called ocean. It would have attributes that could sum up any ocean. But the children classes would branch of of ocean into specfics like indian ocean and its attributes or the same for pacific. 

Researched answer: super calls a method on the parent class that holds the same naming as the method calling the super. For example if I were to call the method bravo_cohort_2023 and then call super inside this method it will attempt to locate another method called bravo_cohort_2023 in the parent class.

answer via:
https://www.rubyguides.com/2018/09/ruby-super-keyword/

2. What is a gem?

Your answer:  A gem is a peice of data that grants access to specific database information.

Researched answer: A gem is an open source library that has code and is packaged with extra data. They are used to allow the implementation of that code in their own programming without having to directly insert that code.

answer via: https://medium.com/@morgannegagne/what-is-a-ruby-gem-1eec2684e68

3. What is a relational database? Are there other kinds of databases?

Your answer: A relational database holds data that falls under the same theme or subject matter. For example the countries database on our laptops would be a relational database. I cant remember the other kinds without looking it up. 

Researched answer: RDBMS(relational databases) are a database that store and allows access to data that by nature is related to eachother. Some popluar examples are Oracle and Microsoft SQL. There are also 5 non-relational database. They are document data store, column-oriented, key-value store, document store, and graphs. 

answer via: https://www.oracle.com/database/what-is-a-relational-database/

4. What are primary keys? Why are they important?

Your answer: A primary key is the initial and essential key to accessing data within different databases. When performing SQL commands lack of using a primary key will result in an error. 

Researched answer: The primary key is the column in a database that contains the unique value for each row. To perfrom CRUD you must have access and correctly use the primary key. 

answer via: https://www.ibm.com/docs/he/iodg/11.3?topic=reference-primary-keys


5. What are the HTTP verbs? What is each verb's corresponding CRUD action?

Your answer: Off the top of my head I dont remember each verb that is associated with CRUD action. However, I do know that CRUD is the concept of Creating, Reading, Updating, and Destroing. This is a very common concept within software development.  

Researched answer: The verbs associated with CRUD are get, post, put, patch, and delete. Post falls under the C in CRUD. Get falls under the R which is read. Put and patch are both associated with updating. Last, delete falls under the D which is of course delete.

answer via: notes of Sarah's lovly chart. 


## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. Model validations: This is the process that comes after Model Training. It is evaluating the outcome of the testing data.

https://datatron.com/what-is-model-validation-and-why-is-it-important/

2. RESTful routes:  As a standard used in many languages to create effecientcy RESTful routes give the path for HTTP verbs.

https://www.learnhowtoprogram.com/c-and-net/basic-web-applications/introduction-to-restful-routing

3. ERB: A file template that impliments Ruby code into a regular document. It helps with flow, providing a product that is easy to perfrom upkeep. 

https://docs.fileformat.com/programming/erb/

4. Params: A ruby keyword that allows the user to pass any desired amount of parameters into a method for powerful programmming. 

https://www.google.com/search?q=another+word+for+dynamic&oq=another+word+for+dynamic&aqs=chrome..69i57j0i512l9.3863j0j15&sourceid=chrome&ie=UTF-8

5. API: Applicaition Programming Interface is a way that multiple programs can interact with eachother. 

https://en.wikipedia.org/wiki/API
