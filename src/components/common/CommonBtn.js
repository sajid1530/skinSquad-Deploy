import Link from 'next/link'
import React from 'react'

function CommonBtn({btntext,link}) {
  return (
    <Link  href={`${link}`}>
    <button className="inline-block px-8 py-3 text-[#fff]  outline-none border border-[#000] rounded-lg shadow relative transition-all duration-500  bg-gradient-to-r from-[#87B88F] to-[#1F8891] hover:shadow-none hover:bg-gradient-to-r hover:from-[#1f8891] hover:to-[#87B88f]">
      {btntext}
    </button>
    </Link>
   
  )
}

export default CommonBtn