import { Component, OnInit } from '@angular/core';

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
  ngOnInit(): void {
    /* this.minhaPromisse("Eduardo")
    .then(result => console.log(result));
*/
    this.minhaPromisse("Lucas")
    .then(result => console.log(result))
    .catch(erro => console.log(erro))
  }

}
