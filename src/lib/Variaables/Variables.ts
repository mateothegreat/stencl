export class Variables {
    public readonly environment: { [key: string]: string | number } = {};
    public readonly parameters: { [key: string]: string | number } = {};

    public constructor() {
        for (let e in process.env) {
            this.environment[e[0]] = e[1];
        }
    }
}
