// ============ BRIGHTSPACE COURSE IDs ============
const BRIGHTSPACE = 'https://brightspace.utrgv.edu';
const SIMNET = 'https://utrgv.simnet.mheducation.com';
const COURSE_IDS = {
    infs: 41448,
    acct: 44030,
    qumt: null, // will use generic brightspace link
    engl: 45730
};

function bsGrades(courseId) { return `${BRIGHTSPACE}/d2l/lms/grades/my_grades/main.d2l?ou=${courseId}`; }
function bsContent(courseId) { return `${BRIGHTSPACE}/d2l/le/content/${courseId}/Home`; }
function bsHome(courseId) { return `${BRIGHTSPACE}/d2l/home/${courseId}`; }

// ============ INFS 2300 DATA ============
const infsData = [
    { ch: 1, concept: 100, sim: 100, project: '✅', simbook: '4%', status: 'done',
      link: SIMNET },
    { ch: 2, concept: 70, sim: 100, project: '❌ Missing', simbook: '0%', status: 'issue',
      link: SIMNET },
    { ch: 3, concept: 100, sim: 100, project: '✅', simbook: '0%', status: 'done',
      link: SIMNET },
    { ch: 4, concept: 100, sim: 100, project: '✅', simbook: '0%', status: 'done',
      link: SIMNET },
    { ch: 5, concept: 100, sim: 100, project: '✅', simbook: '0%', status: 'done',
      link: SIMNET },
    { ch: 6, concept: 90, sim: 80, project: '⏳', simbook: '0%', status: 'active',
      link: SIMNET },
    { ch: 7, concept: '—', sim: '—', project: '—', simbook: '—', status: 'upcoming',
      link: SIMNET },
    { ch: 8, concept: '—', sim: '—', project: '—', simbook: '—', status: 'upcoming',
      link: SIMNET },
    { ch: 9, concept: '—', sim: '—', project: '—', simbook: '—', status: 'upcoming',
      link: SIMNET },
    { ch: 10, concept: '—', sim: '—', project: '—', simbook: '—', status: 'upcoming',
      link: SIMNET },
];

// ============ ACCT 2301 DATA ============
const acctData = [
    { name: 'Orientation Videos: Extra Credit', points: '1.98/20', grade: '9.9%', status: 'done', link: bsContent(COURSE_IDS.acct) },
    { name: 'Chapter 1 Lecture Videos', points: '9.16/10', grade: '91.6%', status: 'done', link: bsContent(COURSE_IDS.acct) },
    { name: 'Chapter 1 SmartBook', points: '10/10', grade: '100%', status: 'done', link: bsContent(COURSE_IDS.acct) },
    { name: 'Chapter 1 Homework', points: '7.79/10', grade: '77.9%', status: 'done', link: bsContent(COURSE_IDS.acct) },
    { name: 'Chapter 1 Quiz', points: '10/10', grade: '100%', status: 'done', link: bsContent(COURSE_IDS.acct) },
    { name: 'Chapter 2 Lecture Videos', points: '9.18/10', grade: '91.8%', status: 'done', link: bsContent(COURSE_IDS.acct) },
    { name: 'Chapter 2 SmartBook', points: '10/10', grade: '100%', status: 'done', link: bsContent(COURSE_IDS.acct) },
    { name: 'Chapter 2 Homework', points: '9.36/10', grade: '93.6%', status: 'done', link: bsContent(COURSE_IDS.acct) },
    { name: 'Chapter 2 Quiz', points: '9/10', grade: '90%', status: 'done', link: bsContent(COURSE_IDS.acct) },
    { name: 'Chapter 3 Lecture Videos', points: '9.08/10', grade: '90.8%', status: 'done', link: bsContent(COURSE_IDS.acct) },
    { name: 'Chapter 3 SmartBook', points: '0/10', grade: '0%', status: 'issue', link: bsContent(COURSE_IDS.acct) },
    { name: 'Chapter 3 Homework', points: '8.52/10', grade: '85.2%', status: 'done', link: bsContent(COURSE_IDS.acct) },
    { name: 'Chapter 3 Quiz', points: '9/10', grade: '90%', status: 'done', link: bsContent(COURSE_IDS.acct) },
    { name: 'Chapter 4 Lecture Videos', points: '9.27/10', grade: '92.7%', status: 'done', link: bsContent(COURSE_IDS.acct) },
    { name: 'Chapter 4 SmartBook', points: '10/10', grade: '100%', status: 'done', link: bsContent(COURSE_IDS.acct) },
    { name: 'Chapter 4 Homework', points: '8.78/10', grade: '87.8%', status: 'done', link: bsContent(COURSE_IDS.acct) },
    { name: 'Chapter 4 Quiz', points: '10/10', grade: '100%', status: 'done', link: bsContent(COURSE_IDS.acct) },
    { name: 'Chapter 5 Lecture Videos', points: '9.36/10', grade: '93.6%', status: 'done', link: bsContent(COURSE_IDS.acct) },
    { name: 'Chapter 5 SmartBook', points: '10/10', grade: '100%', status: 'done', link: bsContent(COURSE_IDS.acct) },
    { name: 'Chapter 5 Homework', points: '9.72/10', grade: '97.2%', status: 'done', link: bsContent(COURSE_IDS.acct) },
    { name: 'Chapter 5 Quiz', points: '10/10', grade: '100%', status: 'done', link: bsContent(COURSE_IDS.acct) },
    { name: 'Chapter 6 Lecture Videos', points: '9.8/10', grade: '98%', status: 'done', link: bsContent(COURSE_IDS.acct) },
    { name: 'Chapter 6 SmartBook', points: '10/10', grade: '100%', status: 'done', link: bsContent(COURSE_IDS.acct) },
    { name: 'Chapter 6 Homework', points: '8.33/10', grade: '83.3%', status: 'done', link: bsContent(COURSE_IDS.acct) },
    { name: 'Chapter 6 Quiz', points: '10/10', grade: '100%', status: 'done', link: bsContent(COURSE_IDS.acct) },
    { name: 'Chapter 7 Lecture Videos', points: '—/10', grade: '—', status: 'upcoming', link: bsContent(COURSE_IDS.acct) },
    { name: 'Chapter 7 SmartBook', points: '—/10', grade: '—', status: 'upcoming', link: bsContent(COURSE_IDS.acct) },
    { name: 'Chapter 7 Homework', points: '—/10', grade: '—', status: 'upcoming', link: bsContent(COURSE_IDS.acct) },
    { name: 'Chapter 7 Quiz', points: '—/10', grade: '—', status: 'upcoming', link: bsContent(COURSE_IDS.acct) },
    { name: 'Chapter 8 Lecture Videos', points: '—/10', grade: '—', status: 'upcoming', link: bsContent(COURSE_IDS.acct) },
    { name: 'Chapter 8 SmartBook', points: '—/10', grade: '—', status: 'upcoming', link: bsContent(COURSE_IDS.acct) },
    { name: 'Chapter 8 Homework', points: '—/10', grade: '—', status: 'upcoming', link: bsContent(COURSE_IDS.acct) },
    { name: 'Chapter 8 Quiz', points: '—/10', grade: '—', status: 'upcoming', link: bsContent(COURSE_IDS.acct) },
    { name: 'Chapter 9 Lecture Videos', points: '—/10', grade: '—', status: 'upcoming', link: bsContent(COURSE_IDS.acct) },
    { name: 'Chapter 9 SmartBook', points: '—/10', grade: '—', status: 'upcoming', link: bsContent(COURSE_IDS.acct) },
    { name: 'Chapter 9 Homework', points: '—/10', grade: '—', status: 'upcoming', link: bsContent(COURSE_IDS.acct) },
    { name: 'Chapter 9 Quiz', points: '—/10', grade: '—', status: 'upcoming', link: bsContent(COURSE_IDS.acct) },
    { name: 'Chapter 11 Lecture Videos', points: '—/10', grade: '—', status: 'upcoming', link: bsContent(COURSE_IDS.acct) },
    { name: 'Chapter 11 SmartBook', points: '—/10', grade: '—', status: 'upcoming', link: bsContent(COURSE_IDS.acct) },
    { name: 'Chapter 11 Homework', points: '—/10', grade: '—', status: 'upcoming', link: bsContent(COURSE_IDS.acct) },
    { name: 'Chapter 11 Quiz', points: '—/10', grade: '—', status: 'upcoming', link: bsContent(COURSE_IDS.acct) },
    { name: 'Exam 1', points: '121/250', grade: '48.4%', status: 'done', link: bsGrades(COURSE_IDS.acct) },
    { name: 'Exam II', points: '86/250', grade: '34.4%', status: 'issue', link: bsGrades(COURSE_IDS.acct) },
    { name: 'Exam III', points: '—/250', grade: '—', status: 'upcoming', link: bsGrades(COURSE_IDS.acct) },
    { name: 'Exam IV', points: '—/250', grade: '—', status: 'upcoming', link: bsGrades(COURSE_IDS.acct) },
    { name: 'Optional Accounting Cycle (Bonus)', points: '—/50', grade: '—', status: 'upcoming', link: bsContent(COURSE_IDS.acct) },
    { name: 'Extra Credit: PowerPoint (Bonus)', points: '—', grade: '—', status: 'upcoming', link: bsContent(COURSE_IDS.acct) },
];

// ============ QUMT 2398 DATA ============
const qumtData = [
    { name: 'Quiz - Module 01 - Decision Making', points: '50/50', grade: '100%', status: 'done', link: bsContent(COURSE_IDS.qumt || 0) },
    { name: 'Quiz - Module 02 - Data Sets', points: '50/50', grade: '100%', status: 'done', link: bsContent(COURSE_IDS.qumt || 0) },
    { name: 'Quiz - Module 03 - Descriptive Stats', points: '50/50', grade: '100%', status: 'done', link: bsContent(COURSE_IDS.qumt || 0) },
    { name: 'Quiz - Module 04 - Collecting & Preparing Data', points: '50/50', grade: '100%', status: 'done', link: bsContent(COURSE_IDS.qumt || 0) },
    { name: 'Quiz - Module 05 - Data Science', points: '50/50', grade: '100%', status: 'done', link: bsContent(COURSE_IDS.qumt || 0) },
    { name: 'Quiz - Module 06 - Correlation & Regression', points: '50/50', grade: '100%', status: 'done', link: bsContent(COURSE_IDS.qumt || 0) },
    { name: 'Exam 1', points: '100/100', grade: '100%', status: 'done', link: bsContent(COURSE_IDS.qumt || 0) },
    { name: 'Assignment: Tableau Visualization', points: '—/50', grade: '—', status: 'upcoming', link: bsContent(COURSE_IDS.qumt || 0) },
    { name: 'Real Estate Instructions Word File', points: '—/100', grade: '—', status: 'upcoming', link: bsContent(COURSE_IDS.qumt || 0) },
    { name: 'Real Estate Instructions Word File (1)', points: '—/100', grade: '—', status: 'upcoming', link: bsContent(COURSE_IDS.qumt || 0) },
    { name: 'Real Estate Project Quiz', points: '—/100', grade: '—', status: 'upcoming', link: bsContent(COURSE_IDS.qumt || 0) },
];

// ============ ENGL 1302 DATA ============
const englData = [
    { name: 'Attendance', points: '82/100', weight: '8.2/10', grade: 'B', status: 'done', link: bsGrades(COURSE_IDS.engl) },
    { name: 'Unit 1: Reading Material Printouts', points: '100/100', weight: '1.11/1.11', grade: 'A', status: 'done', link: bsContent(COURSE_IDS.engl) },
    { name: 'Unit 1: Office Hours Conferencing', points: '100/100', weight: '1.11/1.11', grade: 'A', status: 'done', link: bsContent(COURSE_IDS.engl) },
    { name: 'Op-Ed In-Class: Triple Circle Venn Diagram', points: '25/25', weight: '1.11/1.11', grade: 'A', status: 'done', link: bsContent(COURSE_IDS.engl) },
    { name: 'K-W-L: Assessing Source Credibility', points: '25/25', weight: '1.11/1.11', grade: 'A', status: 'done', link: bsContent(COURSE_IDS.engl) },
    { name: 'In-Class Activity: Op-Ed Writing Checklist', points: '25/25', weight: '1.11/1.11', grade: 'A', status: 'done', link: bsContent(COURSE_IDS.engl) },
    { name: 'Op-Ed Outline & Graphic Organizer', points: '25/25', weight: '1.11/1.11', grade: 'A', status: 'done', link: bsContent(COURSE_IDS.engl) },
    { name: '⚠️ UNIT I: Reflective Podcast', points: '0/50', weight: '0/1.11', grade: 'F', status: 'issue', link: bsContent(COURSE_IDS.engl) },
    { name: 'Unit 2: Reading Material Printouts', points: '100/100', weight: '1.11/1.11', grade: 'A', status: 'done', link: bsContent(COURSE_IDS.engl) },
    { name: 'Literature Review Outline & Graphic Organizer', points: '25/25', weight: '1.11/1.11', grade: 'A', status: 'done', link: bsContent(COURSE_IDS.engl) },
    { name: 'Literature Review', points: '—/100', weight: '—', grade: '—', status: 'upcoming', link: bsContent(COURSE_IDS.engl) },
    { name: 'Unit 2: Office Hours Conferencing', points: '—/100', weight: '—', grade: '—', status: 'upcoming', link: bsContent(COURSE_IDS.engl) },
    { name: 'Unit 3: Office Hours Conferencing', points: '—/100', weight: '—', grade: '—', status: 'upcoming', link: bsContent(COURSE_IDS.engl) },
    { name: 'Syllabus Quiz', points: '85/100', weight: '2.13/2.5', grade: 'B', status: 'done', link: bsContent(COURSE_IDS.engl) },
    { name: 'Public Writing for Social Change Quiz', points: '100/100', weight: '2.5/2.5', grade: 'A', status: 'done', link: bsContent(COURSE_IDS.engl) },
    { name: 'Googlepedia Quiz', points: '100/100', weight: '2.5/2.5', grade: 'A', status: 'done', link: bsContent(COURSE_IDS.engl) },
    { name: 'Assessing Source Credibility Quiz', points: '100/100', weight: '2.5/2.5', grade: 'A', status: 'done', link: bsContent(COURSE_IDS.engl) },
    { name: "Everything's Biased Quiz", points: '90/100', weight: '2.25/2.5', grade: 'A', status: 'done', link: bsContent(COURSE_IDS.engl) },
    { name: 'Intro to Primary Research Quiz', points: '95/100', weight: '2.38/2.5', grade: 'A', status: 'done', link: bsContent(COURSE_IDS.engl) },
    { name: 'Strategies for Analyzing & Composing Quiz', points: '95/100', weight: '2.38/2.5', grade: 'A', status: 'done', link: bsContent(COURSE_IDS.engl) },
    { name: 'Annoying Ways People Use Sources Quiz', points: '75/100', weight: '1.88/2.5', grade: 'C', status: 'done', link: bsContent(COURSE_IDS.engl) },
    { name: 'UNIT I: Multimodal Writing Project Op-Ed', points: '—/100', weight: '—', grade: '—', status: 'upcoming', link: bsContent(COURSE_IDS.engl) },
];

// ============ FORMULA DATABASE (Excel) ============
const formulas = [
    { name: "SUM", cat: "basic", chapter: "Ch 1-2", syntax: "=SUM(A1:A10)", desc: "Adds all values in a range.", example: '=SUM(B2:B20) → Total of column B' },
    { name: "AVERAGE", cat: "statistical", chapter: "Ch 2", syntax: "=AVERAGE(A1:A10)", desc: "Returns the arithmetic mean.", example: '=AVERAGE(C2:C15) → Mean score' },
    { name: "MAX", cat: "statistical", chapter: "Ch 2", syntax: "=MAX(A1:A10)", desc: "Returns the largest value in a range.", example: '=MAX(D:D) → Highest value' },
    { name: "MIN", cat: "statistical", chapter: "Ch 2", syntax: "=MIN(A1:A10)", desc: "Returns the smallest value in a range.", example: '=MIN(D:D) → Lowest value' },
    { name: "COUNT", cat: "statistical", chapter: "Ch 2", syntax: "=COUNT(A1:A10)", desc: "Counts cells that contain numbers.", example: '=COUNT(A:A) → Number of numeric entries' },
    { name: "COUNTA", cat: "statistical", chapter: "Ch 2", syntax: "=COUNTA(A1:A10)", desc: "Counts non-empty cells.", example: '=COUNTA(A:A) → All non-blank cells' },
    { name: "IF", cat: "logical", chapter: "Ch 2", syntax: '=IF(test, true_val, false_val)', desc: "Performs a logical test and returns one of two values.", example: '=IF(A1>90, "Pass", "Fail")' },
    { name: "IFS", cat: "logical", chapter: "Ch 6", syntax: '=IFS(test1, val1, test2, val2, ...)', desc: "Evaluates multiple conditions in order.", example: '=IFS(A1>=90,"A", A1>=80,"B", TRUE,"F")' },
    { name: "AND", cat: "logical", chapter: "Ch 6", syntax: "=AND(logical1, logical2, ...)", desc: "Returns TRUE if ALL conditions are true.", example: '=AND(A1>50, B1<100)' },
    { name: "OR", cat: "logical", chapter: "Ch 6", syntax: "=OR(logical1, logical2, ...)", desc: "Returns TRUE if ANY condition is true.", example: '=OR(A1="Yes", B1="Yes")' },
    { name: "VLOOKUP", cat: "lookup", chapter: "Ch 6", syntax: "=VLOOKUP(val, range, col, match)", desc: "Searches first column of range, returns value from specified column.", example: '=VLOOKUP(E2, A:D, 3, FALSE)' },
    { name: "HLOOKUP", cat: "lookup", chapter: "Ch 6", syntax: "=HLOOKUP(val, range, row, match)", desc: "Searches first row of range, returns value from specified row.", example: '=HLOOKUP("Q1", A1:D4, 3, FALSE)' },
    { name: "XLOOKUP", cat: "lookup", chapter: "Ch 6", syntax: '=XLOOKUP(val, lookup, return, not_found)', desc: "Modern lookup — searches any direction, handles errors.", example: '=XLOOKUP(A1, B:B, C:C, "N/A")' },
    { name: "INDEX", cat: "lookup", chapter: "Ch 6", syntax: "=INDEX(range, row, [col])", desc: "Returns value at a specific row/column position.", example: '=INDEX(B2:B100, 5)' },
    { name: "MATCH", cat: "lookup", chapter: "Ch 6", syntax: "=MATCH(val, range, match_type)", desc: "Returns the position of a value in a range.", example: '=MATCH("Apple", A:A, 0)' },
    { name: "SUMIF", cat: "basic", chapter: "Ch 6", syntax: '=SUMIF(range, criteria, sum_range)', desc: "Sums values that meet a criterion.", example: '=SUMIF(A:A, "East", B:B)' },
    { name: "SUMIFS", cat: "basic", chapter: "Ch 6", syntax: '=SUMIFS(sum_range, range1, crit1, ...)', desc: "Sums values meeting multiple criteria.", example: '=SUMIFS(C:C, A:A, "East", B:B, ">100")' },
    { name: "COUNTIF", cat: "statistical", chapter: "Ch 6", syntax: '=COUNTIF(range, criteria)', desc: "Counts cells meeting a criterion.", example: '=COUNTIF(A:A, ">50")' },
    { name: "COUNTIFS", cat: "statistical", chapter: "Ch 6", syntax: '=COUNTIFS(range1, crit1, range2, crit2)', desc: "Counts cells meeting multiple criteria.", example: '=COUNTIFS(A:A, "East", B:B, ">100")' },
    { name: "PMT", cat: "financial", chapter: "Ch 6", syntax: "=PMT(rate, nper, pv)", desc: "Calculates periodic loan payment.", example: '=PMT(0.05/12, 360, -250000)' },
    { name: "FV", cat: "financial", chapter: "Ch 6", syntax: "=FV(rate, nper, pmt, [pv])", desc: "Calculates future value of an investment.", example: '=FV(0.08/12, 240, -500)' },
    { name: "PV", cat: "financial", chapter: "Ch 6", syntax: "=PV(rate, nper, pmt)", desc: "Calculates present value.", example: '=PV(0.06/12, 120, -200)' },
    { name: "CONCATENATE", cat: "text", chapter: "Ch 4", syntax: '=CONCATENATE(A1, " ", B1)', desc: "Joins text strings together.", example: '=CONCATENATE("Hello", " ", "World")' },
    { name: "LEFT", cat: "text", chapter: "Ch 6", syntax: "=LEFT(text, num_chars)", desc: "Extracts characters from the left.", example: '=LEFT(A1, 3) → First 3 chars' },
    { name: "RIGHT", cat: "text", chapter: "Ch 6", syntax: "=RIGHT(text, num_chars)", desc: "Extracts characters from the right.", example: '=RIGHT(A1, 4) → Last 4 chars' },
    { name: "MID", cat: "text", chapter: "Ch 6", syntax: "=MID(text, start, num_chars)", desc: "Extracts characters from the middle.", example: '=MID(A1, 3, 5)' },
    { name: "LEN", cat: "text", chapter: "Ch 6", syntax: "=LEN(text)", desc: "Returns the length of text.", example: '=LEN("Hello") → 5' },
    { name: "TRIM", cat: "text", chapter: "Ch 6", syntax: "=TRIM(text)", desc: "Removes extra spaces.", example: '=TRIM("  Hello  ") → "Hello"' },
    { name: "UPPER", cat: "text", chapter: "Ch 6", syntax: "=UPPER(text)", desc: "Converts text to uppercase.", example: '=UPPER("hello") → "HELLO"' },
    { name: "LOWER", cat: "text", chapter: "Ch 6", syntax: "=LOWER(text)", desc: "Converts text to lowercase.", example: '=LOWER("HELLO") → "hello"' },
    { name: "PROPER", cat: "text", chapter: "Ch 6", syntax: "=PROPER(text)", desc: "Capitalizes first letter of each word.", example: '=PROPER("john doe") → "John Doe"' },
    { name: "TODAY", cat: "date", chapter: "Ch 2", syntax: "=TODAY()", desc: "Returns today's date.", example: '=TODAY() → current date' },
    { name: "NOW", cat: "date", chapter: "Ch 2", syntax: "=NOW()", desc: "Returns current date and time.", example: '=NOW() → date + time' },
    { name: "ROUND", cat: "basic", chapter: "Ch 2", syntax: "=ROUND(number, digits)", desc: "Rounds to specified digits.", example: '=ROUND(3.14159, 2) → 3.14' },
    { name: "ABS", cat: "basic", chapter: "Ch 2", syntax: "=ABS(number)", desc: "Returns absolute value.", example: '=ABS(-42) → 42' },
    { name: "IFERROR", cat: "logical", chapter: "Ch 6", syntax: '=IFERROR(value, error_val)', desc: "Returns custom value on error.", example: '=IFERROR(A1/B1, "N/A")' },
    { name: "NOT", cat: "logical", chapter: "Ch 6", syntax: "=NOT(logical)", desc: "Reverses a logical value.", example: '=NOT(A1>100) → TRUE if ≤100' },
    { name: "DATEDIF", cat: "date", chapter: "Ch 6", syntax: '=DATEDIF(start, end, "unit")', desc: "Calculates difference between dates.", example: '=DATEDIF(A1, B1, "D")' },
];

// ============ SHORTCUTS DATABASE ============
const shortcuts = [
    { keys: ["Ctrl", "C"], desc: "Copy selected cells", cat: "editing" },
    { keys: ["Ctrl", "V"], desc: "Paste", cat: "editing" },
    { keys: ["Ctrl", "X"], desc: "Cut selected cells", cat: "editing" },
    { keys: ["Ctrl", "Z"], desc: "Undo last action", cat: "editing" },
    { keys: ["Ctrl", "Y"], desc: "Redo last action", cat: "editing" },
    { keys: ["Ctrl", "S"], desc: "Save workbook", cat: "editing" },
    { keys: ["Ctrl", "A"], desc: "Select all cells", cat: "editing" },
    { keys: ["Ctrl", "F"], desc: "Find", cat: "editing" },
    { keys: ["Ctrl", "H"], desc: "Find & Replace", cat: "editing" },
    { keys: ["Ctrl", "Home"], desc: "Go to cell A1", cat: "navigation" },
    { keys: ["Ctrl", "End"], desc: "Go to last used cell", cat: "navigation" },
    { keys: ["Ctrl", "↓"], desc: "Jump to last filled cell in column", cat: "navigation" },
    { keys: ["Ctrl", "Page Up"], desc: "Previous worksheet tab", cat: "navigation" },
    { keys: ["Ctrl", "Page Dn"], desc: "Next worksheet tab", cat: "navigation" },
    { keys: ["F2"], desc: "Edit active cell", cat: "editing" },
    { keys: ["F4"], desc: "Toggle absolute/relative ($)", cat: "formulas" },
    { keys: ["F11"], desc: "Create chart sheet", cat: "data" },
    { keys: ["Alt", "="], desc: "AutoSum", cat: "formulas" },
    { keys: ["Alt", "Enter"], desc: "New line in cell", cat: "editing" },
    { keys: ["Ctrl", "B"], desc: "Bold", cat: "formatting" },
    { keys: ["Ctrl", "I"], desc: "Italic", cat: "formatting" },
    { keys: ["Ctrl", "U"], desc: "Underline", cat: "formatting" },
    { keys: ["Ctrl", "1"], desc: "Format Cells dialog", cat: "formatting" },
    { keys: ["Ctrl", "Shift", "$"], desc: "Currency format", cat: "formatting" },
    { keys: ["Ctrl", "Shift", "%"], desc: "Percentage format", cat: "formatting" },
    { keys: ["Ctrl", ";"], desc: "Insert today's date", cat: "editing" },
    { keys: ["Ctrl", "T"], desc: "Create Table", cat: "data" },
    { keys: ["Ctrl", "E"], desc: "Flash Fill", cat: "data" },
    { keys: ["Alt", "F11"], desc: "Open VBA Editor", cat: "formulas" },
    { keys: ["Ctrl", "Shift", "L"], desc: "Toggle AutoFilter", cat: "data" },
    { keys: ["Ctrl", "`"], desc: "Toggle formula view", cat: "formulas" },
    { keys: ["Ctrl", "+"], desc: "Insert cells/rows/columns", cat: "editing" },
    { keys: ["Ctrl", "-"], desc: "Delete cells/rows/columns", cat: "editing" },
    { keys: ["Esc"], desc: "Cancel / close dialogs", cat: "navigation" },
];

// ============ HELPER FUNCTIONS ============
function scoreClass(val) {
    if (typeof val === 'string') {
        if (val.includes('Missing') || val === 'F') return 'low';
        if (val === '—' || val === '⏳') return 'pending';
        if (val === '✅') return 'high';
        const num = parseFloat(val);
        if (isNaN(num)) return 'pending';
        val = num;
    }
    if (val >= 90) return 'high';
    if (val >= 70) return 'mid';
    if (val > 0) return 'low';
    return 'pending';
}

function statusBadge(status) {
    const map = {
        done: '<span class="status-badge done">✅ Done</span>',
        active: '<span class="status-badge active">🔵 Active</span>',
        upcoming: '<span class="status-badge upcoming">🔜 Upcoming</span>',
        issue: '<span class="status-badge issue">⚠️ Issue</span>',
    };
    return map[status] || '';
}

function formatScore(val) {
    if (typeof val === 'string') return `<span class="score ${scoreClass(val)}">${val}</span>`;
    return `<span class="score ${scoreClass(val)}">${val}%</span>`;
}

// ============ TAB NAVIGATION ============
document.querySelectorAll('.nav-tab').forEach(tab => {
    tab.addEventListener('click', () => {
        document.querySelectorAll('.nav-tab').forEach(t => t.classList.remove('active'));
        document.querySelectorAll('.tab-content').forEach(tc => tc.classList.remove('active'));
        tab.classList.add('active');
        document.getElementById('tab-' + tab.dataset.tab).classList.add('active');
    });
});

// ============ REFERENCE SUB-TABS ============
document.querySelectorAll('[data-ref]').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('[data-ref]').forEach(b => b.classList.remove('active'));
        document.querySelectorAll('.ref-section').forEach(s => s.classList.remove('active'));
        btn.classList.add('active');
        document.getElementById(btn.dataset.ref).classList.add('active');
    });
});

// ============ RENDER COURSE OVERVIEW CARDS ============
function renderCourseCards() {
    const grid = document.getElementById('course-cards-grid');
    const courses = [
        { code: 'QUMT 2398', name: 'Decision Sciences', grade: 'A+', pct: '100%', cls: 'qumt', grCls: 'a', tab: 'qumt2398' },
        { code: 'ACCT 2301', name: 'Principles of Accounting I', grade: 'D*', pct: '55.96%', cls: 'acct', grCls: 'warn', tab: 'acct2301' },
        { code: 'INFS 2300', name: 'Data Modeling (Excel)', grade: 'A', pct: '~90%', cls: 'infs', grCls: 'a', tab: 'infs2300' },
        { code: 'ENGL 1302', name: 'Rhetoric & Composition II', grade: 'B', pct: '88.9%', cls: 'engl', grCls: 'b', tab: 'engl1302' },
    ];

    grid.innerHTML = courses.map(c => `
        <div class="course-overview-card ${c.cls}" data-tab="${c.tab}">
            <div class="coc-code ${c.cls}">${c.code}</div>
            <div class="coc-title">${c.name}</div>
            <div class="coc-stats">
                <div class="coc-grade ${c.grCls}">${c.grade}</div>
                <div class="coc-label">${c.pct}</div>
            </div>
        </div>
    `).join('');

    grid.querySelectorAll('.course-overview-card').forEach(card => {
        card.addEventListener('click', () => {
            const tabId = card.dataset.tab;
            document.querySelectorAll('.nav-tab').forEach(t => t.classList.remove('active'));
            document.querySelectorAll('.tab-content').forEach(tc => tc.classList.remove('active'));
            document.querySelector(`[data-tab="${tabId}"]`).classList.add('active');
            document.getElementById('tab-' + tabId).classList.add('active');
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });
}

// ============ RENDER INFS 2300 TABLE ============
function renderINFS() {
    const tbody = document.getElementById('infs-tbody');
    tbody.innerHTML = infsData.map(row => {
        const rowClass = row.status === 'active' ? 'row-active' : row.status === 'issue' ? 'row-warning' : '';
        return `
        <tr class="clickable-row ${rowClass}" onclick="window.open('${row.link}', '_blank')">
            <td><span class="ch-badge ${row.status === 'active' ? 'current' : ''}">Ch ${row.ch}</span><span class="row-link-icon">↗</span></td>
            <td>${formatScore(row.concept)}</td>
            <td>${formatScore(row.sim)}</td>
            <td>${formatScore(row.project)}</td>
            <td>${formatScore(row.simbook)}</td>
            <td>${statusBadge(row.status)}</td>
        </tr>`;
    }).join('');
}

// ============ RENDER ACCT 2301 TABLE ============
function renderACCT() {
    const tbody = document.getElementById('acct-tbody');
    tbody.innerHTML = acctData.map(row => {
        const rowClass = row.status === 'issue' ? 'row-warning' : '';
        return `
        <tr class="clickable-row ${rowClass}" onclick="window.open('${row.link}', '_blank')">
            <td>${row.name}<span class="row-link-icon">↗</span></td>
            <td>${row.points}</td>
            <td>${formatScore(row.grade)}</td>
            <td>${statusBadge(row.status)}</td>
        </tr>`;
    }).join('');
}

// ============ RENDER QUMT 2398 TABLE ============
function renderQUMT() {
    const tbody = document.getElementById('qumt-tbody');
    tbody.innerHTML = qumtData.map(row => {
        return `
        <tr class="clickable-row" onclick="window.open('${row.link}', '_blank')">
            <td>${row.name}<span class="row-link-icon">↗</span></td>
            <td>${row.points}</td>
            <td>${formatScore(row.grade)}</td>
            <td>${statusBadge(row.status)}</td>
        </tr>`;
    }).join('');
}

// ============ RENDER ENGL 1302 TABLE ============
function renderENGL() {
    const tbody = document.getElementById('engl-tbody');
    tbody.innerHTML = englData.map(row => {
        const rowClass = row.status === 'issue' ? 'row-warning' : '';
        return `
        <tr class="clickable-row ${rowClass}" onclick="window.open('${row.link}', '_blank')">
            <td>${row.name}<span class="row-link-icon">↗</span></td>
            <td>${row.points}</td>
            <td>${row.weight}</td>
            <td>${formatScore(row.grade)}</td>
            <td>${statusBadge(row.status)}</td>
        </tr>`;
    }).join('');
}

// ============ RENDER FORMULAS ============
function renderFormulas(filter = 'all', search = '') {
    const grid = document.getElementById('formulas-grid');
    const filtered = formulas.filter(f => {
        const matchCat = filter === 'all' || f.cat === filter;
        const matchSearch = search === '' ||
            f.name.toLowerCase().includes(search.toLowerCase()) ||
            f.desc.toLowerCase().includes(search.toLowerCase());
        return matchCat && matchSearch;
    });

    grid.innerHTML = filtered.map(f => `
        <div class="formula-card">
            <div class="formula-name">${f.name}</div>
            <div class="formula-chapter"><span class="formula-tag">${f.cat}</span> ${f.chapter}</div>
            <div class="formula-desc">${f.desc}</div>
            <div class="formula-syntax">${f.syntax}</div>
            <div class="formula-example-text">Example: ${f.example}</div>
        </div>
    `).join('');

    if (filtered.length === 0) {
        grid.innerHTML = '<p style="color:var(--text-muted);text-align:center;padding:40px;">No formulas match your search.</p>';
    }
}

document.querySelectorAll('[data-cat]').forEach(btn => {
    btn.addEventListener('click', () => {
        btn.closest('.formula-categories').querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderFormulas(btn.dataset.cat, document.getElementById('formula-search').value);
    });
});

document.getElementById('formula-search').addEventListener('input', (e) => {
    const activeCat = document.querySelector('[data-cat].active');
    renderFormulas(activeCat ? activeCat.dataset.cat : 'all', e.target.value);
});

// ============ RENDER SHORTCUTS ============
function renderShortcuts(filter = 'all') {
    const grid = document.getElementById('shortcuts-grid');
    const filtered = filter === 'all' ? shortcuts : shortcuts.filter(s => s.cat === filter);

    grid.innerHTML = filtered.map(s => `
        <div class="shortcut-card">
            <span class="sc-desc">${s.desc}</span>
            <span class="sc-keys">
                ${s.keys.map(k => `<span class="key">${k}</span>`).join('<span style="color:var(--text-muted);font-size:0.7rem;">+</span>')}
            </span>
        </div>
    `).join('');
}

document.querySelectorAll('[data-scat]').forEach(btn => {
    btn.addEventListener('click', () => {
        btn.closest('.formula-categories, .shortcuts-filter').querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderShortcuts(btn.dataset.scat);
    });
});

// ============ CHAPTER DETAIL (INFS) ============
document.getElementById('back-to-chapters')?.addEventListener('click', () => {
    document.getElementById('chapter-detail').style.display = 'none';
});

// ============ INIT ============
renderCourseCards();
renderINFS();
renderACCT();
renderQUMT();
renderENGL();
renderFormulas();
renderShortcuts();
