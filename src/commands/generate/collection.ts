import { Args, Command, Flags } from '@oclif/core';
import { mkdirSync, readFileSync, writeFileSync } from 'fs';
import { compile } from 'handlebars';
import { LogEmoji } from '../../lib/Logging/LogEmoji';
import { Logger } from '../../lib/Logging/Logger';
import { stencl } from '../../lib/Stencl';

export default class Collection extends Command {
    static description = 'generate a collection of templates';

    static examples = [
        `<%= config.bin %> <%= command.id %>
hello world! (./src/commands/hello/world.ts)
`
    ];

    static flags = {
        config: Flags.string({
            char: 'c',
            description: 'path to config file',
            required: true
        }),
        dryRun: Flags.boolean({
            char: 'd',
            description: 'dry run'
        }),
        group: Flags.string({
            char: 'g',
            description: 'group of the collection',
            multiple: true,
            required: true
        }),
        name: Flags.string({
            char: 'n',
            description: 'name of the collection',
            required: true
        }),
        output: Flags.string({
            char: 'o',
            description: 'path to output directory'
        })
    };
    static args = {
        name: Args.string({
            description: 'name of the collection',
            required: true
        })
    };

    async run(): Promise<void> {
        const { args, flags } = await this.parse(Collection);
        const config = stencl.loadConfig(flags.config);

        for (let g of flags.group) {
            for (let s of config.collections[flags.name].groups[g]) {
                const schematic = config.collections[flags.name].schematics.find(sc => sc.name == s);
                const content = readFileSync(`${ config.collections[flags.name].path }/${ schematic.input }`, 'utf8');
                const template = compile(content);
                const filename = compile(schematic.output.filename);
                const path = compile(schematic.output.path);

                Logger.info(`Generating ${ s } (from ${ config.collections[flags.name].path }/${ schematic.input } -> ${ filename({ ...args }) })`, LogEmoji.SUCCESS, 'COLLECTION GENERATE');

                mkdirSync(`${ flags.output }/${ path({ ...args }) }`, { recursive: true });
                writeFileSync(`${ flags.output }/${ path({ ...args }) }/${ filename({ ...args }) }`, template({ ...args }), 'utf8');
            }
        }

        // // const { args, flags } = await this.parse(Collection);
        // // let vars: { [k: string]: any } = {};
        // //
        // // for (let c of flags.collection) {
        // //     console.log(stencl.process(stencl.config.collections[c], {}));
        // // }
    }
}

