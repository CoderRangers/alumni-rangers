import { Controller, Get } from '@nestjs/common'
import { PostService } from './post.service'
import { PostEntity } from './models/post-entity'

@Controller('post')
export class PostController {
    constructor(private _service: PostService) {}

    @Get() // defines that the endpoint GET http://localhost:3000/post, consumes the findAll() method
    async findAll(): Promise<Array<PostEntity>> {
        return await this._service.findAll()
    }
}
