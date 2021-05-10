import { AppBar, Toolbar, IconButton } from "@material-ui/core";

const Header = () => {
    return (
        <AppBar position="static" color="primary">
        <Toolbar>
            <IconButton></IconButton>
            <h1 color="inherit" className="headerText">Flashcards</h1>
        </Toolbar>

        </AppBar>
    );
}

export default Header;