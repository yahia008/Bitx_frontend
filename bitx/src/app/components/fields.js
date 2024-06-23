import React from 'react'

const Fields = () => {
  return (
    <div>
       <form>
          <div className="mb-4">
            <input
              type="email"
              placeholder="Enter email"
              className="w-full p-2 border-b-2 border-yellow-500 focus:outline-none text-sm"
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Bank name"
              className="w-full p-2 border-b-2 border-yellow-500 focus:outline-none text-sm"
            />
          </div>
          </form>
    </div>
  )
}

export default Fields
