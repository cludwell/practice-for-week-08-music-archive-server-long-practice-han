// console.log(JSON.stringify({
//     name: "Crass",
//     artistId: 3,
//     albums: [
//         {
//             name: "Feeding of the 5000",
//             albumId: 3,
//             artistId: 3
//         }
//     ]
// }))



let albums = {
    "1": {
      "albumId": 1,
      "name": "Stadium Arcadium",
      "artistId": 1
    }
  }

  console.log(Object.entries(albums).map(ele => ele[1]))
