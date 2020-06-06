# conserve-animals-wildcards

## General Idea

Uses 3Box's threads per animal that are publicly open. Here you have IPFS hashes and metadata about the submission, such as artist, submission comment, and any other pinata metadata.

When the user submits art, a private (in the sense that noone except the admin and the submitter can edit it) thread for communication purposes.

The artist has the ability to make a submission from their own panel, or from the home page. Once submitted, it is added to their table of submissions, where they can also see the status of their submissions.

Next, it is admins who give feedback in the private thread and change the status of the submission accordingly.

## How to start

To start the app, you need the following env variables (you can place them in the `.env` file in the root directory)

REACT_APP_PINATA_API_KEY

REACT_APP_PINATA_SECRET_API_KEY

REACT_APP_ADMIN_PASSWORD

Where the last one is arbitrary. You then use it to access the admin panel at /admin/:pwd, where :pwd is the password from the environment variable

And then

```bash
yarn install
yarn start
```

## What is this?

This is the submission for Wildcards streamlining of art submissions. I have spent around 10 hours on this, I have pre-set this threshold for myself. And that is why some things may seem a bit rough.

The functionality introduced in this PR includes artist's panel. The artist is able to submit their art to IPFS (by using **OUR** pinata api key).

They are also able to view all of their submisisons. The app has sensible error handling.

Admin panel is added too.

You can learn more about what I have done by watching [this video]("https://www.youtube.com/watch?v=cVjXuzDbmvo")

Note: there are now additions not mentioned in that video. I have added 3Box integration, however there is a problem. It appears that the 3box-react-chatbox component creates threads on the fly and does not
allow you to specify the orbitdb path of the pre-created threads, this causes weird behaviour. And so
the requirement of having a thread per animal and having a private thread between the submitter and the
admin is not satisfied here.

I have recorded about the submission.

I will also post a "timelapse" video of me writing this.
