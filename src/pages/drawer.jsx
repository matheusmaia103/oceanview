import { ExpandLessRounded } from '@material-ui/icons';
import { Box, SwipeableDrawer, List, ListItem, ListItemText, Button, IconButton } from '@material-ui/core';

export default function Drawer({open, setOpen, children}) {
    
    
    return (
        <SwipeableDrawer
            anchor={"right"}
            open={open}
            onClose={() => setOpen(false)}
            id='drawer'
            color='inherit'
        >
            <Box padding='20px' margin='15px' display='flex' justifyContent='center' flexDirection='column'>
                <List>
                    <ListItem ListItemText variant='text'>
                        <IconButton color='inherit' id='close' onClick={() => setOpen(false)}>
                            <ExpandLessRounded />
                        </IconButton>
                    </ListItem>
                    <ListItem ListItemText variant='text'>
                        <ListItemText>
                           <Button color='inherit' variant='text'> Conheça nossos serviços </Button>
                        </ListItemText>
                    </ListItem>
                    <ListItem ListItemText variant='text'>
                        <ListItemText>
                           <Button color='inherit' variant='text'> Quem somos </Button>                            
                        </ListItemText>
                    </ListItem>
                </List>

                <Button variant='outlined' color='inherit'>
                    Login
                </Button>
            </Box>
        </SwipeableDrawer>
    )
}