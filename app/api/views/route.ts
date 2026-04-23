import { kv } from '@vercel/kv';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // คำสั่ง incr จะบวกเลขเพิ่มทีละ 1 ใน key ที่ชื่อ 'inspecttiga_global_views'
    const views = await kv.incr('inspecttiga_global_views');
    return NextResponse.json({ views });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Database Error' }, { status: 500 });
  }
}
