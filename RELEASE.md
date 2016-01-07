# Release trypyramid.com

## How to release a new version of trypyramid.com

We use semantic versioning.

- Open `package.json`.
    - For patch releases, note the current minor version is in development,
      e.g., `0.1.0-dev`. Temporarily bump the version to the next higher patch
      number above the previous release, e.g., `0.0.0` to `0.0.1`.
    - For minor and major releases, temporarily bump the release number without
      `-dev`, i.e., `0.1.0`.
- Run `$ npm run dist`.
- Commit with a message as the new version, e.g., `v0.1.0`.
- Tag this commit to the same version, e.g., `v0.1.0`.
- Push the commit and tags with `git push --tags`, and publish to GitHub.
- Back to work, bump version in `package.json`, i.e., `0.2.0-dev`.
- Commit with a message "back to work", and push to GitHub.

## How to publish master to trypyramid.com

- Be sure your public key has been added to marketing.pylonsproject.org.
- Setup remote production:
- `$ git remote add production ssh://pylons@marketing.pylonsproject.org/home/pylons/repos/trypyramid.com.git`
- Push to remote production:
- `$ git push production master`
