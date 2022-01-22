
export default function handler(req, res) {
    res.status(200).json({ name: 'Hi store' })
  }

  // if we go rootpath/api/coffee/store
  // it will send this route


  // if we go rootpath/api/coffee/[anything]
  // it will send a default route
  // rather then error route...