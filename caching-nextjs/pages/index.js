 import { useEffect, useState } from 'react';

 export default function Home() {
   const [data, setData] = useState(null);
   const [cacheStatus, setCacheStatus] = useState('MISS');
   const [revalidateIn, setRevalidateIn] = useState(10); // Countdown timer starts at 10 seconds
   const [loading, setLoading] = useState(true);

   useEffect(() => {
     async function fetchData() {
       console.log("Fetching data from API...");
       const response = await fetch('/api/stale');
       const cacheHeader = response.headers.get('X-Cache');
       console.log("Cache Header:", cacheHeader);
       setCacheStatus(cacheHeader);
       const result = await response.json();
       setData(result);
       setLoading(false);
     }

     fetchData();

     const interval = setInterval(() => {
       setRevalidateIn((prev) => {
         if (prev > 1) {
           return prev - 1;
         } else {
           clearInterval(interval); // Stop the countdown when it reaches 0
           return 0;
         }
       });
     }, 1000);

     return () => clearInterval(interval); // Clear interval on component unmount
   }, []);

   if (loading) {
     return <p>Loading...</p>;
   }

   return (
     <div style={styles.container}>
       <h1 style={styles.title}>Random Todo Item Viewer</h1>
       {data ? (
         <div style={styles.card}>
           <h2 style={styles.subtitle}>Todo ID: {data.id}</h2>
           <p style={styles.text}>Title: {data.title}</p>
           <p style={styles.text}>Completed: {data.completed ? 'Yes' : 'No'}</p>
           <div style={styles.status}>
             <p><strong>Cache Status:</strong> {cacheStatus}</p>
             <p><strong>Seconds till Revalidation:</strong> {revalidateIn}</p>
           </div>
         </div>
       ) : (
         <p>No data available.</p>
       )}
     </div>
   );
 }

 const styles = {
   container: {
     display: 'flex',
     flexDirection: 'column',
     alignItems: 'center',
     justifyContent: 'center',
     minHeight: '100vh',
     backgroundColor: '#f0f0f0',
     padding: '20px',
   },
   title: {
     fontSize: '3rem',
     color: '#333',
     marginBottom: '20px',
   },
   card: {
     backgroundColor: '#fff',
     borderRadius: '10px',
     padding: '20px',
     boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
     textAlign: 'center',
     maxWidth: '400px',
     width: '100%',
   },
   subtitle: {
     fontSize: '2rem',
     color: '#0070f3',
     marginBottom: '10px',
   },
   text: {
     fontSize: '1.25rem',
     color: '#555',
     marginBottom: '10px',
   },
   status: {
     marginTop: '20px',
     fontSize: '1rem',
     color: '#0070f3',
   },
 };

