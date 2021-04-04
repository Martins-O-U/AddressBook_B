
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Contact_Base').del()
    .then(function () {
      // Inserts seed entries
      return knex('Contact_Base').insert([
        {id: 1, name: 'James Smith', phoneNumber: '+322123456789', email: 'smith@mail.com', address: '123 Sabi Avenue, That_Place', note: "Thisi is for any additional note as needed"},
        {id: 2, name: 'John Doe', phoneNumber: '+222405583745', email: 'john@mail.com', address: '123 Sabi Avenue, That_Place', note: "Thisi is for any additional note as needed"},
        {id: 3, name: 'Jane Doe', phoneNumber: '+2346785338', email: 'jane@mail.com', address: '123 Sabi Avenue, That_Place', note: "Thisi is for any additional note as needed"},
      ]);
    });
};
