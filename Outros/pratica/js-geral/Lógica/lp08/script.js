function areYouPlayingBanjo(name) {
  return name[0] == 'r' || name[0] == 'R' ? name + ' plays banjo' : name + ' does not play banjo'
  
}

console.log(areYouPlayingBanjo('Gabriel'))
console.log(areYouPlayingBanjo('rosilvon'))
console.log(areYouPlayingBanjo('romario'))

let namePerson = 'gabriel'
if(namePerson[0] == 'r' || 'R'){
  console.log('igual r');
} else{
  console.log('nao igual r');
}