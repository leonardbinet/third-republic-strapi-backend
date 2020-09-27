# Third Republic maps backend

This repository contains the code for the backend application, based on [strapi](https://strapi.io/), serving an API for a front website still to be coded.

## Local development

To run locally based on sqlite database:

```
yarn develop
```

## Google Cloud deployment

To deploy to Google Cloud with App Engine, using a remote PostgreSQL database:

Copy `app.yml.dist` file in `app.yml` file, fill with proper credentials.

Then run:

```
gcloud init
gcloud app deploy app.yml --project <project-name>
```

Strapi provides an deployment example [here](https://strapi.io/documentation/v3.x/deployment/google-app-engine.html).
