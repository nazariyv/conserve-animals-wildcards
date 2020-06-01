# conserve-animals-wildcards

## How to start

To start the app, you need the following env variables (you can place them in the `.env` file in the root directory)

REACT_APP_PINATA_API_KEY

REACT_APP_PINATA_SECRET_API_KEY

REACT_APP_ADMIN_PASSWORD

Where the last one is arbitrary. You then use it to access the admin panel at /admin/:pwd, where :pwd is the password from the environment variable

And then

```
yarn install
yarn start
```

## What is this?

This is the submission for Wildcards streamlining of art submissions. I have spent around 10 hours on this, I have pre-set this threshold for myself. And that is why some things may seem a bit rough.

The functionality introduced in this PR includes artist's panel. The artist is able to submit their art to IPFS (by using **OUR** pinata api key).

They are also able to view all of their submisisons. The app has sensible error handling.

Admin panel is added too.

You can learn more about what I have done by watching this video: https://www.youtube.com/watch?v=cVjXuzDbmvo

I have recorded about the submission.

I will also post a "timelapse" video of me writing this. 
