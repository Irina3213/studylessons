import React from "react";

// const OnMessage = () => <span>The machine is ON!</span>;

// const OffMessage = () => <span>The machine is OFF!</span>;

const ErrorMessage = ({showError}) => showError ? <span>Oh noes you broke it!</span> : null;

// const OnOff = ({isOn}) => {
//     if (isOn) {
//         return <OnMessage />;
//     } else{
//         return <OffMessage />;
//     }
// }

const UltimateMechine = () => {
    // const [isOn, setIsOn] = useState(false);
    const [showError, setShowError] = useState(false);

    const onClickHandler = () => {
        // setIsOn(i => !i)
        setShowError(i => !i);
    };

    // const getMessage = () => {
    //     if(isOn){
    //         return <OnMessage />;
    //     } else {
    //         return <OffMessage />;
    //     }
    // }
    // let message;

    // if(isOn){
    //     message = <OnMessage />;
    // } else {
    //     message = <OffMessage />;
    // }

    return (
        <section>
            <h1>The Ultimate Machine</h1>
            {/* <OnOff isOn={isOn} /> */}

            <ErrorMessage showError={showError} />
            <button
             type="button"
             onClick={onClickHandler}
             aria-pressed={showError}
             >
                Toggle error
            </button>
        </section>
    );
};

export default UltimateMechine;