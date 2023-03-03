import { Command } from '@oclif/core';

export default class Generate extends Command {
    static description = 'Say hello';

    static examples = [
        `$ oex hello friend --from oclif
hello friend from oclif! (./src/commands/hello/index.ts)
`
    ];

    static flags = {};

    static args = {};

    async run(): Promise<void> {
        console.log(234234);
        return;
        //   const { args, flags } = await this.parse(Hello);
        //
        //   this.log(`hello ${ args.person } from ${ flags.from }! (./src/commands/hello/index.ts)`);
    }
}
