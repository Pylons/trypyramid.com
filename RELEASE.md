# Release trypyramid.com

## How to release a new version of trypyramid.com

We use [semantic versioning](http://semver.org/).

- Open `package.json`.
- Temporarily remove `-dev` from the version number.
- Run `$ npm run dist`.
- Load the dist locally (until we have a staging/test environment) to ensure
  the dist works the same as the result from `npm run dev`.
- Add files in `dist` to the commit.
- Commit with a message as the new version, e.g., `v0.1.0`.
- Tag this commit to the same version, e.g., `v0.1.0`.
- Push the commit and tags with `git push --tags`, and publish to GitHub.
- Back to dev work, in `package.json`, increment the version number for
  `major.minor.patch`, e.g., a patch would go from `0.1.0` to `0.1.1`. Also
  append `-dev`. This should yield a version number like `0.1.1-dev`.
- Commit with the message "back to work", and push to GitHub.

## How to publish master to trypyramid.com

- Be sure your public key has been added to `marketing.pylonsproject.org`.
- Setup remote production:
    ```bash
    $ git remote add production ssh://pylons@marketing.pylonsproject.org/home/pylons/repos/trypyramid.com.git
    ```
- Push to remote production:
    ```bash
    $ git push production master
    ```
