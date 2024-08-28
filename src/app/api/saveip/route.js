import { promises as fs } from 'fs';
import path from 'path';

export async function POST(req) {
  return new Response(JSON.stringify({ error: 'Failed to save IP address.' }), {
    status: 403,
    headers: { 'Content-Type': 'application/json' },
  });
}

export async function GET(req) {
  return new Response('Method not allowed', { status: 405 });
}
