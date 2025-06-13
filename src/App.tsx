import React from 'react'
import * as S from './styles'
import { useMediaQuery } from '@mui/material'

interface iUrl {
  urlDownload: string
  urlInstagram: string
  email: string
  site: string
}

function App() {
  const url: iUrl = {
    urlDownload:
      'https://releases.desktopfish.com/DesktopFish-setup.exe',
    urlInstagram: 'https://www.instagram.com/eusolyy/',
    email: 'mailto:contact@eusolyy.com',
    site: 'http://www.eusolyy.com/',
  }

  const isTablet = useMediaQuery('(max-width: 768px)')

  const handleClickDownload = ({ urlDownload }: iUrl) => {
    window.open(urlDownload)
  }

  return isTablet ? (
    <React.Fragment>
      <S.MainContent>
        <S.ContentGroup>
          <S.Apresentation>
            <S.GroupVideo>
              <h1>Desktop Fish</h1>
              <S.Video autoPlay muted loop playsInline>
                <source src="Timeline_33.mp4" type="video/mp4" />
                Seu navegador não suporta a tag de vídeo.
              </S.Video>
            </S.GroupVideo>
            <button onClick={() => handleClickDownload(url)}>Baixar para Windows</button>
            <h5>Cuide do seu peixinho na versão Beta!</h5>
            <p style={{ fontSize: '0.875rem', color: 'white', marginTop: '0.5rem' }}>
             Ao baixar, você concorda com os{' '}
             <a
               href="/terms.html"
               target="_blank"
               rel="noopener noreferrer"
               style={{ textDecoration: 'underline', color: '#f9c458' }}
             >
               termos de uso
             </a>.
           </p>
          </S.Apresentation>
        </S.ContentGroup>
      </S.MainContent>
      <S.Footer>
        <a href={url.email}>contact@eusolyy.com</a>
        <a href={url.site}>www.eusolyy.com</a>
      </S.Footer>
    </React.Fragment>
  ) : (
    <React.Fragment>
      <S.MainContent>
        <S.ContentGroup>
          <S.Apresentation>
            <h1>Desktop Fish</h1>
            <button onClick={() => handleClickDownload(url)}>Baixar para Windows</button>
             <h5>Cuide do seu peixinho na versão Beta!</h5>
            <p style={{ fontSize: '0.875rem', color: 'white', marginTop: '0.5rem' }}>
             Ao baixar, você concorda com os{' '}
             <a
               href="/terms.html"
               target="_blank"
               rel="noopener noreferrer"
               style={{ textDecoration: 'underline', color: '#f9c458' }}
             >
               termos de uso
             </a>.
           </p>
            {/* <p>
              Apoie o desenvolvimento de {' '}
              <a href={url.urlInstagram} target="blank">
                Project Terror
              </a>
            </p> */}
          </S.Apresentation>

          <S.Video autoPlay muted loop playsInline>
            <source src="Timeline_33.mp4" type="video/mp4" />
            Seu navegador não suporta a tag de vídeo.
          </S.Video>
        </S.ContentGroup>
      </S.MainContent>
      <S.Footer>
        <a href={url.email}>contact@eusolyy.com</a>
        <a href={url.site}>www.eusolyy.com</a>
      </S.Footer>
    </React.Fragment>
  )
}

export default App
