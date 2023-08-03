import { Task } from "./ITask/ITask";
import { Label } from "./Label";
import { Status } from "./Status";

class Taskmanager {    
    constructor(public tasks:Task[]){}
    // manage task
    addTask =(task:Task)=>{
        this.tasks.push(task)
    }

    removeTask=(task:Task):number | undefined =>{
        const index=this.tasks.findIndex((t)=> t=== task)
        if( index !== -1){
            this.tasks.splice(index,1)
        }
        return index
    }

    // manage task label

    addLabelToTask(label:Label,task:Task){
        if(!task.label.includes(label)){
            task.label.push(label)
        }
    }
    removeLabelFromTask=(label:Label,task:Task):number | undefined =>{
        const index=task.label.findIndex((l)=> l === label)
        if(index === -1){
            task.label.splice(index,1)
        }
        return index
    }

    // change task Status
    changeTaskStatus=(status:Status,task:Task)=>{
        task.status =status
    }

    // filter task

    filterTask=(subject:string,status:Status,label:Label):Task[]=>{
        const result:Task[]=this.tasks.filter((task)=>{
            const matchesStatus = !status || task.status === status
            const matchesLabel = !label || task.label.includes(label)
            const matchesSubject = !subject || task.subject.toLowerCase().includes(subject.toLowerCase())
            return matchesStatus && matchesLabel && matchesSubject
        })
        return result
    }
    


}