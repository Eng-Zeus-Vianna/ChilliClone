import styled from 'styled-components'

export const Content = styled.div`
  max-width: 1365px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;

  font-family: 'Roboto', sans-serif;
  font-size: 0.875rem;
  font-weight: normal;
  color: #aaa;

  .header-top {
    padding: 0.2rem 0;
  }

  a {
    display: flex;
    align-items: center;
    color: #fff;
    opacity: 0.9;
    text-decoration: none;
    padding: 0 0.93rem;
    height: 2.18rem;
    font-weight: 300;

    transition: 0.2s;

    :hover {
      background-color: rgb(34, 34, 34);
    }
  }

  li {
    display: flex;
    align-items: center;
    justify-content: center;
    list-style-type: none;
    height: 2.18rem;
  }
  .acessibilidade {
    transition: 0.2s;

    :hover {
      background-color: rgb(34, 34, 34);
    }

    > p {
      font-size: 20px;
    }

    > a {
      margin-right: 1rem;
      padding-left: 0;
    }
  }

  .header-left,
  .header-right {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .header-right img {
    height: 25px;
    clip-path: circle();
  }

  .chilli img {
    height: 40px;
    object-fit: contain;
    cursor: pointer;
  }

  .form-search {
    margin-left: 3rem;
    width: 470px;
    height: 40px;
  }
  .form-search form {
    display: flex;
    background-color: #fff;

    outline: 0;
  }
  .form-search input {
    outline: 0;
    border: none;
    width: 100%;
    padding-left: 1rem;
    border-radius: 5px;
  }
  .form-search button {
    width: 2.81rem;
    height: 2.81rem;
    background-color: #fff;
    outline: 0;
    border: none;

    > img {
      width: 19px;
      height: auto;
      object-fit: contain;
    }
  }

  form,
  button {
    border-radius: 0.25rem 0.25rem;
  }

  .header-bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #fff;
    font-size: 0.75rem;
    padding: 0 1.25rem;

    > li {
      padding-left: 1.5rem;
      transition: 0.2s;
      cursor: pointer;
      :hover {
        opacity: 0.9;
      }

      & + li {
        border-left: 1px solid #707070;
      }
    }
  }
  p {
    font-size: 16px;
    padding: 0 0.7rem;
  }

  .header-bottom img {
    padding: 0 0.7rem;
  }

  .navLink {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;

    color: #fff;

    li {
      font-size: 0.75rem;
      font-weight: 300;
      padding: 1rem 1.5rem;
      height: 50px;
      cursor: pointer;
      transition: 0.2s;

      :hover {
        background-color: rgb(34, 34, 34);
      }
    }
    li:nth-child(5) {
      color: red;
      font-weight: bold;
    }

    li > img {
      background: #fff;
      height: 30px;
      border-radius: 100%;
      margin-right: 0.93rem;
    }
  }
`
