export const Styles = {
  main: {
    backgroundImage: "url(" + "/graph-color.png" + ")",
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: "100vw",
    height: "200vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    color: "#000000"
  },

  box: {
    backgroundColor: "rgb(32, 42, 69, 0.5)",
    color: "#ffffff",
    width: "70vw",
    height: "50vh",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",

    "&:hover": {
      backgroundColor: "green",
      transform: "rotate(180deg)"
    }
  },

  image: {
    widht: "25vw",
    height: "50vh"
  },

  title: {
    marginLeft: "5vw",
    marginRight: "5vw",
    textAlign: "left"
  },

  blueBox: {
    backgroundColor: "rgb(54, 63, 87, 0.5)",
    width: "70vw",
    height: "25vh",
    boxSizing: "border-box",
    padding: "3vh",
    textAlign: "center"
  },

  indigoBox: {
    backgroundColor: "rgb(32, 42, 69, 0.5)",
    width: "70vw",
    height: "25vh",
    boxSizing: "border-box",
    padding: "3vh",
    textAlign: "center"
  },

  icon: {
    width: "3.5vw"
  },

  subtitle: {
    color: "#ffffff",
    marginTop: "2vh",
    marginBottom: "2vh"
  },

  description: {
    color: "#9bc1db",
    margin: 0,
    fontWeight: 400
  },

  markedText: {
    color: "#2d46cf"
  }
}