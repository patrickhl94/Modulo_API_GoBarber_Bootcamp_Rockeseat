module.exports = {
  up: queryInterface => {
    return queryInterface.addConstraint('files', ['id'], {
      type: 'primary key',
      name: 'Primary_Key_Constraint_Files',
    });
  },

  down: queryInterface => {
    return queryInterface.removeConstraint('files', 'Primary_Key_Constraint');
  },
};
