/**
 * @description Unit tests for the action's entrypoint, src/index.ts
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 * @note        These should be run as if the action was called from a workflow.
 *              Specifically, the inputs listed in `action.yml` should be set
 *              as environment variables following the pattern
 *              `INPUT_<INPUT_NAME>`
 */
import * as index from '../src/index';

/**
 * @note Mock the action's entrypoint
 */
const runMock = jest.spyOn(index, 'run');

/**
 * @todo Improve tests
 */
describe('action', () => {
  it('check basic run', async () => {
    await index.run();
    expect(runMock).toHaveReturned();
  });
});
