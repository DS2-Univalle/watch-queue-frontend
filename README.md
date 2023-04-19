# WatchQueue
Web platform for the management of movies pending viewing by a user
### Initialization 
1. Download and install [Node 18.12.1](https://nodejs.org/download/release/v18.12.1/)
2. Clone this repository 
3. Install development dependencies
  `npm install` 

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

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

Configuración con Slack
