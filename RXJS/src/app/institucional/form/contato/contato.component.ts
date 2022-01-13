import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Usuario } from './model/usuario';

@Component({
  selector: 'app-contato',
  templateUrl: './contato-component.html'
})
export class ContatoComponent implements OnInit{
  cadastroForm: FormGroup;
  usuario: Usuario;

  constructor(private fb: FormBuilder){ }

  ngOnInit(){
    this.cadastroForm = this.fb.group({
      nome: [''],
      cpf: [''],
      email: [''],
      senha: [''],
      confirmarSenha: ['']
    });
  }

  adicionarUsuario(){
    this.usuario = Object.assign({}, this.usuario, this.cadastroForm.value )
    console.log('Usuario: ', this.usuario)
  }

}
