
export const fetchWareHouseData = (state,action)=>{
    const wareHouseData = require("../../data/warehouse.json")
    return wareHouseData
}

export const filterBySearch = (state,action) =>{
        const searchByWareHouseName = state.wareHouseList.filter(wareHouse=>{
           return wareHouse.name.toLowerCase().match(action.payload.toLowerCase())
        })
    
        return searchByWareHouseName
}

export const filterWareHouse = (state,action) => {
    const { city, cluster, spaceAvailable } = action.payload;
    const filteredData = state.wareHouseList.filter((warehouse) => {
      return (
        (!city || warehouse.city.toLowerCase() === city.toLowerCase()) &&
        (!cluster || warehouse.cluster.toLowerCase() === cluster.toLowerCase()) &&
        (!spaceAvailable || warehouse.space_available == spaceAvailable)
      );
    });
    return filteredData
}


export const updateWarehouse = (state,action)=>{
    
    const updatedDetails = action.payload.wareHouseList.map((warehouse)=>{
       return warehouse.id === action.payload.formData.id ? action.payload.formData : warehouse
    })
    return updatedDetails
}