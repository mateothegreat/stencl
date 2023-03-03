export class Options {
    public readonly includeHeader: boolean;
    public readonly includeFooter: boolean;

    public constructor(obj: Options) {
        Object.assign(this, obj);
    }
}

export class Schematic {
    public readonly name: string;
    public readonly input: string;
    public readonly output: {
        path: string;
        filename: string;
    };
    public readonly options: Options;

    public constructor(obj: Schematic) {
        Object.assign(this, obj);
    }
}

export class Collection {
    public readonly name: string;
    public readonly description?: string;
    public readonly schematics: Schematic[] = [];
    public readonly groups: { [key: string]: string[] } = {};
    public path?: string;

    public constructor(obj: Collection) {
        Object.assign(this, obj);
    }
}

export class Config {
    public readonly basePath: string;
    public readonly schematics: Schematic[] = [];
    public readonly collectionPaths: string[] = [];
    public readonly collections: { [key: string]: Collection } = {};

    public constructor(obj: Config) {
        this.basePath = obj.basePath;
        this.collectionPaths = obj.collectionPaths;
    }
}
