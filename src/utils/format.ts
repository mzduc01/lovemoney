export const convertMoney = (value: number, format: string = "VNĐ") =>
  value
    .toString()
    .replace(/(\d)(?=(\d{3})+(?!\d))/, "$1.")
    .replace(/(\d)(?=(\d{3})+(?!\d))/, "$1.")
    .replace(/(\d)(?=(\d{3})+(?!\d))/, "$1.")
    .concat(` ${format}`);
