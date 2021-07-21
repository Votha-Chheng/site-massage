import { useRouter } from 'next/router'
import styled from 'styled-components'
import Link from 'next/Link'

const Menu = ({color, backgroundColor}) => {

  const history = useRouter()

  return (
    <Wrapper style={{color, backgroundColor}}>
      <div className="logo" onClick={()=>history.push('/')}>
        <svg width="37" height="20" viewBox="0 0 37 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11.7365 19.3169C7.55143 18.3765 3.30054 15.2955 1.31586 11.7643C0.745543 10.7495 0.74482 10.7331 1.25836 10.4582C1.79691 10.17 5.1383 9.73966 6.62694 9.7668C7.39253 9.7808 7.57753 9.95935 8.51572 11.59C10.4044 14.8728 13.3003 17.5195 15.5068 17.9794C16.1031 18.1038 16.3667 18.309 16.3667 18.649C16.3667 19.4951 14.0296 19.8322 11.7365 19.3169H11.7365ZM21.0488 19.41C20.0934 19.0383 20.2105 18.3244 21.2631 18.1044C23.5059 17.6357 26.408 15.2295 28.4282 12.1635C29.6645 10.2872 29.9643 10.2024 33.109 10.8396C35.5033 11.3248 36.2104 11.6197 36.2104 12.1334C36.2104 12.7236 32.7313 16.1368 30.9777 17.2671C30.0642 17.8558 28.5759 18.5907 27.6704 18.9001C25.7602 19.5529 22.1338 19.8321 21.0488 19.41V19.41ZM17.5683 18.1975C14.9004 17.472 13.5575 12.7887 14.6321 7.95813C15.3893 4.55486 18.0871 -0.185199 19.0555 0.186381C19.634 0.408401 21.8546 4.99294 22.35 6.98818C22.6438 8.17187 22.7428 9.50677 22.6742 11.361C22.5882 13.6832 22.4728 14.2338 21.7861 15.5985C21.352 16.4611 20.6992 17.3793 20.3354 17.6388C19.6008 18.1627 18.361 18.4131 17.5683 18.1975V18.1975ZM22.2795 16.463C22.364 16.1356 22.6687 15.0343 22.9566 14.0156C23.549 11.9191 23.6539 9.022 23.2119 6.96126L22.9134 5.56942L23.7941 4.83419C24.7162 4.06436 27.9315 2.61912 29.0667 2.46421C29.7241 2.37451 29.7278 2.38571 29.6743 4.3038C29.5429 9.01642 27.3388 13.5506 23.8814 16.2209C22.5842 17.2228 22.063 17.3016 22.2795 16.463V16.463ZM12.606 15.7468C11.0242 14.3545 9.33431 11.7103 8.50834 9.33519C7.71922 7.06607 7.31815 2.20438 7.89088 1.85041C8.23095 1.64024 12.5287 3.66647 13.7081 4.59301C14.3536 5.1001 14.3551 5.11184 13.9951 6.91332C13.4626 9.57812 13.5666 13.1483 14.2321 15.0492C14.8917 16.9334 14.8873 16.7937 14.2872 16.7937C14.0167 16.7937 13.2601 16.3226 12.606 15.7468H12.606ZM22.0588 3.13537C21.8385 2.60828 21.6583 1.96019 21.6583 1.69517C21.6583 1.25892 22.5643 0.389567 23.0189 0.389567C23.1203 0.389567 23.4034 0.992052 23.648 1.72844C24.0682 2.99358 24.0671 3.09558 23.6283 3.58052C22.9452 4.33534 22.5084 4.21146 22.0588 3.13537H22.0588ZM13.5224 3.27327C12.5671 2.65735 12.4572 2.08313 13.0685 0.901141C13.5253 0.0178211 13.9019 0.0919849 15.0177 1.28491C15.5634 1.86827 15.6181 2.08643 15.4052 2.82875C15.1016 3.88734 14.6428 3.99565 13.5224 3.27327Z" fill="#e7b5f7"/>
        </svg>
          Baux't des sens
      </div>
      <ul>
        <li><Link href='/massages'>Massages</Link></li>
        <li><Link href='/yoga'>Yoga</Link></li>
        <li><Link href='/prestations'>Prestations</Link></li>
        <li><Link href='/infospratiques'>Infos pratiques</Link></li>
      </ul> 
    </Wrapper>
  )
}



const Wrapper = styled.nav`
  width : 100vw;
  height : 100%;
  padding-left : 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  ul{
    display: flex;
    justify-content: center;
    list-style-type: none;
    padding-left: 0;
    width: 500px;
  }

  li, .logo{
    text-align: center;
    font-size: 1.15em; 
  }
  li{
    margin: 0 15px;
    font-family: 'Montserrat', sans-serif;
    font-weight: bold;
    
    &:hover{
      color: gold;
    }
  }
  .logo{
    font-family: 'Parisienne', 'cursive';
    font-size: 1.5em;
    line-height: 1em;
    transition: transform 0.3s ease-out;
    cursor: pointer;
    display: flex;
    margin-left: 20px;
    margin-top: 5px;
    font-style : italic;
    font-weight: bold;

    &:hover{
      transform: scale(1.15);
    }
  }
  @media only screen and (max-width: 768px){
    width : 360px;
    li{
      font-size: 1em;
    }
  }
`
Menu.defaultProps = {
  backgroundColor: "transparent",
  color : "white"
}

export default Menu
