//import java.time.LocalDate;
//now.getTime();
class bank{
    static bankname(){
    console.log("sbi");
    }
    constructor(acnum,actype,balance){

        this.acnum=acnum;
        this.actype=actype;
        this.bal=3000;
    }

    deposit(amt){
        var bal=bal+amt;
        }
    withdraw(amt){

        if(bal<amt){
            console.log("insufficient bal");
        }
        else{
            var bal=bal-amt;
            console.log("bank"+bank.bankname+"your account="+this.acnum+"has been debited with amount"+amt);
            console.log("your aval bal="+this.bal);
        }
    }
    balenq(){
        console.log("hai user your account: "+this.acnum+"available bal: "+this.bal);
        }
    printvalues(){
        console.log(this.bankname);
        console.log(this.acnum);
        console.log(this.actype);
        console.log(this.bal);
        }
}

ob=new bank(60124524,"savings",100000);
ob.balenq();
ob.withdraw(2000);
ob.printvalues();
bank.bankname();