const character = {
  name: 'Booker',
  job: 'Detective',
  daughter: 'Elizabeth'
}

const {name} = character

console.log(name)

function addGame({name, job, daughter}){
  const game = 'Bioshock Infinite'

  return {
    game,
    name,
    job,
    daughter
  }
}

console.log(addGame(character))