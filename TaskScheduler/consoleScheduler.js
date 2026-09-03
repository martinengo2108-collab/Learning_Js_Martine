const readline = require('readline');

const fs = require('fs');

const FilePath = "./tasks.json";
let activeTasks = [];

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const styleSystem = "\x1b[36m%s\x1b[0m";
const styleTask = "\x1b[33m%s\x1b[0m";
const styleSucess = "\x1b[32m%s\x1b[0m";

console.log("========================================");
console.log("      CONSOLE-BASED TASK SCHEDULER      ");
console.log("========================================");


console.log("Useful Commands : 'list' or 'exit'\n");

function loadTasks() {

    if (fs.existsSync(FilePath)) {
        const fileData = fs.readFileSync(FilePath, 'utf8');
        const savedTasks = JSON.parse(fileData);

        savedTasks.forEach(task => {
            const timerId = setInterval(() => {

                
            const time = new Date().toLocaleDateString();
            console.log(`\n` + `[${time}] [Task: ${task.name.toUpperCase()}] Execute (every ${task.delay} seconds  )`
            , task.delay * 1000);


            activeTasks.push({ name: task.name,
                 delay: task.delay, 
                 timerId: timerId });

            });
        });
        
    } catch (error) {   
        console.log("[ERROR] Failed to load JSON file:");
    } else{
        console.log(styleSystem,"[SYSTEM] No tasks found in the JSON file.");
    }
}

function saveTasks() {
    const dataToSave = activeTasks.map(task => ({
        name: task.name,
        delay: task.delay
    }));
    fs.writeFileSync(FilePath, JSON.stringify(dataToSave, null, 2), 'utf8');
}

function askFortask() {
    rl.question("Enter task name: ", (taskName) => {

        if(taskName.toLowerCase() === 'list') {
            console.log("\n ---- ACTIVE TASKS ----");
            if(activeTasks.length === 0) console.log("No tasks are currently active.");

                activeTasks.forEach(t => console.log(`- ${t.name} (every ${t.delay} seconds)`)); {
                    
                    console.log("------------------------\n");

                    return askFortask();
            }

            if(taskName.toLowerCase() === 'list') {
                console.log("\n ---- ACTIVE TASKS ----");
                if(activeTasks.length === 0) console.log("No tasks ");
                activeTasks.forEach(t => console.log(`- ${t.name} (every ${t.delay} seconds)`));
                console.log("------------------------\n");
                return askFortask();
            }

            if(taskName.toLowerCase() === 'exit') {
                console.log(styleSystem, "[SYSTEM] Exiting the task scheduler...");
                rl.close();
                process.exit(0);
            }
        }
        
    });
}