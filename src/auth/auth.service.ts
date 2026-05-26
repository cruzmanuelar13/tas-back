import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AuthService {

  constructor(private prisma: PrismaService) {}

  async login(email: string, password: string) {
    
  }
}