# Color Inc Level Creator

This is small project made for PipPop! Studios and it's to create levels for the Color Inc game with an interactive user.
This app allows user to login, create, delete and download Color Inc levels.

Levels and authentication are all managed by Firebase.

## Technologies

- Vite
- React
- Typescript
- Material UI
- ESLint
- Jotai
- Firebase
- Firestore

## Build and deploy steps

1. First we have to build the project. It is a strong suggestion to also run *npm run preview*, this will run your built project locally so you can test it before pushing it to gh-pages.
2. Add all files to satging area
3. Commit last changes
4. Push dist folder to gh-pages branch, this branch is the one that github will use to deploy the website.

```bash
npm run build
git add .
git commit -m "Deploy message"
git subtree push --prefix dist origin gh-pages
```
