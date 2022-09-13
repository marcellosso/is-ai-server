## Todo

##### Priorities

- [ ] Decide how to send image to client
  - [ ] Send image data through bytes with formdata ([Related Stackoverflow Question](https://stackoverflow.com/questions/50880939/creating-a-nodejs-server-that-send-response-with-multipart-form-data/50883981#50883981))
  - [ ] Send image name and pull it through api static file (Current solution)
- [ ] Authorization handling for admin to add/delete/update *levels*
- [ ] Allow unauthorized routes: 'get'
- [ ] Improve error handling

#####Semi-Priorities
- [ ] Add and improve logging
  - Study wether to use Morgan or other logging lib
- [ ] Allow ADMIN to update image on certain level

## In Progress
- [ ] Add admin model and routes
- [ ] Add authentication

## Done ✓

- [X] Add necessary dependencies
- [X] Add MongoDB connection
- [x] Add route to create a *level*
- [X] Create Github Repo
- [X] Create initial server configuration
- [X] Add route to get all *levels* at once
- [X] Add route to delete an *level*
- [X] Add route to update an *level*