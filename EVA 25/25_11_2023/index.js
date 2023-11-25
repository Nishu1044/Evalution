function StudentDetails(name, roll_no, className, section, marks) {
    this.name = name;
    this.roll_no = roll_no;
    this.class = className;
    this.section = section;
    this.marks = marks;

    this.printTop3Subjects = function () {
        const subjects = Object.keys(this.marks);

        for (let i = 0; i < subjects.length - 1; i++) {
            for (let j = 0; j < subjects.length - i - 1; j++) {
                if (this.marks[subjects[j]] < this.marks[subjects[j + 1]]) {
            
                    const temp = subjects[j];
                    subjects[j] = subjects[j + 1];
                    subjects[j + 1] = temp;
                }
            }
        }

        const top3Subjects = subjects.slice(0, 3);
        console.log("Top 3 Subjects:", top3Subjects);
    };

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
        this.printTop3Subjects();
    };
}


const student1 = new StudentDetails("Deepak", 101, "X", "A", {
    science: 72,
    maths: 75,
    social_science: 79,
    english: 80,
    hindi: 67,
});

const student2 = new StudentDetails("RAM", 121, "A", "C", {
    science: 52,
    maths: 85,
    social_science: 69,
    english: 90,
    hindi: 47,
});

student1.printReportCard();
