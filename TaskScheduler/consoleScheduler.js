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


console.log("Useful Commands : 'list' , 'paused ', 'resume' or 'exit'\n");

function loadTasks() {

    if (fs.existsSync(FilePath)) {
        try {

            const fileData = fs.readFileSync(FilePath, 'utf8');
            const savedTasks = JSON.parse(fileData);


            savedTasks.forEach(task => {

                let timerId = null;
                if(task.status === "active") {

                    timerId = setInterval(() => {


                    const time = new Date().toLocaleDateString();
                    console.log(`\n` + `[${time}] [Task: ${task.name.toUpperCase()}] Execute (every ${task.delay} seconds )`); 
                }
                    , task.delay * 1000);
            }

                activeTasks.push({
                    name: task.name,
                    delay: task.delay,
                    status: task.status || "active",
                    timerId: timerId
                });


            });
            if (savedTasks.length > 0) 
                console.log(styleSystem, `[SYSTEM] ${savedTasks.length} Loaded tasks from the JSON file:`);
            

        } catch (error) {
            console.log("[ERROR] Failed to load JSON file:");
        }
    } 
}

function saveTasks() {
    const dataToSave = activeTasks.map(task => ({
        name: task.name,
        delay: task.delay,
        status: task.status
    }));
    fs.writeFileSync(FilePath, JSON.stringify(dataToSave, null, 2), 'utf8');
}


function askFortask() {
    rl.question("Enter task name: ", (taskName) => {

        const input = taskName.trim().toLowerCase();

        if (input === 'list') {
            console.log("\n ---- TASKS STATES ----");
            if (activeTasks.length === 0) console.log("No tasks are currently active.");

            activeTasks.forEach(t => {
                const status = t.status === "active" ? "🟢 Active" : "🟡 Paused";
                console.log(`- ${t.name} (every ${t.delay} seconds) -> [ ${status} ]`);
            });
            console.log("------------------------\n");

            return askFortask();
        }

        if (input === 'exit') {
            console.log(styleSystem, "[SYSTEM] Exiting the task scheduler...");
            rl.close();
            process.exit(0);
        }

        if (input === 'paused') {

            rl.question("Enter the task name to pause: ", (taskToPause) => {
                const task = activeTasks.find(t => t.name.toLowerCase() === taskToPause.trim().toLowerCase());
                if (task) {
                    if (task.status === "paused") {
                        console.log(styleWarning, `\n[INFO] "${task.name}" is already paused.`);
                        
                    }else { 
                    clearInterval(task.timerId);
                    task.timerId = "paused";
                    saveTasks();
                    console.log(styleSystem, `[SYSTEM] Task "${task.name}" has been paused.`);
                } }else {
                    console.log(styleError, `[ERROR] Task "${taskToPause}" not found.`);
                }
                console.log("");
                 askFortask();
            });
        }
        if (input === 'resume') {
            rl.question("Enter the task name to resume: ", (taskToResume) => {
                const task = activeTasks.find(t => t.name.toLowerCase() === taskToResume.trim().toLowerCase());
                if (task) {
                    if (task.status === "active") {
                        console.log(styleWarning, `\n[INFO] "${task.name}" is already active.`);
                    } else {
                        task.timerId = setInterval(() => {
                            const time = new Date().toLocaleTimeString();
                            console.log(`\n` + `[${time}] [Task: ${task.name.toUpperCase()}] Execute (every ${task.delay} seconds)`);
                        }, task.delay * 1000);
                        task.status = "active";
                        saveTasks();
                        console.log(styleSystem, `[SYSTEM] Task "${task.name}" has been resumed.`);
                    }
                } else {
                    console.log(styleError, `[ERROR] Task "${taskToResume}" not found.`);
                }
                console.log("");
                askFortask();
            });
            return;
        }
        if(!name.trim() === "") {

            console.log(styleError, "[ERROR] Task name cannot be empty.");
            return askFortask();
        }

        rl.question(`Enter delay in seconds for task "${taskName}": `, (delayInput) => {

            const delay = parseInt(delayInput, 10);

            if (isNaN(delay) || delay <= 0) {
                console.log("Invalid delay. Please enter a positive number.");
                return askFortask();
            }

            const timerId = setInterval(() => {
                const time = new Date().toLocaleTimeString();
                console.log(`\n` + `[${time}] [Task: ${taskName.toUpperCase()}] Execute (every ${delay} seconds)`);
            }, delay * 1000);
            activeTasks.push({ name: taskName, delay: delay, timerId: timerId });

            saveTasks();

            console.log(styleSuccess, `[SYSTEM] Task "${taskName}" has been added and saved in the JSON file!\n`);

            askFortask();
        });


    });
}

loadTasks();
askFortask();