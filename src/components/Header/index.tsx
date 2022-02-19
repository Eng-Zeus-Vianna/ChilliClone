import { HeaderBottom } from './headerBottom'
import { HeaderNav } from './headerNav'
import { Container } from './headerStyles'
import { HeaderTop } from './headerTop'

export function Header() {
  return (
    <div className="headerControl">
      <Container>
        <HeaderTop />
        <HeaderBottom />
        <HeaderNav />
      </Container>
    </div>
  )
}
