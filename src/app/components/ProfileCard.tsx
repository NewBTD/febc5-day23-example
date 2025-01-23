'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function ProfileCard() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  if (isLoggedIn) {
    return (
      <div className="flex items-center space-x-2">
        <Image src="https://storage.borntodev.com/academy/content/800x600-3-3zXoUqEpELouYRf01ts-6ncLWa-DIo-rICkB0f_oOThAVHCx5jEc3zxvehmGR.webp" alt="User Avatar" width={32} height={32} className="rounded-full" />
        <span className="text-white">John Doe</span>
        <button onClick={() => setIsLoggedIn(false)} className="text-white hover:underline">Logout</button>
      </div>
    )
  }

  return (
    <button onClick={() => setIsLoggedIn(true)} className="text-white hover:underline">
      Login
    </button>
  )
}

