# JS Band Store application

## About us

JS Band Store application is an online bookstore where a user can choose a book for himself and buy it.\
We have a large catalog and a user-friendly intuitive interface.

## The project has implemented

* User can log in with username;
* Browse books catalog;
* Search book by title;
* Filter book by price;
* Browse specific book details;
* Add a specific book to cart;
* Browse Cart with added books;
* Make a purchase of added books;

## For task implementation i use

* React, Redux;
* Functional React components;
* Create React App as a boilerplate;
* eslint-config-airbnb config for ESLint;
* [Github pages](https://evgenii-del.github.io/react-book-shop);
* [Github project](https://github.com/evgenii-del/react-book-shop/projects/1);
* Jest for testing;
* Husky for pre-commit.

## Scenarios

1. User goes to the JS Band store website;
2. If User unauthorized System redirects the user to the Login page;
3. User login with username, System return user token, redirects User to the Book catalog and store token in
   LocalStorage and Application State;
4. User see the list of books; Search by book name, filter list by the price;
5. User navigate to the specific Book details clicking on book card;
6. User choose the needed book, sees the price, and add the book to the cart. Then User can navigate back to the
   catalog;
7. User goes to the Cart, see order list and press 'Purchase' button;
8. System place order, show a modal window with ordered items and successful message, and clear the cart;
9. Then User sign out, System redirects the User to the Login screen.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run deploy`

Publish files to a gh-pages branch on GitHub.

Open [react-book-app](https://evgenii-del.github.io/react-book-shop)

### `npm run lint`

ESLint statically analyzes your code to quickly find problems.

### `npm run lint:fix`

ESLint try to fix as many issues as possible.\
The fixes are made to the actual files themselves and only the remaining unfixed issues are output.

### `npm run prettier:write`

Prettier is great for formatting everything, but for a big project it might take a little while.

### `npm test`

Launches the test runner in the interactive watch mode.\
Jest is used for testing.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Learn More

You can learn more in
the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved
here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved
here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved
here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved
here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved
here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved
here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
