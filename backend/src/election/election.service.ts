import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateElectionDto, EditElectionDto } from './dto';

@Injectable()
export class ElectionService {
    constructor(private prisma: PrismaService) {}
    async getElections(userId: string) {
        return this.prisma.election.findMany({
            where: {
                userId,
            },
        });
    }

    async getElectionById(userId: string, candidateId: string) {
        return this.prisma.election.findFirst({
            where: {
                id: candidateId,
                userId,
            },
        });
    }

    async createElection(userId: string, dto: CreateElectionDto) {
        try {
            const election = await this.prisma.election.create({
                data: {
                    userId,
                    ...dto,
                },
            });
        } catch (error) {}
    }

    async editElectionById(
        userId: string,
        electionId: string,
        dto: EditElectionDto,
    ) {
        const election = await this.prisma.election.findUnique({
            where: {
                id: electionId,
            },
        });

        if (!election || election.userId != userId) {
            throw new ForbiddenException('Access to resources denied');
        }

        return this.prisma.election.update({
            where: {
                id: electionId,
            },
            data: {
                ...dto,
            },
        });
    }

    async deleteElectionById(userId: string, electionId: string) {
        try {
            const election = await this.prisma.election.findUnique({
                where: {
                    id: electionId,
                },
            });
            if (!election || election.userId != userId) {
                throw new ForbiddenException('Access to resources denied');
            }

            await this.prisma.election.delete({
                where: {
                    id: electionId,
                },
            });
        } catch (error) {
            throw new ForbiddenException(error);
        }
    }
}
