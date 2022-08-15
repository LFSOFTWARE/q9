import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://dogbreed-api.q9.com.br/',
  headers: {
    Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiIyYzJkYzExZC0zODlkLTRiMjQtYjk2Ny05MTE5MTJiOTA0NTUiLCJzdWIiOiI2MmYyODNkZjEwNGJmYzMwYWNlMzJjMjUiLCJpYXQiOjE2NjAwNjA2MzksImV4cCI6MTY2MTM1NjYzOX0.4A5r7JyNAj7fMehMxBh1_AM4TjEpEfrUmgpPNEroFGQ'
  }
})
