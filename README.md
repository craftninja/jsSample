# README

### Oh Hai

### How this was setup:

1. `$ mkdir whatever` and cd into it
1. `$ yarn init -y`
1. `$ git init`
1. `$ yarn add --dev jasmine`
1. `$ echo /node_modules >> .gitignore`
1. `$ touch spec/main.spec.js` and add the following content:

    ```js
    describe('Jasmine', () => {
      it('is set up in basic repo', () => {
        expect(true).toBe(false);
      });
    });
    ```
1. update your package so the test script is `"jasmine"`
1. `$ yarn test`
1. update your tests so they pass and commit
1. update `spec/support/jasmine.json` to have a configure key with an object as the value, and move the two configuration settings within the object (`stopSpecOnExpectationFailure` and `random`) to resolve deprication warnings

### Adding CircleCI

1. Go to your CircleCI dashboard and add a project, click `Set Up Project`
1. Follow the `Next Steps` to add the `.circleci/config.yml` file and update as necessary
1. Add the node version specified in the config file as a requirement in package.json at the root of the object, perhaps:

    ```json
    "engines": {
      "node": ">=10.12.0"
    },
    ```
