# README

### Oh Hai

### How this was made:

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
