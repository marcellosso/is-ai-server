## Todo

##### Priorities
- [ ] Handle proper development (local) and production enviromnents
- [ ] Prepare for production release

##### Mid Priorities
- [ ] Add and improve logging
  - Study wether to use Morgan or other logging lib
- [ ] Allow ADMIN to update image on certain level

## In Progress
- [ ] Decide how to send image to client
  - [ ] Send image data through bytes with formdata ([Related Stackoverflow Question](https://stackoverflow.com/questions/50880939/creating-a-nodejs-server-that-send-response-with-multipart-form-data/50883981#50883981))
  - [ ] Send image name and pull it through api static file (Current solution)
- [ ] Improve error handling

## Done ✓

- [X] Add necessary dependencies
- [X] Add MongoDB connection
- [x] Add route to create a *level*
- [X] Create Github Repo
- [X] Create initial server configuration
- [X] Add route to get all *levels* at once
- [X] Add route to delete an *level*
- [X] Add route to update an *level*
- [X] Create .env local file
- [X] Add and Setup Cors
- [X] Add admin model and routes
- [X] Add authentication
- [X] Authorization handling for admin to add/delete/update *levels*
- [X] Allow unauthorized routes: 'get'