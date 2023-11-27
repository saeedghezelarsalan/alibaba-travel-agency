import React from 'react'
import Image from 'next/image'
import NotFoundImg from '../../public/assets/404-alibaba.webp'
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {useLanguage} from '../Provider/Navbar';

const Error = () => {
  const lang = useLanguage()
  return (
    <div className='bg-bg h-auto w-full flex flex-col'>
      <div className='flex flex-col justify-center items-center  xl:mt-96 xl:mb-20 mt-8'>
        <Image src={NotFoundImg} width={360} height={130} alt={''}/>
        <h2 className='font-bold text-lg mt-3 md:mt-6'>
          {lang == 'fa' ? 'ارتباط با سرور با مشکل مواجه گردیده است' : 'There is a problem connecting with the server'}
        </h2>
      </div>
    </div>
  )
}

export default Error


export const getStaticProps = async ({locale}) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "common",
        "navbar",
        "travelSupport",
        "application",
        "footer"
      ])),
    }
  }
}