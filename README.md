Instructions on how to run:
- npm i
- Add clerk credentials on .env
- npm run dev

if you navigate to http://localhost:3000/register?test=working you will see that the query param is being printed as well as clerk's publishable key.

if you run `npm run test` the login page's test will pass and it will verify that next router was properly mocked, but it will fail on register page.
