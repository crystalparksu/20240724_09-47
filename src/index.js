import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/GlobalStyle';
import theme from './styles/theme';
import Router from './Router';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ThemeProvider theme={theme}>
        <GlobalStyle />
            <Router />
    </ThemeProvider>
);


// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//     <BrowserRouter>
//         <ThemeProvider theme={theme}>
//             <GlobalStyles />
//             <Tab />
//         </ThemeProvider>
//     </BrowserRouter>
// );
