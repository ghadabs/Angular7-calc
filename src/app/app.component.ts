import { Component } from '@angular/core';
import { createOfflineCompileUrlResolver } from '../../node_modules/@angular/compiler';
import { calcBindingFlags } from '../../node_modules/@angular/core/src/view/util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  val='';
  number='';
  operation='';
  btnClicked(op){
    if(op=='')
        { this.operation='';
          this.val='';
        }
    if(op in['0','1','2',"3","4","5","6","7","8","9"])
          { this.number=this.number+op;
           this.val=this.number;
          // console.log(this.number);
          }
    else{
          this.number='';
          this.val=op;
        }
     this.operation=this.operation+op;
}
resultat(){
  this.val=eval(this.operation);
  this.operation='';
  this.number='';
  }
}