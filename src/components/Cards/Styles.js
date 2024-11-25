export const Styles = {
    main: {
        backgroundImage: "url(" + "/headline-bg.png" + ")",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "#ffffff"
    },

    title: {
        width: "70vw",
        textAlign: "center"
    },

    description: {
        marginTop: "3vh",
        marginLeft: "25vw",
        marginRight: "25vw",
        textAlign: "center",
        fontWeight: 400
    },

    markedText: {
        color: "#e8ff72"
    },

    cardRow: {
        width: "60vw",
        height: "20vh",
        display: "flex",
        paddingLeft: "5vw"
    },

    card: {
        marginLeft: "-5vw",
        backgroundColor: "#1f2227",
        color: "#e9e9e0",
        width: "15vw",
        height: "17.5vw",
        boxSizing: "border-box",
        borderStyle: "inner",
        borderColor: "#e8ff72",
        borderWidth: "5px",

        "&:hover": {
            marginLeft: "-6vw",
            transform: "rotate(2deg)",
            transition: 'transform 150ms ease'
        }
    },

    cardNumber: {
        backgroundColor: "#e8ff72",
        color: "#1f2227",
        width: "3vw",
        height: "6vh",
        padding: "auto",
        borderRadius: "0 0 5px 0" 
    },

    number: {
        margin: 0
    },
    
    cardTitle: {
        marginTop: "2vh",
        marginBottom: 0,
        marginLeft: "0.5vw",
        fontWeight: 750
    },

    cardDescription: {
        marginTop: "2vh",
        marginLeft: "0.5vw",
        fontWeight: 400
    }
}