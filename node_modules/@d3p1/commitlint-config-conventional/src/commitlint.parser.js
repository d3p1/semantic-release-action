/**
 * @description Configuration for `commitlint` parser presets
 * @author      Cristian Marcelo de Picciotto <d3p1@d3p1.dev>
 * @note        Add ticket information
 * {@link       https://commitlint.js.org/#/reference-configuration?id=parser-presets}
 */
module.exports = {
  // prettier-ignore
  parserOpts: {
        headerPattern       : /^(\w+)\(?(\w*)\)?:\s(.+)\s\[(.+)\]$/,
        headerCorrespondence: ['type', 'scope', 'subject', 'ticket']
    }
};
