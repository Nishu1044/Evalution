function StudentDetails(name, roll_no, className, section, marks) {
    this.name = name;
    this.roll_no = roll_no;
    this.class = className;
    this.section = section;
    this.marks = marks;

  

    this.printReportCard = function () {
        console.log("Report Card");
        console.log("Name:", this.name);
        console.log("Roll Number:", this.roll_no);
        console.log("Class:", this.class);
        console.log("Section:", this.section);
        console.log("Marks:");
        for (const subject in this.marks) {
            console.log(`  ${subject}: ${this.marks[subject]}`);
        }
        
    };
}

