import { ContainerDown, ContainerNav } from './headerStyles'
import { Content } from './styles'
import IconChilli from '../../assets/chilli.svg'

export function HeaderNav() {
  return (
    <ContainerDown>
      <ContainerNav>
        <Content>
          <ul className="navLink">
            <li>ÓCULOS DE SOL</li>
            <li>ÓCULOS DE GRAU</li>
            <li>RELÓGIOS</li>
            <li>ACESSÓRIOS</li>
            <li>OUTLET</li>

            <li>
              <img src={IconChilli} alt="" />
              HISTÓRIA DA MARCA
            </li>
          </ul>
        </Content>
      </ContainerNav>
    </ContainerDown>
  )
}
