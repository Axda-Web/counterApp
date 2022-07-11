import styled from "styled-components";

const StyledCounter = styled.div`
    .count {
        font-size: 7rem;
        text-align: center;
        margin-bottom: 30px;
    }

    .btn {
        border: none;
        border-radius: 50%;
        padding: .7em 1em;
        font-size: 2rem;
        font-weight: bold;
        margin-right: .5em;
        cursor: pointer;
        transition: transform .4s;

        &:hover {
            transform: scale(1.1);
        }

        &--plus {
            
        }

        &--minus {
            padding: .7em 1.1em;
        }
    }
`

export default StyledCounter