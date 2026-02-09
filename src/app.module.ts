import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { UnitsModule } from './units/units.module';
import { MembershipsModule } from './memberships/memberships.module';
import { RolesModule } from './roles/roles.module';
import { WorkspacesModule } from './workspaces/workspaces.module';
import { ProjectsModule } from './projects/projects.module';

@Module({
  imports: [AuthModule, UsersModule, UnitsModule, MembershipsModule, RolesModule, WorkspacesModule, ProjectsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
