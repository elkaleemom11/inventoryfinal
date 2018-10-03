import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
    },
    dense: {
        marginTop: 16,
    },
    menu: {
        width: 200,
    },
});



class Storehouse extends React.Component {
    state = {
        name: 'Cat in the Hat',
        age: '',
        multiline: 'Controlled',

    };

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    render() {
        const { classes } = this.props;

        return (
            <form className={classes.container} noValidate autoComplete="off">
                <TextField
                    id="outlined-quantity"
                    label="Quantity"
                    value={this.state.age}
                    onChange={this.handleChange('age')}
                    type="number"
                    className={classes.textField}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    margin="normal"
                    variant="outlined"
                />
                <TextField
                    id="outlined-search"
                    label="Search"
                    type="search"
                    className={classes.textField}
                    margin="normal"
                    variant="outlined"
                />




            </form>
        );
    }
}

Storehouse.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Storehouse);
