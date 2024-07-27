// // pages/api/analytic.ts
// import { NextResponse } from 'next/server';
// import fetchAnalyticsData from '../../../lib/fetchAnalyticsData';

// export async function GET() {
//   try {
//     const data = await fetchAnalyticsData();
//     return NextResponse.json(data, { status: 200 });
//   } catch (error) {
//     console.error('Error fetching analytics data route:', error);
//     return NextResponse.json({ message: 'Error fetching analytics data' }, { status: 500 });
//   }
// }
