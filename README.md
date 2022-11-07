## Todo

##### Priorities

##### Mid Priorities

- [ ] Allow ADMIN to update image on certain level

## In Progress
- [ ] Add and improve logging
  - Study wether to use Morgan or other logging lib

## Done ✓

- [x] Add necessary dependencies
- [x] Add MongoDB connection
- [x] Add route to create a _level_
- [x] Create Github Repo
- [x] Create initial server configuration
- [x] Add route to get all _levels_ at once
- [x] Add route to delete an _level_
- [x] Add route to update an _level_
- [x] Create .env local file
- [x] Add and Setup Cors
- [x] Add admin model and routes
- [x] Add authentication
- [x] Authorization handling for admin to add/delete/update _levels_
- [x] Allow unauthorized routes: 'get'- [x] Decide how to send image to client
  - [-] Send image data through bytes with formdata ([Related Stackoverflow Question](https://stackoverflow.com/questions/50880939/creating-a-nodejs-server-that-send-response-with-multipart-form-data/50883981#50883981))
  - [x] Send image name and pull it through api static file (Current solution)
- [x] Improve error handling
- [x] Add route for user to update level answered stats
- [x] Handle proper development (local) and production enviromnents
- [x] Prepare for production release
