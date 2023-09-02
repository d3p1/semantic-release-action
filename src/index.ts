/**
 * @description Automate release processes using `semantic-release`
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 * @link        https://semantic-release.gitbook.io/semantic-release/
 */
// prettier-ignore
import * as core  from '@actions/core';
import {execSync} from 'child_process';

/**
 * Action entry point
 * @returns {Promise<void>} Resolves when the action is completed
 */
export async function run(): Promise<void> {
  try {
    /**
     * @note Install `semantic-release` and needed plugins
     */
    // prettier-ignore
    execSync(
      `npm i \
    semantic-release \
    @semantic-release/changelog \
    @semantic-release/git`, {
      stdio: 'inherit'
    });

    /**
     * @note Exec `semantic-release` with required configuration
     */
    // prettier-ignore
    execSync(
      `npx semantic-release \
    --branches "main" \
    --plugins "@semantic-release/commit-analyzer,\
    @semantic-release/release-notes-generator,\
    @semantic-release/changelog,\
    @semantic-release/npm,@semantic-release/git"`, {
      stdio: 'inherit'
    });
  } catch (error) {
    /**
     * @note Fail the workflow run if an error occurs
     */
    if (error instanceof Error) {
      core.setFailed(error.message);
    }
  }
}

/**
 * @note Execute action
 */
// eslint-disable-next-line @typescript-eslint/no-floating-promises
run();
