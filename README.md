# Verbose-Rotary-Phone

Making a concept re-creation environment.

- Text
- Drawing
- Images
- Video

- Links to other concepts/files
- Links to components on the same page


- Saving/Loading
- Forking/Merging

- mobile first -> most people have a mobile in pocket, ease of access/use
  - double tap to create
- pointer events

Open-Source clientside app here we come.

TODO:

1. text-objects
   1. links to the objects
   2. app transitions to object
      1. jump within page
      2. fades out/loading/in to another page
2. storage & storage navigation
   1. local storage save & load
   2. navigator of files
3. service worker
   1. intercept connections to route towards local-storage

The initial part of displaying a files history is the git command `git log`
Github's display of the histroy is a returned result of this command.
Github uses a url scheme like so:
`https://github.com/mrdoob/three.js/commits/dev?after=3a9152af37e7879e5ed41cb60c549e6a78df57aa+104&branch=dev`
which pressumably feeds back into the git log command.

Another question for a later time is: how does the user interface support interactions with git?

To create a git history to search through, those commits must be created. What's the difference between saving and creating a git commit? when would the user?