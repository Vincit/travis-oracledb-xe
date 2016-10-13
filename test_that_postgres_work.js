const pg = require('pg');
const connection = new pg.Client('postgres://postgres@localhost/test');

connection.connect(function(err, connection) {
    function query(sql, bindings) {
        return new Promise((resolve, reject) => {
            connection.query(sql, bindings, (err, res) => {
                if (err) reject(err);
                else resolve(res);
            });
        });
    }
    
    Promise.resolve()
      .then(() => query('SHOW SERVER_VERSION'))
      .then(res => console.dir(res))
      .then(() => query('CREATE TABLE IF NOT EXISTS books ( id integer, data jsonb )'))
      .then(() => query(`select * from books where (data->'me')::jsonb ?& array['keyOne', 'keyTwo'] and id > $1`, [1]))
      .then(() => {
          console.log('All good !');
          process.exit(0);
      })
      .catch((err) => {
          console.log('Error threw:', err.message);
          process.exit(1);
      })
});

