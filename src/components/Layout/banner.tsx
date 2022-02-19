import AlokIcon from '../../assets/bannerAlok.png'
import { ContainerBanner } from './styles'

export function Banner() {
  return (
    <ContainerBanner>
      <div className="banner">
        <img src={AlokIcon} alt="Banner" />
      </div>
    </ContainerBanner>
  )
}
