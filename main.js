const shortid = require('shortid');
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const adapter = new FileSync('db.json');
const db = low(adapter);

db.defaults({ topic: [], author:[]}).write()
// db.get('author').push({
//     id: 1,
//     name: 'hyeseong',
//     profile: 'dev'
// }).write();
// db.get('topic').push({
//     id:1,
//     title:'lowdb',
//     description:'lowdb is ...',
//     author:1
// }).write();
// db.get('topic').push({
//     id:2,
//     title:'mySQL',
//     description:'mySQL is ...',
//     author:1
// }).write();

// console.log(
//     db.get('topic')
//     .find({title:'lowdb'})
//     .value()
// );

// db.get('topic')
//     .find({id:2})
//     .assign({title:"mySQL & mariaDB"})
//     .write();

// db.get('topic')
//     .remove({id:2})
//     .write();

var sid = shortid.generate();

db.get('author')
    .push({
        id:sid,
        name:'pakubazzi',
        profile: 'designer'
    }).write();

db.get('topic')
    .push({
        id:shortid.generate(),
        title:'PostgreSQL',
        description:'PrestreSQL is...',
        author: sid
    }).write();