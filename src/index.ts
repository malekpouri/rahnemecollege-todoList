import { Task } from "./Component/ITask/ITask";
import { Taskmanager } from "./Component/TaskManager";

const taskmanager = new Taskmanager()

const task1: Task = {
    subject: "خرید خرما",
    deadline: new Date("2023-08-10"),
    label: ["green"],
    status: 'todo',
  };
  const task2: Task = {
    subject: "مطالعه کتاب جدید",
    deadline: new Date("2023-08-15"),
    label: ["blue"],
    status: 'todo',
  };
  const task3: Task = {
    subject: "تمرین ورزشی",
    deadline: new Date("2023-08-08"),
    label: ["red"],
    status: 'doing',
  };

  taskmanager.addTask(task1)
  taskmanager.addTask(task2)
  taskmanager.addTask(task3)

  console.log('تمامی تسک ها');
  console.log(taskmanager.getTasks);

  taskmanager.changeTaskStatus('done',task1)

  taskmanager.addLabelToTask('green',task2)
  taskmanager.addLabelToTask('green',task3)

  taskmanager.removeLabelFromTask('red',task3)

  console.log('تسک های در حال انجام');
  console.log(taskmanager.filterTask(null,'doing',null));

  console.log("تسک‌های با لیبل green:");
const greenTasks = taskmanager.filterTask(null, null, 'green');
console.log(greenTasks);
  
  

  
  
  