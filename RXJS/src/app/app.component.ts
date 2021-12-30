import { Component, OnInit } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';

@Component({
  selector: 'app-root',
  template: '',
  styles: []
})
export class AppComponent implements OnInit{
  title = 'RXJS';
  minhaPromisse(nome: string) : Promise<string>{
    return new Promise((resolve, reject)=>{
      if(nome === "Eduardo"){
        setTimeout(()=>{
          resolve("Seja bem vindo " + nome)
        },5000);
      }
      else{
        reject("Ops! Voce não é o Eduardo")
      }

    })

  }

  minhaObservable(nome: string) : Observable<string>{
    return new Observable(Subscriber =>{
      if(nome === 'Eduardo'){
        Subscriber.next("ola " + nome);
        Subscriber.next('ola de novo ' + nome);
        setTimeout(()=>{
          Subscriber.next('resposta com daley ' + nome);
        },5000);
        Subscriber.complete();
      }
      else{
        Subscriber.error('ops! deu erro.')
      }
     
    });
  }

  usuarioObservable(nome: string, email:string) : Observable<Usuario>{
    return new Observable(Subscriber =>{
      if(nome === 'Admin'){
       let usuario = new Usuario(nome, email);
        setTimeout(()=>{
          Subscriber.next(usuario);
        },1000);

        setTimeout(()=>{
          Subscriber.next(usuario);
        },2000);

        setTimeout(()=>{
          Subscriber.next(usuario);
        },3000);

        setTimeout(()=>{
          Subscriber.next(usuario);
        },4000);

        setTimeout(()=>{
          Subscriber.complete();
        },5000);
      }
      else{
        Subscriber.error('ops! deu erro.')
      }
     
    });
  }


  ngOnInit(): void {
    /* this.minhaPromisse("Eduardo")
    .then(result => console.log(result));
*/
/*
    this.minhaPromisse("Lucas")
    .then(result => console.log(result))
    .catch(erro => console.log(erro))
*/
/*
    this.minhaObservable('Eduardo')
      .subscribe(result => console.log(result),
      erro => console.log(erro))
*/
      const observer = {
        next: (valor: any) => console.log('Next: ', valor),
        error: (erro: any) => console.log('Erro: ', erro),
        complete: () => console.log('Fim')
      }
      /*
      const obs = this.minhaObservable('Eduardo');
      obs.subscribe(observer)
      */

      const obs = this.usuarioObservable('Admin','admin@admin.com');
      const subs = obs.subscribe(observer)

      setTimeout(()=>{
        subs.unsubscribe();
        console.log('Conexão fechada: '+ subs.closed )
      }, 3500);
  }

}

export class Usuario {
  nome: string;
  email:string;

  constructor(nome: string, email: string){
    this.nome = nome;
    this.email = email;
  }
}