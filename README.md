# conserve-animals-wildcards

## General Idea

Uses 3Box's threads per animal that are publicly open. Here you have IPFS hashes and metadata about the submission, such as artist, submission comment, and any other pinata metadata.

When the user submits art, a private (in the sense that noone except the admin and the submitter can edit it) thread for communication purposes is created between the artist and the admin (this part is not working because the chatbox component does not allow you to specify thread's orbitdb url).

The artist has the ability to make a submission from their own panel, or from the home page (not done, but it would be easy to hook this up). Once submitted, it is added to their table of submissions, where they can also see the status of their submissions.

Next, it is the admins who give the feedback in the private thread and change the status of the submission accordingly (in admin panel).

## How to start

To start the app, you need the following env variables (you can place them in the `.env` file in the root directory)

There is a bunch of env variables that you need to define to get this working:

REACT_APP_ADMIN=0x4231231231231231231231

REACT_APP_PINATA_API_KEY=a23124k34o23o4io

REACT_APP_PINATA_SECRET_API_KEY=sadkasjdkjaklsjdklasjkdljaklsj

REACT_APP_ADMIN_PASSWORD=root

REACT_APP_3ID=did:3:sjasklklsjfklsdjklfjsdkljfklj


You can access the admin panel at /admin/:pwd, where :pwd is the password from the environment variable

And then

```bash
yarn
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
