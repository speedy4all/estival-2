import React from "react";
import { Button, Row } from "reactstrap";
import "../Stile.css";
import Typist from 'react-typist';

const About = props => {
  return (
    <React.Fragment>
      <div class="bg">
        <div>
          <button onClick={props.switchPage}>
            <Button color="danger">Back home</Button>{" "}
          </button>
        </div>

        <div
          className="d-flex flex-column align-items-end mr-3 justify-content-end"
          style={{ height: "87vh" }}
        >
          <img
            class="imagine"
            src="https://www.shitpostbot.com/resize/585/400?img=%2Fimg%2Fsourceimages%2Fcalypso-twisted-metal-5a86b4cd8e306.jpeg"
          ></img>
          <div> 
            <Typist>
            Salut Minge, te pot ajuta eu sa scapi de aici, urmeaza-ma.
            </Typist>
          </div>
          

          <Row>
            <Button
              color="primary"
              size="lg"
              block
              onClick={() => props.switchPage("aleg1")}
            >
              Alegerea 1
            </Button>
          </Row>

          <Row>
            <Button color="primary" size="lg" block>
              Alegerea 2
            </Button>
          </Row>
        </div>
      </div>
    </React.Fragment>
  );
};
/*{https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjV8MuAi6XkAhWLGewKHXb1CRkQjhx6BAgBEAI&url=https%3A%2F%2Fassetstore.unity.com%2Fpackages%2F2d%2Fenvironments%2F2d-dungeon-backgrounds-for-mobile-games-131959&psig=AOvVaw0HOzBGGPnN_Wdb75DrQSeB&ust=1567065206706065
https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjPgMucjKXkAhVE-6QKHbKrBf4Qjhx6BAgBEAI&url=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F759349187148823257%2F&psig=AOvVaw0HOzBGGPnN_Wdb75DrQSeB&ust=1567065206706065
https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwi5hMmyjKXkAhVSDewKHSUyA4AQjhx6BAgBEAI&url=https%3A%2F%2Fwww.nexusmods.com%2Fdarkestdungeon%2Fmods%2F686%3Ftab%3Dimages&psig=AOvVaw0HOzBGGPnN_Wdb75DrQSeB&ust=1567065206706065
https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjYhKHVjKXkAhVSy6QKHbd0CeQQjhx6BAgBEAI&url=https%3A%2F%2Fsteamcommunity.com%2Fmarket%2Flistings%2F753%2F262060-The%2520Warrens%3Fl%3Ddanish&psig=AOvVaw0HOzBGGPnN_Wdb75DrQSeB&ust=1567065206706065
https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwiDzJPhjKXkAhXLzKQKHc36AoYQjhx6BAgBEAI&url=https%3A%2F%2Fwww.goodfon.com%2Fwallpaper%2Fdarknest-dungeon-ruins-door.html&psig=AOvVaw0HOzBGGPnN_Wdb75DrQSeB&ust=1567065206706065}*/

export default About;
