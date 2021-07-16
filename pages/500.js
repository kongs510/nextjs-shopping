import { Icon } from "semantic-ui-react";

export default function Error500() {
  return (
    <div style={{ padding: "200px 0", textAlign: "center", fontSize: 30 }}>
      <Icon name="warning circle" color="red" />
      500: 이 페이지를 찾을수 없습니다.
    </div>
  );
}
