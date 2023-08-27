import { Router } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  @Input() berit: string = ''
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  cadastrar(form: NgForm){    
    /*if(form.valid){
      this.router.navigate(['/sucesso'])
    }
    else{
      alert('Formulário Inválido')
    }*/
      console.log(form.controls);
      console.log(this.berit);
  }
}
