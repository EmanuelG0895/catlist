import Image from "next/image"

interface CatFact {
  fact: string
  length: number
}

interface RandomUser {
  name: {
    first: string
    last: string
  }
  picture: {
    large: string
    medium: string
    thumbnail: string
  }
  location: {
    city: string
    country: string
  }
  email: string
}

interface CatFactCardProps {
  fact: CatFact
  user: RandomUser
}

export function CatFactCard({ fact, user }: CatFactCardProps) {
  return (
    <div className="bg-white text-black shadow-lg p-3 rounded-lg space-y-3">
      <div className="flex space-x-3">
        <img
          className="rounded-full object-fit"
          src={user.picture.thumbnail || "/placeholder.svg"}
          alt={`${user.name.first} ${user.name.last}`}
          width={30}
          height={30}
        />
        <p className="font-bold text-2xl">
          {user.name.first} {user.name.last}
        </p>
      </div>
      <p className="text-base font-normal">{fact.fact}</p>
    </div>
  )
}
