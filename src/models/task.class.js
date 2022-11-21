import { LEVELS } from "./levels.enum";

export class Task {
    title = '';
    description = '';
    completed = false;
    level = LEVELS.NORMAL;

    constructor(title, description, completed, level){
        this.title = title;
        this.description = description;
        this.completed = completed;
        this.level = level;
    }
}