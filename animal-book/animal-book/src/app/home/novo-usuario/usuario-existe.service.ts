import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { NovoUsuarioService } from './novo-usuario.service';
import {first, map, switchMap} from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class UsuarioExisteService {

  constructor(private novoUsuarioService:NovoUsuarioService) { }

  usuarioExiste(){
    return (control:AbstractControl)=>{
      return control.valueChanges.pipe(
        switchMap((nomeUsuario)=>this.novoUsuarioService.verificaUsuario(nomeUsuario)),
        map((usuarioExiste)=>usuarioExiste?{usuarioExistente:true}:null),
        first()
      )
    }
  }
}
