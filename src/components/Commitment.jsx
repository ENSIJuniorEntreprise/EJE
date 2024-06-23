import React from 'react'
import pdf1 from "./charte-RSE.pdf"
import pdf2 from "./Politique Qualité ENSI Junior Entreprise.pdf"

function Commitment() {
  return (
    <div className='bg-[#1F2029]'>

      <section className='xxs:px-5 xxs:rounded-tl-[80px] flex flex-col justify-center font-proxima-nova-bold items-center bg-beige md:rounded-tl-[250px] h-fit gap-16 sm:px-20 pb-20'>
        <h1 className='xxs:text-[2.8125rem] text-dark-blue mt-12 md:text-7xl font-proxima-nova-bold font-medium ' style={{ lineHeight: '1' }}><span className='text-light-blue font-proxima-nova-bold'>Our</span> commitment</h1>
        <div className='grid md:grid-cols-2 gap-2'>
          <div className='bg-dark-blue flex flex-col justify-center items-center gap-3 text-beige p-4 lg:p-8'><h1 className='text-3xl'>RSJE</h1>
            <p className='opacity-90 text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing </p>
          </div>

          <div className=' border-[3px] border-gradient-dark-blue flex justify-center items-center gap-5 p-8 font-medium md:row-start-2'>
            <svg xmlns="http://www.w3.org/2000/svg" width="49" height="47" viewBox="0 0 49 47" fill="none">
              <path d="M20.6719 0H28.3281C29.601 0 30.625 0.982227 30.625 2.20312V17.625H39.0182C40.7217 17.625 41.5734 19.5986 40.3676 20.7553L25.8111 34.7268C25.0934 35.4152 23.9162 35.4152 23.1984 34.7268L8.62285 20.7553C7.41699 19.5986 8.26875 17.625 9.97227 17.625H18.375V2.20312C18.375 0.982227 19.399 0 20.6719 0ZM49 34.5156V44.7969C49 46.0178 47.976 47 46.7031 47H2.29688C1.02402 47 0 46.0178 0 44.7969V34.5156C0 33.2947 1.02402 32.3125 2.29688 32.3125H16.3365L21.026 36.8105C22.9496 38.6557 26.0504 38.6557 27.974 36.8105L32.6635 32.3125H46.7031C47.976 32.3125 49 33.2947 49 34.5156ZM37.1328 42.5938C37.1328 41.584 36.2715 40.7578 35.2188 40.7578C34.166 40.7578 33.3047 41.584 33.3047 42.5938C33.3047 43.6035 34.166 44.4297 35.2188 44.4297C36.2715 44.4297 37.1328 43.6035 37.1328 42.5938ZM43.2578 42.5938C43.2578 41.584 42.3965 40.7578 41.3438 40.7578C40.291 40.7578 39.4297 41.584 39.4297 42.5938C39.4297 43.6035 40.291 44.4297 41.3438 44.4297C42.3965 44.4297 43.2578 43.6035 43.2578 42.5938Z" fill="#1F2029" />
            </svg>
            <h1 className='text-2xl text-dark-blue'><a href={pdf1}>Download file</a></h1>
          </div>

          <div className='bg-light-blue flex flex-col justify-center items-center gap-3 text-beige p-4 lg:p-8'>
            <h1 className='text-3xl'>Quality</h1>
            <p className='opacity-90 text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing </p>
          </div>

          <div className=' border-[3px] border-gradient-blue flex items-center justify-center gap-5 p-8 font-medium'>
            <svg xmlns="http://www.w3.org/2000/svg" width="49" height="47" viewBox="0 0 49 47" fill="none">
              <path d="M20.6719 0H28.3281C29.601 0 30.625 0.982227 30.625 2.20312V17.625H39.0182C40.7217 17.625 41.5734 19.5986 40.3676 20.7553L25.8111 34.7268C25.0934 35.4152 23.9162 35.4152 23.1984 34.7268L8.62285 20.7553C7.41699 19.5986 8.26875 17.625 9.97227 17.625H18.375V2.20312C18.375 0.982227 19.399 0 20.6719 0ZM49 34.5156V44.7969C49 46.0178 47.976 47 46.7031 47H2.29688C1.02402 47 0 46.0178 0 44.7969V34.5156C0 33.2947 1.02402 32.3125 2.29688 32.3125H16.3365L21.026 36.8105C22.9496 38.6557 26.0504 38.6557 27.974 36.8105L32.6635 32.3125H46.7031C47.976 32.3125 49 33.2947 49 34.5156ZM37.1328 42.5938C37.1328 41.584 36.2715 40.7578 35.2188 40.7578C34.166 40.7578 33.3047 41.584 33.3047 42.5938C33.3047 43.6035 34.166 44.4297 35.2188 44.4297C36.2715 44.4297 37.1328 43.6035 37.1328 42.5938ZM43.2578 42.5938C43.2578 41.584 42.3965 40.7578 41.3438 40.7578C40.291 40.7578 39.4297 41.584 39.4297 42.5938C39.4297 43.6035 40.291 44.4297 41.3438 44.4297C42.3965 44.4297 43.2578 43.6035 43.2578 42.5938Z" fill="#2DA2DD" />
            </svg>
            <h1 className='text-2xl text-light-blue'><a href={pdf2}>Download file</a></h1>
          </div>

        </div>
      </section>
      <div className='flex justify-center'>
        <div className='w-[80%] h-1 bg-light-blue'></div>
        <div className='w-[20%] h-1 bg-beige'></div>
      </div>

    </div>
  )
}

export default Commitment