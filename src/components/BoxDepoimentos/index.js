import styled from 'styled-components';
import Box from '../Box';
const BoxDepoimentos = styled(Box)`

  ul {
    display: inline-grid;
    grid-gap: 8px;
    grid-template-columns: 1fr 5fr; 
    max-height: 200px;
    list-style: none;
    background-color: #F4F4F4;
    border-radius: 20px;
    margin: auto;
    
  }


  .photo {
    grid-column: 1; /* ou grid-column: 1 / 2; */

  }

  li{
  .content{
    margin: 50px
    display: center;
    grid-column: 2 / 5; 
    text-align: center;
    padding: 50px;

    .span{
      top: 50px;
    }

}
}
  ul li a {
    
    padding: 10px;
    display: inline-block;
    height: 100px;
    position: relative;
    border-radius: 8px;
    img {
        object-fit: cover;
        width: 100px;
        height: 100%;
        position: relative;
        display: inline-block;
        border-radius: 20px;

      }
      span {
        color: black;
        font-size: 16px;
        position: absolute;
        z-index: 2;
        padding: auto;
        width: 100%;
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