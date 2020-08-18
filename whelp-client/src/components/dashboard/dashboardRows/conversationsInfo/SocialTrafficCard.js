import React from "react";
import { Card, CardTitle, CardBody } from "../../../card";

import {
  FacebookIcon,
  TwitterIcon,
  GooglePlusIcon,
  InstagramIcon,
  LinkedInIcon,
  FlickrIcon,
  VkontakteIcon,
} from "../../../../resources/icons/social_networks";

const socialNetworksData = [
  { name: "Facebook", value: "1587", icon: <FacebookIcon /> },
  { name: "Twitter", value: "1587", icon: <TwitterIcon /> },
  { name: "Goodle Plus", value: "1587", icon: <GooglePlusIcon /> },
  { name: "Instagram", value: "1587", icon: <InstagramIcon /> },
  { name: "LinkedIn", value: "1587", icon: <LinkedInIcon /> },
  { name: "Flickr", value: "1587", icon: <FlickrIcon /> },
  { name: "Vkontakte", value: "1587", icon: <VkontakteIcon /> },
];

function SocialTrafficCard(props) {
  return (
    <Card>
      <CardTitle className="font-weight-bold">Social Traffic</CardTitle>

      <CardBody className="d-flex flex-column">
        {socialNetworksData.map((item) => (
          <div key={item.name} className="d-flex py-3 align-items-center">
            <div>{item.icon}</div>
            <div className="d-flex w-100 px-3 justify-content-between">
              <span>{item.name}</span>
              <span>{item.value}</span>
            </div>
          </div>
        ))}
        <button className="btn btn-link">
          See more
        </button>
      </CardBody>
    </Card>
  );
}

export default SocialTrafficCard;
