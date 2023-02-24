import { Menu } from '@headlessui/react'
import {useState} from 'react'
import { useLanguage } from '../Provider/Navbar';

const RoundTripSelection = ({isOneWay}) => {
//   useState
  const [chooseOneWay, setChooseOneWay] = useState(true);

//   Language
    const lang = useLanguage()


    // onClicks
    const setOneWayHandler = () => {
      setChooseOneWay(true)
      isOneWay(false)
    }

    const setTwoWayHandler = () =>{
      setChooseOneWay(false)
      isOneWay(true)
    }

  return (
    <div className="lg:mb-6 lg:px-6 flex justify-start w-full !z-[999]">
        <div className="relative !z-[999]">
          <Menu>
            <Menu.Button>
              <li className="flex items-center px-3 py-1 hover:bg-[#f8fafb] dark:text-white dark:hover:text-black  hover:rounded-[10px] active:shadow-md border rounded-2xl">
                <span className="text-sm">
                  {chooseOneWay
                    ? `${lang == "fa" ? "یک طرفه" : "One Way"}`
                    : `${lang == "fa" ? "دو طرفه" : "Two Way"}`}
                </span>
                <svg
                  viewBox="0 0 32 32"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className={` ${lang == "fa" ? "mr-3" : "ml-3"} `}
                  data-v-5dba9b3e=""
                >
                  <path d="M28.354 9.737a1 1 0 011.383 1.44l-.091.086-13 11a1 1 0 01-1.186.079l-.106-.079-13-11a1 1 0 011.191-1.601l.101.075L16 20.19 28.354 9.737z"></path>
                </svg>
              </li>
            </Menu.Button>
            <Menu.Items
              className={
                "absolute flex flex-col items-center  h-auto  bg-white dark:bg-[#312c2c] dark:border-black shadow-lg top-[2.5rem] border border-vehiclsContainer rounded-md p-1.5 !z-[999] w-max px-4 gap-y-2"
              }
            >
              <Menu.Item>
                <a
                  onClick={setOneWayHandler}
                  className="p-2 text-sm w-auto dark:text-white hover:bg-[#f8fafb]  dark:hover:text-black  hover:rounded-[10px] active:shadow-md cursor-pointer"
                >
                  {lang == "fa" ? "یک طرفه" : "One Way"}
                </a>
              </Menu.Item>
              <a className="w-auto h-[1px] bg-[#0000001A] dark:bg-white  self-stretch mx-3 min-w-[1px] max-w-full"></a>
              <Menu.Item>
                <a
                  onClick={setTwoWayHandler}
                  className="p-2 text-sm w-auto  hover:bg-[#f8fafb] dark:text-white dark:hover:text-black  hover:rounded-[10px] active:shadow-md cursor-pointer"
                >
                  {lang == "fa" ? "دو طرفه" : "Two Way"}
                </a>
              </Menu.Item>
            </Menu.Items>
          </Menu>
        </div>
      </div>
  )
}

export default RoundTripSelection