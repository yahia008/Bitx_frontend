"use client"
import React from 'react'
import { useRouter } from 'next/router'


const Txid = () => {
  const router = useRouter()
    const {txid} = router.query

    return (
    <div>
      am the {txid}
    </div>
  )
}

export default Txid
