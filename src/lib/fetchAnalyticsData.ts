// // lib/fetchAnalyticsData.ts
// import fetch from 'node-fetch';

// interface AnalyticsData {
//   totalVisitors: number;
//   uniqueVisitors: number;
//   // Tambahkan field lainnya sesuai kebutuhan
// }

// interface ApiResponse {
//   totalVisitors: number;
//   uniqueVisitors: number;
//   // Sesuaikan dengan struktur respons aktual dari API Vercel
// }

// const fetchAnalyticsData = async (): Promise<AnalyticsData> => {
//   const projectId = "prj_9CmMtFtYDHvzztth88OHoVoq7LFZ"; // Ganti dengan project ID Anda
//   const url = `https://api.vercel.com/v3/insights/${projectId}/analytics`;

//   const response = await fetch(url, {
//     method: 'GET',
//     headers: {
//       Authorization: `Bearer ${process.env.VERCEL_ACCESS_TOKEN}`, // Pastikan token disetel dengan benar
//     },
//   });

//   if (!response.ok) {
//     console.error(`Failed to fetch data: ${response.statusText}`);
//     throw new Error(`Failed to fetch data: ${response.statusText}`);
//   }

//   const data: unknown = await response.json();

//   if (!isApiResponse(data)) {
//     throw new Error('Data received from API does not match the expected format.');
//   }

//   const analyticsData: AnalyticsData = {
//     totalVisitors: data.totalVisitors,
//     uniqueVisitors: data.uniqueVisitors,
//   };

//   return analyticsData;
// };

// // Fungsi untuk mengecek apakah data sesuai dengan tipe ApiResponse
// function isApiResponse(data: any): data is ApiResponse {
//   return typeof data === 'object' && data !== null &&
//     'totalVisitors' in data && typeof data.totalVisitors === 'number' &&
//     'uniqueVisitors' in data && typeof data.uniqueVisitors === 'number';
// }

// export default fetchAnalyticsData;
