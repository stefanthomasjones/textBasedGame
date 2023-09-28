import inquirer from 'inquirer';

console.clear()



export const animalType = async () => {
    const {name} = await inquirer.prompt(
    {
        name: 'name',
        type:'list',
        message:'What are you?',
        choices: ['Dog', 'Cat', 'Rabbit'],
        
    }) 
    return name
}  

export const myName = async () => {
    const {chooseName} = await inquirer.prompt(
        {
    type: 'input',
    name: 'chooseName',
    message:'What is your Name',
        })
        return chooseName
}

// module.exports = {animalType}
 