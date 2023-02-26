import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { ConfigService } from '@nestjs/config';
import { AuthDto } from './dto';

@Injectable({})
export class AuthService {
    constructor(private prisma: PrismaService, private config: ConfigService) {}

    async register(dto: AuthDto) {}

    async login(dto: AuthDto) {}

    async logout(dto: AuthDto) {
        try {
            
        } catch(error) {
            
        }
    }
}
