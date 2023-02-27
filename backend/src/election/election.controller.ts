import {
    Body,
    Controller,
    Get,
    Param,
    HttpCode,
    HttpStatus,
    Post,
    UseGuards,
    ParseUUIDPipe,
    Patch,
    Delete,
} from '@nestjs/common';
import { ElectionService } from './election.service';
import { GetUser } from '../auth/decorator';
import { JwtGuard } from '../auth/guard';
import { CreateElectionDto, EditElectionDto } from './dto';

@UseGuards(JwtGuard)
@Controller('elections')
export class ElectionController {
    constructor(private electionService: ElectionService) {}

    @Get()
    getElections(@GetUser('id') userId: string) {
        return this.electionService.getElections(userId);
    }

    @Get(':id')
    getElectionById(
        @GetUser('id') userId: string,
        @Param('id', ParseUUIDPipe) electionId: string,
    ) {
        return this.electionService.getElectionById(userId, electionId);
    }

    @Post()
    createElection(
        @GetUser('id') userId: string,
        @Body() dto: CreateElectionDto,
    ) {
        return this.electionService.createElection(userId, dto);
    }

    @Patch(':id')
    editElectionById(
        @GetUser('id') userId: string,
        @Param('id', ParseUUIDPipe) electionId: string,
        @Body() dto: EditElectionDto,
    ) {
        return this.electionService.editElectionById(userId, electionId, dto);
    }

    @HttpCode(HttpStatus.NO_CONTENT)
    @Delete(':id')
    deleteElectionById(
        @GetUser('id') userId: string,
        @Param('id', ParseUUIDPipe) electionId: string,
    ) {
        return this.electionService.deleteElectionById(userId, electionId);
    }
}
