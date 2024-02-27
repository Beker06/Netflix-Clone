import React from 'react';
import { NextPageContext } from 'next';
import { getSession } from 'next-auth/react';
import useCurrentUser from '@/hooks/useCurrentUser';
import Navbar from '@/components/Navbar';

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);
  console.log(session, 'No hay sesion')
  if (!session) {
    return {
      redirect: {
        destination: '/auth',
        permanent: false,
      }
    }
  }
  return {
    props: {}
  }
}

export default function Home() {
  const { data: user } = useCurrentUser()
  return (
    <>
      <Navbar />
      <div className="pb-40">
        <h1>Logged in as: {user?.name}</h1>
      </div>
    </>
  )
}
