# Contributing

All projects under the Pylons Projects, including this one, follow the guidelines established at [How to Contribute](https://pylonsproject.org/community-how-to-contribute.html), [Coding Style and Standards](https://pylonsproject.org/community-coding-style-standards.html), and [Pylons Project Documentation Style Guide](https://docs.pylonsproject.org/projects/docs-style-guide/).

You can contribute to this project in several ways.

*   [File an Issue on GitHub](https://github.com/Pylons/trypyramid.com/issues)
*   Fork this project, create a new branch, commit your suggested change, and push to your fork on GitHub.
    When ready, submit a pull request for consideration.
    [GitHub Flow](https://guides.github.com/introduction/flow/index.html) describes the workflow process and why it's a good practice.
    When submitting a pull request, sign [CONTRIBUTORS.md](https://github.com/Pylons/trypyramid.com/blob/master/CONTRIBUTORS.md) if you have not yet done so.
*   Join the [IRC channel #pyramid on irc.freenode.net](https://webchat.freenode.net/?channels=pyramid).

## Git Branches

Git branches and their purpose and status at the time of this writing are listed below.

*   [master](https://github.com/Pylons/trypyramid.com/) - The branch which should always be *deployable*. The default branch on GitHub.
*   For development, create a new branch. If changes on your new branch are accepted, they will be merged into the master branch and deployed.

## Prerequisites

Follow the instructions in [README.md](https://github.com/Pylons/trypyramid.com) to install the tools needed to run the project.

## Adding an Add-on to Extending Pyramid

We list official and community contributed add-ons under [Extending Pyramid](https://trypyramid.com/extending-pyramid.html).
To add an add-on:

1.  Create a new branch off of master.
2.  Copy an existing file in `data/addons/`, and rename it to your add-on's name.  For example, `data/addons/deform.yaml`.
2.  Edit it as needed, following YAML syntax.
3.  Optionally build the site locally to ensure it renders correctly.
4.  Submit a pull request with your changes.

### Example file and notes

```
addon: false
category:
- forms
demoUrl: https://deformdemo.pylonsproject.org/
description: A Python HTML form generation library.
docsUrl: https://docs.pylonsproject.org/projects/deform/en/latest/
maintainers:
- chrism
- miohtama
- ericoandrei
- stevepiercy
name: deform
projectUrl: ''
pypiUrl: https://pypi.org/project/deform
support: pylons
vcsUrl: https://github.com/Pylons/deform
```

-   `addon`: `true` or `false`. An add-on is a package which relies on Pyramid itself and extends the functionality of Pyramid.
-   `category`: Select at least one but don't go crazy, or suggest a new category. Categories include:
    - api
    - asset-management
    - async
    - authentication
    - authorization
    - caching-and-sessions
    - configuration
    - debugging
    - development-environment
    - documentation
    - email
    - forms
    - internationalization-i18n
    - media-management
    - monitors
    - renderers
    - requests
    - routes
    - routing
    - scaffolds
    - search
    - services
    - sessions
    - storage
    - task-queueing
    - template-languages
    - testing
    - url-shorteners-and-managers
    - user-interface-and-user-experience-ui-and-ux
    - web-page-utilities
    - wsgi-servers
-   `demoUrl`: The URL of your package's demonstration. If none, then use the empty string `''`.
-   `description`: A description of your package.
-   `docsUrl`: The URL of your package's documentation. If none, then use the empty string `''`.
-   `maintainers`: A list of maintainers of your package on PyPI.
-   `name`: The name of your project.
-   `projectUrl`: The URL of your package's home page. If none, then use the empty string `''`.
-   `pypiUrl`: The URL of your package on PyPI. If none, then use the empty string `''`.
-   `support`: Select one of the following options.
    -   Official Pylons Project
    -   Community
    -   Unsupported
-   `vcsUrl`: The URL of your package's version control system, such as GitHub or Gitlab. If none, then use the empty string `''`.
