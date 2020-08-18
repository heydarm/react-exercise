import React from "react";
import CustomPieChart from "./CustomPieChart";
import { Card, CardTitle, CardBody } from "../../../card";

function MessageTypesSourcesCard(props) {
  const { colors, data, title } = props;

  const total = data.reduce((acc, item) => acc + item.value, 0);

  return (
    <Card className="h-100">
      <CardTitle className="font-weight-bold mb-4">{title}</CardTitle>

      <CardBody className="h-100 d-flex flex-column align-items-center">
        <CustomPieChart width={200} height={200} data={data} colors={colors}>
          <div className="h-100 d-flex flex-column align-items-center justify-content-center">
            <h6 className="font-weight-bold mb-0 font-size-26">{total}</h6>
            <p className="text-muted mb-0">types</p>
          </div>
        </CustomPieChart>
        <div className="w-100 d-flex flex-wrap justify-content-between border-top border-black-50 mt-4 pt-4">
          {data.map((item, index) => (
            <div key={item.name} className="d-flex align-items-center">
              <span
                className="bullet"
                style={{ backgroundColor: colors[index % colors.length] }}
              ></span>

              {title.includes("sources") ? (
                <span className="p-2">
                  {item.value} message ({item.name})
                </span>
              ) : (
                <span className="p-2">
                  {item.value} {item.name} type
                </span>
              )}
            </div>
          ))}
        </div>
      </CardBody>
    </Card>
  );
}

export default MessageTypesSourcesCard;
