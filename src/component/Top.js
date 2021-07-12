import { Header } from "semantic-ui-react";
import Gnb from "./Gnb";

export default function Top() {
  return (
    <div style={{ display: "flex", paddingTop: 20 }}>
      <div style={{ flex: "1000px 0 0" }}>
        <img
          src="/images/apple.png"
          style={{ display: "block", width: 80 }}
        ></img>
        <Header as="hi">kongs510</Header>
        <Gnb />
        {/* 로고,텍스트,GNB */}
      </div>
    </div>
  );
}
