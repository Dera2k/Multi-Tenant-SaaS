import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { UnitsModule } from './units/units.module';
import { MembershipsModule } from './memberships/memberships.module';
import { WorkspacesModule } from './workspaces/workspaces.module';
import { ProjectsModule } from './projects/projects.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [AuthModule, 
    UsersModule, 
    UnitsModule, 
    MembershipsModule, 
    WorkspacesModule, 
    ProjectsModule, TypeOrmModule.forRootAsync({
      imports: [],
      inject: [],
      useFactory: () => ({type: 'postgres',
        entities: [],
        synchronize: true,
        port: 5432,
        username: 'postgres',
        password: 'derapassword',
        host: 'localhost',
        database: 'multi-tenenat-collab'
      })
    })
  ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
