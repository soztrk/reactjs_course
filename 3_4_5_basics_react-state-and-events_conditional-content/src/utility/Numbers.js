export const MoneyFormat = (amount) => {
    return Number(amount).toFixed(2);
}

export const UniqueRandomNumber = () => {
    return Date.now() / 1000 | 0
}