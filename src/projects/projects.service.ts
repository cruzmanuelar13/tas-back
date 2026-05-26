import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProjectsService {

  constructor(private prisma: PrismaService) {}

  async create() {
  }
}