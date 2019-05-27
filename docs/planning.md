# Overview.

While it's easy to complete to technical requirement for the project, I personally think it's a good case to showcase my understanding of a good architecture of Full Stack project, and demonstrate wide range of skill.

Therefore a time will be allocated in between hand in documenting and testing, and the other half in actual Full Stack Dev.

Let's dance.

# Front End

On the Front End, I'm goin with Angular 7 + BootStrap 4. To save time, I am going to choose a boilerplate/scaffolding tool. TODO

As I am going to use AWS for the backend (explanation below), I am going to choose a bootstrap that's performant and front-end only.

A quick search leads to to [most-update to-date starter-ket](https://github.com/ngx-rocket/starter-kit).

It fulfills the requirement of Angular + BootStrap. It also has a good structure setup for e2e testing and good docs. One thing it lacks is the CI config with Travis, but I can add that myself relatively easy.

For more info on this Starter Kit, please see [Thier Docs](https://github.com/ngx-rocket/starter-kit).

# Backend

There's a few ways to do this.

For small-scale projects, first I'd think of would be WordPress + CPT + ACF + REST API Filter. It's by far the fastest to setup and easy to maintain thanks to WordPress's aseesome CMS.

However, since we need to consider performance and scalability, and we wanna get it up and running ASAP, I'm going with AWS Serverless architecture.

For more info please see Back End Repo at [NgSkool_Lambda](https://github.com/jacktator/NgSkool_Lambda).

# Hosting

As this project only requires a static file hosting for Angular+BootStrap, I'd be considering between AWS S3 & [Github Pages](https://help.github.com/en/articles/what-is-github-pages), TBD.

# Documentation

Documentation is to be done in MarkDown.

In file comments are also added whenever possible to help understanding.

Using [JSDoc](https://github.com/jsdoc/jsdoc) flavour.

# Tools

Mainly using [WebStorm](https://www.jetbrains.com/webstorm/) and its plugins to code front-end.

Mainly using AWS Lambda, REST API and [Postman Collections](https://learning.getpostman.com/docs/postman/collections/creating_collections/) to manage APIs.

# Version Control

Git & Github.
Plan is to create branches for features, and merge to master only for CI/CD.

# Deployment

Front-End requires a 'build' process to generate static resources. Which will be deployed to AWS S3 / Github Pages.

Back-End is already on AWS. Using Postman to test it.

# Continuous Integration & Testing

Plan is to write unit tests for adding schools. I'll try to write tests, depending on time allowance.

# Continuous Delivery

Plan is to use Travis to build Angular project, and have it built, tested, and deployed to AWS S3 / Github Pages.
