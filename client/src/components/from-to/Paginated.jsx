import React from "react";
import { useSelector } from "react-redux";
import { setPageReference } from "../../redux/actions";
import Buttons from "../styles/buttons";
import Template from "./Template";
import Center from "../styles/center";

const Paginated = () => {
    const pageReference = useSelector((state) => state.pageReference);
    const games = useSelector((state) => state.gamesLoaded);

    if(games.length > 1) {
        return (
            <Center>
                {
                    pageReference < 1 ?
                    (
                        <Buttons>No prev</Buttons>
                    ) :
                    (
                        <Template 
                            inner={'Prev'}
                            action={setPageReference}
                            arg={pageReference - 1}
                        />
                    )
                }
                <Template 
                    inner={pageReference}
                    action={setPageReference}
                    arg={0}
                />
                {
                    !((pageReference * 15) + 15 > games.length) && (
                        <Template 
                            inner={'Next'}
                            action={setPageReference}
                            arg={pageReference + 1}
                        />
                    )
                }
            </Center>
        );
    } else {
        return null;
    };
};

export default Paginated;