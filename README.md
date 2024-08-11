# robust-server-structure-solution
 Robust server structure: URL shortener service
 Note: If downloading the assessment files to your local machine, make sure you're running Node v18 before you run npm install.

 Check which version you are running: node -v
 If needed, change the version to v18: nvm use v18

# Tasks
Create routes and handlers to create, read, update, delete, and list short URLs
You will need to create the following API endpoints for the urls resources:

# HTTP verb	Path	Description
POST	/urls	Create a new short URL.
GET	/urls/:urlId	Retrieve a short URL by ID.
PUT	/urls/:urlId	Update a short URL by ID.
GET	/urls	Retrieve a list of all short URLs.
GET	/urls/:urlId/uses	Retrieve a list of use metrics for a given short URL ID.
GET	/urls/:urlId/uses/:useId	Retrieve a use metric by ID for a given short URL ID.
