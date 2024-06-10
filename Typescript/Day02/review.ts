const removeNum = (arr:number[]):number[] => {
    return arr.length == 0 ? [-1] : arr.filter((v) => v != arr.sort()[0]);
}