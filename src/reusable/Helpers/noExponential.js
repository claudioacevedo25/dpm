export const noExponential = (val) => {
    let data = String(val).split(/e-/);
    if (!!data.length) return Number(data[0]);
};