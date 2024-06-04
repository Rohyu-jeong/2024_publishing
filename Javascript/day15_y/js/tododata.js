let firstDay = new Date(2024, 1, 1);

export const dataList = 
    Array(30).fill({
        dataListDate: 1,
        dataListToDoLists: [
            {
                todo: "도망가고싶다",
                time : "11:30"
            }
    
        ]
    }).map(({dataListDate, dataListToDoLists}, i) => ({dataListDate: i + 1, dataListToDoLists}))



    // Array(365).fill({
    //     dataListMonth: 1,
    //     dataListDate: 1,
    //     dataListToDoLists: [
    //         {
    //             todo: "도망가고싶다",
    //             time : "11:30"
    //         }
    
    //     ]
    // }).map((v, i) => {
    //     let countMonth = 1;
    //     let countDate = 1;

    //     v.dataListMonth = countMonth;
    //     v.dataListDate = countDate++;

    //     const isMonth31 = v.dataListMonth == 1|| v.dataListMonth == 3 || v.dataListMonth == 5 || v.dataListMonth == 7 || v.dataListMonth == 8 || v.dataListMonth == 10 || v.dataListMonth == 12;

    //     const isMonth28 = v.dataListMonth == 2;

    //     const isMonth30 = v.dataListMonth == 4 || v.dataListMonth == 6 || v.dataListMonth == 9 || v.dataListMonth == 11;

    //     const isDate31 = v.dataListDate > 31;

    //     const isDate28 = v.dataListDate > 29;

    //     const isDate30 = v.dataListDate > 30;

    //     const isTotal = (isMonth31 && isDate31) || (isMonth28 && isDate28) || (isMonth30 && isDate30);

    //     countMonth = isTotal ? ++countMonth : countMonth;
    //     countDate = isTotal ? 1 : countDate;

        
        
    // })