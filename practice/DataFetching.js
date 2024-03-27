// pages/index.js
import React, { useState, useEffect } from 'react';
import { getStaticProps, getServerSideProps } from './api/data'; // Assume these are implemented in pages/api/data.js

function Home({ staticData, serverData }) {
  const [clientData, setClientData] = useState(null);

  useEffect(() => {
    async function fetchClientData() {
      const response = await fetch('/api/data');
      const data = await response.json();
      setClientData(data);
    }
    fetchClientData();
  }, []);

  return (
    <div>
      <h1>Home Page</h1>
      <p>Static Data: {JSON.stringify(staticData)}</p>
      <p>Server Data: {JSON.stringify(serverData)}</p>
      <p>Client Data: {JSON.stringify(clientData)}</p>
    </div>
  );
}

export async function getStaticProps() {
  const staticData = { message: 'Static data fetched at build time' };
  return { props: { staticData } };
}

export async function getServerSideProps() {
  const serverData = { message: 'Server data fetched on each request' };
  return { props: { serverData } };
}

Home.getInitialProps = async () => {
  const res = await fetch('https://api.example.com/data');
  const clientData = await res.json();
  return { clientData };
};

export default Home;




// pages/index.js
import React, { useState, useEffect } from 'react';
import { getStaticProps, getServerSideProps } from './api/data'; // Assume these are implemented in pages/api/data.js

function Home({ staticData, serverData }) {
  const [clientData, setClientData] = useState(null);

  useEffect(() => {
    async function fetchClientData() {
      const response = await fetch('/api/data');
      const data = await response.json();
      setClientData(data);
    }
    fetchClientData();
  }, []);

  return (
    <div>
      <h1>Home Page</h1>
      <p>Static Data: {JSON.stringify(staticData)}</p>
      <p>Server Data: {JSON.stringify(serverData)}</p>
      <p>Client Data: {JSON.stringify(clientData)}</p>
    </div>
  );
}

export async function getStaticProps() {
  const staticData = { message: 'Static data fetched at build time' };
  return { props: { staticData } };
}

export async function getServerSideProps() {
  const serverData = { message: 'Server data fetched on each request' };
  return { props: { serverData } };
}

Home.getInitialProps = async () => {
  const res = await fetch('https://api.example.com/data');
  const clientData = await res.json();
  return { clientData };
};

export default Home;


// In this example:
// - The `Home` component uses `useState` to manage client-side data (`clientData`).
// - The `useEffect` hook fetches client-side data (`clientData`) when the component mounts.
// - `getStaticProps` fetches static data (`staticData`) at build time.
// - `getServerSideProps` fetches server-side data (`serverData`) on each request.
// - `Home.getInitialProps` fetches client-side data (`clientData`) using the legacy `getInitialProps` method.

// Each data fetching method (`getStaticProps`, `getServerSideProps`, and `getInitialProps`) demonstrates a different approach to fetching data in a Next.js application.