import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

const GlobalStyles = createGlobalStyle`
    ${reset}
    *{
        box-sizing: border-box;
    }
    html, body, div, span, h1, h2, h3, h4, h5, h6, p, 
    a, dl, dt, dd, ol, ul, li, form, label, table{
        margin: 0;
        padding: 0;
        border: 0;
        vertical-align: baseline;
    }
		body  
		 {

        background-color: #3c2929;
				color: '#212b36';
				font-size: 16px;
				font-weight: 400px;
        font-family: Pretendard !important;
    }
    a{
        color : inherit;
        text-decoration: none;
        cursor: pointer;
    }
    input, button {
        background-color: transparent;
        border: none;
        outline: none;
        cursor: pointer;

    } 
		ol, ul{
        list-style: none;
    }
    img{
        display: block;
        width: 100%;
        height: 100%;
    }
`

export default GlobalStyles
