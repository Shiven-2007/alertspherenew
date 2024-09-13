import { NextResponse } from 'next/server';



export async function GET() {
    result = await fetch("https://localhost:5000/data")    
    results= await result.json()
  return NextResponse.json(results);
}
