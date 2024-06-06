const firstDay = new Date(2024, 0, 1);

export const dataList = 
    Array(366).fill({
        dataListMonth: 1,
        dataListDate: 1,
        dataListToDoLists: []
    }).map(({dataListMonth, dataListDate, dataListToDoLists}, i) => {
        const currentDate = new Date(firstDay.getFullYear(), firstDay.getMonth(), firstDay.getDate() + i);

        return {
            dataListMonth: currentDate.getMonth() + 1,
            dataListDate: currentDate.getDate(),
            dataListToDoLists
        }
    })