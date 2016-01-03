# Release trypyramid.com

How to release a new version of trypyramid.com

- Bump version in package.json, ie: 0.0.0 to 0.1.0
- Run ```$ npm run dist```
- Commit using the new version, ie: v0.1.0
- Tag this commit to the same version, ie: v0.1.0
- Push and publish to Github
- Back to work, bump version in packages.json, ie: v0.2.0-dev

How to publish master to trypyramid.com

- Be sure your public key has been added to marketing.pylonsproject.org
- Setup remote production:
- ```$ git remote add production ssh://pylons@marketing.pylonsproject.org/home/pylons/repos/trypyramid.com.git```
- Push to remote production:
- ```$ git push production master```
