### Get a specific artist's details based on artistId

Request components:

- Method: GET
- URL: localhost:5000/artists/1
- Headers: application/json; charset=utf-8
- Body:

Response components:

- Status code: 200
- Headers: application/json;
- Body:{
    "name": "Red Hot Chili Peppers",
    "artistId": 1,
    "albums": [
        {
            "name": "Stadium Arcadium",
            "albumId": 1,
            "artistId": 1
        }
    ]
}




fetch('/artists/1', {
    method: 'GET',
    headers: {'Content-Type': 'application/json'},
}).then(res => res.json()).then(res => console.log(res))

### Add an artist

Request components:

- Method: POST
- URL: localhost:5000/artists
- Headers:
- Body:

Response components:

- Status code: 201
- Headers: {'Content-Type': 'application/json'}
- Body:

fetch('/artists', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
        name: "Crass",
        artistId: 3,
        albums: [
            {
                name: "Stations of the Crass",
                albumId: 3,
                artistId: 3
            }
        ]
    })
}).then(res => res.json()).then(res => console.log(res))

### Edit a specified artist by artistId

Request components:

- Method: PATCH
- URL:
- Headers:
- Body:

Response components:

- Status code: 200
- Headers:
- Body:
{"name":"Crass","artistId":3,"albums":[{"name":"Feeding of the 5000","albumId":3,"artistId":3}]}



fetch('/artists/3/', {
    method: 'PATCH',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
        name: "Crass",
        artistId: 3,
        albums: [
            {
                name: "Feeding of the 5000",
                albumId: 3,
                artistId: 3
            }
        ]
    })
}).then(res => res.json()).then(res => console.log(res))

### Delete a specified artist by artistId

Request components:

- Method: DELETE
- URL: artists/3/
- Headers:
- Body:

Response components:

- Status code: 200/204
- Headers:
- Body:

### Get all albums of a specific artist based on artistId

Request components:

- Method: GET
- URL: /artists/1/albums
- Headers: Content-Type': 'application/json'
- Body:
[{"name":"Stadium Arcadium","albumId":1,"artistId":1}]

Response components:

- Status code: 200
- Headers:
- Body:

fetch('/artists/1/albums', {
    method: 'GET',
}).then(res => res.json()).then(res => console.log(res))

### Get a specific album's details based on albumId

Request components:

- Method: GET
- URL: localhost:5000/albums/1
- Headers:
- Body:

Response components:

- Status code:
- Headers:
- Body:

fetch('/albums/1', {
    method: 'GET',
    headers: {'Content-Type': 'application/json'},
}).then(res => res.json()).then(res => console.log(res))


### Get all songs of a specific artist based on artistId

Request components:

- Method:
- URL:
- Headers:
- Body:

Response components:

- Status code:
- Headers:
- Body:
