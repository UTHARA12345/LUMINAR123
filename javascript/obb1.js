class student{
//    setvalues(name,rollnum,subject)
//    {
//        this.name=name;
//        this.rollnum=rollnum;
//        this.subject=subject;
//    }
    constructor(name,rollnum,subject)
    {
        this.name=name;
        this.rollnum=rollnum;
        this.subject=subject;
    }
    printvalues()
    {
        console.log(this.name);
        console.log(this.rollnum);
        console.log(this.subject);
    }
    static college(){
    console.log("luminar");
    }
}
//o=new student;
//o=setvalues("linu",25,"commerce");
o=new student("linu",25,"commerce")
o.printvalues();
student.college();