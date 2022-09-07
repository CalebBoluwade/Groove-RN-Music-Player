interface props {
  title: string,
  artist: string
  duration: number,
  url: any,
  artwork: any
}

const songsData = [
  {
    id: "1",
    title: "Terminator",
    artist: "Asake",
    duration: 311,
    album: false,
    albumId: null,
    artwork: require("./Data/Artwork/Terminator.jpeg"),
    url: require("./Data/Songs/Asake-Terminator.mp3"),
  },
  {
    id: "2",
    title: "Call Me Everyday (ft. Wizkid)",
    artist: "Chris Brown",
    duration: 311,
    album: false,
    albumId: null,
    artwork: require("./Data/Artwork/Call-Me-Everyday.jpg"),
    url: require("./Data/Songs/Chris_Brown_ft_Wizkid_-_Call_Me_Everyday.mp3"),
  },
  {
    id: "3",
    title: "Adulthood Na Scam Anthem",
    artist: "Lade",
    duration: 311,
    album: false,
    albumId: null,
    artwork: require("./Data/Artwork/Adulthood-Na-Scam-Anthem.jpg"),
    url: require("./Data/Songs/Adulthood_Na_Scam.mp3"),
  },
  {
    id: "4",
    title: "Contour - Single",
    artist: "Joeboy",
    duration: 311,
    album: false,
    albumId: null,
    artwork: require("./Data/Artwork/Joeboy-Contour.jpg"),
    url: require("./Data/Songs/Joeboy-Contour.mp3"),
  },
  {
    id: "5",
    title: "Girlfriend",
    artist: "Ruger",
    Album: true,
    duration: 311,
    album: false,
    albumId: null,
    artwork: require("./Data/Artwork/Ruger-The-Second-Wave-Deluxe-EP.jpg"),
    url: require("./Data/Songs/Ruger-Girlfriend.mp3"),
  },
  {
    id: "6",
    title: "Lost Birds",
    artist: "GROOVY",
    Album: true,
    duration: 311,
    album: false,
    albumId: null,
    artwork: require("./Data/Artwork/LostBirds.jpeg"),
    url: require("./Data/Songs/LostBirds.mp3"),
  },
  {
    id: "7",
    title: "Palmwine Love",
    artist: "GROOVY",
    Album: false,
    duration: 311,
    album: false,
    albumId: null,
    artwork: require("./Data/Artwork/PalmwineLove.jpeg"),
    url: require("./Data/Songs/PalmwineLove.mp3"),
  },
  {
    id: "8",
    title: "No illusions feat-osii-tima-mayowa-sb",
    artist: "GROOVY",
    Album: false,
    duration: 311,
    album: false,
    albumId: null,
    artwork: require("./Data/Artwork/NoIllusions.jpeg"),
    url: require("./Data/Songs/NoIllusions.mp3"),
  },


];

export default songsData;
