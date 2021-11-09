import { MovieGenrerProvider } from './contexts/MovieGenrer';

import { SideBar } from './components/SideBar';
import { Content } from './components/Content';

import './styles/global.scss';

import './styles/sidebar.scss';
import './styles/content.scss';

export function App() {

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <MovieGenrerProvider>
        <SideBar />
        <Content />
      </MovieGenrerProvider>
    </div>
  )
}