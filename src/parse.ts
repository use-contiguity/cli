import yargs from 'yargs'
import { sendCommand } from './commands/send.ts'
import { clearKeyCommand, setKeyCommand } from './commands/key.ts'

export async function parse(args: string[]) {
  return await yargs(args)
    .scriptName('contiguity')
    .option('key', {
      alias: 'k',
      describe: 'Your Contiguity key',
      type: 'string',
    })
    .option('mock', {
      alias: 'm',
      type: 'boolean',
      describe: 'Mock all API requests, key not needed',
    })
    .command(sendCommand)
    .command(setKeyCommand)
    .command(clearKeyCommand)
    .alias('h', 'help')
    .alias('v', 'version')
    .exitProcess(false)
    .parserConfiguration({
      'parse-numbers': false,
    })
    .parse()
}
