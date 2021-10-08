import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TransactionsService } from 'src/app/service/transactions.service';
import { UsersService } from 'src/app/service/users.service';
import { User } from 'src/app/shared/models/user';

@Component({
  selector: 'app-transactions-form',
  templateUrl: './transactions-form.component.html',
  styleUrls: ['./transactions-form.component.css']
})
export class TransactionsFormComponent implements OnInit {

  txnForm:FormGroup;
  errMsg?:string;
  isNew:boolean;
  currentUser:User|null;

  constructor(private txnService:TransactionsService,private userService:UsersService,
      private activatedRoute:ActivatedRoute,private router:Router) {
    this.isNew=true;

    this.currentUser=this.userService.currentUser();

    this.txnForm=new FormGroup({
      id:new FormControl(0),
      header:new FormControl('',[Validators.required,Validators.minLength(5)]),
      type:new FormControl('',[Validators.required,Validators.pattern('CREDIT|DEBIT')]),
      amount:new FormControl(0,[Validators.required,Validators.min(1)]),
      dot:new FormControl(new Date().toISOString().substr(0,10),[Validators.required])
    });
  }

  get header(){
    return this.txnForm.controls['header'];
  }

  get type(){
    return this.txnForm.controls['type'];
  }

  get amount(){
    return this.txnForm.controls['amount'];
  }

  get dot(){
    return this.txnForm.controls['dot'];
  }

  ngOnInit(): void {
    let id = this.activatedRoute.snapshot.params.id;
    if(id){
      this.isNew=false;
      this.txnService.getById(parseInt(id)).subscribe(
        data => this.txnForm.setValue(data),
        err => {console.log(err);this.errMsg="Unable to fetech the record to edit";}
      );      
    }
  }

  formSubmitted(){
    let txn = {...this.txnForm.value,userId:this.currentUser?.id};

    let obr;

    if(this.isNew)
      obr = this.txnService.add(txn);
    else
      obr = this.txnService.modify(txn);

    obr.subscribe(
      data => this.router.navigateByUrl('/txns/list'),
      err => {console.log(err);this.errMsg="Unable to save the record";}
    );
  }


}
