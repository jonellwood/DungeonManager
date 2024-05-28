# dungeon-dashboard

Everything you need to run multiple campaigns

## This is a home grown app for our games

If you don't like it - fork off. 🤓

## TODO's

### Auth

- !!! Fix broken login with signup, signin buttons only showing when logged in. Logout button shows otherwise ... smh
- Add "confirm password" input field and logic
- Figure out how to return server errors to client and display them for validation purposes (unique username, validation issue such as length, etc... as well as "Invalid username or password errors. )
- Clear sessionCookies when loading log in form? no wait... check for sessionCookie at login form and if found redirect accordingly...yeah that sounds more gooder.

### Campaigns

- Flesh out basic fields needed for a campaign. Make sure and add event.locals.user.is to insert statement for a new campaign to control access
- Make create campaign route, form, and logic....
- Use State to select a campaign, set as "Current Campaign" type value ... use this value to later select a Monster and "Add to campaign & encounter"

### Encounters

- Array of available mobs in a side menu, that can be clicked to insert into the encounter.
- Encounter simulator. Formula to take player stats, mob stats, and simulated dice rolls to see probable outcomes and assign a difficulty score to an encounter. !!!

### Clean Up

- Fix wonky footer position
