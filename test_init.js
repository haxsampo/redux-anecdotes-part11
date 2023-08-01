var fs = require('fs')

cb = function(err, result) {
  if(err) console.log('error', err);
}

initial_db = {
  "anecdotes": [
    {
      "content": "Pikakassan kuunteleminen jouduttaa projektia kuin projektia",
      "id": "7777",
      "votes": 3
    }
  ]
}

dbs = JSON.stringify(initial_db)
fs.writeFile("db_test.json", dbs, cb)