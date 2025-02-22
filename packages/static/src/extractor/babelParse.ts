import * as babelParser from '@babel/parser'

const plugins: babelParser.ParserPlugin[] = [
  'asyncGenerators',
  'classProperties',
  'dynamicImport',
  'functionBind',
  'jsx',
  'numericSeparator',
  'objectRestSpread',
  'optionalCatchBinding',
  'decorators-legacy',
  'typescript',
  'optionalChaining',
  'nullishCoalescingOperator',
]

export const parserOptions: babelParser.ParserOptions = Object.freeze({
  plugins,
  sourceType: 'module',
})

const parser = babelParser.parse.bind(babelParser)

export function babelParse(code: string | Buffer): any {
  return parser(code.toString(), parserOptions)
}
