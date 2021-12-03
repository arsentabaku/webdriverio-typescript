# How to run the project?
1. Run *npm i* to install all required dependecies.
2. Create the *e2e.env.json* file under *src/config* and update with the content below:

{
    "BROWSERSTACK_USERNAME": "xxx",
    "BROWSERSTACK_ACCESS_KEY": "xxx",
    "BROWSERSTACK_APP_ID_ANDROID": "xxx",
    "BROWSERSTACK_APP_ID_IOS": "xxx"
}

3. Update the *xxx* values with real values from your account in browserstack.
4. Run *npm run e2e.ios* or *npm run e2e.android* to run the tests.