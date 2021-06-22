import React from 'react'
import PropTypes from 'prop-types'


import {withStyles, Card, CardContent, CardActions, Button, Typography} from '@material-ui/core';
import {Link} from "react-router-dom";
import './css.css';


const styles = theme => ({
    contentCard: {
        marginBottom: 30,
        marginTop: 30,
    }
})


/**
 * CardCustom
 */
function CardCustom(props) {
    const {classes} = props;
    console.log(props)


    return (
            <Card className={classes.root}>
                <CardContent className="contentCard">
                    <Typography variant="h1">{props?.title}</Typography>
                    <Typography variant="h4">{props?.body}</Typography>
                </CardContent>
                <CardActions>
                    <Link to={{pathname: `/posts/${props.id}`, state: {title: props?.title, body: props?.body, id: props.id}}}>
                        Show details
                    </Link>
                    <Button color="primary">Test</Button>
                </CardActions>
            </Card>
    )


}

CardCustom.propTypes = {
    classes: PropTypes.object
};


export default withStyles(styles)(CardCustom);