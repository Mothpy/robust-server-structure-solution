# robust-server-structure-solution
 Robust server structure: URL shortener service
 
 Note: If downloading the assessment files to your local machine, make sure you're running Node v18 before you run npm install.

 Check which version you are running: node -v
 
 If needed, change the version to v18: nvm use v18

## Tasks
Create routes and handlers to create, read, update, delete, and list short URLs

You will need to create the following API endpoints for the urls resources:

## HTTP verb	Path	Description
1. POST	/urls	Create a new short URL.
1. GET	/urls/:urlId	Retrieve a short URL by ID.
1. PUT	/urls/:urlId	Update a short URL by ID.
1. GET	/urls	Retrieve a list of all short URLs.
1. GET	/urls/:urlId/uses	Retrieve a list of use metrics for a given short URL ID.
1. GET	/urls/:urlId/uses/:useId	Retrieve a use metric by ID for a given short URL ID.

## Create routes and handlers to create, read, update, delete, and list use metrics related to short URLs

You will need to create the following API endpoints for the uses resources:

## HTTP verb	Path	Description
1. GET	/uses/:useId	Retrieve a use metric by ID.
1. DELETE	/uses/:useId	Delete a use metric by ID.
1. GET	/uses	Retrieve a list of all use metrics.
