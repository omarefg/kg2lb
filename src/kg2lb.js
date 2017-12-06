const kg=0.45359237
const lb=2.20462

export const convertToKg=(libra)=>parseFloat((libra*kg).toFixed(4));
export const convertToLb=(kilos)=>parseFloat((kilos*lb).toFixed(4));

convertToKg(25); //11.3398
convertToLb(47); //103.6171
