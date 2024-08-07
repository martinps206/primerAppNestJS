import { TaskStatus } from '../task.entity';
import { IsOptional, IsIn, IsString, IsNotEmpty, Min, MinLength } from "class-validator";

export class CreateTaskDto {
    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    title: string;
    @IsString()
    @IsNotEmpty()
    @MinLength(5)
    description: string;
}

export class UpdateTaskDto {
    @IsString()
    @IsOptional()
    title?: string;
    @IsString()
    @IsOptional()
    description?: string;
    @IsString()
    @IsOptional()
    @IsIn([TaskStatus.DONE, TaskStatus.IN_PROGRESS, TaskStatus.PENDING])
    status?: TaskStatus;
}