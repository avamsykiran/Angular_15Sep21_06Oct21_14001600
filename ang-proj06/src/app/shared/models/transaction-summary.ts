import { Transaction } from "./transaction";

export interface TransactionSummary {
    txns:Transaction[];
    userId:number;
    totalCredit:number;
    totalDebit:number;
    balance:number;
    startDate?:Date;
    endDate?:Date;
}
