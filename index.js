// Arrays to keep track of each task's state

// Create a new task by adding to the arrays
// A new task will be created as incomplete
const newTask = (title, description) => {
  return {
    title,
    description,
    complete: false
  };
};

// Mark a task as complete by setting the task's status in the `taskComplete` array to `true`
const completeTask = (taskIndex) => {
  taskComplete[taskIndex] = true;
};

// Print the state of a task to the console in a nice readable way
const logTaskState = (taskIndex) => {
  const title = taskTitles[taskIndex];
  const complete = taskComplete[taskIndex];
  console.log(`${title} has${complete ? " " : " not "}been completed`);
};

// DRIVER CODE BELOW

const tasks = [];
tasks.push(newTask("Clean Cat Litter", "Take all the 💩 out of the litter box"));
tasks.push(newTask("Do Laundry", "😨"));

console.log(tasks);
