import React, { Component } from 'react'
import { Card, CardImg, CardText, CardBody,
    CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
     
function RenderComments({comments}){
    if(comments!=null)
    return  comments.map((comment)=>{
        <h4>comments</h4>
        return(
            <div >
                <ul>
                    <li>{comment.comment}</li>
                    <li>-- {comment.author}</li>
                </ul>
            </div>
        )
    })       
}
function RenderDish({dish}) {
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

const DishDetail = (props) =>{
    if(props.dish!=null)
        return (
                <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>                
                </div>
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <RenderDish dish={props.dish} />
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <RenderComments comments={props.comments} />
                    </div>
                </div>
                </div>
            );
    }

export default DishDetail;