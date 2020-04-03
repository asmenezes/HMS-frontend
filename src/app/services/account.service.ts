import { Injectable } from '@angular/core';
import { Account } from '../models/accountmodel';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor() { }
}
// Accounts database schema
// accttype int4
// email varchar
// firstname varchar
// lastname varchar
// password varchar <<-- Keep this off of account on file, it should be hashed anyways
// phone varchar
// pid int4
// username varchar
