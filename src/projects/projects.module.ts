import { Module } from '@nestjs/common';

import { PrismaService } from 'src/prisma/prisma.service';
import { ProjectsService } from './projects.service';
import { ProjectsController } from './projects.controller';
@Module({
  providers: [ProjectsService, PrismaService],
  controllers: [ProjectsController]
})
export class ProjectsModule {}
