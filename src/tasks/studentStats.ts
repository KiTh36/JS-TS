type Student = {
    name: string;
    grades: number[];
}

function getMinGrade(grades: number[]): number {
    return Math.min(...grades);
}
 function getMaxGrade(grades: number[]): number {
    return Math.max(...grades);
}

function getAverageGrade(grades: number[]): number {
    const sum = grades.reduce((a, b) => a + b, 0);
    return grades.length ? sum / grades.length : 0;
}
