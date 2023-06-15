
# Watch Queue FrontEnd

WatchQueue is a simple project with authentication system and in turn consumes an external API of movies, to display it in the home of each user so that it can add them to their list of favorite movies.

## Demo

:link: [Website url](https://d6z4dhdk2wcm6.cloudfront.net)

## Architecture

![Architecture](/public/images/architecture.png)

## CI/CD

1. The developer is in charge of creating the corresponding functionalities on his local machine and once finished, performs a git push to a feature-branch, bugfix-branch, etc.

2. Once the changes are in the github, a github action is executed, which is located at: :link: [Github action - tests](https://github.com/DS2-Univalle/watch-queue-frontend/blob/main/.github/workflows/tests.yml). This action is in charge of performing the unit tests of the application and executing a code scan with sonarcloud.
In our case, we use karma to run the unit tests for each component with the follow command: `ng test` :link: [Karma](https://karma-runner.github.io).


3. If the tests pass, the developer is responsible for sending a pull request to the develop branch.

4. A review of the develop branch is performed, executing functional and integral tests, and if everything works well, a pull request is sent to the main branch.

5. These changes must have been reviewed by at least 2 developers of the team and if both approve these changes, the merge to the main branch is performed.

6. Deployment: At this point, the deploy github action is executed in aws :link: [Github action - Deploy aws](https://github.com/DS2-Univalle/watch-queue-frontend/blob/main/.github/workflows/deploy-aws.yml), this action is in charge of installing the dependencies, building the application, validating the AWS credentials and updating the files in amazon s3 and cloudfront, respectively.

### Testing results

![Sonarcloud](/public/images/sonarcloud.png)

## Notifications

Our repository is associated to slack, so every time a commit, push, pull request, or merge is performed, it notifies each of the developers, and a joint group we have.

:link: [Slack](https://app.slack.com/client/T053Q1SDB5E/C0532R2T528)

![Slack](/public/images/slack.png)

## Initialization 
1. Download and install [Node 18.12.1](https://nodejs.org/download/release/v18.12.1/)
2. Clone this repository 
3. Install development dependencies
  `npm install` 

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.


## Config VSCode extensions for eslint and prettier:
Search and install the extensions
```
dbaeumer.vscode-eslint
esbenp.prettier-vscode
```
Add the following to your .vscode/settings.json file:
```
{
  ...
  "[html]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.codeActionsOnSave": {
      "source.fixAll.eslint": true
    },
    "editor.formatOnSave": true
  },
  "[typescript]": {
    "editor.defaultFormatter": "dbaeumer.vscode-eslint",
    "editor.codeActionsOnSave": {
      "source.fixAll.eslint": true
    },
    "editor.formatOnSave": true
  },
  "editor.suggest.snippetsPreventQuickSuggestions": false,
  "editor.inlineSuggest.enabled": true,
  ...
},

```