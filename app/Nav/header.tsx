import Image from 'next/image';
import logo from '../../public/i-platform_mobility 1.png';

export default function Header(){
    return(
        <header className='flex bg-nav_bar text-white p-8'>
        <Image
      src={logo}
      width={50}
      height={50}
      alt="Picture of the author"
        />
        <nav>
            <a className='px-3'>알림마당</a>
            <a className='px-3'>연구기관 소개</a>
            <a className='px-3'>정보제공</a>
            <a className='px-3'>정부사업공고</a>
            <a className='px-3'>정부예산 지원사업</a>
            <a className='px-3'>기술지원</a>
        </nav>
        <input ></input>
        <div>
            <a href="#">로그인</a>
            <a href="#">회원가입</a>/
        </div>
        </header>
        
    )
}