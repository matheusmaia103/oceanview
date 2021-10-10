import { RoomServiceRounded, InfoRounded, ExpandLessRounded } from '@material-ui/icons';
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
            <Box padding='20px'>
                <List>
                    <ListItem ListItemText variant='text'>
                        <IconButton color='inherit' id='close' onClick={() => setOpen(false)}>
                            <ExpandLessRounded />
                        </IconButton>
                    </ListItem>
                    <ListItem ListItemText variant='text'>
                        <RoomServiceRounded />
                        <ListItemText>
                            Nossos serviços
                        </ListItemText>
                    </ListItem>
                    <ListItem ListItemText variant='text'>
                        <InfoRounded />
                        <ListItemText>
                            Conheça a Oceanview
                        </ListItemText>
                    </ListItem>
                </List>

                <Button variant='contained' color='primary'>
                    Login
                </Button>
            </Box>
        </SwipeableDrawer>
    )
}