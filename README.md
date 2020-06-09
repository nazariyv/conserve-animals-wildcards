# conserve-animals-wildcards

## General Idea

Uses 3Box's threads per animal that are publicly open (persistent 3box threads, everyone can see these, and noone can post anything here). Here you have IPFS hashes and metadata about the submissions, such as artist, submission comment, and any other pinata metadata.

When the user submits art, a private (in the sense that noone except the admin and the submitter can edit it) thread for communication purposes. **[UNIMPLEMENTED]** This would be easy to implement given I have implemented the public threads. Consider using this component: https://github.com/open-tribe/3box-chatbox-react for persistent thread chat. 3box people on Discord & the author of this repo claim persistent threads are supported!

The artist has the ability to make a submission from their own panel, or from the home page **[the home page bit is unimplemented]**. Once submitted, it is added to their table of submissions, where they can also see the status of their submissions.

Next, it is the admins who give feedback in the private thread **(initially had the ipfs comments as the mechanism to give feedback, then removed them in favour of private 3box chat, which was not implemented ;))** and change the status of the submission accordingly.

## How to start

To start the app, you need the following env variables (you can place them in the `.env` file in the root directory)

There is a bunch of env variables that you need to define to get this working:

REACT_APP_ADMIN=0x4231231231231231231231

REACT_APP_ADMIN_ADDRESS

REACT_APP_ADMIN_PASSWORD

(copy `.env.example` into `.env`)

Where the last one is arbitrary. You then use it to access the admin panel at /admin/:pwd, where :pwd is the password from the environment variable

And then

```bash
yarn
yarn start
```

Here is the video demo: https://youtu.be/olXvtVuSikI

One last thing that is not mentioned in the video, if the user isn't browsing with a provider like MetaMask, a React hook from `harberger-lib` will open a modal in the app that will allow the user to create an Etereum address and hook it up with 3box.
