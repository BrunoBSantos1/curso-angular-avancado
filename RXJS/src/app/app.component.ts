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
        next: (valor: string) => console.log('Next: ', valor),
        error: (erro: string) => console.log('Erro: ', erro),
        complete: () => console.log('Fim')
      }
      const obs = this.minhaObservable('Eduardo');
      obs.subscribe(observer)
  }

}
