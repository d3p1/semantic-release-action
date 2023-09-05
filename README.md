<div align=center>

# [SEMANTIC RELEASIFY]

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![semantic-release: angular](https://img.shields.io/badge/semantic--release-angular-e10079?logo=semantic-release)](https://github.com/semantic-release/semantic-release)
[![Basic validation](https://github.com/d3p1/semantic-release-action/actions/workflows/basic-validation.yml/badge.svg)](https://github.com/d3p1/semantic-release-action/actions/workflows/basic-validation.yml)
[![CodeQL](https://github.com/d3p1/semantic-release-action/actions/workflows/codeql-analysis.yml/badge.svg)](https://github.com/d3p1/semantic-release-action/actions/workflows/codeql-analysis.yml)

</div>

## Introduction

A little [GitHub Action](https://docs.github.com/en/actions) for automated releases, changelogs, and package publishing with [`semantic-release`](https://semantic-release.gitbook.io/semantic-release/). 

[`semantic-release`](https://semantic-release.gitbook.io/semantic-release/) already has a [great explained recipe to configure a GitHub Action using its library](https://semantic-release.gitbook.io/semantic-release/recipes/ci-configurations/github-actions). The idea of this [GitHub Action](https://docs.github.com/en/actions) is to ecapsulate a basic [configuration](https://semantic-release.gitbook.io/semantic-release/usage/configuration) with basic [plugins](https://semantic-release.gitbook.io/semantic-release/usage/plugins) to have a handful and easy way to generate/update the project `CHANGELOG`, dispatch a GitHub release and publish the related package.

*(Note: For the moment, [it is only possible to publish to `npm` registries](https://github.com/d3p1/semantic-release-action/issues/7))*

## Usage

See [`action.yml`](./action.yml)

```yaml
- uses: d3p1/semantic-releasify@v1
  with:
    ##
    # @note The branch on which release should happen
    # @link https://semantic-release.gitbook.io/semantic-release/usage/configuration#branches
    ##
    branch: ''

    ##
    # @note The Git tag format used by semantic-release to identify releases
    # @link https://semantic-release.gitbook.io/semantic-release/usage/configuration#tagformat
    ##
    tag-format: ''
```

**Basic:**

```yaml
jobs:
  test-action:
    name   : Test
    runs-on: ubuntu-latest

    permissions:
      contents     : write 
      issues       : write 
      pull-requests: write 

    steps:
    - uses: actions/checkout@v3
      with:
        fetch-depth: 0
    - uses: d3p1/semantic-releasify@v1
```

The `branch` and `tag-format` inputs are optional. If not supplied, the targeted branch and [`v${version}` format](https://lodash.com/docs#template) will be used, respectively.

It is necessary to set the described [`permissions`](https://docs.github.com/en/actions/using-jobs/assigning-permissions-to-jobs), so the bot can execute the following actions:

- `contents: write`: Publish a release 
- `issues: write`: Comment on released issues  
- `pull-requests: write`: Comment on released pull requests  

Also, if you want to publish the module/package to [`npm`](https://www.npmjs.com/), it is necessary to [set `private: true` within your `package.json`](https://semantic-release.gitbook.io/semantic-release/support/faq#why-is-the-package) and to [configure the `NPM_TOKEN`](https://semantic-release.gitbook.io/semantic-release/usage/ci-configuration) as [secret](https://docs.github.com/en/actions/security-guides/using-secrets-in-github-actions). Visit the used [`@semantic-release/npm` plugin for more information](https://github.com/semantic-release/npm).

## Changelog

Detailed changes for each release are documented in [`CHANGELOG.md`](./CHANGELOG.md).

## License

This work is published under [MIT License](./LICENSE).

## Author

Always happy to receive a greeting on:

- [LinkedIn](https://www.linkedin.com/in/cristian-marcelo-de-picciotto/) 
- [Twitter](https://twitter.com/___d3p1)
- [Blog](https://d3p1.dev/)