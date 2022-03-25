import inquirer, { prompt } from "inquirer";
//import { PromptType } from "./prompt.types";      
type PromptType = 'input' | 'number' | 'password'

export class PromptService {
    public async input (message: string, type: PromptType) {
        const {result} = await inquirer.prompt([
             {
                type,
                name: 'result', //имя переменной
                message
            }
        ])
        return result
    }
}