function Student(enrollmentNo, name, email, contact){
    this.enrollmentNo = function(enrollmentNo){
        this.enrollmentNo = enrollmentNo;
    };
    this.updateName = function(newName){
        this.name = newName;
    };
    this.updateEmail = function(newEmail){
        this.email = newEmail;
    };
    this.updateContact = function(newContact){
        this.contact = newContact;
    };
}
const Student1 = new Student(0915, "Ankit", "astagfirrullah@gmail.com", 8765431190);
console.log(Student1);