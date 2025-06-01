import Head from 'next/head'
import Card from '../components/common/Card'
import Button from '../components/common/Button'

export default function Home() {
  return (
    <div>
      <Head>
        <title>ALX Listing App</title>
      </Head>
      <main className="min-h-screen p-8 bg-gray-100">
        <h1 className="text-3xl font-bold mb-6">Welcome to ALX Listings</h1>
        <Card
          title="Modern Apartment in Accra"
          description="2 bed · 1 bath · Ocean view"
          image="/assets/sample-property.jpg"
        />
        <div className="mt-4">
          <Button label="Book Now" onClick={() => alert('Booked!')} />
        </div>
      </main>
    </div>
  )
}