const to_do = require('../models/to-do');

const to_doController = {};

to_doController.index = (req, res) =>{
  to_do.findAll()
  .then(to_do =>{
    res.render('toDo/toDo-index', {
      to_do: to_do
    });
  }).catch(err =>{
    console.log(err);
    res.status(500).json({
      message: 'Page Not Found',
      error: err
    });
  });
};

to_doController.new = (req, res) => {
  res.render('toDo/toDo-add');
};

to_doController.create = (req, res) => {
  to_do.create({
    title: req.body.title,
    category: req.body.category,
    status: req.body.status,
    description: req.body.description
  })
  .then(to_do => {
    res.redirect(`toDo/${to_do.id}`);
  })
  .catch(err =>{
    console.log(err);
    res.status(500).json({
      message: 'Page Not Found',
      error: err
    });
  });
};

to_doController.view = (req, res) =>{
  to_do.findById(req.params.id)
  .then(to_do =>{
    res.render('toDo/toDo-view', {
      to_do: to_do
    });
  })
  .catch(err =>{
    console.log(err);
    res.status(500).json({
      message: 'Page Not Found',
      error: err
    });
  });
}

to_doController.edit = (req, res) => {
  to_do.findById(req.params.id)
  .then(to_do => {
    res.render('toDo/toDo-edit', {
      to_do: to_do
    })
  })
  .catch(err =>{
    console.log(err);
    res.status(500).json({
      message: 'Page Not Found',
      error: err
    });
  });
};

to_doController.update = (req, res) => {
  to_do.update(req.params.id, {
    title: req.body.title,
    category: req.body.category,
    status: req.body.status,
    description: req.body.description
  })
  .then(to_do =>{
    res.redirect(`/toDo/${to_do.id}`);
  })
  .catch(err =>{
    console.log(err);
    res.status(500).json({
      message: 'Page Not Found',
      error: err
    });
  });
}

to_doController.delete = (req, res) =>{
  to_do.destroy(req.params.id)
  .then(() =>{
    res.json({
      message:'deletion complete'
    })
  })
  .catch(err =>{
    console.log(err);
    res.status(500).json({
      message: 'Page Not Found',
      error: err
    });
  });
}

module.exports = to_doController;
