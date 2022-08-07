import styled from "styled-components"

const getImageRight = (props) => {
    if(!props.rightImage.src){
        return`
            display: none;
        `;
    }
}

const getImageLeft = (props) => {
    if(!props.leftImage.src){
        return`
            display: none;
        `;
    }
}

export const ButtonStyle = styled.button`
    .leftImage{
        ${(props) => getImageLeft(props)};
    }
    .rightImage{
        ${(props) => getImageRight(props)};
    }
    font-family: 'Nunito', sans-serif;
    img{
        width: 0.8em;
    }
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.67em;
    margin: 0;
    padding: 0.67em 0.9em;
    border: none;
    color: ${(props) => props.colorbutton};
    background-color: ${(props) => props.bgbutton};
    font-size: ${(props) => props.fsbutton};
    cursor: pointer;
    border-radius: ${(props) => props.brbutton};
`;