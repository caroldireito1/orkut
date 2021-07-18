import styled from 'styled-components';
import Box from '../Box';
const BoxDepoimentos = styled(Box)`

  ul {
    display: inline-grid;
    grid-gap: 8px;
    grid-template-columns: 1fr 5fr; 
    max-height: 200px;
    list-style: none;

  }


  .photo {
    grid-column: 1; /* ou grid-column: 1 / 2; */

  }
  .content {
    grid-column: 2 / 5; 

  }
  ul li a {
    display: inline-block;
    height: 102px;
    position: relative;
    border-radius: 8px;
    img {
        object-fit: cover;
        background-position: left;
        width: 100px;
        height: 100%;
        position: relative;
        display: inline-block;
      }
    span {
        color: black;
        font-size: 20px;
        position: absolute;
        z-index: 2;
        padding: 0 4px;
        width: 450px;
        background-position: right;
      }

    &:after {
      content: "";
      display: table;
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
      z-indeX: 1;
      background-image: linear-gradient(0deg,#00000073,transparent);
    }
  }
`; 

export default BoxDepoimentos