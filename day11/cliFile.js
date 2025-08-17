import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const todos = [];

const showMenu = () => {
  console.log("\n===== TODO MENU =====");
  console.log("1: Add task");
  console.log("2: View tasks");
  console.log("3: Update task");
  console.log("4: Delete task");
  console.log("5: Exit");
  rl.question("Choose an option: ", handleInput);
};

const handleInput = (option) => {
  switch (option) {
    case "1":
      rl.question("Enter task: ", (task) => {
        todos.push(task);
        console.log("✅ Task added:", task);
        showMenu();
      });
      break;

    case "2":
      if (todos.length === 0) {
        console.log("\n⚠️  Your todo list is empty.");
      } else {
        console.log("\n📋 Your todo list:");
        todos.forEach((task, index) => {
          console.log(`${index + 1}. ${task}`);
        });
      }
      showMenu();
      break;

    case "3":
      if (todos.length === 0) {
        console.log("\n⚠️  No tasks to update.");
        return showMenu();
      }

      rl.question("Enter task number to update: ", (num) => {
        const index = parseInt(num) - 1;
        if (index >= 0 && index < todos.length) {
          rl.question("Enter updated task: ", (newTask) => {
            console.log(`🔁 Task updated: '${todos[index]}' → '${newTask}'`);
            todos[index] = newTask;
            showMenu();
          });
        } else {
          console.log("❌ Invalid task number.");
          showMenu();
        }
      });
      break;

    case "4":
      if (todos.length === 0) {
        console.log("\n⚠️  No tasks to delete.");
        return showMenu();
      }

      rl.question("Enter task number to delete: ", (num) => {
        const index = parseInt(num) - 1;
        if (index >= 0 && index < todos.length) {
          const removed = todos.splice(index, 1);
          console.log("🗑️ Task deleted:", removed[0]);
        } else {
          console.log("❌ Invalid task number.");
        }
        showMenu();
      });
      break;

    case "5":
      console.log("👋 Goodbye!");
      rl.close();
      break;

    default:
      console.log("❗ Invalid option. Choose from 1 to 5.");
      showMenu();
  }
};

showMenu();
