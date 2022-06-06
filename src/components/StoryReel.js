import React from "react";
import "./StoryReel.css";
import Story from "./Story";

function StoryReel() {
  return (
    <div className="storyReel">
      {/* story */}
      <Story 
      image="https://i.pinimg.com/564x/d6/0c/76/d60c76f1365a642f0eddc644ecc21e44.jpg" 
      profileSrc="https://cdn-icons.flaticon.com/png/512/2202/premium/2202112.png?token=exp=1654529243~hmac=483f11faad23779277a234d18b1f7af8"
      title="Guilherme santos"
      />
      <Story 
      image="https://i.pinimg.com/564x/d6/0c/76/d60c76f1365a642f0eddc644ecc21e44.jpg" 
      profileSrc="https://cdn-icons-png.flaticon.com/512/1055/1055646.png"
      title="Joao vitor"
      />
      <Story 
      image="https://i.pinimg.com/564x/d6/0c/76/d60c76f1365a642f0eddc644ecc21e44.jpg" 
      profileSrc="https://cdn-icons-png.flaticon.com/512/1055/1055675.png"
      title="Henrique"
      />
      <Story 
      image="https://i.pinimg.com/564x/d6/0c/76/d60c76f1365a642f0eddc644ecc21e44.jpg" 
      profileSrc="https://cdn-icons-png.flaticon.com/512/1055/1055641.png"
      title="Lucas alves"
      />
      <Story 
      image="https://i.pinimg.com/564x/d6/0c/76/d60c76f1365a642f0eddc644ecc21e44.jpg" 
      profileSrc="https://cdn-icons.flaticon.com/png/512/2707/premium/2707279.png?token=exp=1654529426~hmac=17b399e9cee95614dec86d94ec4b9afb"
      title="Larissa silva"
      />

    </div>
  );
}

export default StoryReel;
