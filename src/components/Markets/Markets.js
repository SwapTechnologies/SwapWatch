import React from "react";
import styles from "./Markets.css";
import Auxilary from "../../hoc/Auxilary";
import AutoCompleteInput from "../AutoCompleteInput/AutoCompleteInput";

import { AirSwap } from '../../services/AirSwap/AirSwap';
import { EthereumTokens } from '../../services/Tokens/Tokens';

const Markets = props => {
    const data = ['AirSwap', 'Wrapped Eth'];

    AirSwap.getLogs().then(x => console.log('Result in Markets', x));

    return (
        <Auxilary>
            <div className={styles.Outer}>
                <div className={styles.PageContainer}>
                    <div style={{ float: 'left', width: '40%' }}>
                        <AutoCompleteInput placeholder="Token 1"
                            displayField='name'
                            imageField='logo'
                            secondaryField='symbol'
                            itemSelected={(i) => console.log(i)}
                            cleared={() => console.log('Token 1 cleared')}>
                            {EthereumTokens.AllTokens}
                        </AutoCompleteInput>
                    </div>
                    <div style={{ float: 'right', width: '40%' }}>
                        <AutoCompleteInput placeholder="Token 2">{data}</AutoCompleteInput>
                    </div>
                    {/* <p style={{ clear: 'left' }}>This is the Markets Page with a bunch of text that hopefully will wrap and stuff</p> */}
                </div>
            </div>
        </Auxilary>
    );
}

export default Markets;