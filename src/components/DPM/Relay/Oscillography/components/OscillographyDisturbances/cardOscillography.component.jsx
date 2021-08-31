import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import "./index.css";

const CardOscillography = ({ title, content }) => {
  console.log("content :>> ", content);
  return (
    <Card className="cardOscillography">
      <CardContent>
        <Typography className="cardOscillography__title">{title}</Typography>
        {content.map((item, index) => (
          <div className="cardOscillography__content">
            <Typography className="cardOscillography__content__item">
              {item.label}
            </Typography>
            <Typography className="cardOscillography__content__item">
              {item.information}
            </Typography>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default CardOscillography;
