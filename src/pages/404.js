import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import NotFoundImg from '../../public/assets/404-alibaba.webp'
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import axios from 'axios';
import { useLanguage } from '../Provider/Navbar';

const NotFound = () => {
  const lang = useLanguage()
  return (
    <div className='bg-bg h-auto w-full flex flex-col min-h-screen'>
    <div className='flex flex-col justify-center items-center  xl:mt-96 xl:mb-20 mt-8'>
      <Image src={NotFoundImg} width={360} height={130} />
      <h2 className='font-bold text-lg mt-3 md:mt-6'>
        {lang == 'fa' ? 'صفحه مورد نظر در دسترس نمی‌باشد' : 'The desired page is not available'}
      </h2>
      <span className='text-sm mb-1 text-[#6c7680]'>
        {lang == 'fa' ? 'متاسفانه خطایی هنگام انتقال درخواست شما رخ داده است' : 'Unfortunately, an error occurred while transferring your request'}
      </span>
      <span className='text-sm mb-6 flex text-[#6c7680]'>
        {lang == 'fa' ? 'برای پیدا کردن مسیر درست میتوانید سری به ' : 'To find the right path, you can visit'} 
        <Link href="/"><p className='underline'>
          {lang == 'fa' ? 'صفحه اول علی‌بابا' : 'The first page of Alibaba'}
          </p></Link>
         <span className={lang == 'fa' ? 'mr-1' : 'ml-1'}>{lang == 'fa' ? ' بزنید' : ' hit the link '}</span></span>
    </div>
    </div>
  )
}

export default NotFound

export const getStaticProps = async ({locale}) => {

  let accordion = await axios.get('http://localhost:3001/domesticFlightAccordion')
  accordion = accordion.data
  let homePageDescription = await axios.get('http://localhost:3001/domesticFlightDescription')
  homePageDescription = homePageDescription.data
  let iranState = await axios.get('http://localhost:3001/iranState')
  iranState = iranState.data
  return {
    props:{
      ...(await serverSideTranslations(locale , [
        "common",
        "navbar",
        "travelSupport",
        "application",
        "footer"
      ])),
      accordion,
      homePageDescription,
      iranState
    }
  }
}