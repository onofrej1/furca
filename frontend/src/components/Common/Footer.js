import React, { Component } from "react";
import { Navbar, Container } from "reactstrap";

class Footer extends Component {
  render() {
    return (
      <Navbar color="black" dark>
        <Container>
          <div className="navbar-text pull-left">
            <div>O5 bežecký klub FURČA </div>
            <div>Tokajícka 2, 040 22 Košice Mobil: 0904 246 060</div>
            <div>E-mail: bohunek.zdenek@maratonfurca.sk</div>
          </div>
          <div className="btn navbar-btn btn-default btn-sm  pull-right">
            <a href="http://youtu.be/zJahlKPCL9g" style={{color: 'black'}}>
              webstránka:<span className="glyphicon glyphicon-envelope" />
              erikonofrej@maratonfurca.sk
            </a>{" "}
            <a href="http://www.toplist.sk/" target="_top">
              <img
                src="http://toplist.sk/count.asp?id=1254971&logo=mc"
                border="0"
                alt="TOPlist"
                width="88"
                height="60"
              />
            </a>
          </div>
        </Container>
      </Navbar>
    );
  }
}

export default Footer;
