 export function isStrongPassword(pwd: string): boolean {
   const PasswordRange = pwd.length >= 8 && pwd.length <= 20;
  const hasNumber = /\d/.test(pwd);
    const hasUpperCase = /[A-Z]/.test(pwd);
    return PasswordRange && hasNumber && hasUpperCase;
}
