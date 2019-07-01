import Realm from 'realm';

export default class RepositorySchema extends Realm.Object { }
RepositorySchema.schema = {
    name: 'Repository',
    primaryKey: 'id',
    properties: {
        id: { type: 'int', indexed: true},
        name: 'string',
        fullName: 'string',
        description: 'string',
        stars: 'int',
        forks: 'int',
    }
};