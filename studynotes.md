* heroku login
* heroku create
* heroku apps:rename newname
* git push heroku master
* heroku open
* heroku logs
* heroku ps -see how many dynos are running
* npm install (to generate package-lock.json) - this step is to run app locally
* heroku local
* git remote add origin https://github.com/joaquinfox/udemy_coursework.git
* heroku open routename
* heroku addons:create addonname (to add a new addon)
* heroku addons (to see addons)
* heroku addons:open addonname
* heroku run bash (I think this isn't very useful since i have the IDE)
        - exit

MONGODB
* heroku addons:create mongolab:sandbox
 * mongolab-opaque-75877
* heroku addons:docs mongolab
* heroku config:get MONGODB_URI
* 