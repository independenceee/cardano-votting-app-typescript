import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { EditCandidateDto, CreateCandidateDto } from './dto';

@Injectable()
export class CandidateService {
    constructor(private prisma: PrismaService) {}

    async getCandidates(electionId: string) {
        try {
            return this.prisma.candidate.findMany({
                where: {
                    electionId,
                },
            });
        } catch (error) {
            throw new ForbiddenException(error);
        }
    }

    async getCandidateById(electionId: string, candidateId: string) {
        try {
            return this.prisma.candidate.findFirst({
                where: {
                    id: candidateId,
                    electionId,
                },
            });
        } catch (error) {
            throw new ForbiddenException(error);
        }
    }

    async createElection(electionId: string, dto: CreateCandidateDto) {
        try {
            const candidate = await this.prisma.candidate.create({
                data: {
                    electionId,
                    ...dto,
                },
            });
        } catch (error) {
            throw new ForbiddenException(error);
        }
    }

    async editElectionById(
        electionId: string,
        candidateId: string,
        dto: EditCandidateDto,
    ) {
        try {
            const candidate = await this.prisma.candidate.findUnique({
                where: {
                    id: candidateId,
                },
            });

            if (!candidate || candidate.electionId != electionId) {
                throw new ForbiddenException('Access to resources denied');
            }
            return this.prisma.candidate.update({
                where: {
                    id: candidateId,
                },
                data: {
                    ...dto,
                },
            });
        } catch (error) {
            throw new ForbiddenException(error);
        }
    }

    async deleteElectionById(electionId: string, candidateId: string) {
        try {
            const candidate = await this.prisma.candidate.findUnique({
                where: {
                    id: candidateId,
                },
            });

            if (!candidate || candidate.electionId != electionId) {
                throw new ForbiddenException('Access to resources denied');
            }
            await this.prisma.candidate.delete({
                where: {
                    id: candidateId,
                },
            });
        } catch (error) {
            throw new ForbiddenException(error);
        }
    }
}
