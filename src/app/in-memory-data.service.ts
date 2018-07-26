import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
         const TODOS = 
[
    {id : 1, title : 'item1', complete: true, body: 'more about item1'},
    {id : 2, title : 'item2', complete: false, body: ''},
    {id : 3, title : 'item3', complete: false, body: ''}
];
return {TODOS};
    }
}