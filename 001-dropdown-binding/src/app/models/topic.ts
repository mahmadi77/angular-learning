export class Topic
{
    constructor(private name : string, private url : string) {}

    get Name() { return this.name; }
    get Url () { return this.url ; }
}