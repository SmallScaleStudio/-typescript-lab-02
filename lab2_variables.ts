console.log("----------------------------------------------------");
// Section 1: Primitive Types

let student_name: string = "Pasion Ysmael P";
let age: number = 21;
let isEnrolled: boolean = true;
let studentId: number = 20238616; 
let courseName: string = "Application Development 1";

console.log("Student Name:", student_name);
console.log("Age:", age);
console.log("Enrolled:", isEnrolled);
console.log("Student ID:", studentId);
console.log("Course:", courseName);

console.log("----------------------------------------------------");
// Section 2: Null and Undefined

let middleName: string | null = "Pedro"; 
let graduationYear: number | undefined = undefined;
let emailAddress: string | null = "20238618@s.ubaguio.edu";

console.log("Middle Name:", middleName);
console.log("Graduation Year:", graduationYear);
console.log("Email:", emailAddress);

console.log("----------------------------------------------------");
// Section 3: Number Operations

let num1: number = 25;
let num2: number = 17;
let sum: number = num1 + num2;
let difference: number = num1 - num2;
let product: number = num1 * num2;
let quotient: number = num1 / num2;

console.log("Sum:", sum);
console.log("Difference:", difference);
console.log("Product:", product);
console.log("Quotient:", quotient);

console.log("----------------------------------------------------");
// Section 4: Arrays

let favoriteColors: string[] = ["Oliver Green", "Teal", "Yellow"];
let testScores: number[] = [75, 75, 75, 75, 75];
let mixedArray: (string | number)[] = ["Lemon", 10, "Cookie", 20];

console.log("Favorite Colors:", favoriteColors);
console.log("Test Scores:", testScores);
console.log("Mixed Array:", mixedArray);

console.log("----------------------------------------------------");
// Section 5: Tuples

let Tuple: [string, number, boolean] = ["Status", 200, true];
console.log("Tuple Element 1:", Tuple[0]);
console.log("Tuple Element 2:", Tuple[1]);

console.log("----------------------------------------------------");
// Section 6: Object Types

type Student = { name: string; id: number; isActive: boolean };
type Book = { title: string; author: string; pages: number; isAvailable: boolean };
type Course = { courseCode: string; courseName: string; units: number; instructor: string };

let student: Student = { name: "Ysmael", id: 20238618, isActive: true };
let book: Book = { title: "les Fleur du Mal", author: "Charles Baudelaire", pages: 400, isAvailable: true };
let course: Course = { courseCode: "APPDEV1", courseName: "Application Development 1", units: 3, instructor: "Ma'am Erna-kristi Martinez"};

console.log(student, book.title, course);

console.log("----------------------------------------------------");