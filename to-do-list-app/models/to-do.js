const db = require('../db/config');

const to_do = {};

to_do.findAll = () => {
  return db.query(`
    SELECT *
    FROM to_do`
  );
};

to_do.findById = (id) =>{
  return db.oneOrNone(`
    SELECT *
    FROM to_do
    WHERE id = $1`,
    [id]
  );
};

to_do.create = (to_do) =>{
  return db.one(`
    INSERT INTO to_do
    (title, category, status, description)
    VALUES ($1, $2, $3, $4)
    RETURNING *`,
    [to_do.title, to_do.category, to_do.status, to_do.description]
  );
};

to_do.update = (id, to_do)=>{
  return db.one(`
    UPDATE to_do SET
    title = $1,
    category = $2,
    status = $3,
    description = $4
    WHERE id = $5
    RETURNING *`,
    [to_do.title,to_do.category, to_do.status, to_do.description, id]
  );
};

to_do.destroy = (id) =>{
  return db.none(`
    DELETE FROM to_do
    WHERE id= $1`,
    [id]
  );
};



module.exports = to_do;
