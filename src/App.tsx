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
      'https://desktopfishapp.s3.us-east-1.amazonaws.com/DesktopFish-Setup-1.0.0.exe',
    urlInstagram: 'https://www.instagram.com/eusolyy/',
    email: 'mailto:eusolodev@gmail.com',
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
              <S.Video autoPlay loop muted>
                <source src="Timeline_33.mp4" type="video/mp4" />
                Seu navegador não suporta a tag de vídeo.
              </S.Video>
            </S.GroupVideo>
            <button onClick={() => handleClickDownload(url)}>Download Now</button>
            <h5>Apoie nosso desenvolvimento!</h5>
            <p>
              O dinheiro arrecadado do DesktopFish será destinado ao nosso projeto principal: ProjectTerror{' '}
              <a href={url.urlInstagram} target="blank">
                Project Terror
              </a>
            </p>
          </S.Apresentation>
        </S.ContentGroup>
      </S.MainContent>
      <S.Footer>
        <a href={url.email}>eusolodev@gmail.com</a>
        <a href={url.site}>www.eusolyy.com</a>
      </S.Footer>
    </React.Fragment>
  ) : (
    <React.Fragment>
      <S.MainContent>
        <S.ContentGroup>
          <S.Apresentation>
            <h1>Desktop Fish</h1>
            <button onClick={() => handleClickDownload(url)}>Download Now</button>
            <h5>Apoie nosso desenvolvimento!</h5>
            <p>
            O dinheiro arrecadado do DesktopFish será destinado ao nosso projeto principal: ProjectTerror{' '}
              <a href={url.urlInstagram} target="blank">
                Project Terror
              </a>
            </p>
          </S.Apresentation>

          <S.Video autoPlay loop muted>
            <source src="Timeline_33.mp4" type="video/mp4" />
            Seu navegador não suporta a tag de vídeo.
          </S.Video>
        </S.ContentGroup>
      </S.MainContent>
      <S.Footer>
        <a href={url.email}>eusolodev@gmail.com</a>
        <a href={url.site}>www.eusolyy.com</a>
      </S.Footer>
    </React.Fragment>
  )
}

export default App
