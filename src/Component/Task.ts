import {Task} from './ITask/ITask'
import { Label } from './Label';
import { Status } from './Status';
class task implements Task{
   
    constructor(public subject:string,public deadline: Date,public status: Status,public label: Label[]){
        
    }
    
   

}