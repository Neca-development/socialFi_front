import Image from 'next/image'
import React from 'react'

export const Loader = ({ show }: any) => {
  if (!show) return <></>

  return (
    <div className={`bg-black ${show ? 'fixed inset-0 z-50 bg-opacity-50' : ''}`}>
      <div
        className="fixed z-50 inset-0 overflow-y-auto"
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <div
            className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
            aria-hidden="true"
          />
          <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
            &#8203;
          </span>
          <div
            className="inline-block align-bottom bg-white rounded-lg text-left 
            overflow-hidden shadow-xl transform transition-all h-screen opacity-90 sm:align-middle sm:w-full"
          >
            <div
              style={{ transform: 'translate(-50%,-50%)' }}
              className="absolute top-1/2 left-1/2 bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4 text-center"
            >
              <div className="flex flex-col justify-center items-center p-8">
                <Image src="/assets/images/eyes.gif" alt="eyes" width={85} height={85} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Loader
