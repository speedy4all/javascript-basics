import { createMuiTheme } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';
import {orange} from "@material-ui/core/colors";

export const theme = createMuiTheme({
    palette: {
        primary: {
            main: orange[500],
            light: orange[300],
            dark:orange[900]
        },
        secondary: {
            main: green[500],
        },
    },
   typography: {
        h1: {
            fontSize: '2.2rem',
        },
       h4: {
           fontSize: '0.75rem',
       }
   }
});