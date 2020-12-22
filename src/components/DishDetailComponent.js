import React, { Component } from 'react'
import { Card, CardImg, CardText, CardBody,
    CardTitle } from 'reactstrap';


     
class DishDetail extends Component {

    formatDate(string){
        var options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(string).toLocaleDateString([],options);
    }

    renderComments(dish){
        if(dish!=null)
        return  dish.comments.map((comment)=>{
            <h4>comments</h4>
            return(
                <div >
                    <ul>
                        <li>{comment.comment}</li>
                        <li>-- {comment.author}, {this.formatDate(comment.date)}</li>
                    </ul>
                </div>
            )
        })       
    }

    renderDish(dish) {
        if (dish != null)
            return(
                <Card>
                    <CardImg src={dish.image} alt={dish.name} />
                    <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        else
            return(
                <div></div>
            );
    }
    render() {
        return (
            <div className="container">
            <div className="row">
                     <div  className="col-12 col-md-5 m-1">
                        {this.renderDish(this.props.dish)}
                     </div>
                     <div  className="col-12 col-md-5 m-1">
                    {(this.props.dish) && <h4>Comments</h4>}
                    {this.renderComments(this.props.dish)}
                 </div>
            </div>
            </div>
        )
    }
}

export default DishDetail;