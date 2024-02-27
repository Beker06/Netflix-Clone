import React from 'react';
import { NextPageContext } from 'next';
import { getSession } from 'next-auth/react';
import { signOut } from "next-auth/react"
import useCurrentUser from '@/hooks/useCurrentUser';

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);

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
      <h1>Logged in as: {user?.name}</h1>
      <button onClick={() => signOut()}>Log Out</button>
    </>
  )
}
