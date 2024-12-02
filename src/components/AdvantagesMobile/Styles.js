export const Styles = {
  main: {
    backgroundColor: "#e3e3e9",
    width: "100vw",
    height: "200vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    color: "#000000"
  },

  roundBox: {
    backgroundColor: "#202a45",
    borderRadius: "40px 40px 30px 30px",
    width: "80vw",
    height: "187.5vh"
  },

  box: {
    backgroundImage: "url(" + "/story.png" + ")",
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    borderRadius: "30px 30px 0 0",
    color: "#ffffff",
    width: "80vw",
    height: "46.5vh",
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
    height: "42.5vh",
    margin: "auto 5vw 0 0"
  },

  title: {
    color: "#000000",
    marginLeft: "5vw",
    textAlign: "left"
  },

  blueBox: {
    backgroundColor: "rgb(54, 63, 87, 0.5)",
    width: "80vw",
    height: "23.5vh",
    boxSizing: "border-box",
    padding: "3vh 3vh 3vh 5vh",
    textAlign: "left"
  },

  indigoBox: {
    width: "80vw",
    height: "23.5vh",
    boxSizing: "border-box",
    padding: "3vh 3vh 3vh 5vh",
    textAlign: "left"
  },

  icon: {
    width: "7.5vw"
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