import {animalType, myName} from './index.js'
import {Dog, Cat, Rabbit} from './classes.js'

let player 



const start = async () => {
    console.log('Choose your animal')
    let getAnimaltype = await animalType()
    console.log(getAnimaltype)
    chooseAnimal(getAnimaltype)
} 

const chooseAnimal = async (getAnimaltype) => {
    let getName = await myName()
    console.log(getName)
 if (getAnimaltype == 'Dog'){
 player = new Dog(getName) 
 console.log(player.welcome)
 }
}

start()