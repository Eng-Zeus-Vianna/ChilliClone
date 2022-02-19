import { ContainerDown } from './headerStyles'
import { Content } from './styles'

import { GoLocation } from 'react-icons/go'
import SearchIcon from '../../assets/search.svg'
import BagIcon from '../../assets/bag.svg'
import UserIcon from '../../assets/users.svg'
import HeartIcon from '../../assets/heart.svg'
import ChillIcon from '../../assets/ChilliLogo.svg'

export function HeaderBottom() {
  return (
    <ContainerDown>
      <Content>
        <div className="chilli">
          <img src={ChillIcon} alt="" />
        </div>
        <div className="form-search">
          <form action="">
            <input type="text" placeholder="Busque por modelos ou coleção" />
            <button type="submit">
              <img src={SearchIcon} alt="Pesquisar" />
            </button>
          </form>
        </div>

        <ul className="header-bottom">
          <li>
            encontre uma loja
            <p>
              <GoLocation />
            </p>
          </li>
          <li>
            <span>minha conta</span>
            <img src={UserIcon} alt="usuário" />
            <img src={HeartIcon} alt="minha lista" />
          </li>

          <li>
            <span>sacola</span>
            <img src={BagIcon} alt="" />
          </li>
        </ul>
      </Content>
    </ContainerDown>
  )
}
