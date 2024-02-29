/** @format */

exports.createCrudFuncs = (model) => {
  return {
    getAll: () => model.find(),
    getById: (id) => model.finById(id),
    create: (record) => model.create(record),
  };
};

// created service for crud functions
