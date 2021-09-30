import { Transaction } from "./transaction";

export interface TransactionSummary {
    txns:Transaction[];
    totalCredit:number;
    totalDebit:number;
    balance:number;
}
