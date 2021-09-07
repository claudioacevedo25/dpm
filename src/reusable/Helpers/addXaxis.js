export const addXaxis = (start, step, end) => {
    let arrayValues = [];
     for (let i=start; i < end; i+=step) {
      arrayValues.push(i);
    }
    return arrayValues;
};