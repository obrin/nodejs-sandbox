export const pipe = (x, ...fs) => fs.reduce((y, f) => f(y), x)
