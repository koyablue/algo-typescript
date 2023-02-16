// Don't want to write 'console.log' every time.
export const print = (msg?: any, ...arg: any[]) => {
  console.log(msg, ...arg)
}

export const getRandNums = (len = 10, range = 100) => Array.from({length: len}, () => Math.floor(Math.random() * range))