import { createTheme, responsiveFontSizes } from "@mui/material";

let theme = createTheme({
    palette: {
        primary: {
            main: 'rgb(10, 10, 10)', //Preto
        },
        secondary: {
            main: '#FFFFFF',
        },
    },
    typography: {
        fontFamily: [
                 
               'Saira',

               
        ].join(','),
    }
});

theme = responsiveFontSizes(theme);

export default theme;

// #020F59 - Azul escuro
// #77B9F2 - Azul Claro
// #E9EFF2 - Branco
// #D1F2D0 - Verde Fraco
// #8DF244 - Verde Forte