Snacks CRUD

Create an application to review your favorite snacks.

Show all existing snack reviews
View a single snack review
Create new snacks with a review
Edit existing snack reviews
Delete existing snack reviews
Entry Ticket

To complete this project, you will need to understand:

How to create a simple server via Node and Express
How to setup a database with a single table
How to connect your server to your database
How to render HTML with templates
Setup

Create a Node/Express application.

Create a new database called snacks_crud.

Create a snacks table with the following columns:

id, name, image_url, review_description, rating
Routes & Pages

Your web application should create the following routes with the following constraints:

Homepage Mockup

GET '/'

Redirect to the /snacks route.
GET '/snacks'

Lists all snacks ordered alphabetically by their name
Each snack has basic information about it on the homepage
When you click on the title of the snack, it goes to the individual show page
A link at the bottom of each item allows you to go to the edit page
A link at the bottom of each item allows you to delete the snack
On the navigation bar is a link to go back to homepage and a link to create a new snack
Show Mockup

GET '/snacks/:id'
Shows an individual snack with all its details
Includes the edit and delete links for the given snack
New Page Mockup

GET '/snacks/new'
Displays a new snack form on the page. The form should include form validation where all inputs are required.
Rating can go from 1 - 5.


POST '/snacks'
Creates a new snack in the database.
Redirect back to the homepage after correctly creating the snack.

GET '/snacks/:id/edit'
Displays a the same form as the new snack page but is pre-populated with data from the specified snack. The form should include form validation where all inputs are required.

PUT '/snacks/:id'
Updates the specified snack in the database.
Redirect back to the homepage after correctly updating the snack.

DELETE '/snacks/:id'
Deletes the specified snack in the database.
Redirect back to the homepage after correctly updating the snack.
