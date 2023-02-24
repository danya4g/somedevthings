let companies = {
    data : [{
        companyId : 52,
        companyName : "BMW",
        topCars: ["E 39 M5", "E 30 M3", "E 36 M3"]
    },
        {
        companyId: 72,
        companyName : "Mercedes-Benz",
        topCars : ["W213", "W205", "W140"]
        }
    ],
    meta : {
        limit: 2,
        offset: 0,
        total: 100
    }
};
let buyCar = companies.data[1].topCars[2]
console.log(buyCar);