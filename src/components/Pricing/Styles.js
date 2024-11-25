export const Styles = {
    main: {
        backgroundImage: "url(" + "/steps-bg.png" + ")",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: "100vw",
        height: "200vh",
        display: "flex",
        flexDirection: "column",
        color: "#ffffff"
    },

    smallBox: {
        backgroundColor: "rgb(32, 42, 69, 0.5)",
        height: "65vh",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "left"
    },

    title: {
    },

    description: {
        fontWeight: 400
    },

    card: {
        backgroundColor: "rgb(32, 42, 69, 0.75)",
        color: "#ffffff",
        width: "30vw",
        height: "27.5vw",
        marginLeft: "4vw",
        marginRight: "4vw",
        textAlign: "center",
        alignItems: "center",
        boxSizing: "border-box",
        padding: "1.5vw 1.5vw 1.5vw 1.5vw",
        borderRadius: "15px",
    },

    cardTitle: {
        textAlign: "right",
        fontSize: "5vw",
        margin: 0
    },

    cardDescription: {
        textAlign: "right",
        fontWeight: 400,
        margin: "1vw 0 1vw 0"
    },

    button: {
        backgroundColor: "#e8ff72",
        color: "#1f2227",
        width: "20vw",
        height: "3vw",
        margin: "auto",
        boxSizing: "border-box",
        padding: "2vw",
        borderRadius: 10
    },

    largeBox: {
        height: "135vh",
        boxSizing: "border-box",
        paddingLeft: "27.5vw",
        paddingRight: "27.5vw",
        alignItems: "center",
        textAlign: "center",
        borderTop: "3px solid #e8ff72"
    },

    markedText: {
        color: "#e8ff72"
    }
}