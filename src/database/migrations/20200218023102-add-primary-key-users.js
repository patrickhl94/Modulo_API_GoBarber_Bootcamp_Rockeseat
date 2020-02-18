module.exports = {
  up: queryInterface => {
    return queryInterface.addConstraint('users', ['id'], {
      type: 'primary key',
      name: 'Primary_Key_Constraint',
    });
  },

  down: queryInterface => {
    return queryInterface.removeConstraint('users', 'Primary_Key_Constraint');
  },
};
