import { Status } from "../Status"
import { Label } from "../Label"
export interface Task{
    subject:string,
    deadline:Date,
    status:Status,
    label:Label[],
}