import React from 'react'
import GetStartForm from './StartForm'



const LovedThisContent = ({
  loveDesSty="text-black-33 max-lg:mb-5 max-lg:text-center text-base max-w-[570px] font-medium"
}) => {
  return (
    <div className="bg-yellow-100 py-6 lg:py-8 rounded-[14px]">
        <div className="container lg:flex lg:gap-8 items-center">
          <div>
            <h4 className="text-[28px] font-medium text-black-33 mb-4 leading-8">
              Loved this content?
            </h4>

            <p className={loveDesSty}>
              Sign up for our newsletter and get the latest tips & updates
              directly in your inbox.
            </p>
          </div>
          <div className="flex-1">
            <h4 className="text-[28px] font-medium text-black-33 mb-4">
              There’s more where that came from!
            </h4>
          
            <GetStartForm
              inputSty="text-black-33 placeholder:text-black-33 flex-grow leading-5 py-2 px-8 border border-1 border-gray-400 rounded-full bg-white"
              buttonTitle="Subscribe"
              filled={false}
              clsStyle="leading-[140%] h-[50px] max-sm:w-full py-3 px-10 bg-blue-900 border-blue-900 text-white border border-yellow-900 rounded-full font-medium"
            />
          </div>
        </div>
      </div>
  )
}

export default LovedThisContent
