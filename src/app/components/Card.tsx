import Image from 'next/image'

interface CardProps {
  name: string
  image: string
  price: number
}

export default function Card({ name, image, price }: CardProps) {
  return (
    <div className="border rounded-lg overflow-hidden shadow-lg">
      <Image src={image} alt={name} width={300} height={200} className="w-full object-cover h-48" />
      <div className="p-4">
        <h3 className="font-bold text-lg mb-2">{name}</h3>
        <p className="text-gray-700 text-base">${price.toFixed(2)}</p>
      </div>
    </div>
  )
}

