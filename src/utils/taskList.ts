export const taskList =
    JSON.parse(window.localStorage.getItem('tasks') as string) || [];