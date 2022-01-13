import { Component, OnInit} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contato',
  templateUrl: './contato-component.html'
})
export class ContatoComponent implements OnInit{
  cadastroForm: FormGroup;

  constructor(){ }

  ngOnInit(){
    this.cadastroForm = new FormGroup({
      nome: new FormControl(''),
      cpf: new FormControl(''),
      email: new FormControl(''),
      senha: new FormControl('')
    });
  }

  adicionarUsuario(){
    let x = this.cadastroForm.value;
    console.log('FormGroup: ', x)
  }

}
