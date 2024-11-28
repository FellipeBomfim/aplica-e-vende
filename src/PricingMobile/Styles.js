export const Styles = {
    main: {
        backgroundImage: "url(" + "/steps-bg.png" + ")",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: "100vw",
        height: "300vh",
        display: "flex",
        flexDirection: "column",
        color: "#ffffff",
        alignItems: "center"
    },

    topBox: {
        height: "150vh",
        boxSizing: "border-box",
        paddingTop: "3vw"
    },

    title: {
        width: "70vw"
    },

    description: {
        width: "70vw",
        fontWeight: 400
    },

    card: {
        backgroundColor: "rgb(32, 42, 69, 0.75)",
        color: "#ffffff",
        width: "65vw",
        height: "55vw",
        marginLeft: "4vw",
        marginRight: "4vw",
        textAlign: "center",
        alignItems: "center",
        boxSizing: "border-box",
        padding: "7.5vw 6vw 1.5vw 6vw",
        borderRadius: "15px",
    },

    cardTitle: {
        textAlign: "right",
        fontSize: "10vw",
        margin: 0
    },

    cardDescription: {
        textAlign: "right",
        fontWeight: 400,
        margin: "1vw 0 1vw 0"
    },

    cardSubdescription: {
        margin: "4.5vw auto 4.5vw auto", 
        width: "50vw", 
        textAlign: "center" 
    },

    button: {
        backgroundColor: "#e8ff72",
        color: "#1f2227",
        width: "50vw",
        height: "10vw",
        margin: "auto",
        boxSizing: "border-box",
        padding: "2vw",
        borderRadius: 10
    },

    bottomBox: {
        width: "100vw",
        height: "150vh",
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        borderTop: "3px solid #e8ff72"
    },

    image: {
        width: "17.5vh",
    },

    markedText: {
        color: "#e8ff72"
    }
}