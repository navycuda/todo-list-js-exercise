// Arrays to keep track of each task's state

// Create a new task by adding to the arrays
// A new task will be created as incomplete
const newTask = (title, description) => {
  return {
    title,
    description,
    complete: false,
    logState: function() {
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
    },
    markCompleted: function() {
      this.complete = true;
    }
  };
};

// Mark a task as complete by setting the task's status in the `taskComplete` array to `true`
// const completeTask = (task) => {
//   task.complete = true;
// };

// Print the state of a task to the console in a nice readable way
// const logTaskState = (task) => {
//   console.log(`${task.title} has${task.complete ? " " : " not "}been completed`);
// };

// DRIVER CODE BELOW

const tasks = [];
tasks.push(newTask("Clean Cat Litter", "Take all the 💩 out of the litter box"));
tasks.push(newTask("Do Laundry", "😨"));

console.log(tasks);

tasks[0].logState();
tasks[0].markCompleted();
tasks[0].logState();

// logTaskState(tasks[0]); // Clean Cat Litter has not been completed
// completeTask(tasks[0]);
// logTaskState(tasks[0]); // Clean Cat Litter has been completed

console.log(tasks);
