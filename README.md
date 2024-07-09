
# Movie Lobby API

## Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file with the following content:
   ```
   MONGODB_URI=mongodb://localhost:27017/movie_lobby
   PORT=3000
   ```

## Running the Server

```bash
npm run dev
```

## API Endpoints

### List all movies

**GET /movies**

**Response:**
```json
{
  "data": [
    {
      "_id": "60d21b4667d0d8992e610c85",
      "title": "Inception",
      "genre": "Sci-Fi",
      "rating": 8.8,
      "streamingLink": "http://example.com/inception"
    }
  ]
}
```

### Search for a movie

**GET /search?q={query}**

**Response:**
```json
{
  "data": [
    {
      "_id": "60d21b4667d0d8992e610c85",
      "title": "Inception",
      "genre": "Sci-Fi",
      "rating": 8.8,
      "streamingLink": "http://example.com/inception"
    }
  ]
}
```

### Add a new movie

**POST /movies**

**Request Body:**
```json
{
  "title": "Inception",
  "genre": "Sci-Fi",
  "rating": 8.8,
  "streamingLink": "http://example.com/inception"
}
```

**Response:**
```json
{
  "data": {
    "_id": "60d21b4667d0d8992e610c85",
    "title": "Inception",
    "genre": "Sci-Fi",
    "rating": 8.8,
    "streamingLink": "http://example.com/inception"
  }
}
```

### Update a movie

**PUT /movies/:id**

**Request Body:**
```json
{
  "title": "Inception Updated",
  "genre": "Sci-Fi",
  "rating": 9.0,
  "streamingLink": "http://example.com/inception-updated"
}
```

**Response:**
```json
{ 
  "data": {
    "_id": "60d21b4667d0d8992e610c85",
    "title": "Inception Updated",
    "genre": "Sci-Fi",
    "rating": 9.0,
    "streamingLink": "http://example.com/inception-updated"
  }
}
```

### Delete a movie

**DELETE /movies/:id**

**Response:**
```status
204 No Content
```

## Testing

Run tests with:
```bash
npm test
```

## Code Quality

Check code quality with:
```bash
npm run lint
```

## Conclusion

This project sets up a basic API for managing a movie lobby for OTT applications. It includes endpoints for listing, searching, adding, updating, and deleting movies, and ensures that only users with an "admin" role can modify the movie data.
