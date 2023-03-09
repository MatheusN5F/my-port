import styled from "styled-components";

export const Headin = styled.div`
& section.navbar {
  display: flex;
    justify-content: space-between;
    align-items: center;
    align-content: flex-end;
    height: 10vh;
}
& section header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-weight: 700;
    font-size: 16px;
    color: whitesmoke;
}
& section.navbar nav ul.menu-list {
    display: none;
}

section.navbar nav li {
    font-size: 14px;
    font-weight: 400;
}
section header h3.menu-title {
    margin-left: 8px;
}
& a {
  color: #9d4edd;
}

& .Container {
    margin: 0 16px 0 16px;
    display: flex;
    flex-direction: column;
    overflow: hidden;
}

`;
