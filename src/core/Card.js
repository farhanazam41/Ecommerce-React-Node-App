import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import ShowImage from './Showimage';
import { Button, Icon } from 'semantic-ui-react'
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardFooter, MDBIcon, MDBTooltip,  MDBBadge, MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBBtn } from "mdbreact";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const EcommercePage = ({product}) => {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  return (
      
    <section className="text-center my-5">

          <MDBCard collection className="z-depth-1-half">
            <div className="view zoom">
            <MDBCardTitle>{product.name}</MDBCardTitle>
              <ShowImage item={product} url='product'/>
              <div className="stripe dark">
                <MDBCardText>{product.description}</MDBCardText>
                  <h4>
                    ${product.price}
                  </h4>
                  <Button color='blue' animated>
      <Button.Content visible>View</Button.Content>
      <Button.Content hidden>
        <Icon name='arrow right' />
      </Button.Content>
    </Button>
    <Button color='red' animated='vertical'>
      <Button.Content hidden>+Cart</Button.Content>
      <Button.Content visible>
        <Icon name='shop' />
      </Button.Content>
    </Button>
              </div>
            </div>
          </MDBCard>

    </section>
  );
}

export default EcommercePage;