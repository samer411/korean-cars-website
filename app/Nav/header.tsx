import Image from 'next/image';
import logo from '../../public/i-platform_mobility 1.png';
import search from '../../public/search-icon.svg';
import dropdown_1 from './dropdowns/1_dropdown';
export default function Header(){
    return(
        <header className='flex items-center justify-between bg-nav_bar text-white pt-7 pb-5 text-xs'>
            <a href="#" className='px-5'>
             <Image
                src={logo}
                width={180}
                alt="Picture of the author"
                className='-mt-4'
        />
            </a>
       
        <nav className='pt-1'>
            <dropdown_1></dropdown_1>
            <button className='px-3'>알림마당</button>
            <button className='px-3'>연구기관 소개</button>
            <button className='px-3'>정보제공</button>
            <button className='px-3'>정부사업공고</button>
            <button className='px-3'>정부예산 지원사업</button>
            <button className='px-3'>기술지원</button>
        </nav>
        <div className='relative'>

        <input className='ml-6 py-3 px-5 rounded-md placeholder-white text-white bg-gray-700 focus:outline-none w-80'placeholder='검색어를 입력하세요.'></input>
        <Image 
        src={search} 
        width={20}
         alt="search" 
         className="absolute right-3 top-2"/>
        </div>
        <div className='px-8'>
            <a className ='px-5'href="#">로그인</a>
            <span>|</span>
            <a className ='px-5' href="#">회원가입</a>
        </div>
        </header>
        
    )
}