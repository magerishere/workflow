const setLocalStorage = (data) => {
    localStorage.setItem("usercart", JSON.stringify(data));
    return data;
};
const ReducerOrder = (state, action) => {
    let data = JSON.parse(localStorage.getItem("usercart")).slice();
    switch (action.type) {
        case "add":
            data.forEach((item) => {
                item.id === action.payload && item.count++;
            });
            return setLocalStorage(data);

        case "reduce":
            data.forEach((item) => {
                item.id === action.payload && item.count > 1 && item.count--;
            });
            return setLocalStorage(data);

        case "remove":
            const filterData = data.filter(
                (item) => item.id !== action.payload
            );
            return setLocalStorage(filterData);
        case "manual":
            data.forEach((item) => {
                if (item.id === action.payload.id) {
                    action.payload.count > 1
                        ? (item.count = action.payload.count)
                        : (item.count = 1);
                }
            });
            return setLocalStorage(data);
        default:
            return state;
    }
};

export default ReducerOrder;
