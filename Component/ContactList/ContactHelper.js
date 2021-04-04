const db = require('../../database/db-config')


const getPersons = () => {
    return db("Contact_Base")
}

const findAddedPerson = (id)=>{
    return db("Contact_Base")
    .where({id: id}).first()

}

const addPerson = (person) => {
    return db("Contact_Base").insert(person, "id")
        .then(ids => {
            const [id] = ids;
            return findAddedPerson(id);
        })
}

const updatePerson = (changed, id) => {
    return db('Contact_Base')
      .where({ id }).update(changed);
  }


  
const removePerson = (id)  =>{
    return db('Contact_Base')
        .where({id}).del();
  }

module.exports = {
    addPerson,
    getPersons,
    updatePerson,
    removePerson,
}