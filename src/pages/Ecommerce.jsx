import React from 'react'
import { BsCurrencyDollar } from 'react-icons/bs'
import {GoDotFill} from 'react-icons/go'
import Stacked from '../components/Charts/Stacked.jsx'
import Pie from '../components/index.jsx'
import Button from '../components/Button.jsx'
import { SparkLine } from '../components/index.jsx'
import { earningData, SparklineAreaData , ecomPieChartData} from '../data/dummy.js'
import { useStateContext } from '../contexts/ContextProvider.js'
function Ecommerce() {
  return (
    <div className="m-12 md:m-2">
      <div className="flex flex-wrap lg:flex-nowrap justify-center">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-80 p-7 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center">
          <div className="flex justify-between items-center">
            <div>
              <p className="font-bold text-gray-400">Earnings</p>
              <p className="text-1xl ">$63,448.78</p>
            </div>
          </div>
          <div className="mt-4 ">
            <Button
              color="white"
              bgColor="blue"
              text="Download"
              borderRadius="10px"
              style="md"
            />
          </div>
        </div>
        <div className="flex m-3 flex-wrap justify-center gap-1 items-center">
          {earningData.map((item) => (
            <div
              key={item.title}
              className="bg-white h-44 dark:text-gray-200 dark:bg-secondary-dark-bg md:w-55 p-4 pt-9 rounded-2xl "
            >
              <button
                type="button"
                style={{ color: item.iconColor, backgroundColor: item.iconBg }}
                className="text-2xl opacity-0.9 rounded-full  p-4 hover:drop-shadow-xl"
              >
                {item.icon}
              </button>
              <p className="mt-3">
                <span className="text-lg font-semibold">{item.amount}</span>
                <span className={`text-sm text-${item.pcColor} ml-2`}>
                  {item.percentage}
                </span>
              </p>
              <p className="text-sm text-gray-400  mt-1">{item.title}</p>
            </div>
          ))}
        </div>
      </div>

      <div
        className="bg-white dark: text-gray-200
      dark:bg-secondary-dark-bg m-1 rounded-2xl md:w-580"
      >
        <div className="flex justify-around">
          <p className="font-semibold text-xl text-gray-600">Revenue Update</p>
          <div className="flex items-center gap-4">
            <p
              className="flex items-center gap-2 text-gray-800
               hover:drop-shadow-xl"
            >
              <span>
                <GoDotFill />
              </span>
              <span>Expense</span>
            </p>
            <p
              className="flex items-center gap-2 text-green-400
               hover:drop-shadow-xl"
            >
              <span>
                <GoDotFill />
              </span>
              <span>Budget</span>
            </p>
          </div>
        </div>
        <div className="mt-7 flex gap-10 flex-wrap justify-center ">
          <div className="border-r-1 border-colorm-4 pr-10">
            <div>
              <p>
                <span className="text-2xl text-gray-500 font-semibold">
                  $93,438
                </span>
                <span className="p-1.5 hover:drop-shadow-xl cursor-pointer rounded-full text-white bg-green-400 ml-3 text-xs">
                  23%
                </span>
              </p>
              <p className="text-gray-500 mt-1">Budget</p>
            </div>
            <div className="mt-2">
              <p className="text-2xl text-gray-500  font-semibold">$48,487</p>
              <p className="text-gray-500 mt-1">Expense</p>
            </div>
            <div className="mt-2">
              <SparkLine
                currentColor="blue"
                id="line-sparkLine"
                type="Line"
                height="60px"
                width="250px"
                data={SparklineAreaData}
                color="blue"
              />
            </div>
            <div className="mt-8">
                <Button
                  color="white"
                  bgColor="blue"
                  text="Download Report"
                  borderRadius="10px"
                />
              </div>
          </div>
          <div>
            <Stacked width="320" height="310"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ecommerce