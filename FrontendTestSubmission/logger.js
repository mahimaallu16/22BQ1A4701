const BASE_URL = 'http://20.244.56.144/evaluation-service/logs';
const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJtYWhpbWFhbGx1MTZAZ21haWwuY29tIiwiZXhwIjoxNzU0MDI4NzI4LCJpYXQiOjE3NTQwMjc4MjgsImlzcyI6IkFmZm9yZCBNZWRpY2NhbGllcyBQcml2YXRlIExpbWl0ZWQiLCJqdGkiOiIyZmFkMDIxNS02NmY1LTRmZmEtOWQxYi1hOGI1NDk1ZWYxOTIiLCJsb2NhbGUiOiJlbi1JTiIsIm5hbWUiOiJtYWhpbWEgYWxsdSIsInN1YiI6ImJjNDczNWI3LWI2YTQtNDcyMy1hZTZhLWEzM2QwNzJkMDdhMiJ9LCJlbWFpbCI6Im1haGltYWFsbHUxNkBnbWFpbC5jb20iLCJuYW1lIjoibWFoaW1hIGFsbHUiLCJyb2xsTm8iOiIyMmJxMWE0NzAxIiwiYWNjZXNzQ29kZSI6IlBuVkJGViIsImNsaWVudElEIjoiYmM0NzM1YjctYjZhNC00NzIzLWFlNmEtYTMzZDA3MmQwN2EyIiwiY2xpZW50U2VjcmV0IjoiTlVKTUh3dmZTRHVUQVBGTSJ9.Tjo8B9xxXE8hxiHnlt28hBWDq8C8GuiLCiFigUz0wsQ';

export async function log(stack, level, packageName, message) {
  try {
    const response = await fetch(BASE_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${TOKEN}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        stack,
        level,
        package: packageName,
        message
      })
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Error sending log:', errorData);
      return;
    }

    const data = await response.json();
    console.log('Log sent:', data);
    return data;
  } catch (error) {
    console.error('Error sending log:', error);
  }
}
