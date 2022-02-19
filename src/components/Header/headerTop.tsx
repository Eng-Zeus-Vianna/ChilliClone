import { Content } from './styles'
import { BiGlasses } from 'react-icons/bi'

import IconBrazil from '../../assets/iconBrazil.svg'

export function HeaderTop() {
  return (
    <div className="Header-top" style={{ background: '#000' }}>
      <Content>
        <ul className="header-left">
          <li className="acessibilidade">
            <p>
              <BiGlasses />
            </p>
            <a href="/">acessibilidade</a>{' '}
          </li>

          <li>
            {' '}
            <a href="/">atendimento</a>{' '}
          </li>
        </ul>

        <ul className="header-right">
          <li>
            <a href="/">mundo chilli</a>
          </li>
          <li>
            <a href="/">seja um franqueado</a>
          </li>
          <li>
            <img src={IconBrazil} alt="" />
            <a href="/">selecione um país</a>
          </li>
        </ul>
      </Content>
    </div>
  )
}
