

Program Idea: To-Do List Manager

    Description:
        Create a To-Do List Manager that allows users to add, remove, and mark tasks as completed. 
        The program will utilize function abstraction to separate different functionalities, making
        the code modular and easy to maintain.

    Features:

        Add Task: Add a new task to the to-do list.

        Remove Task: Remove a task from the to-do list by its index or name.

        Mark Task as Completed: Mark a task as completed by its index or name.

        View All Tasks: View all tasks with their statuses (completed or not).

    Functional Abstractions:

        Input Handling: A function to handle user inputs (e.g., adding, removing, or marking tasks).

    Task Management:
        
        Functions to add, remove, and update tasks in the list.

    Display:
        
        A function to display the current state of the to-do list.

    Validation:
        
        Functions to validate inputs (e.g., checking if a task exists).

    Example Functions:

        handleUserInput():
            
            Manage user inputs and direct them to appropriate functions.

    addTask(task):
            
            Add a new task to the list.

    removeTask(taskNameOrIndex):
    
        Remove a task by name or index.

    markTaskCompleted(taskNameOrIndex):
    
        Mark a specified task as completed.

    displayTasks():
    
        Display the current list of tasks with their statuses.

    validateTaskExists(taskNameOrIndex):
    
        Check if a task exists by name or index.