# Team City-of-London-UK 2023 Wiki

![Gitlab pipeline status (self-managed)](https://img.shields.io/gitlab/pipeline-status/2023%2Fcity-of-london-uk?gitlab_url=https%3A%2F%2Fgitlab.igem.org%2F&label=deploy%20(iGEM%20GitLab))
![RelativeCI Bundle Size](https://badges.relative-ci.com/badges/ohuRKjkV82qKkHi81r9e?branch=main)

## Preface

This repository **MUST** contain all coding assets to generate your team's wiki (HTML, CSS, JavaScript, TypeScript, Python, etc).

Images, photos, icons and fonts **MUST** be stored on `static.igem.wiki` using [uploads.igem.org](https://uploads.igem.org), and Videos **must** be embedded from [iGEM Video Universe](https://video.igem.org).

For up-to-date requirements, resources, help and guidance, visit [competition.igem.org/deliverables/team-wiki](https://competition.igem.org/deliverables/team-wiki).

## Getting started

This Wiki is built using [TypeScript](https://typescriptlang.org/), [React](https://react.dev/), and [Gatsby](https://gatsbyjs.com).

1. Install [Node.js](https://nodejs.org/en/download)

2. Install [Git](https://git-scm.com/downloads)

3. Clone (download) the repository

   `git clone https://2023.igem.wiki/city-of-london-uk/`

   or

   `git clone https://github.com/genoswitch/wiki`

4. `cd` into the wiki directory

5. Install dependencies with `npm i --no-scripts`

6. Done! You can preview your changes in real time by running `npm start`.

### Making changes

> More information about branches in Git can be found [here](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-branches).

Once you are done, save the changes by **committing** them to a new branch of the repository.

## About this Template

### Files

The static assets are in the `static` directory. The layout and templates are in the `wiki` directory, and the pages live in the `wiki > pages` directory. Unless you are an experienced and/or adventurous human, you probably shouldn't change other files.

    |__ static/             -> static assets (CSS and JavaScript files only)
    |__ wiki/               -> Main directory for the pages and layouts
        |__ footer.html     -> Footer that will appear in all the pages
        |__ layout.html     -> Main layout of your wiki. All the pages will follow its structure
        |__ menu.html       -> Menu that will appear in all the pages
        |__ pages/          -> Directory for all the pages
            |__ *.html      -> Actual pages of your wiki
    |__ .gitignore          -> Tells GitLab which files/directories should not be uploaded to the repository
    |__ .gitlab-ci.yml      -> Automated flow for building, testing and deploying your website.
    |__ LICENSE             -> License CC-by-4.0, all wikis are required to have this license - DO NOT MODIFY
    |__ README.md           -> File containing the text you are reading right now
    |__ app.py              -> Python code managing your wiki
    |__ dependencies.txt    -> Software dependencies from the Python code

### Technologies

- [GitLab Pages](https://docs.gitlab.com/ee/user/project/pages/)
- [Python](https://www.python.org): Programming language
- [Flask](https://palletsprojects.com/p/flask/): Python framework
- [Fronzen-Flask](https://pythonhosted.org/Frozen-Flask): Library that builds the wiki to be deployed as a static website
- [Bootstrap](https://getbootstrap.com/docs/5.0/components): CSS and JS components used

### Building locally (advanced users)

To work locally with this project, follow the steps below:

#### Install

```bash
git clone https://gitlab.igem.org/2023/city-of-london-uk.git
cd city-of-london-uk
python3 -m venv venv
. venv/bin/activate # on Linux, MacOS; or
. venv\Scripts\activate # on Windows
pip install -r dependencies.txt
```

#### Execute

```bash
python app.py
```
