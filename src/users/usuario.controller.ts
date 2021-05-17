import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Usuario } from './usuario.entity';
import { UsuarioService } from './usuario.service';

@Controller('users')
export class UsuarioController {
  constructor(private usuarioService: UsuarioService) {}

  @Post()
  public cria(@Body() usuario: Usuario) {
    const usuarioCriado = this.usuarioService.cria(usuario);
    return usuarioCriado;
  }
  @Get(':nomeDeUsuario')
  public buscaPorNomeDeUsuario(@Param('nomeDeUsuario') nomeDeusuario: string) {
    const usuarioService =
      this.usuarioService.buscaPorNomeDeUsuario(nomeDeusuario);
    return usuarioService;
  } 
}
