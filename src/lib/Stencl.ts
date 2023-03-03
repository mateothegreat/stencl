import { globSync } from 'glob';
import * as Handlebars from 'handlebars';
import * as path from 'path';
import { Config, Schematic } from './Config';

Handlebars.registerHelper('env', (context: string) => {
    for (let e in process.env) {
        if (e.toLowerCase() == context.toLowerCase()) {
            return process.env[e];
        }
    }
});

Handlebars.registerHelper('pascalCase', (context: string) => {
    return context.replace(/(\w)(\w*)/g, (g0: string, g1: string, g2: string) => {
        return g1.toUpperCase() + g2.toLowerCase();
    });
});

Handlebars.registerHelper('camelCase', (context: string) => {
    return context.match(/[a-z]+|\d+/gi).map((m: string, i: number) => {
        let low = m.toLowerCase();
        if (i != 0) {
            low = low.split('').map((s, k) => k == 0 ? s.toUpperCase() : s).join('');
        }
        return low;
    }).join('');
});

export class Stencl {
    public config: Config;

    public constructor() {
        // if (fs.existsSync(process.cwd() + '/stencl-example-config.json')) {
        //     this.config = new Config(require(process.cwd() + '/stencl-example-config.json'));
        // }
        //
        // const collections = globSync(process.cwd() + '/**/stencl.json');
        // for (let i = 0; i < collections.length; i++) {
        //     const collection = require(collections[i]);
        //     // console.log(collection);
        //     this.config.collections[collection.name] = collection;
        // }
        // console.log(this.config);
    }

    public loadConfig(configPath: string): Config {
        this.config = new Config(require(`${ process.cwd() }/${ configPath }`));

        for (let p of this.config.collectionPaths) {
            const pp = globSync(process.cwd() + '/**/stencl.json');
            for (let ppp of pp) {
                const collection = require(ppp);
                this.config.collections[collection.name] = collection;
                this.config.collections[collection.name].path = path.dirname(ppp);
            }
        }
        return this.config;
    }

    public process(schematic: Schematic, properties: any): string {


        return 'poop';
        // for (let schematic of collection.schematics) {
        //     console.log(schematic);
        //     const body = fs.readFileSync(`${ process.cwd() }/${ schematic.input }`).toString();
        //
        // }
        // return;
        // const body = fs.readFileSync(__dirname + '/../../../examples/collections/nestjs/controller.ts.hbs').toString();
        // console.log(body);
        // // console.log(config);
        // const template = compile(body);
        //
        //
        // console.log(template(properties));
        // console.log(process.cwd());
        //
        // return template(properties);
    }
}

export const stencl = new Stencl();
