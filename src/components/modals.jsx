import React,{ Component} from "react";
import Portal from "./portal";
import '../css/modals.css'

export default class modals extends Component {
    render(){
        const {children, toggle, active} = this.props;

        return(
            <Portal>
                {active && (
                    <div style={styles.wrapper}>
                        <div style={styles.window}>
                         <button style={styles.closeBtn} onClick={toggle}>X</button>
                        <div>{children}</div>
                    </div>

                    <div onClick={toggle} className="bg-modals" style={styles.background}></div>

                    </div>


                )}
            </Portal>
        )
    }
}

const styles = {
    wrapper: {
        position: 'absolute',
        top:0,
        left: 0,
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        },
    window: {
        position: 'relative',
        padding: 15,
        zIndex: 10,
        minWindth: 320,
    },
    closeBtn: {
        position: 'absolute',
        top: 0,
        right: 0,
        color: 'white',
        width: '50px',
        height: '50px',
          borderRadius:'50%',
        backgroundColor: 'rgba(255, 0, 0, 1)',
    },
    background: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: 0,
        left: 0,
    }
}