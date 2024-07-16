import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto, UpdateTaskDto } from './dto/task.dto';
import { Task } from './task.entity';

@Controller('tasks')
export class TasksController {

    constructor(private tasksService: TasksService){

    }

    @Get()
    getAllTasks(){
        return this.tasksService.getAllTasks();
    }

    @Post()
    createTask(@Body() newTask: CreateTaskDto){
        console.log(newTask);
        return this.tasksService.createTask(newTask.title, newTask.description);
    }

    @Patch(':id')
    updateTask(@Param("id") id : string, @Body() updateFields: UpdateTaskDto): Task{
        return this.tasksService.updateTask(id, updateFields);
    } 

    @Delete(':id')
    deleteTask(@Param('id') id : string){
        this.tasksService.deleteTask(id);
    }


}
