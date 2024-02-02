//  calculate the student's status
function calculateStatus(average, absences) {
    const absencePercentage = absences / 60; // Assuming 60 classes in the semester
    let status = "";

    if (absencePercentage > 0.25) {
        status = "Reprovado por falta";
    } else if (average < 5) {
        status = "Reprovado por Nota.";
    } else if (average >= 5 && average < 7) {
        const naf = Math.ceil((2 * (7 - average) + average + 5) / 2);
        status = 'Exame Final - Nota para aprovação final: ${naf}';
    } else {
        status = "Aprovado";
    }

    // if the status is different from 'Exame Final'
    const gradeForFinalApproval = status.includes("Final Exam") ? naf : 0;

    // Log activities
    console.log(`Enrollment: ${student.enrollment}`);
    console.log(`Student: ${student.name}`);
    console.log(`Status: ${status}`);
    console.log(`Grade for Final Approval: ${gradeForFinalApproval}`);
    console.log("-------------------------");
}


// Calculate the status for each student
students.forEach((student) => {
    const average = (student.p1 + student.p2 + student.p3) / 3;
    calculateStatus(average, student.absences);
});

// Commands for execution:
// 1. npm install (to install dependencies)
// 2. npm start (to run the script )
