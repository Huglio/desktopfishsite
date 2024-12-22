import styled from 'styled-components'

export const MainContent = styled.main`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  padding: 5rem;
  background: linear-gradient(90deg, var(--blue) 0%, var(--black) 100%);

  @media (max-width: 425px) {
    padding: 5rem 0 0;
  }
`

export const ContentGroup = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;

  @media (max-width: 768px) {
    justify-content: center;
  }
`

export const Apresentation = styled.section`
  width: 40vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 1.75rem;

  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
  }

  h1 {
    font-size: 6.25rem;
    font-weight: 700;
    color: white;
    @media (max-width: 1440px) {
      font-size: 3.75rem;
    }

    @media (max-width: 768px) {
      font-size: 2rem;
      position: absolute;
      z-index: 2;
      top: 5%;
      left: 5%;
    }
  }

  h5 {
    color: white;
    font-size: 1.5rem;
    font-weight: 600;
    @media (max-width: 1440px) {
      font-size: 1.25rem;
    }
  }

  a {
    color: #f9c458;
    font-weight: 700;

    @media (max-width: 1440px) {
      font-size: 1rem;
    }

    @media (max-width: 1024px) {
      font-size: 0.875rem;
    }

    &:hover {
      color: var(--black);
      transition: color 0.5s ease;
    }
  }

  p {
    color: white;
    font-size: 1.125rem;
    font-weight: 600;
    text-align: center;
    max-width: 76%;
    @media (max-width: 1440px) {
      font-size: 1rem;
    }
    @media (max-width: 1024px) {
      font-size: 0.875rem;
    }
  }

  button {
    width: inherit;
    max-width: 34%;
    min-width: 12.5rem;
    font-size: 1.75rem;
    font-weight: 600;
    border-radius: 2rem;
    border: none;
    padding: 1.25rem;
    cursor: pointer;
    color: var(--gray);
    background-color: white;

    @media (max-width: 1440px) {
      font-size: 1.25rem;
    }

    @media (max-width: 1024px) {
      font-size: 0.8125rem;
    }

    &:hover {
      background-color: transparent;
      color: white;
      outline: 1px solid white;
      transition: background-color 0.5s ease;
    }
  }
`
export const Video = styled.video`
  width: 50vw;
  height: 80vh;
  border-radius: 1.875rem;
  object-fit: cover;

  @media (max-width: 1440px) {
    width: 40vw;
    height: 60vh;
  }

  @media (max-width: 1024px) {
    width: 40vw;
    height: 40vh;
  }

  @media (max-width: 768px) {
    width: 60vw;
    height: 40vh;
    position: relative;
    z-index: 1;
  }

  @media (max-width: 425px) {
    width: 90vw;
    height: 40vh;
    position: relative;
    z-index: 1;
  }

  @media (max-width: 375px) {
    width: 90vw;
    height: 40vh;
    position: relative;
    z-index: 1;
  }
`

export const Footer = styled.footer`
  width: 100%;
  height: 100%;
  display: flex;
  gap: 1.25rem;
  padding: 1.25rem;
  background-color: var(--black-footer);
  a {
    text-decoration: none;
    color: white;
    font-weight: 600;
    font-size: 0.875rem;

    @media (max-width: 1440px) {
      font-size: 0.875rem;
    }
    @media (max-width: 375px) {
      font-size: 10px;
    }
  }
`

export const GroupVideo = styled.div`
  position: relative;
`
