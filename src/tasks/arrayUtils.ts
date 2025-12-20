 export function sumPositive(nums: number[]): number {
    return nums.filter(n => n > 0).reduce((sum, n) => sum + n, 0);
}

export function filterEven(nums: number[]): number[] {
    return nums.filter(n => n % 2 === 0);
}
