// app/api/saveip/route.js
import { promises as fs } from 'fs';
import path from 'path';

export async function POST(req) {
  try {
    const ip = req.headers.get('x-forwarded-for') || req.connection.remoteAddress;
    const data = {
      ip,
      timestamp: new Date().toISOString(),
    };

    const filePath = path.join(process.cwd(), 'data', 'ipAddresses.json');
    
    let fileData = [];

    // Check if the file exists and read existing data
    try {
      const fileContents = await fs.readFile(filePath, 'utf8');
      fileData = JSON.parse(fileContents);
    } catch (err) {
      console.log('File not found, creating a new one.');
    }

    // Append the new data
    fileData.push(data);

    // Write the updated data back to the file
    await fs.writeFile(filePath, JSON.stringify(fileData, null, 2));

    return new Response(JSON.stringify({ message: 'IP address saved successfully.' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to save IP address.' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

export async function GET(req) {
  return new Response('Method not allowed', { status: 405 });
}
