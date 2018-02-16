import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ContatoService} from './contato.service';
import {ExpressaoRegular} from '../model/expressao-regular';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {

  expRegular = new ExpressaoRegular()

  expNome: string = this.expRegular.expressaoNome
  expEmail: string = this.expRegular.expressaoEmail
  expTelefone: string = this.expRegular.expressaoTelefone

  formulario: FormGroup;
  @Input() mensagemEnviada: string = '';
  public mostraMensagem: boolean;


  constructor(private formBuilder: FormBuilder, private srvContatoService: ContatoService) { }

  ngOnInit() {
    this.formulario = this.formBuilder.group({
      nome: this.formBuilder.control('', [Validators.required, Validators.minLength(3), Validators.pattern(this.expNome)]),
      email: this.formBuilder.control('', [Validators.required, Validators.pattern(this.expEmail)]),
      telefone: this.formBuilder.control('', [Validators.required, Validators.pattern(this.expTelefone)]),
      mensagem: this.formBuilder.control('', [Validators.required, Validators.minLength(10)])
    });
  }

  public aplicaCssErro(campo){

    if(!this.formulario.get(campo).valid && (this.formulario.get(campo).dirty || this.formulario.get(campo).touched)){
      return {
        'has-error': this.validaCssInput(campo)
      }
    }else{
      return {
        'has-success': this.validaCssInput(campo)
      }
    }
  }

  public validaIconeInput(campo){

    if(!this.formulario.get(campo).valid && (this.formulario.get(campo).dirty || this.formulario.get(campo).touched)){
      return {
        'glyphicon glyphicon-asterisk form-control-feedback': this.validaCssInput(campo),
      }
    }else{
      return {
        'glyphicon glyphicon-ok form-control-feedback': this.validaCssInput(campo)
      }
    }
  }

  public validaMensagem(nomecampo){

    let campo = this.formulario.get(nomecampo);

    if(campo != null){
      if(!campo.valid && (campo.dirty || campo.touched)){
        this.mostraMensagem = !campo.valid && (campo.dirty || campo.touched)
      }

      if(campo.valid && (campo.dirty || campo.touched)){
        this.mostraMensagem = false
      }
    }
  }

  public enviar() {
    let f = JSON.stringify(this.formulario.value)

    if(this.formulario.valid){
      this.srvContatoService.enviarFormulario(f).subscribe( resp => {
        this.mensagemEnviada = resp

        this.resetarFormulario()
      })

    }else{
      this.mensagemEnviada = 'Verifique os campos do formulário e tente novamente.'
    }
    this.mensagemEnviada = ''
  }

  private resetarFormulario(){
    this.formulario.reset();
  }

  private validaCssInput(campo){

    let campoRecebido = this.formulario.get(campo)

    if(!campoRecebido.valid && (campoRecebido.dirty || campoRecebido.touched)){
      return !campoRecebido.valid && (campoRecebido.dirty || campoRecebido.touched)
    }else{
      return campoRecebido && (campoRecebido.dirty || campoRecebido.touched)
    }
  }

}
