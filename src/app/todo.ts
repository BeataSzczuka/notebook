export class Todo
{
  [x: string]: any;
    public id : number;
    public title : string;
    public body : string;
    public complete : boolean;

    constructor(values : Object = {})
    {
        Object.assign(values, null);
    }
}