import { Module } from '@nestjs/common';
import { UsuarioModule } from './users/UsuarioModule';

@Module({
  imports: [UsuarioModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
