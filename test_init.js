var fs = require('fs')

var cb = function(err) {
  if(err) console.log('error', err)
}

var initial_db = {
  'anecdotes': [
    {
      'content': 'Pikakassan kuunteleminen jouduttaa projektia kuin projektia',
      'id': '7777',
      'votes': 3
    }
  ]
}

var dbs = JSON.stringify(initial_db)
fs.writeFile('db_test.json', dbs, cb)