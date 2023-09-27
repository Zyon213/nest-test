import { Controller } from '@nestjs/common';
import { Post, Body, Get } from '@nestjs/common'
import { UserService } from '../service/user.service'
import { Observable } from 'rxjs'
import { UserI } from '../models/user.interface'

@Controller('users')
export class UserController {
	constructor(private userService: UserService) {}

	@Post()
	add(@Body() user: UserI): Observable<UserI>{
		return this.userService.add(user);
	}

	@Get()
	findAll(): Observable<UserI[]> {
		return this.userService.findAll();
	}
}
